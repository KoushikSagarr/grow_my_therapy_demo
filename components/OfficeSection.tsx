"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Video, SunMedium, ShieldCheck } from "lucide-react";

export default function OfficeSection() {
  return (
    <section id="office" className="py-16 md:py-24 lg:py-28 bg-[#FAF8F5] border-t border-[#DDD8CE]/60">
      <div className="container-editorial">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-14">
          <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
            The Space
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-tight mb-4">
            A quiet space to{" "}
            <span className="italic font-normal text-[#43574D]">
              slow down.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed mb-3">
            My Santa Monica office is designed to feel quiet, private, naturally lit, comfortable, and grounding.
          </p>
          <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed">
            Some clients find that simply having a space away from the pace of everyday life makes it easier to slow down and feel at ease.
          </p>
        </div>

        {/* Editorial Photo Collage matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-14">
          {/* Main Large Office Image */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-md border border-[#DDD8CE]"
          >
            <Image
              src="/maya/office-1.jpg"
              alt="Santa Monica therapy office featuring high exposed brick walls, natural light, and comfortable client seating"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* Side Stacked Office Images */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#DDD8CE]"
            >
              <Image
                src="/maya/office-2.jpg"
                alt="Intimate seating arrangement with comfortable sofa and wool rug"
                fill
                sizes="(max-width: 768px) 50vw, 40vw"
                className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#DDD8CE]"
            >
              <Image
                src="/maya/office-4.jpg"
                alt="Modern, uncluttered shelving and therapy books in Dr. Maya Reynolds' naturally lit Santa Monica office"
                fill
                sizes="(max-width: 768px) 50vw, 40vw"
                className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>
        </div>

        {/* In-Person vs Virtual Badges / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* In-Person Card */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#F7F4EE] border border-[#DDD8CE] flex items-start gap-4 sm:gap-5">
            <div className="w-11 h-11 rounded-xl bg-[#DEE4DC] text-[#43574D] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-[#43574D] bg-[#E8E8DF] px-2 py-0.5 rounded">
                  In-Person
                </span>
                <span className="text-xs text-[#686E66]">Santa Monica</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#252824] mb-1.5">
                Santa Monica Office
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4F48] leading-relaxed mb-3">
                Located at 123th Street 45 W, Santa Monica, CA 90401. A quiet, private space with natural light and a comfortable, uncluttered environment.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#43574D] font-medium">
                <SunMedium className="w-3.5 h-3.5" />
                <span>Naturally lit, comfortable setting</span>
              </div>
            </div>
          </div>

          {/* Virtual Telehealth Card */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#F7F4EE] border border-[#DDD8CE] flex items-start gap-4 sm:gap-5">
            <div className="w-11 h-11 rounded-xl bg-[#DEE4DC] text-[#43574D] flex items-center justify-center shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-[#43574D] bg-[#E8E8DF] px-2 py-0.5 rounded">
                  Virtual
                </span>
                <span className="text-xs text-[#686E66]">California</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#252824] mb-1.5">
                Secure Telehealth
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4F48] leading-relaxed mb-3">
                Secure telehealth sessions available for clients located in California, offering flexible and confidential care.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#43574D] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Confidential, secure video care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
