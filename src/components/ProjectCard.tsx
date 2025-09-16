import React from "react";
//definimos la estructura de los datos del proyecto 

interface ProjectProps { 
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;

}

const ProjectCard: React.FC<ProjectProps> = ({title, description, image, tech, github, demo}) => {
  return (
    <div className="bg-white/10 text-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105">
     <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={`Imagen del proyecto ${title}`} 
          className="w-full h-full object-contain" 
        />
      </div>      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-200 mb-4 text-center">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, index) => (
          <span key={index} className="bg-cyan-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 mt-auto ">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-medium hover:underline transition " >
          GitHub
        </a>
        {/**Sin target="_blank", el enlace abre en la misma ventana.
          Con target="_blank", mantiene tu portafolio abierto y abre otra pestaña con el demo.
          noopener → evita que la nueva pestaña pueda controlar la pestaña original.
          noreferrer → además, evita que la nueva página sepa desde dónde viniste (oculta el "referer"). */}
        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-medium hover:underline transition">
          Demo
        </a>
      </div>

    </div>
  )
}

export default ProjectCard