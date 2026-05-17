import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../ui/Logo';
import { FiMenu, FiX } from "react-icons/fi";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null)


  //OUTSIDE CLICK HANDLER
  useEffect(() => {
    function handleOutsideClick(e) {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
        // console.log(handleOutsideClick, 'click outside');      
      }
    }
      document.addEventListener('mousedown', handleOutsideClick)
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])
  

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


      
                {/* CTA Button */}
                <NavLink to="/author" className="bg-transparent text-black px-5 py-2 border hover:bg-black hover:text-white transition cursor-pointer rounded-xs" >
                    Meet the Team  
                </NavLink>
              </div>

              {/* Mobile Toggle */}
              <button
                className="md:hidden text-gray-800 transition cursor-pointer text-2xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FiX /> : <FiMenu />  }
              </button>
              
            </div>

            {/* Mobile Menu */}
          <div
              ref={menuRef}
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

              <NavLink to="/author" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-sm cursor-pointer">
                  Meet the Team
                </button>
              </NavLink>
          </div>
      </div>
    </nav>
  );
}







