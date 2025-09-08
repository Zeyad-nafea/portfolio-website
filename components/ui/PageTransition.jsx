"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Fast page animation variants
const variants = {
  hidden: { opacity: 0, y: 10 },        // starting slightly below
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0, ease: "easeInOut" }, // fast
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0, ease: "easeInOut" }, // fast
  },
};

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="Wait" initial={false}>
      <motion.div
        key={pathname}           // ensures animation runs on route change
        variants={variants}      // apply variants
        initial="hidden"         // start hidden
        animate="enter"          // animate in
        exit="exit"              // animate out
        className="min-h-screen w-full"
        suppressHydrationWarning // avoids SSR mismatch warnings
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
