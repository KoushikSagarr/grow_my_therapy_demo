"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ArrowLeft } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

type MenuLevel = "root" | "specialties" | "methods" | "about";

export default function MobileMenu({
  isOpen,
  onClose,
  onOpenConsultation,
}: MobileMenuProps) {
  const [currentLevel, setCurrentLevel] = useState<MenuLevel>("root");

  // Lock body scroll when open and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          if (currentLevel !== "root") {
            setCurrentLevel("root");
          } else {
            onClose();
          }
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
      setCurrentLevel("root");
    }
  }, [isOpen, currentLevel, onClose]);

  const handleLinkClick = () => {
    onClose();
    setCurrentLevel("root");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#252824]/60 backdrop-blur-xs"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-full max-w-sm h-full bg-[#F7F4EE] shadow-2xl flex flex-col z-10 overflow-hidden border-l border-[#DDD8CE]"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E8DF]">
              <div className="flex flex-col">
                <span className="font-serif text-lg font-normal text-[#252824]">
                  Dr. Maya Reynolds
                </span>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-normal text-[#686E66]">
                  Santa Monica, CA
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 text-[#252824] hover:text-[#43574D] rounded-full focus:outline-hidden focus:ring-2 focus:ring-[#43574D]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Sliding Submenu Container */}
            <div className="relative flex-1 overflow-y-auto px-6 py-6">
              <AnimatePresence initial={false} mode="wait">
                {currentLevel === "root" && (
                  <motion.div
                    key="root"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col space-y-5"
                  >
                    {/* Level 0 Menu Items */}
                    <div className="space-y-4">
                      {/* ABOUT FOLDER */}
                      <button
                        type="button"
                        onClick={() => setCurrentLevel("about")}
                        className="w-full flex items-center justify-between py-2 text-left font-sans text-sm font-normal tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]/60 transition-colors"
                      >
                        <span>About</span>
                        <ChevronRight className="w-4 h-4 text-[#8A8F87]" />
                      </button>

                      {/* APPROACH */}
                      <Link
                        href="/#approach"
                        onClick={handleLinkClick}
                        className="block py-2 font-sans text-sm font-normal tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]/60 transition-colors"
                      >
                        Approach
                      </Link>

                      {/* SPECIALTIES FOLDER */}
                      <button
                        type="button"
                        onClick={() => setCurrentLevel("specialties")}
                        className="w-full flex items-center justify-between py-2 text-left font-sans text-sm font-normal tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]/60 transition-colors"
                      >
                        <span>Specialties</span>
                        <ChevronRight className="w-4 h-4 text-[#8A8F87]" />
                      </button>

                      {/* METHODS FOLDER */}
                      <button
                        type="button"
                        onClick={() => setCurrentLevel("methods")}
                        className="w-full flex items-center justify-between py-2 text-left font-sans text-sm font-normal tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]/60 transition-colors"
                      >
                        <span>Methods</span>
                        <ChevronRight className="w-4 h-4 text-[#8A8F87]" />
                      </button>

                      {/* FAQS */}
                      <Link
                        href="/faqs"
                        onClick={handleLinkClick}
                        className="block py-2 font-sans text-sm font-normal tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]/60 transition-colors"
                      >
                        FAQs
                      </Link>

                      {/* CONTACT */}
                      <Link
                        href="/#contact"
                        onClick={handleLinkClick}
                        className="block py-2 font-sans text-sm font-normal tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]/60 transition-colors"
                      >
                        Contact
                      </Link>
                    </div>

                    {/* CTA BUTTON */}
                    <div className="pt-6">
                      <button
                        type="button"
                        onClick={onOpenConsultation}
                        className="w-full editorial-btn-solid text-center justify-center py-3.5"
                      >
                        Schedule a Consultation
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ABOUT SUBDRAWER */}
                {currentLevel === "about" && (
                  <motion.div
                    key="about"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col space-y-4"
                  >
                    <button
                      type="button"
                      onClick={() => setCurrentLevel("root")}
                      className="flex items-center gap-2 py-2 text-xs font-medium tracking-[0.16em] uppercase text-[#43574D] hover:underline"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Menu</span>
                    </button>
                    <div className="pt-2 pb-1 border-b border-[#DDD8CE]">
                      <h3 className="font-serif text-xl font-normal tracking-normal text-[#252824]">About</h3>
                    </div>
                    <div className="space-y-3 pt-2">
                      <Link
                        href="/#intro"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        About Dr. Reynolds
                      </Link>
                      <Link
                        href="/#office"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        Santa Monica Office
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* SPECIALTIES SUBDRAWER */}
                {currentLevel === "specialties" && (
                  <motion.div
                    key="specialties"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col space-y-4"
                  >
                    <button
                      type="button"
                      onClick={() => setCurrentLevel("root")}
                      className="flex items-center gap-2 py-2 text-xs font-medium tracking-[0.16em] uppercase text-[#43574D] hover:underline"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Menu</span>
                    </button>
                    <div className="pt-2 pb-1 border-b border-[#DDD8CE]">
                      <h3 className="font-serif text-xl font-normal tracking-normal text-[#252824]">Specialties</h3>
                    </div>
                    <div className="space-y-3 pt-2">
                      <Link
                        href="/#specialties"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        Anxiety &amp; Worry
                      </Link>
                      <Link
                        href="/#specialties"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        Trauma &amp; Life Events
                      </Link>
                      <Link
                        href="/#specialties"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        Burnout &amp; Exhaustion
                      </Link>
                      <Link
                        href="/#specialties"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        Perfectionism &amp; Pressure
                      </Link>
                      <Link
                        href="/#specialties"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        Panic &amp; Physical Tension
                      </Link>
                      <Link
                        href="/#specialties"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        Chronic Stress &amp; Regulation
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* METHODS SUBDRAWER */}
                {currentLevel === "methods" && (
                  <motion.div
                    key="methods"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col space-y-4"
                  >
                    <button
                      type="button"
                      onClick={() => setCurrentLevel("root")}
                      className="flex items-center gap-2 py-2 text-xs font-medium tracking-[0.16em] uppercase text-[#43574D] hover:underline"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Menu</span>
                    </button>
                    <div className="pt-2 pb-1 border-b border-[#DDD8CE]">
                      <h3 className="font-serif text-xl font-normal tracking-normal text-[#252824]">Clinical Methods</h3>
                    </div>
                    <div className="space-y-3 pt-2">
                      <Link
                        href="/#methods"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        Cognitive Behavioral Therapy (CBT)
                      </Link>
                      <Link
                        href="/#methods"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        EMDR Therapy
                      </Link>
                      <Link
                        href="/#methods"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        Mindfulness-Based Practices
                      </Link>
                      <Link
                        href="/#methods"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#252824] hover:text-[#43574D] border-b border-[#E8E8DF]"
                      >
                        Body-Oriented Techniques
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Drawer Footer with Location Note */}
            <div className="p-6 bg-[#EFECE4]/60 border-t border-[#DDD8CE]">
              <p className="text-xs text-[#4A4F48] leading-relaxed">
                Santa Monica, CA office &amp; California telehealth sessions.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
