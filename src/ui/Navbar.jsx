import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";
import Logo from '../ui/Logo';
import { FiMenu, FiX } from 'react-icons/fi'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-black font-medium border-b-2 border-black pb-1"
      : "text-gray-600 hover:text-black transition";

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold text-gray-800">
            <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/books" className={navLinkClass}>
            Books
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>


          {/* &rarr; */}
          {/* CTA Button */}
          <Link to="/author">
            <button className="bg-transparent text-black/50 px-5 py-2 border rounded-xs hover:bg-gray-800 hover:text-white transition">
              Meet the Author 
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 transition cursor-pointer text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* {isOpen ? x <X size={26} /> : -<Menu size={26} />} */}
          {isOpen ? <FiX /> : <FiMenu /> }
        </button>
      </div>

      {/* Mobile Menu */}

      {/* `md:hidden px-6 overflow-hidden transform transition-all duration-500 ease-in-out ${
    isOpen
      ? "max-h-96 opacity-100 translate-y-0 py-4"
      : "max-h-0 opacity-0 -translate-y-2"
  } bg-white shadow-md` */}

    <div
  className={`md:hidden px-6 overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
  } bg-white shadow-md`}
>
  <div className="space-y-4">
    <NavLink to="/" onClick={() => setIsOpen(false)} className="block text-gray-700">
      Home
    </NavLink>
    <hr className="text-black/20"/>

    <NavLink to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700">
      About
    </NavLink>
    <hr className="text-black/20"/>

    <NavLink to="/books" onClick={() => setIsOpen(false)} className="block text-gray-700">
      Books
    </NavLink>
    <hr className="text-black/20"/>

    <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700">
      Contact
    </NavLink>
    <hr className="text-black/20"/>

    <Link to="/author" onClick={() => setIsOpen(false)}>
      <button className="w-full bg-black text-white py-2 rounded-sm">
        About Author
      </button>
    </Link>
  </div>
</div>

      {/* {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-md">
          <NavLink to="/" className="block text-gray-700">
            Home
          </NavLink>
          <hr />

          <NavLink to="/about" className="block text-gray-700">
            About
          </NavLink>
          <hr />

          <NavLink to="/books" className="block text-gray-700">
            Books
          </NavLink>
          <hr />

          <NavLink to="/contact" className="block text-gray-700">
            Contact
          </NavLink>
          <hr />

          <Link to="/author">
            <button className="w-full bg-black text-white py-2 rounded-full">
              About Author
            </button>
          </Link>
        </div>
      )} */}
    </nav>
  );
}







