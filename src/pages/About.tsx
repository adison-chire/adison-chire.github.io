
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10 lg:px-20 text-white">
      
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-10 text-center">
        Acerca de Mí
      </h2>

     <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
        
        <p>
          Bachiller en <strong>Ingeniería de Sistemas e Informática</strong> con enfoque en
          <strong> Business Intelligence y Análisis de Datos</strong>. Cuento con experiencia
          práctica desarrollando <strong>procesos ETL en Python</strong>,
          <strong> modelado de datos en PostgreSQL y SQL Server</strong>, y
          <strong> dashboards interactivos en Power BI</strong>, orientados a transformar
          datos en información clara para la <strong>toma de decisiones</strong>.
        </p>

        <p>
          He participado en proyectos donde integré múltiples fuentes de datos,
          definí <strong>KPIs</strong> y construí <strong>reportes automatizados</strong> para
          el seguimiento de indicadores y desempeño de proyectos.
        </p>

        <p>
          Como complemento, he desarrollado proyectos web utilizando
          <strong> React, TypeScript y Tailwind CSS</strong>, lo que me permite tener una
          visión integral del flujo de datos desde el backend hasta la
          visualización final.
        </p>

        <p>
          Me caracterizo por ser una persona <strong>analítica</strong>,
          <strong> orientada a resultados</strong> y enfocada en la
          <strong> calidad de los datos</strong>. Busco integrarme a un equipo donde
          pueda aportar valor como <strong>Analista de Datos Junior / BI</strong>,
          continuar fortaleciendo mis habilidades y crecer profesionalmente en
          entornos colaborativos y orientados a la mejora continua.
        </p>

      </div>
    </section>
  );
};

export default About;