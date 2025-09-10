"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const certificates = [
  {
    title: "Junior Teaching Assistant",
    issuer: "Zewail City of Science and Technology",
    date: "2025",
    image: "/assets/certificates/jta confirmation letter.png",
    description: "Confirmation letter for Junior Teaching Assistant role"
  },
  {
    title: "Digital Literacy Certificate",
    issuer: "Microsoft & Partners",
    date: "2025",
    image: "/assets/certificates/microsoft and tawr w gayar digital litracy cert.jpg",
    description: "Digital literacy certification program"
  },
  {
    title: "Microsoft Office Specialist",
    issuer: "Microsoft",
    date: "2025",
    image: "/assets/certificates/microsoft office specialst.png",
    description: "Microsoft Office Suite proficiency certification"
  },
  {
    title: "Data Analysis Certificate",
    issuer: "Udacity & Egypt Digital Club",
    date: "2025",
    image: "/assets/certificates/udacity and egypt digital club certificate.jpg",
    description: "Comprehensive data science program completion"
  }
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
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
            My <span className="text-accent">Certificates</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise in data analysis and technology.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {certificates.map((cert, index) => (
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#232329] rounded-xl overflow-hidden hover:bg-[#2a2a30] transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-white/60 text-sm mb-1">{cert.issuer}</p>
                <p className="text-accent text-sm font-semibold">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Certificate Details */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#1c1c22] rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="space-y-2">
                <p className="text-white/80"><strong>Issuer:</strong> {selectedCert.issuer}</p>
                <p className="text-white/80"><strong>Date:</strong> {selectedCert.date}</p>
                <p className="text-white/80"><strong>Description:</strong> {selectedCert.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default CertificatesSection;
