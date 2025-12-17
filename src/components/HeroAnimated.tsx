"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  title1: string;
  title2: string;
  paragraph: string;
  cta: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.16, duration: 0.6 },
  }),
};

export default function HeroAnimated({ title1, title2, paragraph, cta }: HeroProps) {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6" variants={fadeIn} custom={0}>
            {title1}
            <br className="hidden md:block" />
            {title2}
          </motion.h1>

          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10" variants={fadeIn} custom={1}>
            {paragraph}
          </motion.p>

          <motion.a
            href="#konzultace"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition"
            variants={fadeIn}
            custom={2}
            whileHover={{ scale: 1.03 }}
          >
            {cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
