import React, { useState } from "react";
import burj from "../images/burj-al-arab.png";
import image from "../images/faqimg.png";
import ApplyNowModal from "../components/ApplyNowModal.jsx";

export default function ProgramFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const openModal = (type) => setShowModal(type);
  const closeModal = () => setShowModal(null);

  const faqs = [
    {
      question: "Q1. Do I need a background in finance?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Q2. Do I need a background in finance?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Q3. Do I need a background in finance?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Q4. Do I need a background in finance?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <img src={burj} alt="Dubai Icon" className="mx-auto mb-4 w-10" />
            <h2 className="text-3xl font-bold mb-4">Program FAQ’s</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-yellow-600 rounded-md overflow-hidden transition-all"
              >
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.question}
                  <span
                    className={`ml-2 transform transition-transform ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="container mx-auto px-6 mt-16">
          <div className="relative rounded-lg overflow-hidden bg-black/80 text-white p-10 text-center">
            <div className="absolute inset-0">
              <img
                src={image}
                alt="Background"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-6 leading-relaxed">
                Get Started With Your Online{" "}
                <span className="font-bold">
                  Global Executive Program – General Management
                </span>{" "}
                – Applications Now Open !
              </h3>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => openModal("apply")}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md"
                >
                  Apply Now
                </button>
                <button className="border border-white px-6 py-2 rounded-md">
                  Speak to Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal should be outside the section */}
      {showModal === "apply" && <ApplyNowModal isOpen={true} onClose={closeModal} />}
    </>
  );
}
