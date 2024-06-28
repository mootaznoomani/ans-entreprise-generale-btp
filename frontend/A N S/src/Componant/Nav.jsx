import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .nav-link {
          color: black;
          text-decoration: none;
        }

        .nav-link:hover {
          color: white;
        }
      `}</style>
      <nav className={`bg-[#BAAE98] fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'h-24' : 'h-28'}`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full">
          <div className="relative flex items-center justify-between h-full">
            <div className="flex items-center">
              <img className="h-full w-20" src="/src/Assets/logo.png" alt="Logo" />
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="nav-link block px-3 py-2 rounded-md text-sm font-medium">ACCUEIL</Link>
                <Link to="/propos" className="nav-link block px-3 py-2 rounded-md text-sm font-medium">A PROPOS</Link>
                <Link to="/service" className="nav-link block px-3 py-2 rounded-md text-sm font-medium">SERVICES</Link>
                <Link to="/realisation" className="nav-link block px-3 py-2 rounded-md text-sm font-medium">NOS RÉALISATIONS</Link>
                <Link to="/contact" className="nav-link block px-3 py-2 rounded-md text-sm font-medium">CONTACT</Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={open ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <FontAwesomeIcon icon={faTimes} className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="sm:hidden bg-[#BAAE98]" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="nav-link block px-3 py-2 rounded-md text-base font-medium">ACCUEIL</Link>
              <Link to="/propos" className="nav-link block px-3 py-2 rounded-md text-base font-medium">A PROPOS</Link>
              <Link to="/service" className="nav-link block px-3 py-2 rounded-md text-base font-medium">SERVICES</Link>
              <Link to="/realisations" className="nav-link block px-3 py-2 rounded-md text-base font-medium">NOS RÉALISATIONS</Link>
              <Link to="/contact" className="nav-link block px-3 py-2 rounded-md text-base font-medium">CONTACT</Link>
            </div>
          </div>
        )}
      </nav>
      <div className={`transition-margin duration-300 ${open ? 'mt-56' : 'mt-28'}`}>
        {/* Your page content here */}
      </div>
    </>
  );
};

export default Nav;
