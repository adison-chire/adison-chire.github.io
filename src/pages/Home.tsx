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
          Mi pasión es la tecnología y el aprendizaje constante.
        </h3>
        
        {/* El Título (H1): Tu identidad profesional */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Soy Adison Chire, <br className="hidden sm:inline"/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500">
            Egresado en Ingeniería de Sistemas e Informática
          </span>
        </h1>
        
        {/* Propuesta de valor */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Buscando oportunidades de experiencia profesional como 
          <span className="text-cyan-400 font-semibold"> Trainee o Junior</span>. 
          Cuento con bases en <strong>Python</strong>, <strong>SQL Server</strong>, <strong>MySQL</strong> y 
          <strong> Power BI</strong> para análisis de datos, además de proyectos web con 
          <strong> React</strong>, <strong>TypeScript</strong> y <strong>PHP/MySQL</strong>. 
          Mi objetivo es integrarme en un equipo donde pueda <span className="text-cyan-400 font-semibold">
          aprender, aportar y crecer</span> como profesional.
        </p>
        
        {/* El Botón (CTA): Llamada a la acción a ver la evidencia */}
        <div className="pt-8">
          <a
            href="/#/projects" // Asegúrate de que este ID coincida con tu sección de proyectos
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