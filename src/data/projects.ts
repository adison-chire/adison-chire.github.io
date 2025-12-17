export const projects = [
  
  {
    id: 1,
    title: "Barbershop Data Analytics",
    description: "Proyecto de análisis de datos para una barbería, enfocado en tableros dinámicos con métricas de ventas, clientes, productos e inventario, además de evaluar el rendimiento del personal y permitir una exploración detallada de las transacciones para mejorar la toma de decisiones.",
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
  {
    id: 2,
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
    id: 3,
    title: "Sistema de Reservas de barberia",
    description: "El sistema permite a los clientes registrarse, iniciar sesión y reservar citas, mientras que los administradores pueden gestionar servicios, controlar citas y mantener actualizada la información de la barbería.El objetivo principal es digitalizar el proceso de atención, mejorando la organización y brindando una mejor experiencia a clientes y barberos.",
    image: "/images/img_web_barber/video_app_web_barberia.gif", 
    tech: [" HTML", "CSS", "JavaScript","PHP 8", "MySQL"],
    github: "https://github.com/adison-chire/reservas-barbershop.git",
    // Agrega el array de media con el GIF y las imágenes
    media: [
      "/images/img_web_barber/video_app_web_barberia.gif", 
      "/images/img_web_barber/bd.png", 
      "/images/img_web_barber/crea_cuenta.png", 
      "/images/img_web_barber/rec_cuenta.png", 
      "/images/img_web_barber/ini_sesion.png", 
      "/images/img_web_barber/panel_admin.png", 
      "/images/img_web_barber/ver_citas_admin.png", 
      "/images/img_web_barber/nue_serv.png", 
      "/images/img_web_barber/fecha_cita.png", 
      "/images/img_web_barber/registra_cita.png", 
      "/images/img_web_barber/servicios.png", 
      "/images/img_web_barber/reservar.png",  
    ],
    category: "Apps Web"
  },
];