import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

// 1. Definimos las categorías disponibles
const projectCategories = [
  'Todos',
  'Apps Web',
  'Data Analyst',
  //'Data Engineering',
];

const Projects = () => {
  // 2. Creamos un estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // 3. Filtramos los proyectos basados en la categoría
  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'Todos' || project.category === selectedCategory
  );

  // 4. Función para cambiar el estado al hacer clic en los botones
  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
  };

  const buttonStyle =
    'py-2 px-6 font-bold rounded-full transition-colors duration-300';
  const activeButtonStyle = 'bg-cyan-400 text-gray-900 shadow-md';
  const inactiveButtonStyle =
    'bg-transparent text-white border border-gray-400 hover:bg-white/10';

  return (
    <section className="p-4 md:p-8">

      {/* Botones de filtro generados dinámicamente */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterClick(category)}
            className={`${buttonStyle} ${
              selectedCategory === category
                ? activeButtonStyle
                : inactiveButtonStyle
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mapeamos la lista de proyectos filtrados */}
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            github={project.github}
            media={project.media}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;