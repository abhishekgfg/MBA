import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

export default function Testimonials() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const forceResize = () => {
      if (sliderRef.current && sliderRef.current.innerSlider) {
        sliderRef.current.innerSlider.onWindowResized();
      }
    };

    // Wait for layout to stabilize
    const timer = setTimeout(forceResize, 300);

    // Also trigger when window is resized or orientation changes
    window.addEventListener("resize", forceResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", forceResize);
    };
  }, []);

  const testimonials = [
    {
      name: "John Matthews",
      title: "Finance Manager, UK",
      image: "/john.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Sarah Al Nahyan",
      title: "Marketing Director, UAE",
      image: "/sarah.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Mark Johnson",
      title: "Software Engineer, USA",
      image: "/john.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Emily Smith",
      title: "HR Manager, UK",
      image: "/sarah.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <div className="flex justify-center mb-4">
          <img src="\src\images\eagles.png" alt="icon" className="w-12 h-12" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What’s our students says
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto px-6">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3 py-6">
              <div className="w-full bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
