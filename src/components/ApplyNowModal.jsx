import React from "react";
import { X } from "lucide-react";

export default function ApplyNowModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2">Apply Now</h2>
        <p className="text-gray-500 mb-6">
          Please fill the form below to apply.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="border p-2 rounded" />
          <input type="email" placeholder="Email Address" className="border p-2 rounded" />
          <input type="text" placeholder="+91 Phone Number" className="border p-2 rounded" />
          <input type="date" placeholder="Date of Birth" className="border p-2 rounded" />

          <select className="border p-2 rounded">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input type="text" placeholder="Country" className="border p-2 rounded" />

          <select className="border p-2 rounded">
            <option>Program of Interest</option>
          </select>
          <select className="border p-2 rounded">
            <option>Highest Qualification</option>
          </select>

          <div className="col-span-2 flex items-center space-x-2">
            <input type="checkbox" />
            <label>I agree to receive information via email and phone.</label>
          </div>

          <button
            type="submit"
            className="col-span-2 bg-[#d4af37] text-black py-3 rounded font-semibold"
          >
            Enquire Now
          </button>
        </form>
      </div>
    </div>
  );
}
