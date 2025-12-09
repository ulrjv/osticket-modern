export interface Servicio {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  tags: string[];
  imagen?: string;
}

export interface Testimonio {
  id: number;
  nombre: string;
  rol: string;
  contenido: string;
  avatar?: string;
}

export interface FAQ {
  id: number;
  pregunta: string;
  respuesta: string;
}

export interface Noticia {
  id: number;
  titulo: string;
  resumen: string;
  fecha: string;
  tags: string[];
}

export const heroData = {
  titulo: "Cooperativa Verde",
  subtitulo: "Construyendo un futuro sostenible juntos",
  descripcion:
    "Somos una cooperativa comprometida con el desarrollo sostenible, la innovación social y el bienestar de nuestras comunidades. Únete a nosotros y sé parte del cambio.",
  ctaPrimario: "Únete Ahora",
  ctaSecundario: "Conocer Más",
};

export const misionVisionValores = [
  {
    id: 1,
    tipo: "Misión",
    icono: "target",
    contenido:
      "Promover el desarrollo sostenible mediante la colaboración comunitaria, ofreciendo productos y servicios que respetan el medio ambiente y mejoran la calidad de vida.",
  },
  {
    id: 2,
    tipo: "Visión",
    icono: "eye",
    contenido:
      "Ser la cooperativa líder en sostenibilidad e innovación social, reconocida por nuestro compromiso con el planeta y las personas, creando un modelo replicable de economía solidaria.",
  },
  {
    id: 3,
    tipo: "Valores",
    icono: "heart",
    contenido:
      "Solidaridad, transparencia, sostenibilidad, innovación y equidad. Trabajamos con integridad, respeto mutuo y responsabilidad ambiental en cada acción.",
  },
];

export const servicios: Servicio[] = [
  {
    id: 1,
    titulo: "Energía Renovable",
    descripcion:
      "Instalación y mantenimiento de sistemas solares y eólicos para hogares y empresas.",
    icono: "sun",
  },
  {
    id: 2,
    titulo: "Agricultura Orgánica",
    descripcion:
      "Producción y distribución de alimentos orgánicos certificados de nuestra red de productores.",
    icono: "sprout",
  },
  {
    id: 3,
    titulo: "Construcción Sostenible",
    descripcion:
      "Diseño y construcción de viviendas ecológicas con materiales renovables y eficiencia energética.",
    icono: "home",
  },
  {
    id: 4,
    titulo: "Educación Ambiental",
    descripcion:
      "Talleres, cursos y programas educativos sobre sostenibilidad y cuidado del medio ambiente.",
    icono: "book-open",
  },
  {
    id: 5,
    titulo: "Reciclaje y Gestión de Residuos",
    descripcion:
      "Servicios de recolección, procesamiento y reciclaje de residuos para comunidades y empresas.",
    icono: "recycle",
  },
  {
    id: 6,
    titulo: "Transporte Compartido",
    descripcion:
      "Sistema de movilidad sostenible con vehículos eléctricos compartidos para socios.",
    icono: "car",
  },
];

export const beneficios = [
  "Participación democrática en las decisiones de la cooperativa",
  "Acceso a productos y servicios de calidad a precios justos",
  "Dividendos anuales según la participación y uso de servicios",
  "Formación continua en sostenibilidad y desarrollo personal",
  "Red de apoyo comunitario y oportunidades de networking",
  "Descuentos exclusivos en servicios de la cooperativa",
  "Acceso prioritario a proyectos y programas especiales",
  "Contribución directa al impacto ambiental y social positivo",
];

export const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Parque Solar Comunitario",
    descripcion:
      "Instalación de un parque solar de 500kW que abastece a 200 hogares, reduciendo 300 toneladas de CO2 anuales.",
    tags: ["sostenibilidad", "energía", "comunidad"],
  },
  {
    id: 2,
    titulo: "Huertos Urbanos Colaborativos",
    descripcion:
      "Creación de 15 huertos urbanos en la ciudad donde 150 familias cultivan sus propios alimentos orgánicos.",
    tags: ["agricultura", "comunidad", "innovación"],
  },
  {
    id: 3,
    titulo: "Centro de Reciclaje Inteligente",
    descripcion:
      "Planta de reciclaje con tecnología de separación automatizada procesando 50 toneladas diarias.",
    tags: ["sostenibilidad", "innovación", "economía circular"],
  },
  {
    id: 4,
    titulo: "Eco-Viviendas Solidarias",
    descripcion:
      "Construcción de 30 viviendas ecológicas accesibles con materiales sostenibles y paneles solares.",
    tags: ["construcción", "sostenibilidad", "comunidad"],
  },
  {
    id: 5,
    titulo: "Escuela Verde",
    descripcion:
      "Programa educativo que ha formado a 1,000+ personas en prácticas sostenibles y permacultura.",
    tags: ["educación", "comunidad", "sostenibilidad"],
  },
  {
    id: 6,
    titulo: "Movilidad Eléctrica Compartida",
    descripcion:
      "Flota de 40 vehículos eléctricos compartidos que ha reducido 100 toneladas de emisiones anuales.",
    tags: ["innovación", "sostenibilidad", "movilidad"],
  },
];

export const impactoStats = [
  { id: 1, numero: 2500, sufijo: "+", label: "Miembros Activos" },
  { id: 2, numero: 45, sufijo: "+", label: "Proyectos Realizados" },
  { id: 3, numero: 120, sufijo: "+", label: "Comunidades Impactadas" },
  { id: 4, numero: 850, sufijo: " t", label: "CO₂ Evitadas Anualmente" },
];

