# osTicket Modern - Réplica Moderna del Panel de Control

Una implementación moderna y mejorada del panel de control de personal de osTicket, construida como una aplicación full-stack con React, TypeScript, Node.js y SQLite.

## 🚀 Características

- **Frontend moderno**: React + Vite + TypeScript + Tailwind CSS
- **Backend robusto**: Node.js + Express + Prisma ORM + SQLite
- **Interfaz bilingüe**: Completamente en español
- **Temas**: Modo claro/oscuro con persistencia
- **Gestión de tickets**: Lista, búsqueda, filtrado, ordenamiento y paginación
- **Acciones masivas**: Actualización de estado de múltiples tickets
- **Exportación**: Descarga de tickets filtrados en formato CSV
- **Autenticación simulada**: Sistema de inicio de sesión con cookies HTTP-only

## 📋 Requisitos Previos

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd osticket-modern
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
# Copiar archivos de ejemplo
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

4. Inicializar la base de datos:
```bash
npm run db:push
```

5. Poblar con datos de ejemplo:
```bash
npm run seed
```

## 🚀 Desarrollo

Ejecutar frontend y backend simultáneamente:
```bash
npm run dev
```

O ejecutarlos por separado:
```bash
npm run dev:frontend  # Frontend en http://localhost:5173
npm run dev:backend   # Backend en http://localhost:3000
```

## 📦 Construcción

```bash
npm run build
```

## 🧹 Linting y Formateo

```bash
npm run lint    # Ejecutar linters
npm run format  # Formatear código
```

## 🗄️ Base de Datos

```bash
npm run db:push     # Sincronizar schema con la base de datos
npm run db:migrate  # Crear migraciones
npm run seed        # Poblar con datos de ejemplo
```

## 📁 Estructura del Proyecto

```
osticket-modern/
├── frontend/          # Aplicación React
│   ├── src/
│   │   ├── components/   # Componentes reutilizables
│   │   ├── pages/        # Páginas de la aplicación
│   │   ├── hooks/        # Custom hooks
│   │   ├── services/     # Llamadas API
│   │   ├── types/        # Definiciones TypeScript
│   │   └── utils/        # Utilidades
│   └── ...
├── backend/           # API Express
│   ├── src/
│   │   ├── routes/       # Rutas API
│   │   ├── controllers/  # Controladores
│   │   ├── services/     # Lógica de negocio
│   │   ├── middleware/   # Middleware
│   │   └── prisma/       # Schema y seeds
│   └── ...
└── package.json       # Configuración raíz
```

## 🎨 Funcionalidades

### Panel de Tickets
- Lista de tickets con columnas ordenables
- Filtros avanzados (estado, prioridad, asignado, fecha)
- Búsqueda por texto
- Paginación configurable
- Selección múltiple de tickets
- Badges de estado y colores de prioridad
- Indicadores de comentarios y adjuntos

### Acciones Masivas
- Cambiar estado de múltiples tickets
- Validación de IDs existentes

### Exportación
- Descargar tickets filtrados como CSV
- Respeta los filtros actuales de la lista

### Autenticación
- Login simulado con perfil de agente
- Cookies HTTP-only firmadas
- Logout con limpieza de sesión

### Tema
- Modo claro/oscuro
- Preferencia guardada en localStorage
- Toggle accesible

## 🌐 API Endpoints

### Tickets
- `GET /api/tickets` - Listar tickets con filtros
- `POST /api/tickets/bulk-update` - Actualizar estado masivamente
- `GET /api/tickets/export` - Exportar como CSV

### Autenticación
- `POST /api/login` - Iniciar sesión (simulado)
- `POST /api/logout` - Cerrar sesión

## 📊 Datos de Ejemplo

La base de datos se puebla con ~60 tickets de ejemplo que incluyen:
- Variedad de estados (Abierto, Contestado, Cerrado)
- Diferentes prioridades (Baja, Normal, Alta, Urgente)
- Múltiples agentes asignados
- Asuntos en español
- Fechas variadas
- Algunos con adjuntos
- Diferentes conteos de comentarios

## 🎨 Diseño

La interfaz está inspirada en el panel de control de osTicket pero modernizada con:
- Diseño responsive y accesible
- Componentes de UI modernos
- Animaciones sutiles
- Mejor experiencia de usuario
- Iconos de Heroicons

## 📝 Notas

- Este es un proyecto de demostración con autenticación simulada
- No implementa seguridad real para producción
- Los datos de ejemplo son ficticios
- La interfaz está completamente en español

## 📄 Licencia

MIT

## 👥 Autor

Proyecto de demostración - Réplica moderna de osTicket
