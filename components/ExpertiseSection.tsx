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
    <section className="py-20 md:py-28 lg:py-36 bg-[#F7F4EE] border-b border-[#DDD8CE]/60">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
              Clinical Competencies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-tight mb-5">
              My areas of{" "}
              <span className="italic font-normal text-[#43574D]">
                expertise
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed max-w-md">
              Therapy is tailored to the specific emotional and neurological challenges you are facing. Rather than a one-size-fits-all formula, we address the precise ways distress affects your mind, body, and daily life.
            </p>
          </motion.div>

          {/* Right Column: Inline / Horizontal Editorial Keyword Grid with Separators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
