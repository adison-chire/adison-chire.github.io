
import { Mail, Github, Linkedin, PhoneCallIcon } from 'lucide-react';

const Contact = () => {
return (
<section className="flex flex-col items-center justify-center p-8 md:p-16 text-center text-white min-h-screen">
    <h2 className="text-3xl md:text-5xl font-bold mb-4">
    ¡Hablemos!
    </h2>
    <p className="text-lg md:text-xl font-light mb-12 max-w-xl">
    Estoy activamente buscando nuevas oportunidades. No dudes en contactarme para colaborar y discutir proyectos.
    </p>

    <div className="flex flex-col gap-6 md:gap-8 text-xl">
    {/* Correo Electrónico */}
    <a 
        href="mailto:adichidev03@gmail.com" 
        
        className="flex items-center gap-4 hover:text-cyan-400 transition-colors"
    >
        <Mail size={32} />
        <span className="text-base md:text-lg">adichidev03@gmail.com</span>
    </a>
    
    {/* Perfil de LinkedIn */}
    <a 
        href="https://www.linkedin.com/in/adison-chire-1603s/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-4 hover:text-cyan-400 transition-colors"
    >
        <Linkedin size={32} />
        <span className="text-base md:text-lg">LinkedIn</span>
    </a>

    {/* Perfil de GitHub */}
    <a 
        href="https://github.com/adison-chire/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-4 hover:text-cyan-400 transition-colors"
    >
        <Github size={32} />
        <span className="text-base md:text-lg">GitHub</span>
    </a>

    {/* Número de Teléfono (Opcional) */}
    <a 
        href="https://wa.me/51910959715" 
        target="_blank" 
        className="flex items-center gap-4 hover:text-cyan-400 transition-colors"
    >
        <PhoneCallIcon size={32} />
        <span className="text-base md:text-lg">My Phone</span>
    </a>
    </div>
</section>
);
};

export default Contact;