# OSTicket Modern - Cooperativa Verde

Este repositorio contiene una aplicación web moderna de una sola página para una cooperativa sostenible.

## 🌿 Proyecto: Cooperativa Verde

Una página web completa y moderna para una cooperativa enfocada en sostenibilidad, desarrollo comunitario y economía solidaria.

### Características Principales

- ✅ Single-page application con navegación fluida
- ✅ Diseño responsive y moderno
- ✅ Animaciones suaves con Framer Motion
- ✅ Tema verde sostenible
- ✅ Todo el contenido en español
- ✅ Accesible (WCAG-friendly)
- ✅ Soporte para reduced motion

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18+ y npm

### Instalación y Ejecución

```bash
# Navegar al directorio del frontend
cd frontend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

### Build de Producción

```bash
cd frontend
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
osticket-modern/
├── frontend/              # Aplicación React + Vite
│   ├── src/
│   │   ├── components/   # Componentes reutilizables
│   │   ├── pages/        # Páginas de la aplicación
│   │   │   └── cooperativa/  # Página de la cooperativa
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
└── README.md
```

## 🛠️ Tecnologías

- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Biblioteca de animaciones
- **Lucide React** - Iconos SVG

## 📖 Documentación

Para más detalles sobre el proyecto frontend, consulta el [README del frontend](./frontend/README.md).

## 🎨 Características de la Página

La página de la cooperativa incluye las siguientes secciones:

1. **Hero** - Presentación principal con CTAs
2. **Misión, Visión y Valores** - Pilares de la cooperativa
3. **Servicios** - Grid de servicios ofrecidos
4. **Beneficios** - Ventajas para miembros
5. **Proyectos** - Proyectos destacados con tags
6. **Impacto** - Estadísticas con contadores animados
7. **Testimonios** - Carrusel de opiniones de socios
8. **FAQs** - Preguntas frecuentes con acordeón
9. **Noticias** - Blog con últimas actualizaciones
10. **Contacto** - Formulario de contacto funcional
11. **Footer** - Enlaces y redes sociales

## 🤝 Contribuir

Este es un proyecto de demostración. Para cambios mayores, por favor abre un issue primero.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
