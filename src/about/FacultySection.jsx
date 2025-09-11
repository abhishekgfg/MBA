import React from "react";
import fac1 from "../images/facult1.png";
import fac2 from "../images/facult2.png"
import fac3 from "../images/facult3.png"


export default function FacultySection() {
  const facultyMembers = [
    {
      name: "Prof. Leila Hassan",
      title: "Strategy & Leadership",
      img: fac1, // Replace with actual image path
    },
    {
      name: "Dr. Michael Farid",
      title: "Financial Management",
      img: fac2, // Replace with actual image path
    },
    {
      name: "Dr. Ayesha Al-Mansoori",
      title: "Business Analytics",
      img: fac3, // Replace with actual image path
    },
  ];

  return (
    <section className="relative py-10 bg-white">
      {/* Top Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <img
          src="/src/images/burj-khalifa.png" // Replace with actual icon path
          alt="Icon"
          className="mx-auto mb-4 w-12 h-16"
        />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Faculty</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {facultyMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white text-center rounded-2xl "
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-80 object-cover rounded-2xl mb-4"
            />
            <p className="text-lg font-medium text-gray-900">{member.name} – {member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
