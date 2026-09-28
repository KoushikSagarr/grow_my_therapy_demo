"use client";

import React from "react";
import { motion } from "framer-motion";


export default function ClosingStatement() {
  return (
    <section className="py-14 sm:py-18 bg-[#F7F4EE] border-t border-[#DDD8CE]/60 text-center">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm font-sans text-[#4A4F48]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#43574D]" />
            <span className="font-medium text-[#252824]">
              In-person therapy from my Santa Monica office
            </span>
          </div>
          <span className="hidden sm:inline text-[#C6C1B6]">·</span>
          <span>with secure telehealth available throughout California.</span>
        </motion.div>
      </div>
    </section>
  );
}
