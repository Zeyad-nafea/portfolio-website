"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Socials from "@/components/ui/socials";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "", subject: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "zeyad.nafea.cs@gmail.com",
      href: "mailto:zeyad.nafea.cs@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+20 127 556 1002",
      href: "tel:+201275561002"
    },
    {
      icon: "📍",
      title: "Location",
      value: "6th October, Giza, Egypt",
      href: "#"
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
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, internships, collaborations, or just having a chat about technology and data science.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <span className="text-2xl">{info.icon}</span>
                <div>
                  <h4 className="text-white font-semibold">{info.title}</h4>
                  <a
                    href={info.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <Socials 
              containerStyles="flex gap-6"
              iconStyles="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg">
                <p className="text-green-400 font-semibold">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg">
                <p className="text-red-400 font-semibold">Failed to send message. Please try again or contact me directly.</p>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
