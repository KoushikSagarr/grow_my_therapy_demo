"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, MapPin, Video } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [format, setFormat] = useState<"in-person" | "telehealth">("in-person");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    focus: "anxiety",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#252824]/65 backdrop-blur-xs"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#DDD8CE] p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-1.5 rounded-full text-[#686E66] hover:text-[#252824] hover:bg-[#EFECE4] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#43574D]"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#43574D]">
                    Schedule a Consultation
                  </span>
                  <h2
                    id="modal-title"
                    className="font-serif text-2xl sm:text-3xl text-[#252824] mt-1 mb-2"
                  >
                    Take the first step.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4A4F48] leading-relaxed">
                    A brief initial conversation to discuss what brings you to therapy, answer questions, and explore whether working together feels right.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Format Selection */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#252824] block">
                      Session Preference
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setFormat("in-person")}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-xs font-medium transition-all ${
                          format === "in-person"
                            ? "border-[#43574D] bg-[#43574D] text-[#F7F4EE] shadow-xs"
                            : "border-[#DDD8CE] bg-white text-[#252824] hover:border-[#A9B7A8]"
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Santa Monica Office</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormat("telehealth")}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border text-xs font-medium transition-all ${
                          format === "telehealth"
                            ? "border-[#43574D] bg-[#43574D] text-[#F7F4EE] shadow-xs"
                            : "border-[#DDD8CE] bg-white text-[#252824] hover:border-[#A9B7A8]"
                        }`}
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>California Telehealth</span>
                      </button>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="space-y-1">
                    <label
                      htmlFor="modal-name"
                      className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#252824] block"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#DDD8CE] rounded-lg focus:outline-hidden focus:border-[#43574D] focus:ring-1 focus:ring-[#43574D] text-[#252824] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label
                      htmlFor="modal-email"
                      className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#252824] block"
                    >
                      Email Address
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#DDD8CE] rounded-lg focus:outline-hidden focus:border-[#43574D] focus:ring-1 focus:ring-[#43574D] text-[#252824] transition-all"
                    />
                  </div>

                  {/* Focus Area */}
                  <div className="space-y-1">
                    <label
                      htmlFor="modal-focus"
                      className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#252824] block"
                    >
                      Primary Area of Concern
                    </label>
                    <select
                      id="modal-focus"
                      value={formData.focus}
                      onChange={(e) =>
                        setFormData({ ...formData, focus: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#DDD8CE] rounded-lg focus:outline-hidden focus:border-[#43574D] focus:ring-1 focus:ring-[#43574D] text-[#252824] transition-all"
                    >
                      <option value="anxiety">Anxiety &amp; Worry</option>
                      <option value="trauma">Trauma &amp; Life Experiences</option>
                      <option value="burnout">Burnout &amp; Exhaustion</option>
                      <option value="perfectionism">Perfectionism &amp; Pressure</option>
                      <option value="panic">Panic &amp; Physical Tension</option>
                      <option value="stress">Chronic Stress &amp; Regulation</option>
                      <option value="other">General Inquiry / Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label
                      htmlFor="modal-message"
                      className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#252824] block"
                    >
                      What is on your mind? (Optional)
                    </label>
                    <textarea
                      id="modal-message"
                      rows={3}
                      placeholder="Feel free to share a brief note about what you hope to address..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-[#DDD8CE] rounded-lg focus:outline-hidden focus:border-[#43574D] focus:ring-1 focus:ring-[#43574D] text-[#252824] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full editorial-btn-solid text-center justify-center py-3"
                    >
                      Request Consultation
                    </button>
                    <p className="text-[10px] text-center text-[#686E66] mt-2">
                      Confidential communication.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#DEE4DC] text-[#43574D] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#252824]">
                  Thank you, {formData.name || "friend"}.
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4F48] max-w-sm mx-auto leading-relaxed">
                  Your inquiry has been received. Dr. Maya Reynolds will review your notes and reach out directly to schedule your initial consultation.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="editorial-btn-outline"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
