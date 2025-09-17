import React from "react";
import logo from "../images/burj-khalifa.png";
import eagle from "../images/eagles.png";

export default function CareerOutcomes() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        {/* Career Outcomes */}
        <div className="text-center mb-12">
          <img
            src={logo}
            alt="Dubai Icon"
            className="mx-auto mb-4 w-8"
          />
          <h2 className="text-3xl font-semibold mb-4">
            Career Outcomes After Graduation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="border border-yellow-600 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2">1. Chief Financial Officer (CFO)</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="border border-yellow-600 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2">2. Financial Controller</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="border border-yellow-600 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2">3. Investment Manager</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="border border-yellow-600 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2">4. Risk Analyst</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="border border-yellow-600 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2">5. Corporate Strategy Advisor</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Why Study With Us */}
        <div className="text-center mb-12">
          <img
            src={eagle}
            alt="Eagle Icon"
            className="mx-auto mb-4 w-8"
          />
          <h2 className="text-3xl font-semibold mb-4">Why Study with Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Why Study With Us Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-yellow-600 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2">01. Globally Accredited</h3>
            <p className="text-gray-600 text-sm">
              Degree recognized in UAE and internationally
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="border border-yellow-600 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2">02. Industry-Relevant</h3>
            <p className="text-gray-600 text-sm">
              Content designed with UAE/GCC market input
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="border border-yellow-600 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2">
              03. Flexible for Working Professionals
            </h3>
            <p className="text-gray-600 text-sm">
              Study at your own pace, anytime, anywhere
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
