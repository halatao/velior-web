"use client";

import React from "react";
import { motion } from "framer-motion";

type MotionProps = React.ComponentProps<typeof motion.div> & { children?: React.ReactNode };

export const MotionDiv: React.FC<MotionProps> = (props) => {
  const { children, ...rest } = props;
  return <motion.div {...rest}>{children}</motion.div>;
};

export const MotionH1: React.FC<MotionProps> = (props) => {
  const { children, ...rest } = props;
  return <motion.h1 {...rest}>{children}</motion.h1>;
};

export const MotionP: React.FC<MotionProps> = (props) => {
  const { children, ...rest } = props;
  return <motion.p {...rest}>{children}</motion.p>;
};

export const MotionA: React.FC<MotionProps & { href?: string }> = (props) => {
  const { children, ...rest } = props as any;
  return <motion.a {...rest}>{children}</motion.a>;
};

export default MotionDiv;
