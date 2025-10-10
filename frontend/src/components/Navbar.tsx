import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHome, BiInfoCircle, BiPhone } from "react-icons/bi";
import { FaUserPlus, FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-400 shadow-md py-3 px-6 flex items-center justify-between relative">
      {/* Left - Logo */}
      <div className="text-3xl font-bold text-white">CBC System</div>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Center - Nav Links (Desktop) */}
      <div className="space-x-8 hidden md:flex">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-blue-800 text-xl font-medium transition"
        >
          <BiHome size={25} className="text-blue-900" />
          Home
        </Link>
        <Link
          to="/about"
          className="flex items-center gap-2 text-white hover:text-blue-800 text-xl font-medium transition"
        >
          <BiInfoCircle size={25} className="text-blue-900" />
          About
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-2 text-white hover:text-blue-800 text-xl font-medium transition"
        >
          <BiPhone size={22} className="text-blue-900" />
          Contact
        </Link>
      </div>

      {/* Right - Buttons (Desktop) */}
      <div className="space-x-3 hidden md:flex items-center">
        <Link
          to="/register"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          <FaUserPlus size={16} />
          Register
        </Link>
        <Link
          to="/login"
          className="flex items-center gap-2 border border-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
        >
          <FaSignInAlt size={16} />
          Login
        </Link>
      </div>

      {/* Mobile Menu (Shown When isOpen = true) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-400 flex flex-col items-center space-y-4 py-4 md:hidden z-10">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white hover:text-blue-800 text-lg font-medium transition"
          >
            <BiHome size={22} className="text-blue-900" />
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white hover:text-blue-800 text-lg font-medium transition"
          >
            <BiInfoCircle size={22} className="text-blue-900" />
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white hover:text-blue-800 text-lg font-medium transition"
          >
            <BiPhone size={20} className="text-blue-900" />
            Contact
          </Link>

          {/* Equal Width Buttons */}
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white w-40 px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <FaUserPlus size={16} />
            Register
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 border border-blue-800 text-white w-40 px-4 py-2 rounded-md hover:bg-blue-800 transition"
          >
            <FaSignInAlt size={16} />
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
