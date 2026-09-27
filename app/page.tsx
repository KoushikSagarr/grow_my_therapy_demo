"use client";

import React, { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import AlternatingSection from "@/components/AlternatingSection";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import StatementSection from "@/components/StatementSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ApproachSection from "@/components/ApproachSection";
import ImageStatementSection from "@/components/ImageStatementSection";
import MethodsSection from "@/components/MethodsSection";
import OfficeSection from "@/components/OfficeSection";
import ConsultationCTA from "@/components/ConsultationCTA";
import ClosingStatement from "@/components/ClosingStatement";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#252824] overflow-x-hidden selection:bg-[#A9B7A8] selection:text-[#181F1A]">
      {/* 1. Announcement Strip */}
      <AnnouncementBar />

      {/* 2. Navigation Architecture */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1">
        {/* 3. Hero with Staggered Asymmetrical Image Composition */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 4. Intro / Philosophy Section */}
        <IntroSection />

        {/* 5. Alternating Image + Text Storytelling */}
        <AlternatingSection />

        {/* 6. Who I Work With 3-Column Card Architecture */}
        <WhoIWorkWith />

        {/* 7. Emotional Statement Banner (Softened Office Background) */}
        <StatementSection onOpenConsultation={handleOpenConsultation} />

        {/* 8. Areas of Expertise Editorial Keyword List */}
        <ExpertiseSection />

        {/* 9. How I Work (Secondary Surface & Modalities) */}
        <ApproachSection />

        {/* 10. Image + Statement Section */}
        <ImageStatementSection />

        {/* 11. Methods / Approach Specialties (Editorial Numbered List) */}
        <MethodsSection />

        {/* 12. Office Section (Santa Monica Loft & Telehealth) */}
        <OfficeSection />

        {/* 13. Large Consultation CTA Section */}
        <ConsultationCTA onOpenConsultation={handleOpenConsultation} />

        {/* 14. Welcoming Closing Statement */}
        <ClosingStatement />
      </main>

      {/* 15. Multi-Column Footer with Verbatim Address */}
      <Footer />

      {/* Interactive Consultation Dialog */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
