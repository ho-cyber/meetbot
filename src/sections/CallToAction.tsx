"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF] py-24">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Join Our After-School Programs!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Enrich your child's learning experience with our engaging math and science programs. 
          Sign up today and watch them explore the wonders of STEM!
        </p>
        <motion.a
          href="/signup" // Link to the signup page
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Sign Up Now
        </motion.a>
      </div>
    </section>
  );
};