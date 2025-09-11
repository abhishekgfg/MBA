import React from "react";
import AboutHero from "../about/AboutHero";
import WhoWeAre from "../about/WhoWeAre";
import CorePillars from "../about/CorePillars";
import WhyChooseUs from "../about/WhyChooseUs";
import OurImpact from "../about/OurImpact";
import FacultySection from "../about/FacultySection";
import Testimonials from "../Home/Testimonials";

export default function AboutPage() {
  return (
    <div className="font-sans">
     <AboutHero />
     <WhoWeAre />
     <CorePillars />
     <WhyChooseUs />
     <OurImpact />
     <FacultySection />
     <Testimonials />
      
    </div>
  );
}
