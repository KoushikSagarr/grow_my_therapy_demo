"use client";

import React from "react";
import { motion } from "framer-motion";

const expertiseTopics = [
  "Anxiety",
  "Trauma",
  "Panic",
  "Burnout",
  "Perfectionism",
  "Chronic Stress",
  "Emotional Regulation",
  "High Internal Pressure",
  "Life Transitions",
  "Relationships",
  "Self-Trust",
  "Overwhelm",
];

export default function ExpertiseSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#F7F4EE] border-b border-[#DDD8CE]/60">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading and Context */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-[10.5px] font-sans font-medium tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
              Focus Areas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-tight font-normal tracking-normal mb-4">
              My areas of{" "}
              <span className="italic font-normal text-[#43574D]">
                expertise
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed max-w-md">
              Therapy is focused on understanding both emotional and physiological patterns, helping you slow down, make room for difficult experiences, and build lasting resilience.
            </p>
          </motion.div>

          {/* Right Column: Inline / Horizontal Editorial Keyword Grid with Separators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {expertiseTopics.map((topic, index) => (
                <div
                  key={topic}
                  className="py-3.5 sm:py-4 border-b border-[#DDD8CE] flex items-center justify-between group hover:border-[#43574D] transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#252824] group-hover:text-[#43574D] transition-colors">
                    {topic}
                  </span>
                  <span className="text-[10px] font-mono text-[#8A8F87] group-hover:text-[#43574D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}

              {/* Closing "...and more." element */}
              <div className="py-3.5 sm:py-4 border-b border-[#DDD8CE] flex items-center justify-between">
                <span className="font-serif text-lg sm:text-xl italic text-[#43574D]">
                  …and more.
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#43574D]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
