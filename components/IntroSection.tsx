"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section id="intro" className="relative py-16 md:py-24 lg:py-28 bg-[#F7F4EE] border-t border-[#DDD8CE]/60">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading and Two Text Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Section Eyebrow */}
            <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
              Grounded, Depth-Oriented Care
            </span>

            {/* Editorial Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-[1.2] tracking-tight mb-8 md:mb-10">
              You can be doing well on the outside and still feel{" "}
              <span className="italic font-normal text-[#43574D]">
                exhausted inside.
              </span>
            </h2>

            {/* Two-Column Editorial Text Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-[#4A4F48] leading-relaxed text-sm md:text-[15px]">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#252824] mb-2.5">
                  Understanding What Lies Beneath
                </p>
                <p>
                  Many of the people I work with are thoughtful, capable, and used to handling a lot. From the outside, things may look fine. Internally, there can be constant worry, pressure, overthinking, tension, or the feeling that you should be able to handle everything on your own.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#252824] mb-2.5">
                  Slowing The Cycle Down
                </p>
                <p>
                  Therapy can be a place to slow that cycle down. Together, we can understand what is happening beneath the surface, make room for difficult experiences, and develop ways of living that feel more sustainable.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tall Vertical Image of Maya's Santa Monica Office */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-[#DDD8CE]"
          >
            <Image
              src="/maya/coastal-shoreline.jpg"
              alt="Gentle Pacific shoreline wash near Santa Monica, evoking a calm and reflective state"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center filter saturate-[0.95] contrast-[1.02] hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-center sm:text-left">
              <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-white/90 drop-shadow-xs">
                A space to breathe &amp; reconnect
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
