"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface ConsultationCTAProps {
  onOpenConsultation: () => void;
}

export default function ConsultationCTA({
  onOpenConsultation,
}: ConsultationCTAProps) {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-28 bg-[#E8E8DF] border-t border-[#DDD8CE]/80">
      <div className="container-editorial">
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#DDD8CE] overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#43574D]" />
                <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D]">
                  Schedule a Consultation
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-[1.18] tracking-tight mb-5">
                Find support that feels like the{" "}
                <span className="italic font-normal text-[#43574D]">
                  right fit.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed mb-7 max-w-xl">
                Starting therapy can feel like a big step. You don&apos;t need to have everything figured out before reaching out. A consultation is an opportunity to talk about what you&apos;re experiencing, ask questions, and see whether working together feels right.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="editorial-btn-solid text-xs sm:text-sm py-3.5 px-7 shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Consultation</span>
                </button>
              </div>

              <div className="mt-7 pt-5 border-t border-[#E8E8DF] text-xs text-[#686E66]">
                Santa Monica Office · Secure Telehealth Across California
              </div>
            </motion.div>

            {/* Right Image Column: Dr. Maya Reynolds Portrait */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[360px] bg-[#E8E8DF]">
              <Image
                src="/maya/portrait.jpg"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white text-xs drop-shadow-md">
                <span className="font-serif text-base block font-medium">
                  Dr. Maya Reynolds, PsyD
                </span>
                <span className="text-[11px] tracking-wider uppercase opacity-90">
                  Licensed Clinical Psychologist
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
