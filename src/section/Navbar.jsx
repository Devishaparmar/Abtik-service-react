import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo/Abtik white.png"
import Arrow from "../assets/Icons/Arrow.svg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#080808] p-3 flex justify-between items-center sticky w-full top-0 z-[99]">
      <div className="flex items-center gap-6 px-4">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold mr-6"><img src={Logo} className='w-20 h-20'/></Link>

        {/* Navigation Links and Mobile CTA Button Container */}
        {/* On mobile, this will be a flex column, showing the links and then the button */}
        <ul className={`
          flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6
          ${isOpen ? 'flex' : 'hidden'} md:flex
          absolute md:static top-24 left-0 w-full md:w-auto
          bg-[#080808] md:bg-transparent p-4 md:p-0
          shadow-lg md:shadow-none transition-all duration-300 ease-in-out
          ${isOpen ? 'h-screen' : ''} md:h-auto // Make mobile menu take full height
        `}>
          <li><Link to="/" onClick={closeMenu} className="text-white text-base hover:text-[#007AFF] transition-colors block py-2">Home</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="text-white text-base hover:text-[#007AFF] transition-colors block py-2">Contact</Link></li>
          <li><Link to="/about-us" onClick={closeMenu} className="text-white text-base hover:text-[#007AFF] transition-colors block py-2">About</Link></li>
          <li><Link to="/service" onClick={closeMenu} className="text-white text-base hover:text-[#007AFF] transition-colors block py-2">Service</Link></li>
          <li><Link to="/career" onClick={closeMenu} className="text-white text-base hover:text-[#007AFF] transition-colors block py-2">Career</Link></li>

          {/* Mobile-specific CTA Button - visible only when menu is open on small screens */}
          <li className="md:hidden mt-6 w-full"> {/* Added w-full for full width on mobile */}
            <Link to="/contact" onClick={closeMenu} className="block w-full">
              <button className="bg-gradient-to-r from-[#007AFF] to-[#004999] flex text-base font-bold w-fit text-white px-5 py-2 rounded-md  hover:scale-105 transition-transform  gap-3 justify-center items-center">Contact Us<img src={Arrow}/></button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop-specific CTA Button - visible only on medium screens and up */}
      <Link to="/contact" className="hidden md:block">
        <button className="bg-gradient-to-r text-base font-bold from-[#007AFF] to-[#004999] text-white px-5 py-2 rounded-md text-base hover:scale-105 transition-transform duration-200 flex items-center gap-3 cursor-pointer group ">Contact Us <img src={Arrow} className="group-hover:rotate-90 duration-300"/> </button>
      </Link>

      {/* Hamburger Menu Icon */}
      <div
        className="md:hidden flex flex-col cursor-pointer space-y-1 z-50" // Increased z-index
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;