import React from "react";
import logo from "../images/burj-al-arab.png";

export default function ProgramOverview() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Overview Box */}
        <div className="border border-yellow-600 rounded-lg p-8 bg-white mb-16">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Info Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-yellow-700 text-white px-4 py-2 rounded">
              Program Duration: 12 – 24 Months
            </span>
            <span className="bg-yellow-700 text-white px-4 py-2 rounded">
              Delivery Mode: 100% Online
            </span>
            <span className="bg-yellow-700 text-white px-4 py-2 rounded">
              Start Dates: September | January | May
            </span>
            <span className="bg-yellow-700 text-white px-4 py-2 rounded">
              Language: English
            </span>
            <span className="bg-yellow-700 text-white px-4 py-2 rounded">
              Tuition Fees: AED 45,000 (Flexible Installments)
            </span>
          </div>

          <p className="text-gray-700">
            The MBA in Finance equips you with in-depth knowledge of global
            financial markets, investment analysis, corporate finance, and risk
            management. Ideal for finance professionals seeking senior roles or
            transitioning into strategic financial positions.
          </p>
        </div>

        {/* What You’ll Learn */}
        <div className="text-center mb-12">
          <img
            src={logo}
            alt="Dubai Icon"
            className="mx-auto mb-4 w-8"
          />
          <h2 className="text-3xl font-semibold mb-4">What You’ll Learn</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Courses & Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* Core Courses */}
          <div className="relative p-6 border-none">
            {/* Corner Borders + Dots */}
            <span className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-600"></span>
            <span className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-600"></span>
            {/* Dots */}
            <span className="absolute top-0 left-20 w-1 h-1 bg-yellow-600 rounded-full"></span>
            <span className="absolute left-0 top-20 w-1 h-1 bg-yellow-600 rounded-full"></span>
            <span className="absolute bottom-0 right-20 w-1 h-1 bg-yellow-600 rounded-full"></span>
            <span className="absolute right-0 bottom-20 w-1 h-1 bg-yellow-600 rounded-full"></span>
            <h3 className="text-lg font-semibold mb-4">Core Courses</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Strategic Management</li>
              <li>Financial Accounting & Analysis</li>
              <li>Corporate Finance</li>
              <li>Business Analytics</li>
              <li>Marketing Strategy</li>
              <li>Global Business Environment</li>
            </ul>
          </div>

          {/* Specialization Courses */}
          <div className="relative p-6 border-none">
            {/* Corner Borders + Dots */}
            <span className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-600"></span>
            <span className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-600"></span>
            {/* Dots */}
            <span className="absolute top-0 left-20 w-1 h-1 bg-yellow-600 rounded-full"></span>
            <span className="absolute left-0 top-20 w-1 h-1 bg-yellow-600 rounded-full"></span>
            <span className="absolute bottom-0 right-20 w-1 h-1 bg-yellow-600 rounded-full"></span>
            <span className="absolute right-0 bottom-20 w-1 h-1 bg-yellow-600 rounded-full"></span>

            <h3 className="text-lg font-semibold mb-4">
              Specialization Courses
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Investment & Portfolio Management</li>
              <li>Financial Risk Management</li>
              <li>Corporate Valuation</li>
              <li>International Financial Markets</li>
              <li>Islamic Finance (elective)</li>
            </ul>
          </div>

          {/* Learning Outcomes */}
          <div className="relative p-6 border-none">
            {/* Corner Borders + Dots */}
            <span className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-600"></span>
            <span className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-600"></span>
            {/* Dots */}
            <span className="absolute top-0 left-20 w-1 h-1 bg-yellow-600 rounded-full"></span>
            <span className="absolute left-0 top-20 w-1 h-1 bg-yellow-600 rounded-full"></span>
            <span className="absolute bottom-0 right-20 w-1 h-1 bg-yellow-600 rounded-full"></span>
            <span className="absolute right-0 bottom-20 w-1 h-1 bg-yellow-600 rounded-full"></span>

            <h3 className="text-lg font-semibold mb-4">Learning Outcomes</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Make data-informed investment decisions</li>
              <li>Evaluate and manage financial risk</li>
              <li>Lead budgeting, forecasting & planning functions</li>
              <li>Navigate global financial systems</li>
              <li>Align financial goals with corporate strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
