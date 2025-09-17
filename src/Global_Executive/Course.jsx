import React from "react";

const programs = [
  {
    id: "01",
    title: "Global Executive Program – General Management",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    link: "/global_Courses", // 👈 link for this program
  },
  {
    id: "02",
    title: "Global Executive Program (EMBA)",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    link: "/programs/emba",
  },
  {
    id: "03",
    title: "Global Executive Program",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    link: "/programs/global-executive",
  },
  {
    id: "04",
    title: "Online Global Executive Program",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    link: "/programs/online-global-executive",
  },
  {
    id: "05",
    title: "Part-Time Global Executive Program",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    link: "/programs/part-time-global-executive",
  },
  {
    id: "06",
    title: "Accelerated Global Executive Program (1-Year)",
    mode: "Online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    link: "/programs/accelerated-1year",
  },
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
                {program.id}. {program.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Mode: {program.mode}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {program.description}
              </p>
              <a
                href={program.link}
                className="text-orange-500 text-sm font-medium inline-flex items-center gap-1 hover:underline"
              >
                View Program →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
