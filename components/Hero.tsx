"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24 bg-[#F7F4EE]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center pr-0 lg:pr-4"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 md:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#43574D]" aria-hidden="true" />
              <span className="text-[10.5px] sm:text-[11.5px] font-sans font-semibold tracking-[0.18em] uppercase text-[#43574D]">
                Therapy for Adults in Santa Monica &amp; Across California
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-[#252824] leading-[1.12] tracking-tight mb-5 md:mb-6">
              Feel grounded again, even when life feels like{" "}
              <span className="italic font-normal text-[#43574D]">
                too much.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#4A4F48] leading-relaxed max-w-xl mb-7 md:mb-9 font-normal">
              You can be thoughtful, capable, and deeply self-aware—and still feel exhausted, anxious, or stuck. Dr. Maya Reynolds offers warm, collaborative therapy for adults navigating anxiety, trauma, burnout, and the pressure to keep going.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="editorial-btn-solid text-xs sm:text-sm py-3.5 px-7 shadow-xs hover:shadow-md cursor-pointer"
              >
                Schedule a Consultation
              </button>

              <Link
                href="#approach"
                className="editorial-link group inline-flex items-center gap-2"
              >
                <span>Explore My Approach</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Location & Practice Note */}
            <div className="mt-8 pt-5 border-t border-[#DDD8CE]/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#686E66]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#43574D]" />
                <span>123th Street 45 W, Santa Monica, CA 90401</span>
              </div>
              <span className="hidden sm:inline text-[#C6C1B6]">·</span>
              <div>Secure Telehealth for clients located in California</div>
            </div>
          </motion.div>

          {/* Right Column: Asymmetrical Staggered Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 relative w-full flex items-center justify-center lg:justify-end"
          >
            {/* Desktop Staggered Container */}
            <div className="relative w-full max-w-[480px] lg:max-w-none aspect-[4/5]">
              {/* Secondary Back Image: Dr. Maya Reynolds Santa Monica Office Loft */}
              <div className="absolute top-0 right-0 w-[72%] sm:w-[70%] h-[78%] rounded-2xl overflow-hidden shadow-lg border border-[#DDD8CE]">
                <Image
                  src="/maya/hero-coastal.jpg"
                  alt="Santa Monica morning coastal bluffs and calming ocean light"
                  fill
                  priority
                  sizes="(max-width: 768px) 70vw, 35vw"
                  className="object-cover object-center filter saturate-[0.92] contrast-[1.02] hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Primary Foreground Image: Dr. Maya Reynolds, PsyD */}
              <div className="absolute bottom-0 left-0 w-[72%] sm:w-[68%] h-[82%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F7F4EE] z-10">
                <Image
                  src="/maya/portrait.jpg"
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                  fill
                  priority
                  sizes="(max-width: 768px) 70vw, 35vw"
                  className="object-cover object-top filter contrast-[1.02] hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Subtle Editorial Tag */}
              <div className="absolute -bottom-3 right-4 z-20 hidden sm:flex items-center gap-2 bg-[#FAF8F5]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#DDD8CE] shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#43574D]" />
                <span className="text-[10px] font-sans font-semibold tracking-[0.14em] uppercase text-[#252824]">
                  In-Person &amp; Telehealth
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
