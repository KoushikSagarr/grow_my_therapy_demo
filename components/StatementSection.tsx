"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface StatementSectionProps {
  onOpenConsultation: () => void;
}

export default function StatementSection({
  onOpenConsultation,
}: StatementSectionProps) {
  return (
    <section className="relative py-24 sm:py-30 md:py-36 overflow-hidden flex items-center justify-center">
      {/* Background Image: Softened, Darkened Maya Office Interior */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/maya/statement-office.jpg"
          alt="Quiet, softened view of Dr. Maya Reynolds' Santa Monica therapy space"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.7] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-[#1A1F1B]/55 backdrop-blur-[0.5px]" />
      </div>

      {/* Centered Content */}
      <div className="container-narrow relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-5"
        >
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#DEE4DC]">
            A Safe Space
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F7F4EE] leading-[1.18] font-normal tracking-tight">
            You don&apos;t have to understand everything before you{" "}
            <span className="italic font-normal text-[#E8E8DF]">
              ask for support.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#F7F4EE]/90 max-w-xl mx-auto font-sans leading-relaxed pt-1">
            Your story deserves space to be heard, understood, and worked through at a pace that feels safe.
          </p>

          <div className="pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-[#252824] bg-[#F7F4EE] hover:bg-white rounded-full px-8 py-3.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Reach Out Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
