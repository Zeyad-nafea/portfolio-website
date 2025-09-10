"use client";

import Image from "next/image"; 
import { TbBrandOffice } from "react-icons/tb";
import { FaHtml5, FaNodeJs, FaGitAlt, FaPython,FaGithub,FaRegFileAlt ,FaChartBar,FaFileExcel,FaBrain} from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { 
  SiGit,
  SiPython, 
  SiSelenium, 
  SiPandas, 
  SiCplusplus, 
  SiMysql,
  SiNumpy,
  SiPlotly,
  SiJupyter,
} from "react-icons/si";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const PowerBIIcon = () => (
  <img
    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/resume/icons8-power-bi-2021.svg`}
    alt="Power BI"
    width={30}
    height={30}
  />
);

// 🔹 Your data objects (about, experienceEducation, volunteerActivities, skills)
const about = {
  title: "About Me",
  desc: "I am a passionate computer science student and aspiring data analyst with a focus on building dynamic solutions and leveraging data for meaningful insights. Currently pursuing my degree at Zewail City while actively seeking opportunities to apply my technical skills in real-world scenarios.",
  info: [
    { fieldname: "Name", fieldvalue: "Zeyad Mohamed Fathy Nafea" },
    { fieldname: "Phone", fieldvalue: "(+20) 127 556 1002" },
    { fieldname: "Location", fieldvalue: "6th of October, Giza, Egypt" },
    { fieldname: "Email", fieldvalue: "zeyad.nafea.cs@gmail.com" },
    { fieldname: "LinkedIn", fieldvalue: "linkedin.com/in/zeyad-nafea" },
    { fieldname: "Status", fieldvalue: "Available for Opportunities" },
    { fieldname: "Languages", fieldvalue: "Arabic (Native), English (Fluent)" },
    { fieldname: "Interests", fieldvalue: "Data science, AI, Software Development" },
  ],
  highlights: [
    { title: "Student", desc: "Computer Science at Zewail City", icon: "🎓" },
    { title: "Data Enthusiast", desc: "Passionate about transforming data into insights", icon: "📊" },
    { title: "Problem Solver", desc: "Love tackling complex challenges with code", icon: "🧩" },
    { title: "Quick Learner", desc: "Always eager to explore new technologies", icon: "🚀" }
  ]
};

// 🔄 REORDERED: Education first, then Experience
const experienceEducation = {
  title: "Education & Experience",
  desc: "My educational background and professional experience in computer science and data analysis.",
  education: {
    title: "Education",
    items: [
      {
        title: "B.Sc. Computer Science",
        organization: "Zewail City of Science and Technology",
        year: "2023 – 2028",
        desc: "Computer science fundamentals, Data science, and AI engineering. Expected graduation: 2028.",
      },
    ]
  },
  experience: {
    title: "Professional Experience",
    items: [
      {
        title: "Power BI Data Analysis Intern",
        organization: "Digital Egypt Pioneers Initiative (DEPI)",
        year: "Jul 2025 – Present",
        desc: "Gaining hands-on experience in data analysis and visualization using Excel, and Power BI through technical assignments and projects. Location: Al Jizah, Egypt (Hybrid).",
      },
      {
        title: "Junior Teaching Assistant (JTA)",
        organization: "Zewail City of Science and Technology",
        year: "Jul 2025 – Aug 2025",
        desc: "Assisted faculty in delivering lab sessions and tutorials for undergraduate students. Helped students understand key programming concepts such as Python and HTML and scraping. Created and designed educational presentations to support lectures and exercises.",
      },
    ]
  }
};

const volunteerActivities = {
  title: "Volunteer & Activities",
  desc: "My volunteer work, leadership roles, and extracurricular activities showcasing community commitment.",
  volunteer: {
    title: "Volunteer Work",
    items: [
      {
        title: "Event Organizer",
        organization: "Zewail City of Science and Technology",
        year: "Multiple Events",
        desc: "Supported planning and execution of university events (Open Days, science outreach, tour days). Assisted with guest guidance, registration, logistics, and stage management. Collaborated with teams to ensure smooth operations and a welcoming environment.",
      },
      {
        title: "Student Ambassador",
        organization: "Edugate 2025",
        year: "2025",
        desc: "Represented Zewail City at Edugate 2025 (3 days in Cairo, 1 day in Alexandria). Answered questions from prospective students about academic programs. Guided students in choosing suitable majors and shared personal CS journey.",
      },
    ]
  },
  activities: {
    title: "Leadership & Activities",
    items: [
      {
        title: "Team Leader",
        organization: "Academic & Personal Projects",
        year: "Ongoing",
        desc: "Led teams of 3–5 students in real-world project solutions. Mentored peers in programming skills.",
      },
      {
        title: "Student Mentor & Influencer",
        organization: "University Events",
        year: "2025",
        desc: "Acted as a mentor and ambassador during national STEM outreach events, inspiring prospective students, sharing personal experiences, and connecting with Egypt’s brightest young talents to promote academic excellence and innovation.",
      },
    ]
  }
};

const skills = {
  title: "Technical Skills",
  desc: "Comprehensive overview of my technical and professional competencies across different domains:",
  categories: [
    {
      category: "Programming & Development",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "HTML & CSS", icon: <FaHtml5 /> },
        { name: "SQL (learning)", icon: <SiMysql /> },
        { name: "Object-Oriented Programming (OOP)", icon: <SiCplusplus /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ]
    },
    {
      category: "Data Analysis & Visualization",
      skills: [
        { name: "Excel", icon: <FaFileExcel /> },
        { name: "Power BI", icon: <PowerBIIcon /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Matplotlib", icon: <FaChartBar /> },
        { name: "Plotly", icon: <SiPlotly /> },
      ]
    },
    {
      category: "Tools & Frameworks",
      skills: [
        { name: "Jupyter Notebook", icon: <SiJupyter /> },
        { name: "Selenium (Web Scraping)", icon: <SiSelenium /> },
        { name: "Microsoft Office Suite", icon: <TbBrandOffice /> },
      ]
    },
    {
      category: "Core Competencies",
      skills: [
        { name: "Data Analysis", icon: <SiPandas /> },
        { name: "Data science", icon: <MdScience /> },
        { name: "AI Engineering", icon: <FaBrain  /> },
      ]
    }
  ],
  softSkills: [
    "Communication",
    "Team Leadership", 
    "Problem Solving",
    "Time Management",
    "Critical Thinking",
    "Mentoring & Teaching",
    "Collaboration & Teamwork",
    "Event Planning"
  ]
};


export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-[80vh] flex justify-center pt-0 relative z-0"
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
            Know More <span className="text-accent">About Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore my journey, skills, and experiences as I work towards becoming a skilled data scientist and developer.
          </p>
        </motion.div>

        <Tabs defaultValue="about" className="flex flex-col lg:flex-row gap-[60px]">
          
          {/* Tab list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about">About Me</TabsTrigger>
              <TabsTrigger value="experience-education">Education & Experience</TabsTrigger>
              <TabsTrigger value="volunteer-activities">Volunteer & Activities</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Tab content - 🔧 REDUCED HEIGHT to prevent overlap */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="min-h-[50vh] w-full" // ⚡ Reduced from 70vh to 50vh
          >
            {/* About */}
            <TabsContent value="about" className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-4">{about.title}</h3>
                <p className="max-w-[700px] text-white/70 text-lg leading-relaxed mb-8">{about.desc}</p>
              </motion.div>

              {/* Highlights Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
              >
                {about.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#232329] p-4 rounded-xl text-center hover:bg-[#2a2a30] transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{highlight.icon}</div>
                    <h4 className="text-white font-semibold mb-1">{highlight.title}</h4>
                    <p className="text-white/60 text-sm">{highlight.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Personal Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-6 text-accent">Personal Information</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {about.info.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-[#232329] p-4 rounded-lg flex justify-between items-center hover:bg-[#2a2a30] transition-all duration-300"
                    >
                      <span className="text-white/70 font-medium">{item.fieldname}:</span>
                      <span className="text-white text-right">{item.fieldvalue}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>

            {/* Education & Experience - 🔄 REORDERED */}
            <TabsContent value="experience-education">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-4">{experienceEducation.title}</h3>
                <p className="max-w-[600px] text-white/60 mb-8">{experienceEducation.desc}</p>
                
                {/* 🔧 REDUCED HEIGHT for ScrollArea */}
                <ScrollArea className="h-[350px]"> {/* ⚡ Reduced from 500px to 350px */}
                  <div className="space-y-8"> {/* ⚡ Reduced spacing from 10 to 8 */}
                    {/* 📚 EDUCATION FIRST */}
                    <div>
                      <h4 className="text-2xl font-bold mb-6 text-accent">{experienceEducation.education.title}</h4>
                      <ul className="grid grid-cols-1 gap-4"> {/* ⚡ Reduced gap from 6 to 4 */}
                        {experienceEducation.education.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#232329] p-5 rounded-xl hover:bg-[#2a2a30] transition-all duration-300" // ⚡ Reduced padding from 6 to 5
                          >
                            <span className="text-accent font-semibold">{item.year}</span>
                            <h3 className="text-xl font-semibold mt-2 mb-1">{item.title}</h3>
                            <p className="text-white/60 mb-3">{item.organization}</p>
                            <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* 💼 EXPERIENCE SECOND */}
                    <div>
                      <h4 className="text-2xl font-bold mb-6 text-accent">{experienceEducation.experience.title}</h4>
                      <ul className="grid grid-cols-1 gap-4"> {/* ⚡ Reduced gap from 6 to 4 */}
                        {experienceEducation.experience.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#232329] p-5 rounded-xl hover:bg-[#2a2a30] transition-all duration-300" // ⚡ Reduced padding from 6 to 5
                          >
                            <span className="text-accent font-semibold">{item.year}</span>
                            <h3 className="text-xl font-semibold mt-2 mb-1">{item.title}</h3>
                            <p className="text-white/60 mb-3">{item.organization}</p>
                            <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Volunteer & Activities - 🔧 REDUCED HEIGHT */}
            <TabsContent value="volunteer-activities">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-4">{volunteerActivities.title}</h3>
                <p className="max-w-[600px] text-white/60 mb-8">{volunteerActivities.desc}</p>
                
                {/* 🔧 REDUCED HEIGHT for ScrollArea */}
                <ScrollArea className="h-[350px]"> {/* ⚡ Reduced from 500px to 350px */}
                  <div className="space-y-8"> {/* ⚡ Reduced spacing from 10 to 8 */}
                    {/* Volunteer Work Section */}
                    <div>
                      <h4 className="text-2xl font-bold mb-6 text-accent">{volunteerActivities.volunteer.title}</h4>
                      <ul className="grid grid-cols-1 gap-4"> {/* ⚡ Reduced gap from 6 to 4 */}
                        {volunteerActivities.volunteer.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#232329] p-5 rounded-xl hover:bg-[#2a2a30] transition-all duration-300" // ⚡ Reduced padding from 6 to 5
                          >
                            <span className="text-accent font-semibold">{item.year}</span>
                            <h3 className="text-xl font-semibold mt-2 mb-1">{item.title}</h3>
                            <p className="text-white/60 mb-3">{item.organization}</p>
                            <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Activities Section */}
                    <div>
                      <h4 className="text-2xl font-bold mb-6 text-accent">{volunteerActivities.activities.title}</h4>
                      <ul className="grid grid-cols-1 gap-4"> {/* ⚡ Reduced gap from 6 to 4 */}
                        {volunteerActivities.activities.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#232329] p-5 rounded-xl hover:bg-[#2a2a30] transition-all duration-300" // ⚡ Reduced padding from 6 to 5
                          >
                            <span className="text-accent font-semibold">{item.year}</span>
                            <h3 className="text-xl font-semibold mt-2 mb-1">{item.title}</h3>
                            <p className="text-white/60 mb-3">{item.organization}</p>
                            <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Skills - 🔧 REDUCED HEIGHT */}
            <TabsContent value="skills">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-4">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mb-8">{skills.desc}</p>
                
                {/* 🔧 REDUCED HEIGHT for ScrollArea */}
                <ScrollArea className="h-[350px]"> {/* ⚡ Reduced from 500px to 350px */}
                  <div className="space-y-8"> {/* ⚡ Reduced spacing from 10 to 8 */}
                    {/* Technical Skills by Category */}
                    {skills.categories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h4 className="text-xl font-bold mb-4 text-accent">{category.category}</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"> {/* ⚡ Reduced gap from 4 to 3 */}
                          {category.skills.map((skill, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: i * 0.05,
                                ease: "backOut"
                              }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05, y: -5 }}
                              className="flex flex-col items-center bg-[#232329] p-3 rounded-xl hover:bg-[#2a2a30] transition-all duration-300 cursor-pointer" // ⚡ Reduced padding from 4 to 3
                            >
                              <span className="text-2xl text-accent mb-2">{skill.icon}</span> {/* ⚡ Reduced from 3xl to 2xl */}
                              <p className="text-xs text-center font-medium">{skill.name}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Soft Skills */}
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-accent">Soft Skills</h4>
                      <div className="flex flex-wrap gap-3">
                        {skills.softSkills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#232329] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2a2a30] transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </motion.div>
  );
}
