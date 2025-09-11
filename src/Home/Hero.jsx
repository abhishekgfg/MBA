import React from "react";
import heroBg from "../images/Hero.png"; // 👈 Agar image src/assets me hai

export default function Hero() {
  return (
    <section
      className="relative w-full h-[95vh] flex items-end justify-center bg-cover bg-center" // 👈 items-end use kiya
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6 pb-16"> {/* 👈 pb-16 for bottom spacing */}
        <h1 className="text-3xl md:text-3xl font-bold leading-snug">
          <span className="block">Transform Your Career with Dubai’s</span>
          <span className="block">Leading Online Global Executive Program</span>
        </h1>

        <p className="mt-4 text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-[#d4af37] text-black px-6 py-3 rounded font-semibold hover:opacity-90">
            Explore
          </button>
          <button className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
