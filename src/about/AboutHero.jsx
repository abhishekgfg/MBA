import React, { useState } from "react";
import { X } from "lucide-react";
import abouthero from "../images/abouthero.png";

export default function AboutHero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${abouthero})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug mb-4">
          Shaping Tomorrow’s Global Business Leaders
        </h1>
        <p className="text-sm md:text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition">
            Explore
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 border border-white hover:bg-white hover:text-black text-white font-medium rounded-lg transition"
          >
            Download Brochure
          </button>
        </div>
      </div>

      {/* Modal */}
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
