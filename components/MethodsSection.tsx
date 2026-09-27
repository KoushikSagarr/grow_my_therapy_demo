"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface MethodItem {
  number: string;
  name: string;
  fullName: string;
  description: string;
}

const methods: MethodItem[] = [
  {
    number: "01",
    name: "Cognitive Behavioral Therapy (CBT)",
    fullName: "Cognitive Restructuring & Behavioral Awareness",
    description:
      "Practical tools for understanding thought patterns, changing unhelpful cycles, and developing more sustainable ways of responding.",
  },
  {
    number: "02",
    name: "EMDR Therapy",
    fullName: "Eye Movement Desensitization & Reprocessing",
    description:
      "A carefully paced approach to processing difficult or traumatic experiences while prioritizing safety and stabilization.",
  },
  {
    number: "03",
    name: "Mindfulness-Based Practices",
    fullName: "Present-Moment Awareness",
    description:
      "Practices that can help create greater awareness of thoughts, emotions, sensations, and patterns without becoming overwhelmed by them.",
  },
  {
    number: "04",
    name: "Body-Oriented Techniques",
    fullName: "Somatic & Physiological Regulation",
    description:
      "Approaches that consider the physiological side of emotional experience and support greater awareness and regulation.",
  },
];

export default function MethodsSection() {
  return (
    <section id="methods" className="py-16 md:py-24 lg:py-28 bg-[#F7F4EE] border-b border-[#DDD8CE]/60">
      <div className="container-editorial">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
            Clinical Approaches
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-tight">
            My approach{" "}
            <span className="italic font-normal text-[#43574D]">
              includes…
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4F48] leading-relaxed">
            I integrate evidence-based methods tailored to your individual needs, bridging practical cognitive tools with deeper reflective and somatic work.
          </p>
        </div>

        {/* Editorial Numbered List with Dividers */}
        <div className="border-t border-[#DDD8CE]">
          {methods.map((method, index) => (
            <motion.div
              key={method.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group py-8 sm:py-10 border-b border-[#DDD8CE] transition-colors hover:border-[#43574D]/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                {/* Number & Name (5 cols) */}
                <div className="lg:col-span-5 flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#8A8F87] group-hover:text-[#43574D] transition-colors shrink-0">
                    {method.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#252824] group-hover:text-[#43574D] transition-colors leading-snug">
                      {method.name}
                    </h3>
                    <span className="text-[10.5px] font-sans uppercase tracking-[0.14em] text-[#8A8F87] mt-1 block">
                      {method.fullName}
                    </span>
                  </div>
                </div>

                {/* Description (5 cols) */}
                <div className="lg:col-span-5 pt-2 lg:pt-0">
                  <p className="text-sm text-[#4A4F48] leading-relaxed">
                    {method.description}
                  </p>
                </div>

                {/* Subtle Action Link (2 cols) */}
                <div className="lg:col-span-2 pt-2 lg:pt-0 flex lg:justify-end">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#43574D] group-hover:text-[#252824] transition-colors py-2"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
