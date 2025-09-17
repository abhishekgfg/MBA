import React from "react";

export default function CoursesOverview() {
  const courses = [
    {
      id: "01",
      title: "Online MBA",
      subtitle: "24 months, fully online learning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "02",
      title: "Part-Time Hybrid MBA",
      subtitle: "Blend of online + in-person Dubai workshops",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "03",
      title: "1-Year Accelerator MBA",
      subtitle: "Complete your MBA in just 12 months",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className="relative py-5 bg-white">
      {/* Background Left Design */}
      

      {/* Top Content */}
      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        {/* Top Icon */}
        <div className="flex justify-center mb-4">
          <img src="\src\images\burj-khalifa.png" alt="icon" className="w-10 h-15" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">
          Our Courses Programs Overview
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 mt-12 px-6 relative z-10">
        {courses.map((course) => (
         <div
  key={course.id}
  className="relative border-l-9 border-[#d4af37] bg-white"
>
  {/* Black Header */}
  <div className="bg-black text-white p-4 ml-2 rounded-tr-lg rounded-bl-none rounded-br-none">
    <h3 className="font-bold">
      {course.id}. {course.title}
    </h3>
    <p className="text-sm text-gray-300">{course.subtitle}</p>
  </div>

  {/* Content */}
  <div className="p-6">
    <p className="text-gray-600 mb-4">{course.desc}</p>
    <a
      href="#"
      className="text-black font-semibold flex items-center space-x-2"
    >
      <span>Learn More</span>
      <span>→</span>
    </a>
  </div>
</div>

        
        ))}
      </div>
    </section>
  );
}
