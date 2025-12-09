import { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import { stringify } from 'csv-stringify/sync';

const prisma = new PrismaClient();

export const getTickets = async (req: Request, res: Response) => {
  try {
    const {
      page = '1',
      pageSize = '20',
      sortBy = 'createdAt',
      sortDir = 'desc',
      status,
      priority,
      assignee,
      search,
      fromDate,
      toDate,
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const pageSizeNum = parseInt(pageSize as string, 10);
    const skip = (pageNum - 1) * pageSizeNum;

    // Construir filtros
    const where: Prisma.TicketWhereInput = {};

    if (status) {
      where.status = status as string;
    }

    if (priority) {
      where.priority = priority as string;
    }

    if (assignee) {
      where.assignedToId = parseInt(assignee as string, 10);
    }

    if (search) {
      where.OR = [
        { subject: { contains: search as string } },
        { fromName: { contains: search as string } },
        { fromEmail: { contains: search as string } },
        { code: { contains: search as string } },
      ];
    }

    if (fromDate || toDate) {
      where.createdAt = {};
      if (fromDate) {
        where.createdAt.gte = new Date(fromDate as string);
      }
      if (toDate) {
        where.createdAt.lte = new Date(toDate as string);
      }
    }

    // Obtener total
    const total = await prisma.ticket.count({ where });

    // Obtener tickets
    const tickets = await prisma.ticket.findMany({
      where,
      skip,
      take: pageSizeNum,
      orderBy: {
        [sortBy as string]: sortDir === 'asc' ? 'asc' : 'desc',
      },
      include: {
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        closedBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    res.json({
      success: true,
      data: tickets,
      pagination: {
        page: pageNum,
        pageSize: pageSizeNum,
        total,
        totalPages: Math.ceil(total / pageSizeNum),
      },
    });
  } catch (error) {
    console.error('Error al obtener tickets:', error);
    res.status(500).json({ error: 'Error al obtener tickets' });
  }
};

export const bulkUpdateTickets = async (req: Request, res: Response) => {
  try {
    const { ticketIds, status } = req.body;

    if (!Array.isArray(ticketIds) || ticketIds.length === 0) {
      return res
        .status(400)
        .json({ error: 'Se requiere un array de IDs de tickets' });
    }

    if (!status || !['open', 'answered', 'closed'].includes(status)) {
      return res.status(400).json({ error: 'Estado inválido' });
    }

    // Validar que los tickets existan
    const existingTickets = await prisma.ticket.findMany({
      where: {
        id: { in: ticketIds },
      },
      select: { id: true },
    });

    if (existingTickets.length !== ticketIds.length) {
      return res
        .status(404)
        .json({ error: 'Algunos tickets no fueron encontrados' });
    }

    // Actualizar tickets
    // Si el estado es "closed", agregar fecha de cierre
    if (status === 'closed') {
      await prisma.ticket.updateMany({
        where: {
          id: { in: ticketIds },
          closedAt: null,
        },
        data: {
          status,
          closedAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } else {
      // Si no es cerrado, limpiar la fecha de cierre
      await prisma.ticket.updateMany({
        where: {
          id: { in: ticketIds },
        },
        data: {
          status,
          closedAt: null,
          updatedAt: new Date(),
        },
      });
    }

    res.json({
      success: true,
      message: `${ticketIds.length} tickets actualizados exitosamente`,
      updatedCount: ticketIds.length,
    });
  } catch (error) {
    console.error('Error al actualizar tickets:', error);
    res.status(500).json({ error: 'Error al actualizar tickets' });
  }
};

export const exportTickets = async (req: Request, res: Response) => {
  try {
    const { status, priority, assignee, search, fromDate, toDate } = req.query;

    // Construir filtros (misma lógica que getTickets)
    const where: Prisma.TicketWhereInput = {};

    if (status) {
      where.status = status as string;
    }

    if (priority) {
      where.priority = priority as string;
    }

    if (assignee) {
      where.assignedToId = parseInt(assignee as string, 10);
    }

    if (search) {
      where.OR = [
        { subject: { contains: search as string } },
        { fromName: { contains: search as string } },
        { fromEmail: { contains: search as string } },
        { code: { contains: search as string } },
      ];
    }

    if (fromDate || toDate) {
      where.createdAt = {};
      if (fromDate) {
        where.createdAt.gte = new Date(fromDate as string);
      }
      if (toDate) {
        where.createdAt.lte = new Date(toDate as string);
      }
    }

    // Obtener todos los tickets que coincidan con los filtros
    const tickets = await prisma.ticket.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        assignedTo: {
          select: {
            name: true,
          },
        },
        closedBy: {
          select: {
            name: true,
          },
        },
      },
    });

    // Convertir a CSV
    const csvData = tickets.map((ticket) => ({
      Código: ticket.code,
      Asunto: ticket.subject,
      De: ticket.fromName,
      Email: ticket.fromEmail,
      Estado: ticket.status,
      Prioridad: ticket.priority,
      Departamento: ticket.department || '',
      'Asignado a': ticket.assignedTo?.name || '',
      'Cerrado por': ticket.closedBy?.name || '',
      Comentarios: ticket.commentCount,
      Adjuntos: ticket.hasAttachment ? 'Sí' : 'No',
      'Fecha de creación': ticket.createdAt.toISOString(),
      'Fecha de cierre': ticket.closedAt?.toISOString() || '',
    }));

    const csv = stringify(csvData, {
      header: true,
      columns: [
        'Código',
        'Asunto',
        'De',
        'Email',
        'Estado',
        'Prioridad',
        'Departamento',
        'Asignado a',
        'Cerrado por',
        'Comentarios',
        'Adjuntos',
        'Fecha de creación',
        'Fecha de cierre',
      ],
    });

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=tickets_${new Date().toISOString().split('T')[0]}.csv`
    );
    res.send(csv);
  } catch (error) {
    console.error('Error al exportar tickets:', error);
    res.status(500).json({ error: 'Error al exportar tickets' });
  }
};
