"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AlternatingSection() {
  return (
    <section className="py-16 md:py-22 lg:py-26 bg-[#F7F4EE]">
      <div className="container-editorial space-y-20 md:space-y-26">
        {/* ROW 1: Image Left | Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-md border border-[#DDD8CE]"
          >
            <Image
              src="/maya/office-1.jpg"
              alt="Dr. Maya Reynolds' Santa Monica office interior featuring natural light and warm exposed brick architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
              Clients frequently come to me feeling &ldquo;functional&rdquo; on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they&apos;re always bracing for something to go wrong.
            </p>
            <div>
              <Link href="/#specialties" className="editorial-link">
                <span>View Focus Areas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ROW 2: Text Left | Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
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
              When stress or earlier experiences linger, they affect both thought patterns and physical sensations—showing up as racing thoughts, chronic tension, difficulty feeling at ease, or feeling disconnected after years of pushing through.
            </p>
            <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed mb-6">
              Understanding both the emotional and physiological sides of your experience creates space for something different, helping you develop insight, resilience, and a stronger relationship with yourself over time.
            </p>
            <div>
              <Link href="/#methods" className="editorial-link">
                <span>Explore Clinical Methods</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-md border border-[#DDD8CE]"
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
