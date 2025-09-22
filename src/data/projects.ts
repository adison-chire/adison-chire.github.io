export const projects = [
  {
    id: 1,
    title: "GeoRutas Huaraz",
    description: "Aplicación que calcula 3 rutas alternativas hacia un destino, mostrando distancia, tiempo estimado y nivel de congestión en tiempo real. Cada ruta incluye detalles de los tramos (lat/long, tipo de vía, velocidad y categoría de congestión).",
    image: "/images/img_georutas/sitema_rutas_hz_1.gif", // Usa una imagen principal para la tarjeta
    tech: ["PYTHON", "HTML", "CSS", "JAVASCRIPT", "PostgreSQL"],
    github: "https://github.com/adison-chire/Sistema-Rutas-Huaraz.git",
    // Agrega el array de media con el GIF y las imágenes
    media: [
      "/images/img_georutas/sitema_rutas_hz_1.gif",
      "/images/img_georutas/huaraz_map.png",
      "/images/img_georutas/img_principal.png",
      "/images/img_georutas/img_direc.png",
      "/images/img_georutas/detalle.png",

    ],
    category: "Apps Web"
  },
  {
    id: 2,
    title: "Barbershop Data Analytics",
    description: "Sistema de análisis datos para una barbería mediante SQL Server y Power BI. El sistema centraliza información de clientes, empleados, inventario, servicios y ventas, permitiendo generar reportes interactivos que optimizan la toma de decisiones, reducen errores y mejoran la atención al cliente.",
    image: "/images/img_barber/dashboard_barber.gif", 
    tech: ["Power BI", "SQL Server"],
    github: "https://github.com/adison-chire/barberia-data-analytics.git",
    // Agrega el array de media con el GIF y las imágenes
    media: [
      "/images/img_barber/dashboard_barber.gif", 
      "/images/img_barber/sqlserver.png", 
      "/images/img_barber/dimen.png", 
      "/images/img_barber/data.png", 
      "/images/img_barber/principal.png", 
      "/images/img_barber/d_2.png", 
      "/images/img_barber/d_3.png", 
      "/images/img_barber/d_4.png", 
      "/images/img_barber/d_5.png"
    ],
    category: "Data Analyst"
  },
];