"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageStatementSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#F7F4EE] border-b border-[#DDD8CE]/60">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Large Office Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-[#DDD8CE]"
          >
            <Image
              src="/maya/office-1-full.jpg"
              alt="Sunlit Santa Monica therapy loft with brick walls and serene seating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* Right Column: Minimal Reflective Statement */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center lg:pl-4"
          >
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
              Perspective &amp; Growth
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#252824] leading-[1.2] tracking-tight">
              Understanding where you&apos;ve been can help shape{" "}
              <span className="italic font-normal text-[#43574D]">
                where you&apos;re headed.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#4A4F48] leading-relaxed max-w-lg">
              We look at the experiences and patterns that shaped you, while creating room to let down your guard and develop more sustainable ways of living.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
