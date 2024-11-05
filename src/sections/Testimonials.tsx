"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";





const featurableWidgetId = "b29617bb-b15e-4e9a-ab5d-da2531196dba"; // You can use "example" for testing

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
        <br/>
        <br/>
          <div className="flex justify-center">
            
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What Students Say</h2>
          <p className="section-description">
            Hear What our students from around India Say!
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />

        </div>
      </div>
    </section>
  );
};
