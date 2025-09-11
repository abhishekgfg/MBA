import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/eagle.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Bar - hidden on mobile */}
      <div className="bg-[#d4af37] text-black text-sm py-2 px-6 justify-end space-x-4 hidden md:flex">
        <a href="#">Student Login</a>
        <span>|</span>
        <a href="#">Channel Partner Login</a>
        <span>|</span>
        <a href="#">Results</a>
        <span>|</span>
        <a href="#">Downloads</a>
        <span>|</span>
        <a href="#">News & Secular</a>
      </div>

      {/* Main Nav */}
      <div className="bg-[#111] text-white flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold">Online MBA</span>
        </div>

        {/* Nav Links (Hidden on mobile) */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-[#d4af37]">Home</a>
          <a href="#" className="hover:text-[#d4af37]">Courses</a>
          <a href="/about" className="hover:text-[#d4af37]">About Us</a>
          <a href="/career" className="hover:text-[#d4af37]">Career Support</a>
          <a href="#" className="hover:text-[#d4af37]">Contact Us</a>
        </nav>

        {/* Buttons (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Enquire
          </button>
          <button className="bg-[#d4af37] text-black px-4 py-2 rounded font-semibold hover:opacity-90 transition">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Background Overlay (animated) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 animate-fadeIn"
        ></div>
      )}

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#111] text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 shadow-md">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={toggleSidebar}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          {/* Main Nav Items */}
          <a href="/" className="hover:text-[#d4af37]" onClick={toggleSidebar}>Home</a>
          <a href="#" className="hover:text-[#d4af37]" onClick={toggleSidebar}>Courses</a>
          <a href="/about" className="hover:text-[#d4af37]" onClick={toggleSidebar}>About Us</a>
          <a href="/career" className="hover:text-[#d4af37]" onClick={toggleSidebar}>Career Support</a>
          <a href="#" className="hover:text-[#d4af37]" onClick={toggleSidebar}>Contact Us</a>

          <hr className="border-gray-700" />

          {/* Top Bar Links */}
          <a href="#" className="hover:text-[#d4af37]" onClick={toggleSidebar}>Student Login</a>
          <a href="#" className="hover:text-[#d4af37]" onClick={toggleSidebar}>Channel Partner Login</a>
          <a href="#" className="hover:text-[#d4af37]" onClick={toggleSidebar}>Results</a>
          <a href="#" className="hover:text-[#d4af37]" onClick={toggleSidebar}>Downloads</a>
          <a href="#" className="hover:text-[#d4af37]" onClick={toggleSidebar}>News & Secular</a>

          <hr className="border-gray-700" />

          {/* Buttons */}
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Enquire
          </button>
          <button className="bg-[#d4af37] text-black px-4 py-2 rounded font-semibold hover:opacity-90 transition">
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}
