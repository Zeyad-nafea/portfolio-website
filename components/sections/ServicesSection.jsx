"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const services = [
  {
    num: "01",
    title: "Data Analysis & Visualization",
    desc: "Complete data solutions from cleaning and analysis to interactive dashboards and insights using Python, Excel, and modern visualization tools.",
    detailedDescription: "End-to-end data service combining comprehensive analysis with compelling visualizations. I handle everything from data cleaning and statistical analysis to creating interactive dashboards and actionable insights. Perfect for businesses wanting to understand their data and make data-driven decisions.",
    pricing: {
      basic: "$10 — Cleaned data + static charts",
      standard: "$20 — Interactive dashboard + detailed analysis report",
      premium: "$40 — Full analysis, real-time dashboard, and strategic recommendations",
      custom: "Let's talk — Share your project requirements, and I’ll provide a tailored quote"
    },
    deliverables: [
      "Clean, processed datasets",
      "Comprehensive data analysis report",
      "Interactive dashboards and visualizations",
      "Statistical insights and findings",
      "Power BI/web-based dashboard applications",
      "Actionable business recommendations",
      "Dashboard documentation and training"
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Dash", "Power BI", "Tableau", "Excel"]
  },
  {
    num: "02",
    title: "Custom Programming Solutions", 
    desc: "Building efficient applications, algorithms, and automation tools using Python and C++ for any project requirements.",
    detailedDescription: "Professional programming services for custom applications, algorithm development, and automation solutions. Whether you need data processing tools, complex algorithms, desktop applications, or automated systems, I deliver efficient, scalable code solutions using modern programming practices in Python and C++.",
    pricing: {
      basic: "$15 — Simple automation scripts or basic applications",
      standard: "$30 — Complex algorithms, data processing apps, or medium projects",
      premium: "$60 — Full-scale applications, optimization, and enterprise-level solutions",
      custom: "Let's talk — Share your project requirements, and I’ll provide a tailored quote"
    },
    deliverables: [
      "Custom Python/C++ applications",
      "Algorithm implementations and optimization",
      "Automated scripts and tools",
      "Desktop/console applications",
      "Code refactoring and optimization",
      "Technical documentation and user guides",
      "Source code with version control"
    ],
    tools: ["Python", "C++", "Git", "Algorithm Design", "Data Structures", "Object-Oriented Programming", "Performance Optimization"]
  },
  {
    num: "03",
    title: "Data Collection & Web Scraping",
    desc: "Extracting and collecting data from websites and APIs using Python, Selenium, BeautifulSoup, and REST APIs for analysis and business intelligence.",
    detailedDescription: "Professional web scraping and data collection services to gather data from various online sources. I ensure ethical scraping practices while delivering clean, structured datasets ready for analysis. Perfect for market research, competitive analysis, and building comprehensive databases.",
    pricing: {
      basic: "$12 — Simple one-site scraping or basic API integration",
      standard: "$35 — Multi-site scraping with data processing & formatting",
      premium: "$70 — Large-scale scraping with automation, scheduling, & monitoring",
      custom: "Let's talk — Share your project requirements, and I’ll provide a tailored quote"
    },
    deliverables: [
      "Clean, structured datasets in various formats",
      "Automated scraping scripts with error handling", 
      "Custom API integrations and development",
      "Data validation and quality assurance",
      "Scheduled data collection systems",
      "Real-time data monitoring dashboards",
      "Data pipeline documentation"
    ],
    tools: ["Python", "Selenium", "BeautifulSoup", "Scrapy", "REST APIs", "JSON/XML Processing", "Database Integration", "Task Scheduling"]
  }
  ,{
  num: "04",
  title: "Data Collection, Analysis & Visualization (Bundle)",
  desc: "A complete package: I collect, clean, analyze, and visualize data to give you ready-to-use insights.",
  detailedDescription: "This bundle combines web scraping, data cleaning, analysis, and visualization into one end-to-end service. Instead of hiring separately for data collection and analytics, you get everything in one place: structured datasets, insightful analysis, and clear dashboards. Perfect for businesses, researchers, or anyone who wants to go from raw data to actionable decisions.",
  pricing: {
    basic: "$25 — Data scraping from one source + cleaned dataset + simple analysis",
    standard: "$60 — Multi-source scraping + structured dataset + interactive dashboard",
    premium: "$120 — Large-scale scraping + deep analysis + advanced dashboards + actionable recommendations",
    custom: "Let's talk — For ongoing or enterprise-level projects"
  },
  deliverables: [
    "Clean, structured datasets (CSV/Excel/Database)",
    "Exploratory data analysis (EDA)",
    "Interactive dashboards (Power BI / Plotly / Dash)",
    "Comprehensive report with findings",
    "Actionable recommendations",
    "Documentation & reproducible workflow"
  ],
  tools: [
    "Python",
    "Selenium",
    "BeautifulSoup",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Plotly",
    "Dash",
    "Power BI",
    "Excel"
  ]
}
];

// Modal Component
const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ zIndex: 99999 }} // Very high z-index
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-[#1c1c22] rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-accent text-lg font-semibold">Service #{service.num}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-3xl font-bold transition-colors hover:rotate-90 duration-300"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-xl font-bold text-accent mb-3">Service Overview</h4>
              <p className="text-white/80 leading-relaxed">{service.detailedDescription}</p>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h4 className="text-xl font-bold text-accent mb-3">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium hover:bg-accent/30 transition-colors"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Pricing */}
            <div>
              <h4 className="text-xl font-bold text-accent mb-3">Pricing Packages</h4>
              <div className="space-y-3">
                {Object.entries(service.pricing).map(([tier, price], i) => (
                  <motion.div 
                    key={tier}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#232329] p-4 rounded-lg hover:bg-[#2a2a30] transition-colors"
                  >
                    <p className="text-white font-semibold mb-1 capitalize">{tier} Package</p>
                    <p className="text-white/70 text-sm">{price}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-xl font-bold text-accent mb-3">What You'll Get</h4>
              <ul className="space-y-2">
                {service.deliverables.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-accent mt-1">•</span>
                    <span className="text-white/80 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-6 border-t border-white/20 text-center"
        >
          <p className="text-white/60 mb-4">Ready to get started with this service?</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors shadow-lg"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = () => setSelectedService(null);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl xl:text-5xl font-bold mb-4">
              My <span className="text-accent">Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I offer a range of data science and programming services to help transform your data into valuable insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.2,
                      ease: "backOut"
                    }}
                    viewport={{ once: true }}
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 + 0.3,
                      ease: "backOut"
                    }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-[70px] h-[70px] rounded-full bg-white/10 group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:scale-110"
                    >
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                      >
                        <BsArrowDownRight className="text-primary text-3xl" />
                      </motion.div>
                    </button>
                  </motion.div>
                </div>
                
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.4
                  }}
                  viewport={{ once: true }}
                  className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.5
                  }}
                  viewport={{ once: true }}
                  className="text-gray-300"
                >
                  {service.desc}
                </motion.p>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.6,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="border-b border-white/20 w-full origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Portal Modal - Renders at document.body level */}
      {selectedService && mounted && createPortal(
        <ServiceModal service={selectedService} onClose={closeModal} />,
        document.body
      )}
    </>
  );
};

export default Services;