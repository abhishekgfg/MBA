import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import logo from "../images/eagle.png"

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1 - Logo + About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <span className="text-lg font-semibold">Online MBA</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4 className="font-semibold mb-2">Follow Us On :</h4>
          <div className="flex space-x-4 text-gray-400">
            <a href="#"><FaInstagram className="hover:text-[#d4af37]" /></a>
            <a href="#"><FaTwitter className="hover:text-[#d4af37]" /></a>
            <a href="#"><FaFacebookF className="hover:text-[#d4af37]" /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-[#d4af37]">Home</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Courses</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">About Us</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Career Support</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Courses */}
        <div>
          <h3 className="font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-[#d4af37]">Master Programs</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Undergraduate Programs</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Doctorates</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">PG Diploma</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Diploma & Certifications</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Foundation Courses</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Teacher Training Programs</a></li>
          </ul>
        </div>

        {/* Column 4 - Others */}
        <div>
          <h3 className="font-semibold mb-4">Others</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-[#d4af37]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#d4af37]">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © All Rights Reserved
      </div>
    </footer>
  );
}
