"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  // simple mode: 'reveal' (staggered children) or 'parallax' (y parallax on container)
  mode?: "reveal" | "parallax";
  parallaxRange?: [number, number];
}

export default function ScrollReveal({
  children,
  className,
  stagger = 0.12,
  once = true,
  mode = "reveal",
  parallaxRange = [-20, 20],
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, margin: "0px 0px -10% 0px" });

  if (mode === "parallax") {
    // simple parallax using CSS transform on scroll is more involved; for now
    // we provide a subtle mount-based transform when it becomes visible.
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ y: parallaxRange[0], opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  }

  // reveal mode: stagger children
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const items = React.Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
