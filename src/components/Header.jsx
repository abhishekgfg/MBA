import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/eagle.png";
import StudentLoginModal from "./StudentLoginModal";
import PartnerLoginModal from "./PartnerLoginModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(null); // "apply", "enquire", "login", "partner"

  const toggleSidebar = () => setIsOpen(!isOpen);
  const openModal = (type) => setShowModal(type);
  const closeModal = () => setShowModal(null);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* 🔹 Top Bar (Desktop Only) */}
      <div className="bg-[#d4af37] text-black text-sm py-2 px-6 justify-end space-x-4 hidden md:flex">
        <button onClick={() => openModal("login")}>Student Login</button>
        <span>|</span>
        <button onClick={() => openModal("partner")}>Channel Partner Login</button>
        <span>|</span>
        <a href="#">Results</a>
        <span>|</span>
        <a href="#">Downloads</a>
        <span>|</span>
        <a href="#">News & Secular</a>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="bg-[#111] text-white flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold">Online MBA</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-[#d4af37]">Home</a>
          <a href="/courses" className="hover:text-[#d4af37]">Courses</a>
          <a href="/about" className="hover:text-[#d4af37]">About Us</a>
          <a href="/career" className="hover:text-[#d4af37]">Career Support</a>
          <a href="/contact-us" className="hover:text-[#d4af37]">Contact Us</a>
        </nav>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => openModal("enquire")}
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Enquire
          </button>
          <button
            onClick={() => openModal("apply")}
            className="bg-[#d4af37] text-black px-4 py-2 rounded font-semibold hover:opacity-90 transition"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#111] text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 shadow-md">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={toggleSidebar}><X size={28} /></button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          {/* Main Links */}
          <a href="/" onClick={toggleSidebar}>Home</a>
          <a href="/courses" onClick={toggleSidebar}>Courses</a>
          <a href="/about" onClick={toggleSidebar}>About Us</a>
          <a href="/career" onClick={toggleSidebar}>Career Support</a>
          <a href="/contact-us" onClick={toggleSidebar}>Contact Us</a>
          
          <hr className="border-gray-700" />

          {/* 🔹 Top Bar Links added here for Mobile */}
          <button
            onClick={() => { toggleSidebar(); openModal("login"); }}
            className="text-left"
          >
            Student Login
          </button>
          <button
            onClick={() => { toggleSidebar(); openModal("partner"); }}
            className="text-left"
          >
            Channel Partner Login
          </button>
          <a href="#" onClick={toggleSidebar}>Results</a>
          <a href="#" onClick={toggleSidebar}>Downloads</a>
          <a href="#" onClick={toggleSidebar}>News & Secular</a>

          <hr className="border-gray-700" />

          {/* CTA Buttons */}
          <button
            onClick={() => { toggleSidebar(); openModal("enquire"); }}
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Enquire
          </button>
          <button
            onClick={() => { toggleSidebar(); openModal("apply"); }}
            className="bg-[#d4af37] text-black px-4 py-2 rounded font-semibold hover:opacity-90 transition"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* 🔹 Modals */}
      {showModal === "login" && (
        <StudentLoginModal isOpen={true} onClose={closeModal} />
      )}
      {showModal === "partner" && (
        <PartnerLoginModal isOpen={true} onClose={closeModal} />
      )}
      {/* Apply Modal */}
      {showModal === "apply" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-2">Apply Now</h2>
            <p className="text-gray-500 mb-6">Please fill the form below to apply.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="border p-2 rounded" />
              <input type="email" placeholder="Email Address" className="border p-2 rounded" />
              <input type="text" placeholder="+91 Phone Number" className="border p-2 rounded" />
              <input type="date" placeholder="Date of Birth" className="border p-2 rounded" />
              <select className="border p-2 rounded">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input type="text" placeholder="Country" className="border p-2 rounded" />
              <select className="border p-2 rounded">
                <option>Program of Interest</option>
              </select>
              <select className="border p-2 rounded">
                <option>Highest Qualification</option>
              </select>
              <div className="col-span-2 flex items-center space-x-2">
                <input type="checkbox" />
                <label>I agree to receive information via email and phone.</label>
              </div>
              <button type="submit" className="col-span-2 bg-[#d4af37] text-black py-3 rounded font-semibold">
                Enquire Now
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Enquire Modal */}
      {showModal === "enquire" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-2">Enquire Now</h2>
            <p className="text-gray-500 mb-6">Please fill the form below to enquire.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="border p-2 rounded" />
              <input type="email" placeholder="Email Address" className="border p-2 rounded" />
              <input type="text" placeholder="+91 Phone Number" className="border p-2 rounded" />
              <input type="text" placeholder="Country" className="border p-2 rounded" />
              <select className="border p-2 rounded">
                <option>Select Program</option>
              </select>
              <select className="border p-2 rounded">
                <option>Highest Qualifications</option>
              </select>
              <textarea placeholder="Message / Specific Query" className="border p-2 rounded col-span-2"></textarea>
              <button type="submit" className="col-span-2 bg-[#d4af37] text-black py-3 rounded font-semibold">
                Enquire Now
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
