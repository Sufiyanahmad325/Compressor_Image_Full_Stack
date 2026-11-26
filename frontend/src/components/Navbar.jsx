
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          Compressify
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to={"/"}  className="text-white hover:text-purple-600">Home</NavLink>
          <NavLink to={"/about"} className="text-white hover:text-purple-600">About</NavLink>
          <NavLink to={"/contact"}  className="text-white hover:text-purple-600">Contact</NavLink>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden text-white flex flex-col gap-4 px-4 pb-4">
          <NavLink to={"/"} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink  to={"/about"} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to={"/contact"} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
