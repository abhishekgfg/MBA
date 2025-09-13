import React from "react";
import { X } from "lucide-react";
import partnerImg from "../images/channelpartnetlogin.png"; // Use the correct image path
import logo from "../images/eagles.png"; // Your logo

export default function PartnerLoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full flex relative">
        {/* Left Image */}
        <div className="hidden md:flex w-1/2">
          <img
            src={partnerImg}
            alt="Partner Login"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 p-10">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {/* Logo and Title */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold">Online MBA</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Partner Portal Login
          </h2>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember Me</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
