import React from "react";
import blog1 from "../images/blog1.png"; // Ensure correct file extension
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import logo from "../images/burj-khalifa.png"

export default function BlogSection() {
  const blogs = [
    {
      img: blog1,
      title: "5 Reasons to Pursue an Online MBA in Dubai",
      date: "June 15, 2025",
    },
    {
      img: blog2,
      title: "How the Online MBA Helped Me Get Promoted",
      date: "June 15, 2025",
    },
    {
      img: blog3,
      title: "5 Reasons to Pursue an Online MBA in Dubai",
      date: "June 15, 2025",
    },
  ];

  return (
    <section className=" bg-white">
      {/* Top Content */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <img src={logo} alt="icon" className="mx-auto w-12 h-12 mb-4" />
        <h2 className="text-3xl font-bold mb-2">Latest from our blog</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden flex flex-col"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">Posted On : {blog.date}</p>
              <button className="mt-auto w-fit inline-flex items-center justify-start gap-2 px-4 py-2 border border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition">
                Read Now <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
