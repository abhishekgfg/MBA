import React from "react";

export default function CareerServices() {
  const services = [
    {
      icon: "📋",
      title: "H1 Career Coaching",
      text: "Personalized sessions with career specialists to guide you at every step."
    },
    {
      icon: "📝",
      title: "Resume & LinkedIn Reviews",
      text: "Optimize your resume and LinkedIn profile to stand out to top employers."
    },
    {
      icon: "🧭",
      title: "Job Search Strategy",
      text: "Learn how to search for today's job market with proven strategies."
    },
    {
      icon: "🎤",
      title: "Mock Interviews",
      text: "Practice real interview scenarios and get instant, actionable feedback."
    },
    {
      icon: "📈",
      title: "Career Development Webinars",
      text: "Skill sessions designed to empower your career growth and direction."
    },
    {
      icon: "🌍",
      title: "Global Job Board Access",
      text: "Explore curated listings from top employers across the world."
    }
  ];

  return (
    <section className="py-20 bg-white">
      {/* Top Section */}
      <div className="max-w-3xl mx-auto text-center px-6">
        <div className="flex justify-center mb-4">
          <img src="\src\images\eagles.png" alt="icon" className="w-12 h-12" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Promise to You</h2>
        <p className="text-gray-500 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      {/* Second Heading */}
      <div className="max-w-3xl mx-auto text-center px-6">
        <div className="flex justify-center mb-4">
          <img src="\src\images\burj-khalifa.png" alt="career icon" className="w-12 h-15" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comprehensive Career Services
        </h2>
        <p className="text-gray-500 mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="border border-yellow-300 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
