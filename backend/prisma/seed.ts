import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const agents = [
  { name: 'Javier García', email: 'javier@example.com', role: 'admin' },
  { name: 'María López', email: 'maria@example.com', role: 'agent' },
  { name: 'Carlos Ruiz', email: 'carlos@example.com', role: 'agent' },
  { name: 'Ana Martínez', email: 'ana@example.com', role: 'agent' },
  { name: 'Pedro Sánchez', email: 'pedro@example.com', role: 'agent' },
];

const priorities = ['Baja', 'Normal', 'Alta', 'Urgente'];
const statuses = ['open', 'answered', 'closed'];
const departments = ['Soporte', 'Ventas', 'Técnico', 'Facturación'];
const topics = [
  'Problema técnico',
  'Consulta general',
  'Facturación',
  'Solicitud de información',
  'Reporte de error',
];

const sampleSubjects = [
  'Problema con la instalación del software',
  'No puedo acceder a mi cuenta',
  'Error al procesar el pago',
  'Solicitud de información sobre el producto',
  'La aplicación se cierra inesperadamente',
  'Consulta sobre facturación',
  'Necesito ayuda con la configuración',
  'Problema de conexión a la base de datos',
  'Solicitud de cambio de contraseña',
  'Error 404 en el sitio web',
  'Pregunta sobre características del producto',
  'No recibo correos electrónicos',
  'Problema con el rendimiento del sistema',
  'Solicitud de reembolso',
  'Error al cargar archivos',
  'Consulta sobre actualizaciones',
  'Problema con la integración de API',
  'No puedo descargar el archivo',
  'Solicitud de soporte técnico urgente',
  'Error en el proceso de registro',
  'Pregunta sobre compatibilidad',
  'Problema con el certificado SSL',
  'Consulta sobre planes de suscripción',
  'No funciona el botón de envío',
  'Error al importar datos',
  'Solicitud de documentación',
  'Problema con el inicio de sesión',
  'Error en la validación de formularios',
  'Consulta sobre políticas de privacidad',
  'No puedo actualizar mi perfil',
];

const sampleNames = [
  'Juan Pérez',
  'Laura González',
  'Miguel Ángel Rodríguez',
  'Isabel Fernández',
  'Antonio López',
  'Carmen Martínez',
  'Francisco Sánchez',
  'Marta Gómez',
  'José Luis Díaz',
  'Elena Muñoz',
  'Roberto Álvarez',
  'Sofía Romero',
  'David Navarro',
  'Cristina Torres',
  'Manuel Ramírez',
];

const sampleEmails = [
  'juan.perez@example.com',
  'laura.gonzalez@example.com',
  'miguel.rodriguez@example.com',
  'isabel.fernandez@example.com',
  'antonio.lopez@example.com',
  'carmen.martinez@example.com',
  'francisco.sanchez@example.com',
  'marta.gomez@example.com',
  'jose.diaz@example.com',
  'elena.munoz@example.com',
  'roberto.alvarez@example.com',
  'sofia.romero@example.com',
  'david.navarro@example.com',
  'cristina.torres@example.com',
  'manuel.ramirez@example.com',
];

function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

async function main() {
  console.log('🌱 Iniciando población de la base de datos...');

  // Limpiar datos existentes
  await prisma.ticket.deleteMany();
  await prisma.agent.deleteMany();

  console.log('✅ Datos existentes eliminados');

  // Crear agentes
  console.log('👥 Creando agentes...');
  const createdAgents = await Promise.all(
    agents.map((agent) => prisma.agent.create({ data: agent }))
  );
  console.log(`✅ ${createdAgents.length} agentes creados`);

  // Crear tickets
  console.log('🎫 Creando tickets...');
  const ticketsToCreate = 60;
  const now = new Date();
  const sixMonthsAgo = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000);

  for (let i = 0; i < ticketsToCreate; i++) {
    const status = randomElement(statuses);
    const createdAt = randomDate(sixMonthsAgo, now);
    const closedAt =
      status === 'closed'
        ? randomDate(createdAt, now)
        : null;

    await prisma.ticket.create({
      data: {
        code: String(9000 + i + 1).padStart(6, '0'),
        subject: randomElement(sampleSubjects),
        fromName: randomElement(sampleNames),
        fromEmail: randomElement(sampleEmails),
        status,
        priority: randomElement(priorities),
        department: randomElement(departments),
        topic: randomElement(topics),
        assignedToId: Math.random() > 0.2 ? randomElement(createdAgents).id : null,
        closedById:
          status === 'closed'
            ? randomElement(createdAgents).id
            : null,
        commentCount: Math.floor(Math.random() * 10),
        hasAttachment: Math.random() > 0.7,
        createdAt,
        closedAt,
      },
    });
  }

  console.log(`✅ ${ticketsToCreate} tickets creados`);

  // Mostrar estadísticas
  const stats = await prisma.ticket.groupBy({
    by: ['status'],
    _count: true,
  });

  console.log('\n📊 Estadísticas de tickets:');
  stats.forEach((stat) => {
    console.log(`  ${stat.status}: ${stat._count}`);
  });

  console.log('\n✨ ¡Base de datos poblada exitosamente!');
}

main()
  .catch((e) => {
    console.error('❌ Error al poblar la base de datos:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
