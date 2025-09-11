import React from "react";
import Hero from "../Home/Hero";
import Benefits from "../Home/Benefits";
import CoursesOverview from "../Home/CoursesOverview";
import CurriculumHighlights from "../Home/CurriculumHighlights";
import Testimonials from "../Home/Testimonials";
import BlogSection from "../Home/BlogSection";


export default function HomePage() {
  return (
    <div className="font-sans">
     
      <Hero />
      <Benefits />
      <CoursesOverview />
      <CurriculumHighlights />
      <Testimonials />
      <BlogSection />
     
    </div>
  );
}
