// src/components/Home.tsx

import React from 'react';

// Se recomienda usar un ícono para el botón de CV o Proyectos, usaremos un icono de flecha
import { ArrowRight } from 'lucide-react'; 

const Home: React.FC = () => {
  return (
    // Sección principal que ocupa toda la altura de la vista (h-screen)
    // Usamos flexbox para centrar el contenido perfectamente.
    <section 
      id="home" 
      className="h-screen flex items-center justify-center  text-white px-4"
    >
      
      <div className="text-center max-w-4xl space-y-6">
        
        {/* El Gancho (H3): Qué te diferencia */}
        <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">
          Transformo datos en información estratégica para la toma de decisiones.
        </h3>
        
        {/* El Título (H1): Tu identidad profesional */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Soy Adison Chire, <br className="hidden sm:inline"/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">
            Ingeniero de Sistemas e Informática.
          </span>
        </h1>
        
        {/* Propuesta de valor */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Especialización en <span className="text-cyan-400 font-semibold">Business Intelligence </span> 
          y <span className="text-cyan-400 font-semibold"> análisis de datos</span>. 
          Experiencia en procesos ETL con <strong>Python</strong>, modelado en 
          <strong> PostgreSQL</strong> y <strong>SQL Server</strong>, y creación de 
          dashboards en <strong>Power BI</strong> para apoyar decisiones estratégicas. 
          También desarrollo proyectos web con <strong>React</strong>, 
          <strong>TypeScript</strong> y <strong>Tailwind CSS</strong>.
        </p>
        
        {/* El Botón (CTA): Llamada a la acción a ver la evidencia */}
        <div className="pt-8">
          <a
            href="/projects" // Asegúrate de que este ID coincida con tu sección de proyectos
            className="inline-flex items-center justify-center px-8 py-3 text-base font-extrabold rounded-full text-gray-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg"
          >
            Ver Proyectos
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Home;