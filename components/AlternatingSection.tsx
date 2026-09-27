"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AlternatingSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F7F4EE]">
      <div className="container-editorial space-y-24 md:space-y-32">
        {/* ROW 1: Image Left | Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-[#DDD8CE]"
          >
            <Image
              src="/maya/office-1.jpg"
              alt="Dr. Maya Reynolds' Santa Monica office interior featuring natural light and warm brick architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3">
              Practice Philosophy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#252824] leading-snug mb-5">
              Therapy is not about becoming{" "}
              <span className="italic font-normal text-[#43574D]">
                someone else.
              </span>
            </h3>
            <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed mb-4">
              Together, we look at the patterns that have helped you survive, the experiences that shaped you, and the ways they may still be affecting your relationships, confidence, sense of safety, or ability to slow down.
            </p>
            <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed mb-6">
              Clients often arrive feeling &ldquo;functional&rdquo; on the outside while quietly struggling with constant worry, internal pressure, physical tension, or feeling disconnected after years of pushing through.
            </p>
            <div>
              <Link href="#specialties" className="editorial-link">
                <span>View Focus Areas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ROW 2: Text Left | Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center"
          >
            <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3">
              Mind &amp; Body Integration
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#252824] leading-snug mb-5">
              Understanding both the emotional and physiological{" "}
              <span className="italic font-normal text-[#43574D]">
                sides of your experience.
              </span>
            </h3>
            <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed mb-4">
              Chronic stress and unresolved experiences don&apos;t just stay in our thoughts—they live in our nervous system as vigilance, exhaustion, sleep difficulties, and emotional reactivity.
            </p>
            <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed mb-6">
              By blending cognitive insight with somatic and mindfulness-based approaches, we help you feel grounded not just conceptually, but in your actual daily lived experience.
            </p>
            <div>
              <Link href="#methods" className="editorial-link">
                <span>Explore Clinical Methods</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-[#DDD8CE]"
          >
            <Image
              src="/maya/office-2.jpg"
              alt="Comfortable, calm therapist seating in Dr. Maya Reynolds' Santa Monica practice"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
