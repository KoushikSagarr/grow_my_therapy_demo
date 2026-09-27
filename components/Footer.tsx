import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#252824] text-[#F7F4EE] pt-18 pb-12 border-t border-[#343933]">
      <div className="container-editorial">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#3D423C]">
          {/* Column 1: Brand & Credentials (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-serif text-2xl tracking-[0.03em] text-[#F7F4EE]">
              Dr. Maya Reynolds, PsyD
            </h3>
            <p className="text-xs uppercase tracking-[0.16em] text-[#A9B7A8] font-medium">
              Licensed Clinical Psychologist
            </p>
            <p className="text-xs text-[#C6C1B6] leading-relaxed pt-2 max-w-sm">
              Warm, collaborative therapy for adults navigating anxiety, trauma, burnout, and emotional overwhelm. Offering in-person sessions in Santa Monica and telehealth throughout California.
            </p>
          </div>

          {/* Column 2: Navigate (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-[#A9B7A8]">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8E8DF]">
              <li>
                <Link href="#intro" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#approach" className="hover:text-white transition-colors">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-white transition-colors">
                  Specialties
                </Link>
              </li>
              <li>
                <Link href="#methods" className="hover:text-white transition-colors">
                  Methods
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Focus Areas (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-[#A9B7A8]">
              Focus Areas
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8E8DF]">
              <li>
                <Link href="#specialties" className="hover:text-white transition-colors">
                  Anxiety &amp; Worry
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-white transition-colors">
                  Trauma &amp; Life Events
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-white transition-colors">
                  Burnout &amp; Exhaustion
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-white transition-colors">
                  Perfectionism
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-white transition-colors">
                  Panic &amp; Physical Tension
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-white transition-colors">
                  Chronic Stress
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Exact Address (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-[#A9B7A8]">
              Contact &amp; Location
            </h4>
            <div className="text-xs text-[#E8E8DF] space-y-1.5 leading-relaxed">
              <p className="font-medium text-white">Santa Monica Office:</p>
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <div className="pt-3">
                <p className="font-medium text-white">Virtual Care:</p>
                <p>Secure Telehealth throughout California</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A9B7A8]">
          <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Good Faith Estimate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
