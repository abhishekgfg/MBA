import React from "react";

export default function CurriculumHighlights() {
  return (
    <section className="py-5 md:py-14 bg-white relative">
      {/* Top Content */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Top Icon */}
        <div className="flex justify-center mb-3 md:mb-4">
          <img
            src="/src/images/burj-al-arab.png"
            alt="icon"
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">Curriculum Highlights</h2>
        <p className="mt-3 md:mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>

      {/* Equal 3 Columns */}
      <div
        className="max-w-6xl mx-auto mt-10 md:mt-10 grid grid-cols-1 md:grid-cols-3 
                   gap-6 md:gap-0 border-t border-[#d4af37] md:border-t-0 md:border-l md:border-r md:border-b"
      >
        {/* Core Modules */}
        <div className="px-6 py-6 flex flex-col items-center md:items-start 
                        hover:shadow-md transition-shadow duration-300 border-b md:border-b-0 md:border-r border-[#d4af37]">
          <h3 className="font-bold text-lg mb-3 text-center md:text-left">
            Core Modules
          </h3>
          <ul className="space-y-1.5 md:space-y-2 text-gray-700 text-sm sm:text-base">
            <li>• Strategic Management</li>
            <li>• Corporate Finance</li>
            <li>• Marketing Strategy</li>
            <li>• Business Analytics</li>
          </ul>
        </div>

        {/* Platform Features */}
        <div className="px-6 py-6 flex flex-col items-center md:items-start 
                        hover:shadow-md transition-shadow duration-300 border-b md:border-b-0 md:border-r border-[#d4af37]">
          <h3 className="font-bold text-lg mb-3 text-center md:text-left">
            Platform Features
          </h3>
          <ul className="space-y-1.5 md:space-y-2 text-gray-700 text-sm sm:text-base">
            <li>• Live Interactive Classes</li>
            <li>• Recorded Lectures & Mobile Access</li>
            <li>• Peer Collaboration Tools</li>
          </ul>
        </div>

        {/* Accreditation */}
        <div className="px-6 py-6 flex flex-col items-center md:items-start 
                        hover:shadow-md transition-shadow duration-300">
          <h3 className="font-bold text-lg mb-3 text-center md:text-left">
            Accreditation & Recognition
          </h3>
          <ul className="space-y-1.5 md:space-y-2 text-gray-700 text-sm sm:text-base">
            <li>• Approved by UAE Ministry of Education</li>
            <li>• International Partnerships with Top Universities</li>
            <li>• Member: Dubai Knowledge Park</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
