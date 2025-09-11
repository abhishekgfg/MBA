import React from "react";

export default function CorePillars() {
  const pillars = [
    {
      number: "01",
      title: "Academic Excellence",
      subtitle: "Curriculum designed by experienced faculty and business leaders.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      number: "02",
      title: "Global Perspective",
      subtitle: "Programs tailored for international markets with a Middle East edge.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      number: "03",
      title: "Career Advancement",
      subtitle: "Real-world skills that open doors to leadership and strategic roles.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  ];

  return (
    <section className="py-10 bg-white">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        {/* Decorative Icon */}
        <div className="flex justify-center mb-4">
          <img
            src="\src\images\burj-khalifa.png" // Replace with your actual icon path
            alt="Building Icon"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Pillars</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="border border-yellow-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">
              {pillar.number}. {pillar.title}
            </h3>
            <p className="text-gray-700 font-medium mb-4">{pillar.subtitle}</p>
            <p className="text-gray-600 whitespace-pre-line">{pillar.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
