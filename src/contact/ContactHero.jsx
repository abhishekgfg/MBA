import React from "react";
import contactBg from "../images/contacthero.png"; // Adjust path as needed

export default function ContactHero() {
  return (
    <section
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
}
