import React from "react";
import Careerhero from "../careersuport/Careerhero";
import CareerServices from "../careersuport/CareerServices";
import AlumniCareerOutcomes from "../careersuport/AlumniCareerOutcomes";
import Testimonials from "../Home/Testimonials";

export default function CareerSupport() {
  return (
    <div className="font-sans">
    <Careerhero />
    <CareerServices />
    <AlumniCareerOutcomes />
    <Testimonials />
      
    </div>
  );
}
