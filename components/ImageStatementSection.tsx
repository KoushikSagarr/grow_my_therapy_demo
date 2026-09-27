"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageStatementSection() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-[#F7F4EE] border-b border-[#DDD8CE]/60">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-[#DDD8CE]"
          >
            <Image
              src="/maya/office-1-full.jpg"
              alt="Sunlit loft interior with brick walls and warm therapy seating in Santa Monica"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* Right Column: Minimal Reflective Statement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center lg:pl-6"
          >
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-4 block">
              Perspective &amp; Growth
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#252824] leading-[1.2] tracking-tight">
              Understanding where you&apos;ve been can help shape{" "}
              <span className="italic font-normal text-[#43574D]">
                where you&apos;re headed.
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-[#4A4F48] leading-relaxed max-w-lg">
              We honor the coping strategies that carried you through difficult seasons, while creating room to let down your guard and build lasting stability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
