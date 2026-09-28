import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growmytherapydemo.vercel.app/"),
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica",
  description:
    "Dr. Maya Reynolds, PsyD offers warm, collaborative therapy for adults in Santa Monica and secure telehealth throughout California, with a focus on anxiety, trauma, burnout, perfectionism, and emotional overwhelm.",
  keywords: [
    "therapist in Santa Monica",
    "anxiety therapist Santa Monica",
    "trauma therapy Santa Monica",
    "EMDR Santa Monica",
    "adult therapy Santa Monica",
    "online therapy California",
    "burnout therapy",
    "perfectionism therapy",
    "anxiety therapy",
    "trauma therapy",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica",
    description:
      "Warm, grounded, and collaborative therapy for thoughtful adults in Santa Monica and telehealth across California.",
    url: "https://growmytherapydemo.vercel.app/",
    siteName: "Dr. Maya Reynolds, PsyD - Santa Monica Therapy",
    images: [
      {
        url: "/maya/portrait.jpg",
        width: 800,
        height: 1000,
        alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica",
    description:
      "Dr. Maya Reynolds, PsyD offers warm, collaborative therapy for adults in Santa Monica and secure telehealth throughout California.",
    images: ["/maya/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Maya Reynolds, PsyD",
  "jobTitle": "Licensed Clinical Psychologist",
  "description":
    "Dr. Maya Reynolds offers warm, collaborative therapy for adults navigating anxiety, trauma, burnout, perfectionism, and chronic stress.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123th Street 45 W",
    "addressLocality": "Santa Monica",
    "addressRegion": "CA",
    "postalCode": "90401",
    "addressCountry": "US",
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Santa Monica",
    },
    {
      "@type": "State",
      "name": "California",
    },
  ],
  "medicalSpecialty": [
    "Clinical Psychology",
    "Cognitive Behavioral Therapy",
    "EMDR",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-US"
      className={`${dmSerifDisplay.variable} ${manrope.variable}`}
      style={
        {
          "--font-serif-name": "var(--font-serif)",
          "--font-sans-name": "var(--font-sans)",
        } as React.CSSProperties
      }
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F7F4EE] text-[#252824] antialiased flex flex-col selection:bg-[#A9B7A8] selection:text-[#181F1A]">
        {children}
      </body>
    </html>
  );
}
