"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ApproachSection() {
  return (
    <section id="approach" className="py-16 md:py-24 lg:py-28 bg-[#E8E8DF] border-b border-[#DDD8CE]/80">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading, 2-Column Copy, and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
              How I Work
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-[1.2] tracking-tight mb-7">
              Therapy should feel collaborative, not like something being{" "}
              <span className="italic font-normal text-[#43574D]">
                done to you.
              </span>
            </h2>

            {/* Two text columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 text-[#4A4F48] leading-relaxed text-sm md:text-[15px] mb-7">
              <div>
                <p>
                  My approach is warm, collaborative, and grounded. Sessions are structured enough to provide support and direction, while leaving room to slow down, reflect, and explore what is underneath the surface.
                </p>
              </div>
              <div>
                <p>
                  Depending on what you need, I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological sides of your experience.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs text-[#252824] font-medium">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#DEE4DC] flex items-center justify-center text-[#43574D] shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Active, collaborative partnership</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#DEE4DC] flex items-center justify-center text-[#43574D] shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Practical tools + depth-oriented work</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#DEE4DC] flex items-center justify-center text-[#43574D] shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Carefully paced trauma stabilization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#DEE4DC] flex items-center justify-center text-[#43574D] shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Emotional &amp; physiological awareness</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/#methods"
                className="editorial-btn-solid text-xs sm:text-sm py-3.5 px-7"
              >
                Learn More About My Approach
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Tall vertical image of Dr. Maya's Santa Monica practice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-[#DDD8CE]"
          >
            <Image
              src="/maya/hero-office.jpg"
              alt="Sunlight streaming through tall brick windows onto comfortable seating in Dr. Maya Reynolds' Santa Monica practice"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
