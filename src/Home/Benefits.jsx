import React from "react";
import logo from "../images/eagles.png"

export default function Benefits() {
  const benefits = [
    {
      id: "01",
      title: "Flexibility & Convenience",
      subtitle: "Study anytime, anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "02",
      title: "Global Accreditation",
      subtitle: "Recognized worldwide",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "03",
      title: "Dubai-Centric Focus",
      subtitle: "Business education aligned with Middle Eastern markets",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className="py-16 bg-white relative">
      {/* Top Content */}
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Logo */}
       <div className="flex justify-center mb-4">
  <img
    src={logo} // ✅ Correct path from public folder
    alt="Logo"
    className="w-16 h-16 object-contain opacity-100 brightness-100 contrast-100"
    style={{ filter: "none" }} // 🔥 Ensure no filter affects it
  />
</div>

        <h2 className="text-2xl md:text-3xl font-bold">
          Key Benefits our Dubai’s online MBA
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-12 px-6">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="border border-[#d4af37] rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg">
              <span className="text-[#d4af37] mr-2">{item.id}.</span>
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
            <p className="text-gray-600 mt-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
