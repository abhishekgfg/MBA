import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Top Section: Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Let’s Answers your Queries
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                rows="4"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="w-full h-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.327444077786!2d106.8166666!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1632829260000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border"
            ></iframe>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="border rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                <FaMapMarkerAlt size={20} />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">ADDRESS</h3>
            <p className="text-gray-600">
              Dubai Knowledge Park, Block 2A <br />
              Dubai, United Arab Emirates
            </p>
          </div>

          {/* Phone */}
          <div className="border rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                <FaPhoneAlt size={20} />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
            <p className="text-gray-600">
              General Inquiries: +971 4 123 4567 <br />
              WhatsApp Chat: +971 50 987 6543
            </p>
          </div>

          {/* Email */}
          <div className="border rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                <FaEnvelope size={20} />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600">
              Admissions: info@dubaionlinemba.ae <br />
              Technical: support@dubaionlinemba.ae
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
