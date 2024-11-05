"use client";

import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag">Empower Young Minds</div>
          </div>
          <h2 className="section-title mt-5">
            Engaging After-School Programs for Math and Science
          </h2>
          <p className="section-description mt-5">
            Our programs provide a fun and interactive way for children to explore math and science concepts, fostering a love for learning.
          </p>
        </div>
        <div className="relative flex justify-center">
          {/* YouTube Video Embed */}
          <div className="mt-10">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/YvY-9AUPZW0"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mx-auto block"
            ></iframe>
          </div>
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
