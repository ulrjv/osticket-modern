# Cooperativa Verde - Single Page Site

Este proyecto presenta una aplicación web moderna de una sola página para una cooperativa, construida con React + TypeScript + Vite + Tailwind CSS.

## 🌿 Características

- **Diseño moderno y responsive**: Adaptable a todos los dispositivos
- **Animaciones fluidas**: Utilizando Framer Motion para transiciones suaves
- **Tema verde sostenible**: Paleta de colores centrada en tonos verdes
- **Contenido en español**: Todo el contenido está en español
- **Accesibilidad**: Soporte para `prefers-reduced-motion` y navegación por teclado
- **Secciones completas**:
  - Hero con CTAs
  - Misión, Visión y Valores
  - Servicios/Productos
  - Beneficios para miembros
  - Proyectos destacados
  - Impacto en cifras (con contadores animados)
  - Testimonios (carrusel)
  - FAQs (acordeón)
  - Noticias/Blog
  - Formulario de contacto
  - Footer completo

## 🚀 Inicio Rápido

### Instalación

```bash
cd frontend
npm install
```

### Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173/`

### Build para Producción

```bash
npm run build
```

### Vista Previa del Build

```bash
npm run preview
```

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Navegación con smooth scroll
│   │   ├── Section.tsx        # Componente reutilizable de sección
│   │   └── Footer.tsx         # Footer con enlaces y redes
│   ├── pages/
│   │   └── cooperativa/
│   │       ├── CooperativaPage.tsx           # Página principal
│   │       ├── data.ts                       # Contenido y datos
│   │       ├── HeroSection.tsx               # Sección hero
│   │       ├── MisionVisionValoresSection.tsx
│   │       ├── ServiciosSection.tsx
│   │       ├── BeneficiosSection.tsx
│   │       ├── ProyectosSection.tsx
│   │       ├── ImpactoSection.tsx            # Stats con contadores
│   │       ├── TestimoniosSection.tsx        # Carrusel de testimonios
│   │       ├── FAQsSection.tsx               # Acordeón de preguntas
│   │       ├── NoticiasSection.tsx
│   │       └── CTAFinalSection.tsx           # Formulario de contacto
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`. Puedes ajustar la paleta verde modificando el tema:

```js
colors: {
  primary: {
    50: '#f0fdf4',
    // ... más tonos
    900: '#14532d',
  },
}
```

### Contenido

Todo el contenido está centralizado en `src/pages/cooperativa/data.ts`. Modifica este archivo para actualizar:
- Textos del hero
- Servicios
- Proyectos
- Testimonios
- FAQs
- Noticias
- Y más...

## ♿ Accesibilidad

El sitio incluye:
- Navegación por teclado completa
- Estados de focus visibles
- Etiquetas ARIA apropiadas
- Soporte para `prefers-reduced-motion`
- Contraste de color adecuado

## 📱 Responsive

El diseño es completamente responsive con breakpoints optimizados para:
- Móviles (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🧪 Linting

```bash
npm run lint
```

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
