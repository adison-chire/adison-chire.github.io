import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // 1. Creamos un estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('Data Analyst');

  // 2. Filtramos los proyectos basados en la categoría
  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  // 3. Función para cambiar el estado al hacer clic en los botones
  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
  };

  const buttonStyle = "py-2 px-6 font-bold rounded-full transition-colors duration-300";
  const activeButtonStyle = "bg-cyan-400 text-gray-900 shadow-md";
  const inactiveButtonStyle = "bg-transparent text-white border border-gray-400 hover:bg-white/10";

  return (
    <section className="p-4 md:p-8">
      {/* 4. Usamos flexbox para alinear los botones */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <button 
          onClick={() => handleFilterClick('Data Analyst')}
          className={`${buttonStyle} ${selectedCategory === 'Data Analyst' ? activeButtonStyle : inactiveButtonStyle}`}
        >
          Data Analyst
        </button>
        <button 
          onClick={() => handleFilterClick('Data Engineer')}
          className={`${buttonStyle} ${selectedCategory === 'Data Engineer' ? activeButtonStyle : inactiveButtonStyle}`}
        >
          Data Engineer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 5. Mapeamos la lista de proyectos filtrados */}
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;