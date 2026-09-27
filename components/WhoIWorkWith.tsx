"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SpecialtyCard {
  number: string;
  title: string;
  image: string;
  alt: string;
  description: string;
}

const specialties: SpecialtyCard[] = [
  {
    number: "01",
    title: "Anxiety & Overwhelm",
    image: "/maya/who-anxiety.jpg",
    alt: "Adult taking a deep breath in calm contemplation, navigating anxiety relief",
    description:
      "Support for adults experiencing persistent worry, panic, overthinking, emotional overwhelm, physical tension, or difficulty feeling at ease in daily life.",
  },
  {
    number: "02",
    title: "High Achievers & Perfectionists",
    image: "/maya/who-achievers.jpg",
    alt: "Professional in thoughtful reflection in a peaceful setting",
    description:
      "For professionals, entrepreneurs, and creatives who are used to pushing through—but are finding that constant internal pressure is no longer sustainable.",
  },
  {
    number: "03",
    title: "Trauma & Life Experiences",
    image: "/maya/who-trauma.jpg",
    alt: "Person walking along serene coastal path, symbolizing healing and grounding",
    description:
      "Support for people working through single-incident trauma or longer-standing patterns shaped by childhood, relationships, or chronic stress.",
  },
];

export default function WhoIWorkWith() {
  return (
    <section id="specialties" className="py-20 md:py-28 lg:py-36 bg-[#F7F4EE] border-t border-[#DDD8CE]/60">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="text-[10.5px] font-sans font-semibold tracking-[0.2em] uppercase text-[#43574D] mb-3 block">
            Specialized Care
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-tight">
            Who I work with
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4F48] leading-relaxed">
            I work with thoughtful, conscientious adults in Santa Monica and across California who want depth-oriented therapy to unburden themselves from persistent stress and rediscover sustainable ease.
          </p>
        </div>

        {/* 3-Column Editorial Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {specialties.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col h-full bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#DDD8CE] shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8E8DF]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#DDD8CE]/80 text-[10px] font-mono font-semibold text-[#43574D]">
                  {item.number}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#252824] mb-3 group-hover:text-[#43574D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4F48] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E8DF]">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#43574D] hover:text-[#252824] transition-colors"
                  >
                    <span>Learn More</span>
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
