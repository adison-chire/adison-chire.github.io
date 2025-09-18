
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10 lg:px-20 text-white">
      
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-10 text-center">
        Acerca de Mí
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
        
        {/* Párrafo 1: Identidad y Propuesta de Valor (El Gancho) */}
        <p>
          Soy <strong>Adison Chire</strong>, Analista de Datos egresado de la <strong>UNASAM</strong> y pronto a ser titulado, mi enfoque es simple: 
          transformar los datos en <span className="text-cyan-300 font-semibold">soluciones y decisiones claras</span>. 
          Mi experiencia se centra en **construir sistemas** que optimizan la gestión de negocios y la logística. 
          <strong> No solo reporto números, los hago actuar.</strong>
        </p>

        {/* Párrafo 2: Evidencia Tangible y Stack de Soluciones */}
        <p>
          Mi portafolio demuestra mi dominio en el ciclo completo del análisis, desde la infraestructura hasta la conclusión:
        </p>
        
        {/* Lista de Logros como Evidencia (Usando <ul> y <li>) */}
        <ul className="list-disc list-inside ml-6 space-y-3 font-medium">
            <li className="text-teal-300">
                <span className="text-white">
                    <strong>Integración de Sistemas (Full Stack Analytics):</strong> Desarrollé GeoRutas Huaraz combinando <strong>Python, JavaScript, y SQL</strong> para crear una solución de movilidad urbana con <strong>Sistemas de Información Geográfica (SIG)</strong>.
                </span>
            </li>
            <li className="text-teal-300">
                <span className="text-white">
                    <strong>Business Intelligence Aplicada:</strong> En Barbershop Data Analytics, utilicé <strong>SQL Server y Power BI</strong> para centralizar métricas y entregar <strong>reportes interactivos</strong> que optimizaron la toma de decisiones.
                </span>
            </li>
        </ul>
        
        {/* El Toque Personal/Humano */}
        <p className="pt-4 italic text-gray-400">
            Creo firmemente en que los datos cuentan historias que, si se interpretan correctamente, tienen el poder de transformar procesos obsoletos en estrategias de alta rentabilidad.
        </p>
        

        {/* Párrafo 3: Visión de Crecimiento */}
        <p>
          Busco un entorno desafiante donde mis habilidades en <strong>SQL, Python</strong> y <strong>Power BI</strong> puedan resolver problemas reales. Estoy disponible para unirme a un equipo que valore la mentalidad de crecimiento continuo y apueste por la innovación. <strong>Estoy listo para aprender, asumir cualquier nuevo reto y aportar valor inmediato.</strong>
        </p>

      </div>
    </section>
  );
};

export default About;