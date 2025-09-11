import React from "react";
import abouthero from "../images/abouthero.png";

export default function AboutHero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${abouthero})` }} // ✅ Fixed image usage
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug mb-4">
          Shaping Tomorrow’s Global Business Leaders
        </h1>
        <p className="text-sm md:text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition">
            Explore
          </button>
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-black text-white font-medium rounded-lg transition">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
