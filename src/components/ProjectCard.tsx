import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
//definimos la estructura de los datos del proyecto 

interface ProjectProps { 
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  media: string[];

}

const ProjectCard: React.FC<ProjectProps> = ({title, description, image, tech, github, media}) => {
const [showDemoModal, setShowDemoModal] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };
  return (
    <>
      <div className="bg-white/10 text-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105 h-full">
        <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
          <img 
            src={image} 
            alt={`Imagen del proyecto ${title}`} 
            className="w-full h-full object-cover" 
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 mb-4 text-center flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, index) => (
            <span key={index} className="bg-cyan-300 text-gray-900  text-xs font-bold px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-10 mt-auto ">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-medium hover:underline transition ">
            GitHub
          </a>
          <button
            onClick={() => {
              setShowDemoModal(true);
              setCurrentMediaIndex(0); // Reinicia a la primera imagen al abrir
            }}
            className="text-cyan-400 font-medium hover:underline transition"
          >
            Demo & Galería
          </button>
        </div>
      </div>
      
      {/* --- MODAL PARA LA GALERÍA --- */}
      {showDemoModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black/75 z-[100]" 
          onClick={() => setShowDemoModal(false)}
        >
          <div 
            className="relative bg-gray-300 p-4 rounded-lg shadow-xl  max-w-6xl  w-11/12 md:w-3/4 lg:w-2/3"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowDemoModal(false)} 
              className="absolute top-2 right-2 text-cyan-700 hover:text-cyan-950"
            >
              <X size={28} />
            </button>
            <h3 className="text-xl font-bold mb-4 text-center">{title} - Galería</h3>
            
            {/* Contenedor de la galería */}
            <div className="relative flex items-center justify-center max-h-[85vh] overflow-y-auto">
              {/* Botón "Anterior" */}
              <button
                onClick={prevMedia}
                className="absolute left-2 text-white bg-gray-900/50 p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              {/* Contenido principal (GIF/Imagen) */}
              <img 
                src={media[currentMediaIndex]} 
                alt={`Imagen ${currentMediaIndex + 1} del proyecto ${title}`} 
                className="max-h-full w-auto rounded-md object-contain" 
              />
              
              {/* Botón "Siguiente" */}
              <button
                onClick={nextMedia}
                className="absolute right-2 text-white bg-gray-900/50 p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard