import React from "react";
import { GraduationCap, Globe, Briefcase, Handshake } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurImpact() {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // trigger when 30% of section is visible
  });

  return (
    <section ref={ref} className="relative py-20 bg-white">
      {/* Top Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <img
          src="\src\images\burj-khalifa.png" // Replace with actual path
          alt="Dubai Icon"
          className="mx-auto mb-4 w-12 h-15"
        />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact So Far</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center gap-8 relative">
        {/* 1st Stat */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <GraduationCap className="w-12 h-12 mx-auto text-yellow-600 mb-4" />
          <h3 className="text-3xl font-bold text-yellow-700">
            {inView && <CountUp end={5000} duration={2.5} separator="," />}+
          </h3>
          <p className="text-gray-700">graduates across 30+ countries</p>
          <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-yellow-600/30"></div>
        </motion.div>

        {/* 2nd Stat */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Globe className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h3 className="text-3xl font-bold text-yellow-700">
            {inView && <CountUp end={90} duration={2} />}%
          </h3>
          <p className="text-gray-700">
            student satisfaction in program quality and flexibility
          </p>
          <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-yellow-600/30"></div>
        </motion.div>

        {/* 3rd Stat */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Briefcase className="w-12 h-12 mx-auto text-yellow-700 mb-4" />
          <h3 className="text-3xl font-bold text-yellow-700">
            {inView && <CountUp end={85} duration={2} />}%
          </h3>
          <p className="text-gray-700">
            of alumni report career advancement within 1 year of graduation
          </p>
          <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-yellow-600/30"></div>
        </motion.div>

        {/* 4th Stat */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Handshake className="w-12 h-12 mx-auto text-pink-500 mb-4" />
          <h3 className="text-3xl font-bold text-yellow-700">
            {inView && <CountUp end={100} duration={2} />}+
          </h3>
          <p className="text-gray-700">
            corporate partnerships for real-world project experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
