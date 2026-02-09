import fb1 from "../assets/fitboost/1.png"
import fb2 from "../assets/fitboost/2.png"
import fb3 from "../assets/fitboost/3.png"
import fb4 from "../assets/fitboost/4.png"
import fb5 from "../assets/fitboost/5.png"
import fb6 from "../assets/fitboost/6.png"
import fb7 from "../assets/fitboost/7.png"
import fb8 from "../assets/fitboost/8.png"
import fb9 from "../assets/fitboost/9.png"
import fb10 from "../assets/fitboost/10.png"
import fb11 from "../assets/fitboost/11.png"
import pl1 from "../assets/pocketlist/1.png"
import pl2 from "../assets/pocketlist/2.png"
import pl3 from "../assets/pocketlist/3.png"
import pl4 from "../assets/pocketlist/4.png"
import pl5 from "../assets/pocketlist/5.png"
import pl6 from "../assets/pocketlist/6.png"
import pl7 from "../assets/pocketlist/7.png"
import pl8 from "../assets/pocketlist/8.png"
import pl9 from "../assets/pocketlist/9.png"
import pl10 from "../assets/pocketlist/10.png"
import pl11 from "../assets/pocketlist/11.png"
import oe1 from "../assets/openedx/1.png"
import oe2 from "../assets/openedx/2.png"
import oe3 from "../assets/openedx/3.png"
import oe4 from "../assets/openedx/4.png"
import cctv1 from "../assets/cctv/1.png"
import cctv2 from "../assets/cctv/2.png"
import cctv3 from "../assets/cctv/3.png"
import crud1 from "../assets/taskmanager/1.png"
import crud2 from "../assets/taskmanager/2.png"
import crud3 from "../assets/taskmanager/3.png"
import crud4 from "../assets/taskmanager/4.png"
import crud5 from "../assets/taskmanager/5.png"
import crud6 from "../assets/taskmanager/6.png"
import crud7 from "../assets/taskmanager/7.png"
import crud8 from "../assets/taskmanager/8.png"



