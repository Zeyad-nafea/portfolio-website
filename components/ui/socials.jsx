"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub size={28} />, path: "https://github.com/Zeyad-nafea", label: "GitHub" },
  { icon: <FaLinkedin size={28} />, path: "https://www.linkedin.com/in/zeyad-nafea/", label: "LinkedIn" },
  { icon: <FaInstagram size={28} />, path: "https://www.instagram.com/zeyad.nafea/", label: "Instagram" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`${iconStyles} transition-transform duration-300 hover:scale-110 hover:text-cyan-400`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;