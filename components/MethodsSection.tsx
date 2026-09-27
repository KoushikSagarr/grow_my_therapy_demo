"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MethodItem {
  number: string;
  name: string;
  fullName: string;
  description: string;
}

const methods: MethodItem[] = [
  {
    number: "01",
    name: "CBT",
    fullName: "Cognitive Behavioral Therapy",
    description:
      "Practical tools for understanding thought patterns, changing unhelpful cycles, and developing more sustainable ways of responding to life's demands.",
  },
  {
    number: "02",
    name: "EMDR",
    fullName: "Eye Movement Desensitization & Reprocessing",
    description:
      "A carefully paced approach to processing difficult or traumatic experiences while prioritizing emotional safety and stabilization.",
  },
  {
    number: "03",
    name: "Mindfulness-Based Practices",
    fullName: "Present-Moment Awareness",
    description:
      "Practices that help cultivate greater awareness of thoughts, emotions, sensations, and patterns without becoming overwhelmed by them.",
  },
  {
    number: "04",
    name: "Body-Oriented Techniques",
    fullName: "Somatic & Nervous System Regulation",
    description:
      "Approaches that consider the physiological side of emotional experience and support greater physical ease and regulation.",
  },
];

export default function MethodsSection() {
  return (
    <section id="methods" className="py-20 md:py-28 lg:py-36 bg-[#F7F4EE]">
      <div className="container-editorial">
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
            Clinical Modalities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-tight">
            My approach{" "}
            <span className="italic font-normal text-[#43574D]">
              includes…
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4F48] leading-relaxed">
            I draw from proven, evidence-based methodologies that integrate both mental cognition and nervous system regulation to support meaningful, long-term change.
          </p>
        </div>

        {/* 2x2 / 4-Item List Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {methods.map((method, index) => (
            <motion.div
              key={method.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border border-[#DDD8CE] shadow-xs hover:border-[#A9B7A8] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-[#43574D] bg-[#E8E8DF] px-2.5 py-1 rounded-md">
                    {method.number}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#686E66]">
                    {method.fullName}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#252824] mb-3 group-hover:text-[#43574D] transition-colors">
                  {method.name}
                </h3>

                <p className="text-sm text-[#4A4F48] leading-relaxed">
                  {method.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E8DF]">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#43574D] hover:text-[#252824] transition-colors"
                >
                  <span>Inquire About This Modality</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
