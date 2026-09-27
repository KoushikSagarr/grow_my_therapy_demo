"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What can I expect during an initial consultation?",
    answer:
      "The initial consultation is a warm, low-pressure conversation lasting approximately 15–20 minutes. It is an opportunity to share what brings you to therapy, ask questions about my approach, discuss whether in-person or telehealth fits your needs, and determine together whether we feel like a good match.",
  },
  {
    question: "Do you offer in-person or virtual therapy sessions?",
    answer:
      "Both. In-person therapy is provided at my Santa Monica office (123th Street 45 W, Santa Monica, CA 90401). For clients residing elsewhere in California or those who prefer remote sessions, secure and encrypted telehealth is available across the state.",
  },
  {
    question: "How do CBT and EMDR work together in treatment?",
    answer:
      "CBT provides practical awareness of everyday thought loops, behaviors, and regulation tools. EMDR allows us to gently process deeper emotional memories and distressing experiences that might be driving those persistent cycles, helping the brain and body integrate what happened without staying in distress.",
  },
  {
    question: "How do I know if therapy is the right next step for me?",
    answer:
      "Many of the people I work with are high-functioning and used to carrying a lot on their own. If you notice persistent worry, tension in your body, feelings of burnout, or emotional overwhelm that no longer responds to just 'pushing through,' having an objective, dedicated space can provide profound clarity and relief.",
  },
  {
    question: "How is trauma therapy approached in your practice?",
    answer:
      "Trauma work is paced carefully, with a foundational emphasis on safety, nervous system stabilization, and self-regulation before processing deeper material. We never force you to dive into painful memories before you feel thoroughly supported and equipped with grounding tools.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 lg:py-36 bg-[#F7F4EE] border-t border-[#DDD8CE]/60">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5">
            <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-tight mb-5">
              Frequently asked{" "}
              <span className="italic font-normal text-[#43574D]">
                questions
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed max-w-md">
              Starting therapy can bring up understandable questions. Here is helpful information on what to expect when beginning care.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-[#DDD8CE] bg-[#FAF8F5] overflow-hidden transition-all duration-200 hover:border-[#A9B7A8]"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#43574D]"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#252824] leading-snug">
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#E8E8DF] flex items-center justify-center text-[#43574D] transition-transform">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-[#4A4F48] leading-relaxed border-t border-[#E8E8DF]/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