export const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: "María González",
    rol: "Socia fundadora",
    contenido:
      "Formar parte de esta cooperativa ha transformado mi vida. No solo tengo acceso a energía limpia y alimentos orgánicos, sino que también he encontrado una comunidad que comparte mis valores.",
  },
  {
    id: 2,
    nombre: "Carlos Martínez",
    rol: "Agricultor orgánico",
    contenido:
      "Gracias a la cooperativa, mi producción orgánica tiene un mercado justo y sostenible. El apoyo técnico y la red de productores han sido invaluables para el crecimiento de mi proyecto.",
  },
  {
    id: 3,
    nombre: "Ana Rodríguez",
    rol: "Miembro desde 2020",
    contenido:
      "Me encanta participar en las decisiones y ver cómo nuestras acciones colectivas generan un impacto real en el medio ambiente. Los dividendos y beneficios son solo un plus de pertenecer.",
  },
  {
    id: 4,
    nombre: "Jorge López",
    rol: "Coordinador de proyectos",
    contenido:
      "La transparencia y los valores de la cooperativa me inspiraron a comprometerme más. Cada proyecto es una oportunidad para aprender, crecer y contribuir a un futuro mejor.",
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    pregunta: "¿Cómo puedo unirme a la cooperativa?",
    respuesta:
      "Unirte es muy sencillo. Completa el formulario de inscripción en nuestra sección de contacto, paga la cuota de membresía inicial y asiste a una sesión de bienvenida donde conocerás más sobre nuestros valores, servicios y cómo participar activamente.",
  },
  {
    id: 2,
    pregunta: "¿Cuál es el costo de la membresía?",
    respuesta:
      "La membresía tiene una cuota inicial de $50 y una contribución mensual de $15. Estos fondos se utilizan para financiar proyectos, mantener servicios y garantizar la operación sostenible de la cooperativa.",
  },
  {
    id: 3,
    pregunta: "¿Qué beneficios obtienen los socios?",
    respuesta:
      "Los socios disfrutan de acceso a servicios a precios preferenciales, participación en decisiones mediante asambleas, dividendos anuales según su uso de servicios, formación continua y una red de apoyo comunitario. Además, contribuyen directamente al impacto ambiental positivo.",
  },
  {
    id: 4,
    pregunta: "¿Puedo participar si no vivo en la zona?",
    respuesta:
      "¡Claro! Aunque muchos servicios son locales, ofrecemos membresías de apoyo para personas que quieran contribuir a nuestros proyectos desde cualquier lugar. También organizamos eventos virtuales y oportunidades de voluntariado remoto.",
  },
  {
    id: 5,
    pregunta: "¿Cómo toman las decisiones en la cooperativa?",
    respuesta:
      "Operamos bajo principios democráticos: cada socio tiene un voto, independientemente de su contribución económica. Las decisiones importantes se toman en asambleas generales y contamos con consejos de administración elegidos por los socios.",
  },
  {
    id: 6,
    pregunta: "¿Qué tipo de proyectos realizan?",
    respuesta:
      "Desarrollamos proyectos en áreas como energía renovable, agricultura orgánica, construcción sostenible, educación ambiental, reciclaje y movilidad sostenible. Priorizamos iniciativas que generen impacto social y ambiental positivo.",
  },
  {
    id: 7,
    pregunta: "¿Ofrecen formación a los socios?",
    respuesta:
      "Sí, organizamos talleres, cursos y programas educativos sobre sostenibilidad, permacultura, energías renovables, gestión cooperativa y desarrollo personal. La formación es gratuita o a bajo costo para todos los socios.",
  },
  {
    id: 8,
    pregunta: "¿Puedo proponer nuevos proyectos?",
    respuesta:
      "¡Absolutamente! Fomentamos la participación activa de nuestros socios. Puedes presentar propuestas de proyectos en las asambleas o a través del consejo de proyectos. Evaluamos cada propuesta según su alineación con nuestros valores y viabilidad.",
  },
];

export const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "Inauguración del Nuevo Parque Solar Comunitario",
    resumen:
      "Con gran éxito inauguramos nuestro tercer parque solar que beneficiará a más de 200 familias con energía limpia y accesible.",
    fecha: "2025-11-28",
    tags: ["energía", "sostenibilidad"],
  },
  {
    id: 2,
    titulo: "Certificación de Agricultura Orgánica para Nuestra Red",
    resumen:
      "Nuestros productores asociados han obtenido la certificación orgánica internacional, garantizando calidad y prácticas sostenibles.",
    fecha: "2025-11-15",
    tags: ["agricultura", "certificación"],
  },
  {
    id: 3,
    titulo: "Taller Gratuito: Introducción a la Permacultura",
    resumen:
      "Únete a nuestro próximo taller el 15 de diciembre donde aprenderás los fundamentos del diseño permacultural para tu hogar o proyecto.",
    fecha: "2025-11-10",
    tags: ["educación", "comunidad"],
  },
  {
    id: 4,
    titulo: "Expansión del Programa de Movilidad Eléctrica",
    resumen:
      "Sumamos 15 nuevos vehículos eléctricos a nuestra flota compartida, ampliando el servicio a tres nuevas zonas de la ciudad.",
    fecha: "2025-10-22",
    tags: ["movilidad", "innovación"],
  },
];

export const footerLinks = {
  cooperativa: [
    { label: "Sobre Nosotros", href: "#hero" },
    { label: "Misión y Visión", href: "#mision" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Impacto", href: "#impacto" },
  ],
  servicios: [
    { label: "Energía Renovable", href: "#servicios" },
    { label: "Agricultura Orgánica", href: "#servicios" },
    { label: "Construcción Sostenible", href: "#servicios" },
    { label: "Educación", href: "#servicios" },
  ],
  recursos: [
    { label: "Noticias", href: "#noticias" },
    { label: "FAQs", href: "#faqs" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ],
};
