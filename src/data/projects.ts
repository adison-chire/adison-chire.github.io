export const projects = [
  {
    id: 1,
    title: "GeoRutas Huaraz",
    description: "Aplicación web interactiva que facilita la movilidad urbana en la ciudad de Huaraz. A través de un enfoque basado en Sistemas de Información Geográfica (SIG), analiza la red de calles para calcular y visualizar las rutas más rápidas y eficientes.",
    image: "/src/assets/GeoRutasHZ/sitema_rutas_hz_1.gif", // Usa una imagen principal para la tarjeta
    tech: ["PYTHON", "HTML", "CSS", "JAVASCRIPT", "SQL"],
    github: "https://github.com/adison-chire/Sistema-Rutas-Huaraz.git",
    // Agrega el array de media con el GIF y las imágenes
    media: [
      "/src/assets/GeoRutasHZ/sitema_rutas_hz_1.gif",
      "/src/assets/GeoRutasHZ/huaraz_map.png",
      "/src/assets/GeoRutasHZ/img_principal.png",
      "/src/assets/GeoRutasHZ/img_direc.png",
      "/src/assets/GeoRutasHZ/detalle.png",
   
    ],
    category: "Apps Web"
  },
  {
    id: 2,
    title: "Dashboard de Recursos Humanos",
    description: "Sistema de análisis datos para una barbería mediante SQL Server y Power BI. El sistema centraliza información de clientes, empleados, inventario, servicios y ventas, permitiendo generar reportes interactivos que optimizan la toma de decisiones, reducen errores y mejoran la atención al cliente.",
    image: "/src/assets/BARBER/dashboard_barber.gif", // Usa una imagen principal para la tarjeta
    tech: ["Power BI", "SQL Server"],
    github: "https://github.com/adison-chire/barberia-data-analytics.git",
    // Agrega el array de media con el GIF y las imágenes
    media: [
      "/src/assets/BARBER/dashboard_barber.gif", 
      "/src/assets/BARBER/sqlserver.png", 
      "/src/assets/BARBER/dimen.png", 
      "/src/assets/BARBER/data.png", 
      "/src/assets/BARBER/principal.png", 
      "/src/assets/BARBER/d_2.png", 
      "/src/assets/BARBER/d_3.png", 
      "/src/assets/BARBER/d_4.png", 
      "/src/assets/BARBER/d_5.png"
    ],
    category: "Data Analyst"
  },
];