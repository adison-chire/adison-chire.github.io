import { useState }  from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar= () => {
    const [open, setOpen] = useState(false);
    return (
        //md: → pantallas ≥ 768px (tablets). lg: → pantallas ≥ 1024px (laptops/PCs).
        <nav className="flex justify-between items-center px-4 py-6 md:px-8 lg:px-16 text-cyan-400 ">
            {/* Logo */}
            <span className="font-bold text-xl md:text-2xl lg:text-3xl "> ADISON CH_ </span>
            {/* Menú desktop */}
            <ul className ="hidden md:flex gap-4 md:gap-6 lg:gap-8 text-sm md:text-base">
                <li><Link to="/" className="hover:text-cyan-200 transition-colors">Home</Link></li>
                <li><Link to="/Projects" className="hover:text-cyan-200 transition-colors">Projects</Link></li>
                <li><Link to="/About" className="hover:text-cyan-200 transition-colors">About</Link></li>
                <li><Link to="/Contact" className="hover:text-cyan-200 transition-colors">Contact</Link></li>
            </ul>
            {/* Botón hamburguesa en móvil */}
            <button
                className="md:hidden"
                onClick={() => {
                    console.log("¡Botón de hamburguesa presionado!");
                    setOpen(!open)
                }}
            >
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>
            {/* Menú móvil desplegable */}
            {open && (
                <div className="absolute top-16 left-0 w-full bg-gray-900/90 backdrop-blur-md p-6 flex flex-col items-center gap-4 animate-slide-down md:hidden z-50">
                <Link to="/" onClick={() => setOpen(false)} className="py-2 text-xl hover:text-cyan-200 transition">Home</Link>
                <Link to="/Projects" onClick={() => setOpen(false)} className="py-2 text-xl hover:text-cyan-200 transition">Projects</Link>
                <Link to="/About" onClick={() => setOpen(false)} className="py-2 text-xl hover:text-cyan-200 transition">About</Link>
                <Link to="/Contact" onClick={() => setOpen(false)} className="py-2 text-xl hover:text-cyan-200 transition">Contact</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar