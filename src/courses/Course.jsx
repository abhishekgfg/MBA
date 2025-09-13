
import React from "react";

const programs = [
  {
    id: "01",
    title: "Masters Program",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "02",
    title: "Post Graduate Programs",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "03",
    title: "Undergraduate Programs",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "04",
    title: "Diploma Programs",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "05",
    title: "Certificate Programs",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "06",
    title: "Research Programs",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

export default function Course() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="border border-yellow-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-1">
                {program.id}.{program.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">Mode: {program.mode}</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {program.description}
              </p>
              <a
                href="#"
                className="text-orange-500 text-sm font-medium inline-flex items-center gap-1 hover:underline"
              >
                View All Programs →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
