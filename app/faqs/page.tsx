"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowLeft, Calendar } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What can I expect during an initial consultation?",
    answer:
      "The initial consultation is a warm, collaborative opportunity to share what brings you to therapy, ask questions about my approach, discuss whether in-person sessions in Santa Monica or telehealth throughout California fit your needs, and determine together whether working together feels right.",
  },
  {
    question: "Do you offer in-person or virtual therapy sessions?",
    answer:
      "Both. In-person therapy is provided from my Santa Monica office at 123th Street 45 W, Santa Monica, CA 90401. Secure telehealth sessions are available for clients located anywhere within California.",
  },
  {
    question: "How do CBT and EMDR work together in treatment?",
    answer:
      "Cognitive Behavioral Therapy (CBT) provides practical awareness of everyday thought patterns and cycles. EMDR offers a structured, carefully paced approach to processing difficult or traumatic experiences while prioritizing emotional safety and stabilization.",
  },
  {
    question: "How do I know if therapy is the right next step for me?",
    answer:
      "Many of the people I work with are thoughtful, capable, and used to handling a lot on their own. If you notice persistent worry, tension in your body, feelings of burnout, or emotional overwhelm that is no longer sustainable, therapy can be a dedicated space to slow down and understand what is happening beneath the surface.",
  },
  {
    question: "How is trauma therapy approached in your practice?",
    answer:
      "Trauma work is paced carefully, with a clear emphasis on safety, stabilization, and helping you feel more regulated in daily life—not just during sessions. We address both single-incident trauma and more complex patterns shaped by childhood, relationships, or chronic stress.",
  },
];

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#252824]">
      <AnnouncementBar />
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="flex-1 py-16 md:py-24">
        <div className="container-editorial">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#43574D] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Header */}
            <div className="lg:col-span-5">
              <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
                Common Questions
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-tight mb-5">
                Frequently asked{" "}
                <span className="italic font-normal text-[#43574D]">
                  questions
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#4A4F48] leading-relaxed max-w-md mb-8">
                Here is helpful information on what to expect when beginning therapy with Dr. Maya Reynolds.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DDD8CE] max-w-sm space-y-3">
                <h3 className="font-serif text-lg text-[#252824]">
                  Have a specific question?
                </h3>
                <p className="text-xs text-[#4A4F48] leading-relaxed">
                  Feel free to request an initial consultation to talk through your needs and explore next steps.
                </p>
                <button
                  type="button"
                  onClick={() => setIsConsultationOpen(true)}
                  className="editorial-btn-solid text-xs py-2.5 px-5 mt-2"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>

            {/* Right Accordion List */}
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
                          transition={{ duration: 0.2, ease: "easeInOut" }}
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
      </main>

      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