export const projects = [
    {
    id: "fitboost",
    title: "FitBoost Trainer",
    category: "Mobile",
    description: "Aplicación móvil Android para planificación de entrenamientos y seguimiento de progreso físico con métricas y gráficas.",
    tech: ["Kotlin", "Android", "Firebase", "Firestore"],

    github: "https://github.com/yefrivera/FitBoostTrainer",
    repoType: "Repositorio de equipo",

    details: {
      overview: `
        Aplicación móvil Android desarrollada en equipo para planificación de entrenamientos,
        registro de medidas corporales y seguimiento de progreso físico. Permite a cada usuario
        registrar y actualizar sus métricas y visualizar evolución mediante gráficas por fecha.
        `,

      features: [
        "Registro e inicio de sesión de usuarios",
        "Gestión de cuenta personal",
        "Registro de medidas corporales",
        "Actualización de métricas de progreso",
        "Visualización gráfica por fechas",
        "Sincronización de datos en la nube"
      ],

      role: [
        "Implementación de login y registro",
        "Integración de autenticación con Firebase",
        "Desarrollo de módulo de registro de usuarios",
        "Implementación de tabla de estadísticas de progreso",
        "Lógica de actualización de medidas",
        "Apoyo en integración de componentes"
      ],

      learnings: [
        "Desarrollo móvil con Kotlin",
        "Uso de Firebase Authentication",
        "Modelado de datos de usuario",
        "Sincronización en backend serverless",
        "Visualización de datos históricos",
        "Trabajo técnico en equipo"
      ]
    },

    images: [fb1, fb2, fb3, fb4, fb5, fb6, fb7, fb8, fb9, fb10,fb11]
  },
  {
    id: "pocketlist",
    title: "PocketList",
    category: "Mobile",
    description: "Aplicación multiplataforma para gestión de listas de compras con Flutter y Firebase, con sincronización en tiempo real.",

    tech: ["Flutter", "Dart", "Firebase", "Firestore"],

    github: "https://github.com/yefrivera/Lista-compras--Flutter-",
    repoType: "Repositorio de equipo",

    demo: "https://yefrivera.github.io/PocketList-web/",

    details: {
      overview: `
        Aplicación multiplataforma desarrollada en equipo con Flutter para la gestión
        personalizada de listas de compras. Permite crear listas, asociar productos a
        sitios de compra, reutilizar listas frecuentes y sincronizar información en la nube.
        Incluye versión web de prueba además de uso móvil principal.
        `,

      features: [
        "Creación de listas de compras",
        "Registro de productos por lista",
        "Asociación de productos a sitios",
        "Creación de sitios mediante formularios",
        "Marcado de productos con gestos táctiles",
        "Edición y eliminación condicional",
        "Clonación de listas existentes",
        "Autenticación de usuarios",
        "Sincronización en tiempo real"
      ],

      role: [
        "Desarrollo de componentes de interfaz",
        "Diseño de tarjetas reutilizables",
        "Implementación de formatos visuales",
        "Ajustes de experiencia de usuario",
        "Apoyo transversal en funcionalidades",
        "Integración colaborativa de módulos"
      ],

      learnings: [
        "Desarrollo multiplataforma con Flutter",
        "Diseño de componentes reutilizables",
        "Modelado de colecciones en Firestore",
        "Gestión de listas dinámicas",
        "UX basada en gestos",
        "Trabajo colaborativo técnico"
      ]
    },

    images: [pl1, pl11, pl2, pl3, pl4, pl5, pl6, pl7, pl8, pl9, pl10]
    },
    {
    id: "openedx-soporte",
    title: "Open edX — Soporte e Implementación",
    category: "Web",

    description: "Soporte técnico, actualización y configuración de plataforma Open edX usando Docker y Tutor.",

    tech: [
      "Open edX",
      "Docker",
      "Tutor",
      "Linux",
      "Bash",
      "Django",
      "YAML"
    ],

    github: null,
    repoType: "Proyecto de soporte técnico (sin repositorio público)",

    details: {
      overview: `
        Proyecto de soporte técnico para plataforma educativa Open edX desplegada
        en contenedores Docker con Tutor. Incluyó actualización de versión, activación
        de certificados, configuración de cursos y troubleshooting por consola Linux.
  `,

      features: [
        "Actualización de versión Open edX",
        "Gestión de despliegue con Tutor",
        "Configuración por Docker",
        "Activación de certificados automáticos",
        "Configuración de course modes",
        "Activación de waffle switches",
        "Configuración de cursos demo",
        "Pruebas de flujo de certificación",
        "Personalización de plantilla HTML"
      ],

      role: [
        "Ejecución de comandos de actualización",
        "Configuración de contenedores",
        "Activación de plugins por Django shell",
        "Troubleshooting técnico",
        "Configuración de features LMS",
        "Personalización de certificados"
      ],

      learnings: [
        "Administración de LMS",
        "Docker en producción",
        "Uso de Tutor",
        "Configuración vía shell",
        "Debugging Linux",
        "Templates dinámicos HTML"
      ]
    },

    images: [oe1, oe2, oe3, oe4]
  },
  {
  id: "demo-webstack-crud",
    title: "Demo CRUD Web",
    category: "Web",

    description: "Aplicación fullstack CRUD con arquitectura desacoplada, API REST en Express y frontend React con consumo de endpoints.",

    tech: [
      "React",
      "Node",
      "Express",
      "Prisma",
      "SQLite",
      "Zod"
    ],

    github: "https://github.com/danddiaz/demo-crud-frontend",
    repoType: "Frontend",

    github2: "https://github.com/danddiaz/demo-crud-api",
    repoType2: "Backend",

    details: {
      overview: `
      Proyecto fullstack CRUD construido como entrenamiento técnico para pruebas
      de Software Developer Junior. Implementa arquitectura cliente–servidor
      desacoplada con API REST, validación de datos, ORM y componentes reutilizables.
      `,

      features: [
        "CRUD completo de tareas",
        "API REST Express",
        "Arquitectura por capas backend",
        "Validación con Zod",
        "ORM con Prisma",
        "Base de datos SQLite",
        "Frontend React desacoplado",
        "Componentes reutilizables",
        "Edición en línea",
        "Manejo de errores",
        "Estados de carga"
      ],

      role: [
        "Implementación backend completo",
        "Diseño de arquitectura por capas",
        "Construcción de endpoints REST",
        "Integración Prisma ORM",
        "Validaciones de payload",
        "Construcción frontend React",
        "Capa HTTP desacoplada",
        "Componentes reutilizables",
        "Integración frontend–backend",
        "Documentación técnica README"
      ],

      learnings: [
        "Arquitectura fullstack desacoplada",
        "Diseño de APIs REST",
        "Validación backend obligatoria",
        "Uso de ORM",
        "Separación controller–service",
        "Consumo API en React",
        "Manejo de estado UI",
        "Flujo completo CRUD"
      ]
    },

    images: [
      crud1, crud2, crud3, crud4, crud5, crud6, crud7, crud8]
  },
{
  id: "cctv-web",
  title: "Sistema Web Seguridad WiFi CCTV",
  category: "Web",

  description: "Sistema web con autenticación, roles y CRUD de usuarios para plataforma de seguridad CCTV con integración a hardware.",

  tech: [
    "PHP",
    "MySQL",
    "XAMPP",
    "HTML",
    "CSS",
    "phpMyAdmin"
  ],

  github: null,
  repoType: "Proyecto académico en equipo (sin repositorio público)",

  details: {
    overview: `
    Sistema web desarrollado en equipo para gestión de seguridad WiFi CCTV con
    login, registro, control de roles y conexión a base de datos. Integrado con
    módulos de cámaras y audio controlados desde interfaz web.
    `,

    features: [
      "Registro de usuarios",
      "Login seguro",
      "Validación de contraseñas",
      "Control de roles",
      "Panel administrador",
      "CRUD de usuarios",
      "Control de permisos",
      "Conexión a MySQL",
      "Integración con cámaras",
      "Interfaz de control"
    ],

    role: [
      "Desarrollo frontend completo",
      "Implementación de login y registro",
      "Conexión a base de datos",
      "Lógica de autenticación",
      "CRUD de usuarios",
      "Panel de administración",
      "Validaciones de formularios",
      "Gestión de permisos"
    ],

    learnings: [
      "PHP + MySQL",
      "CRUD web",
      "Control de sesiones",
      "Validación de seguridad",
      "Roles y permisos",
      "Arquitectura XAMPP",
      "Web + hardware"
    ]
  },

  images: [cctv1, cctv2, cctv3]
},

{
  id: "data-dashboard",
  title: "Dashboard de Análisis de Datos",
  category: "Data",

  description: "En proceso - Proyecto de análisis y visualización de datos actualmente en desarrollo.",

  tech: [
    "Python",
    "Pandas",
    "Power BI",
    "Visualización"
  ],

  status: "En desarrollo",

  github: null,

  details: {
    overview: `
    Proyecto de análisis de datos aplicado actualmente en construcción.
    Incluirá limpieza de datos, análisis exploratorio, visualización
    y conclusiones orientadas a métricas de negocio.
    `,

    features: [
      "Limpieza y transformación de datos",
      "Análisis exploratorio (EDA)",
      "Visualizaciones",
      "Métricas clave",
      "Conclusiones técnicas",
      "Notebook documentado"
    ],

    role: [
      "Diseño del análisis",
      "Modelado de métricas",
      "Construcción de visualizaciones"
    ],

    learnings: [
      "Storytelling con datos",
      "EDA estructurado",
      "Comunicación de insights"
    ]
  },

  images: []
}
]
