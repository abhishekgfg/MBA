import React from "react";
import { X } from "lucide-react";
import slogin from "../images/Stulogin.png";
import logo from "../images/eagles.png";

export default function StudentLoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full flex relative">
        {/* Left Image */}
        <div className="hidden md:flex w-1/2 bg-gray-100">
          <img
            src={slogin}
            alt="Graduation"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {/* Logo + Title */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <img src={logo} alt="Logo" className="w-10 h-10" />
              <span className="text-lg font-semibold">Online MBA</span>
            </div>
            <h2 className="text-2xl font-bold">Student Login</h2>
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
