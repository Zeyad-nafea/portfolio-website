"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Photo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render animations until client-side hydration is complete
  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="relative">
          <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten relative z-10">
            <Image
              src="/assets/photo.png"
              priority
              quality={100}
              fill
              draggable={false}
              alt="Profile photo"
              className="object-contain scale-80"
            />
          </div>
          <div className="absolute top-0 left-0 w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]">
            <svg
              className="w-full h-full"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="253"
                cy="253"
                r="248"
                stroke="#06b6d4"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="24 10 0 0"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Fade in ONCE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
        className="relative"
      >
        {/* Floating Image */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten relative z-10"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            draggable={false}
            alt="Profile photo"
            className="object-contain scale-80"
          />
        </motion.div>

        {/* Rotating circle border */}
        <div className="absolute top-0 left-0 w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]">
          <motion.svg
            className="w-full h-full"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ transformOrigin: "50% 50%" }}
          >
            <motion.circle
              cx="253"
              cy="253"
              r="248"
              stroke="#06b6d4"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: [
                  "15 120 25 25",
                  "16 25 92 72",
                  "4 250 22 22",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;