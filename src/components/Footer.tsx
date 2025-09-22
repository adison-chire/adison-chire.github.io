// src/components/Footer.tsx

import React from 'react';
// Importa los iconos que necesitarás
import { Linkedin, Github, Mail } from 'lucide-react'; 

// **IMPORTANTE:** Reemplaza los placeholders con tus enlaces reales
const GITHUB_URL = "https://github.com/adison-chire/"; 
const LINKEDIN_URL = "https://www.linkedin.com/in/adison-chire-1603s/"; 
const EMAIL_ADDRESS = "adichidev03@gmail.com"; 

const Footer: React.FC = () => {
  // Obtenemos el año actual para el copyright
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className=" text-white py-5 px-4 md:px-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* --- 1. Branding y Copyright --- */}
        <div className="text-sm text-gray-400">
          <p>&copy; {currentYear} Adison Chire. Todos los derechos reservados.</p>
          <p className="mt-1">Construido con React, TypeScript & Tailwind CSS.</p>
        </div>

        {/* --- 2. Enlaces de Redes (Socials) --- */}
        <div className="flex space-x-6">
          
          {/* GitHub */}
          <a 
            href={GITHUB_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Github size={24} />
          </a>

          {/* LinkedIn */}
          <a 
            href={LINKEDIN_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>

          {/* Email */}
          <a 
            href={`mailto:${EMAIL_ADDRESS}`} 
            aria-label="Email Address"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        
      </div>
    </footer>
  );
}

export default Footer;