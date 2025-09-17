import React, { useState } from "react";
import { X } from "lucide-react";
import bgImage from "../images/globalhero.png"; // adjust path

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Stronger Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug mb-6">
        Lead Globally, Excel Strategically Explore Our General & Executive Programs
        </h2>
        <p className="text-white/90 text-sm md:text-base mb-8">
          Our Online MBA programs are designed for working professionals who seek
          career growth, leadership roles, and global mobility. Choose from a
          range of specialized tracks tailored to today’s most in-demand
          industries — from Finance and Marketing to Digital Transformation and
          Business Analytics. Each program offers academic excellence, practical
          insights, and flexible learning — accessible anytime, anywhere.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md font-medium transition">
            Explore
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-medium transition"
          >
            Download Brochure
          </button>
        </div>
      </div>

      {/* Brochure Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold mb-2">Request Program Brochure</h2>
            <p className="text-gray-500 mb-6">
              Fill out the form below to get the brochure instantly.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded"
              />
              <input
                type="text"
                placeholder="91+ Phone Number"
                className="w-full border p-3 rounded"
              />
              <select className="w-full border p-3 rounded">
                <option>Country</option>
                <option>India</option>
                <option>UAE</option>
              </select>
              <select className="w-full border p-3 rounded">
                <option>Select Program</option>
                <option>MBA</option>
                <option>Executive MBA</option>
              </select>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="text-sm">
                  I agree to receive information via email and phone.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded font-semibold"
              >
                Download Brochure
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
