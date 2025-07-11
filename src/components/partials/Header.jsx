import React from "react";
import Logo from "../../svg/Logo";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Header */}
      <header className="bg-black text-white p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-8 justify-between">
            <ul className="flex space-x-6">
              <li className="hover:text-yellow-300 cursor-pointer">Home</li>
              <li className="hover:text-yellow-300 cursor-pointer">Races</li>
              <li className="hover:text-yellow-300 cursor-pointer">Drivers</li>
              <li className="hover:text-yellow-300 cursor-pointer">Teams</li>
            </ul>
          </nav>
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-white text-2xl">
          <a
            href="#home"
            className="text-white hover:text-yellow-300 hover:underline transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#race"
            className="text-white hover:text-yellow-300 hover:underline transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Races
          </a>
          <a
            href="#drivers"
            className="text-white hover:text-yellow-300 hover:underline transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Drivers
          </a>
          <a
            href="#teams"
            className="text-white hover:text-yellow-300 hover:underline transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Teams
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
