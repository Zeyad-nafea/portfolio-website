"use client";

import { motion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import ContactSection from "@/components/sections/ContactSection";
import CertificatesSection from "@/components/ui/certificates";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center p-6 xl:p-20 gap-8 pt-32 xl:pt-40 relative z-0"
    >
      <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-20 w-full relative z-0">
        {/* Left side - Intro text, socials & CV button */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-6 w-full relative z-0">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl xl:text-4xl font-bold leading-tight"
          >
            Hi, I'm <span className="text-cyan-400">Zeyad Nafea</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl xl:text-2xl text-gray-300 font-medium"
          >
            CS Student / <span className="text-cyan-400">Data Analyst</span>
          </motion.h2>

          {/* Full Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-xl"
          >
            Computer Science student with a focus on{" "}
            <span className="text-cyan-400">Data Science & AI</span> at{" "}
            <span className="text-cyan-400">Zewail City of Science and Technology</span>.
            Experienced in Python, data analysis, and building impactful projects.
            Currently seeking opportunities to apply my skills in real-world tech environments.
          </motion.p>

          {/* CV Button + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2 relative z-0"
          >
            <a
              href="/Zeyad.Nafea(Data analyst).pdf"
              download
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors"
            >
              Download My CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="w-full relative z-0"
          >
            <Stats />
          </motion.div>
        </div>

        {/* Right side - Photo with circle animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
          className="flex justify-center relative z-0"
        >
          <Photo />
        </motion.div>
      </div>

      {/* About Section */}
      <div id="about" className="mt-16 relative z-0">
        <AboutSection />
      </div>

      {/* Certificates Section */}
      <div id="certificates" className="mt-16 relative z-0">
        <CertificatesSection />
      </div>

      {/* Services Section */}
      <div id="services" className="mt-16 relative z-0">
        <ServicesSection />
      </div>

      {/* Work Section */}
      <div id="work" className="mt-16 relative z-0">
        <WorkSection />
      </div>

      {/* Contact Section */}
      <div id="contact" className="mt-16 relative z-0">
        <ContactSection />
      </div>
    </section>
  );
}
