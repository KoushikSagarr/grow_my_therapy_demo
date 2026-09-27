"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [methodsOpen, setMethodsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F4EE]/95 backdrop-blur-md shadow-xs border-b border-[#E3DEC3]/60 py-3.5"
            : "bg-[#F7F4EE] border-b border-[#E3DEC3]/40 py-5"
        }`}
      >
        <div className="container-editorial flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <Link
            href="#"
            className="group flex flex-col focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#43574D] rounded-sm"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.04em] text-[#252824] group-hover:text-[#43574D] transition-colors leading-tight">
              Dr. Maya Reynolds
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.16em] uppercase text-[#686E66] -mt-0.5">
              PsyD · Clinical Psychologist
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-8"
          >
            {/* ABOUT DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[11px] xl:text-[12px] font-medium tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] py-1 transition-colors cursor-pointer"
                aria-expanded={aboutOpen}
              >
                <span>About</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    aboutOpen ? "rotate-180 text-[#43574D]" : "text-[#8A8F87]"
                  }`}
                />
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-2 w-52 z-50"
                  >
                    <div className="bg-[#FAF8F5] border border-[#DDD8CE] rounded-lg shadow-lg p-2.5 space-y-1">
                      <Link
                        href="#intro"
                        onClick={() => setAboutOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        About Dr. Reynolds
                      </Link>
                      <Link
                        href="#office"
                        onClick={() => setAboutOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        Santa Monica Office
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* APPROACH */}
            <Link
              href="#approach"
              className="text-[11px] xl:text-[12px] font-medium tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] py-1 transition-colors"
            >
              Approach
            </Link>

            {/* SPECIALTIES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setSpecialtiesOpen(true)}
              onMouseLeave={() => setSpecialtiesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[11px] xl:text-[12px] font-medium tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] py-1 transition-colors cursor-pointer"
                aria-expanded={specialtiesOpen}
              >
                <span>Specialties</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    specialtiesOpen ? "rotate-180 text-[#43574D]" : "text-[#8A8F87]"
                  }`}
                />
              </button>

              <AnimatePresence>
                {specialtiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-2 w-56 z-50"
                  >
                    <div className="bg-[#FAF8F5] border border-[#DDD8CE] rounded-lg shadow-lg p-2.5 space-y-1">
                      <Link
                        href="#specialties"
                        onClick={() => setSpecialtiesOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        Anxiety &amp; Worry
                      </Link>
                      <Link
                        href="#specialties"
                        onClick={() => setSpecialtiesOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        Trauma &amp; Life Events
                      </Link>
                      <Link
                        href="#specialties"
                        onClick={() => setSpecialtiesOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        Burnout &amp; Exhaustion
                      </Link>
                      <Link
                        href="#specialties"
                        onClick={() => setSpecialtiesOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        Perfectionism &amp; Pressure
                      </Link>
                      <Link
                        href="#specialties"
                        onClick={() => setSpecialtiesOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        Panic &amp; Physical Tension
                      </Link>
                      <Link
                        href="#specialties"
                        onClick={() => setSpecialtiesOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        Chronic Stress &amp; Regulation
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* METHODS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setMethodsOpen(true)}
              onMouseLeave={() => setMethodsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[11px] xl:text-[12px] font-medium tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] py-1 transition-colors cursor-pointer"
                aria-expanded={methodsOpen}
              >
                <span>Methods</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    methodsOpen ? "rotate-180 text-[#43574D]" : "text-[#8A8F87]"
                  }`}
                />
              </button>

              <AnimatePresence>
                {methodsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-2 w-64 z-50"
                  >
                    <div className="bg-[#FAF8F5] border border-[#DDD8CE] rounded-lg shadow-lg p-2.5 space-y-1">
                      <Link
                        href="#methods"
                        onClick={() => setMethodsOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        Cognitive Behavioral Therapy (CBT)
                      </Link>
                      <Link
                        href="#methods"
                        onClick={() => setMethodsOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        EMDR Therapy
                      </Link>
                      <Link
                        href="#methods"
                        onClick={() => setMethodsOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        Mindfulness-Based Practices
                      </Link>
                      <Link
                        href="#methods"
                        onClick={() => setMethodsOpen(false)}
                        className="block px-3 py-2 text-xs font-sans text-[#252824] hover:bg-[#EFECE4] rounded-md transition-colors"
                      >
                        Body-Oriented Techniques
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQS */}
            <Link
              href="#faqs"
              className="text-[11px] xl:text-[12px] font-medium tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] py-1 transition-colors"
            >
              FAQs
            </Link>

            {/* CONTACT */}
            <Link
              href="#contact"
              className="text-[11px] xl:text-[12px] font-medium tracking-[0.16em] uppercase text-[#252824] hover:text-[#43574D] py-1 transition-colors"
            >
              Contact
            </Link>

            {/* CTA BUTTON */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="editorial-btn-outline ml-2"
            >
              Schedule a Consultation
            </button>
          </nav>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex text-[10px] font-semibold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full border border-[#252824] text-[#252824] hover:bg-[#252824] hover:text-white transition-colors"
            >
              Consultation
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="p-2 text-[#252824] hover:text-[#43574D] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#43574D]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Nested Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenConsultation={() => {
          setMobileMenuOpen(false);
          onOpenConsultation();
        }}
      />
    </>
  );
}
