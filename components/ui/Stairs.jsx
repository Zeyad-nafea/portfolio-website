"use client";

import { motion } from "framer-motion";

// Variants
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const STAIRS_COUNT = 6;

const reverseIndex = (index) => STAIRS_COUNT - index - 1;

const gradients = [
  "linear-gradient(to right, #0f172a, #1e293b)", // dark navy → slate
  "linear-gradient(to right, #1e293b, #334155)", // slate → gray
  "linear-gradient(to right, #111827, #1e293b)", // near black → slate
  "linear-gradient(to right, #0f172a, #111827)", // navy → black
  "linear-gradient(to right, #1e293b, #0f172a)", // slate → navy
  "linear-gradient(to right, #111827, #0f172a)", // black → navy
];

const Stairs = () => {
  return (
    <>
      {Array(STAIRS_COUNT)
        .fill(0)
        .map((_, index) => (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
              delay: reverseIndex(index) * 0.12,
            }}
            className="h-full w-full relative"
            style={{
              background: gradients[index % gradients.length], // cycle through gradients
              zIndex: STAIRS_COUNT - index,
            }}
          />
        ))}
    </>
  );
};

export default Stairs; 