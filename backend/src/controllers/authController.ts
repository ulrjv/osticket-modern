import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Buscar agente por email
    let agent = await prisma.agent.findUnique({
      where: { email },
    });

    // Si no existe, crear uno de prueba
    if (!agent) {
      agent = await prisma.agent.create({
        data: {
          name: 'Usuario Demo',
          email,
          role: 'agent',
        },
      });
    }

    // Crear cookie de sesión (simulada)
    res.cookie('session', JSON.stringify({ agentId: agent.id }), {
      httpOnly: true,
      signed: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 horas
      sameSite: 'lax',
    });

    res.json({
      success: true,
      agent: {
        id: agent.id,
        name: agent.name,
        email: agent.email,
        role: agent.role,
      },
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

export const logout = async (_req: Request, res: Response) => {
  res.clearCookie('session');
  res.json({ success: true, message: 'Sesión cerrada exitosamente' });
};
