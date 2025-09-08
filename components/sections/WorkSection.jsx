"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "eBay Scraper",
      role: "Team Lead",
      description: "Engineered a web scraper using SerpAPI, BeautifulSoup, and Selenium to extract data for eBay listings. Visualized price trends using NetworkX graphs and interactive 3D plots.",
      technologies: ["Python", "SerpAPI", "BeautifulSoup", "Selenium", "NetworkX", "Matplotlib"],
      features: [
        "CSV export functionality",
        "Keyword-based search features",  
        "Interactive 3D price trend plots",
        "NetworkX and heatmap data visualization"
      ],
      github: "https://github.com/Zeyad-nafea/DSAI103", 
      live: "#",
      image: "/project 1.png"
    },
    {
      id: 2,
      title: "Personal Budget Tracker",
      role: "Full-Stack Developer",
      description: "A comprehensive desktop application for personal finance management with user authentication, transaction tracking, budget monitoring, and data visualization. Features a modern GUI built with Python tkinter and includes savings goals, category management, and financial analytics.",
      technologies: ["Python", "tkinter", "matplotlib", "JSON", "File I/O"],
      features: [
        "User authentication and registration system",
        "Budget setting and monitoring with real-time calculations",
        "Transaction tracking with custom categories",
        "Interactive pie charts for spending visualization", 
        "Savings goals with progress tracking",
        "Monthly financial reports and analytics",
        "Data export functionality to JSON format",
        "Multi-user support with individual data storage"
      ],
      github: "https://github.com/Zeyad-nafea/personal-budget-tracker",
      live: "#",
      image: "/project 2.png"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl xl:text-5xl font-bold mb-4">
          My <span className="text-cyan-400">Work</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Here are some of the projects I've led and developed, showcasing my skills in data analysis, web scraping, and system design.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
          >
            {/* Project Image */}
            <div className="h-48 bg-gray-700 relative overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">View Project</span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Role Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30 font-semibold">
                  {project.role}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Key Features */}
              {project.features && (
                <div className="mb-4">
                  <h4 className="text-cyan-400 text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="text-gray-300 text-xs space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  GitHub →
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkSection;