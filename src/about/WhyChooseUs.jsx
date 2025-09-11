import React from "react";
import { CheckCircle } from "lucide-react"; // For green check icons

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Top Icon */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <img
          src="\src\images\burj-al-arab.png" // Replace with actual path
          alt="Dubai Icon"
          className="mx-auto mb-4 w-12 h-12"
        />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 items-center">
        {/* Image with 3 Decorative Borders */}
        <div className="relative w-[360px] h-[350px] mx-auto">
          {/* Decorative Borders */}
          <div
            className="absolute border border-yellow-500 rounded-[80px] opacity-100"
            style={{
              width: "360px",
              height: "350px",
              top: "0px",
              left: "0px",
              transform: "rotate(-40.39deg)",
            }}
          ></div>
          <div
            className="absolute border border-yellow-500 rounded-[80px] opacity-100"
            style={{
              width: "360px",
              height: "350px",
              top: "0px",
              left: "0px",
              transform: "rotate(-22.85deg)",
            }}
          ></div>
          <div
            className="absolute border border-yellow-500 rounded-[80px] opacity-100"
            style={{
              width: "360px",
              height: "350px",
              top: "0px",
              left: "0px",
              transform: "rotate(-60.19deg)",
            }}
          ></div>

          {/* Main Image */}
          <img
            src="\src\images\aboutimg.png" // Replace with your graduation image
            alt="Graduates"
            className="absolute top-0 left-0 w-[360px] h-[350px] rounded-[80px] shadow-lg z-10 object-cover"
          />
        </div>

        {/* Content with Checkmarks */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <p className="text-lg font-medium text-gray-800">
              Accredited Programs recognized globally
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <p className="text-lg font-medium text-gray-800">
              100% Online Delivery with flexible learning formats
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <p className="text-lg font-medium text-gray-800">
              Industry-Relevant Specializations (Finance, Marketing, Digital, HR, etc.)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <p className="text-lg font-medium text-gray-800">
              Networking Opportunities across Dubai and international business hubs
            </p>
          </div>

          {/* Button */}
          <button className="bg-yellow-600 text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
