import React from "react";
import hero from "../images/global.png";

export default function ProgramBrochureSection() {
  return (
    <section className="relative w-full h-auto lg:h-screen bg-black">
      {/* Background Image */}
      <img
        src={hero}
        alt="Graduates"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center w-full h-full px-6 lg:px-10 py-10 lg:py-0 space-y-8 lg:space-y-0">
        
        {/* Left Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-lg font-bold mb-2">Request Program Brochure</h3>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="tel"
              placeholder="+91 Phone Number"
              className="w-full px-3 py-2 border rounded"
            />
            <select className="w-full px-3 py-2 border rounded">
              <option>Country</option>
            </select>
            <select className="w-full px-3 py-2 border rounded">
              <option>Select Program</option>
            </select>
            <div className="flex items-start space-x-2 text-sm">
              <input type="checkbox" id="consent" className="mt-1" />
              <label htmlFor="consent" className="text-gray-700">
                I agree to receive information via email and phone.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition"
            >
              Download Brochure
            </button>
          </form>
        </div>

        {/* Right Text */}
        <div className="text-white w-full max-w-lg text-center lg:text-left">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 leading-snug">
            Empowering Executives <br className="hidden lg:block" /> for
            Strategic Global Management
          </h2>
          <p className="mb-6 text-gray-200 text-sm lg:text-base">
            Build financial leadership skills to manage capital, assess risk,
            and drive strategic investment decisions – all from Dubai’s top
            online MBA platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
            <button className="bg-yellow-600 px-6 py-2 rounded text-white hover:bg-yellow-700 transition">
              Explore
            </button>
            <button className="border px-6 py-2 rounded text-white hover:bg-yellow-600 hover:border-yellow-600 transition">
              Speak to advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
