import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-[#000F1D]/80 backdrop-blur-md border-b border-white/10">
      {/* Logo */}
      <div className="text-primary text-2xl font-semibold tracking-wide">
        MyDubai
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm uppercase text-gray-100 tracking-wide">
        <li>
          <a href="#offplan" className="hover:text-primary transition-colors">
            Off Plan
          </a>
        </li>
        <li>
          <a href="#ready" className="hover:text-primary transition-colors">
            Ready
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-primary transition-colors">
            All Projects
          </a>
        </li>
        <li>
          <a href="#meeting" className="hover:text-primary transition-colors">
            Arrange a Meeting
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-100 focus:outline-none">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#000F1D]/95 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden text-gray-100 uppercase">
          <li>
            <a href="#offplan" className="hover:text-primary transition-colors">
              Off Plan
            </a>
          </li>
          <li>
            <a href="#ready" className="hover:text-primary transition-colors">
              Ready
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary transition-colors">
              All Projects
            </a>
          </li>
          <li>
            <a href="#meeting" className="hover:text-primary transition-colors">
              Arrange a Meeting
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
