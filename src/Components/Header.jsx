import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            <a href="/">MyBlog</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? (
                <i className="fas fa-times text-2xl text-gray-700"></i> // Close icon
              ) : (
                <i className="fas fa-bars text-2xl text-gray-700"></i> // Hamburger icon
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
          <nav className="bg-white shadow-md rounded-lg p-4 space-y-4">
            <a href="/" className="block text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="/about" className="block text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="/blog" className="block text-gray-700 hover:text-blue-600 transition">Blog</a>
            <a href="/contact" className="block text-gray-700 hover:text-blue-600 transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
