"use client";


import React from "react";
import { motion, type MotionProps } from "framer-motion";

type DivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;
type H1Props = MotionProps & React.HTMLAttributes<HTMLHeadingElement>;
type PProps = MotionProps & React.HTMLAttributes<HTMLParagraphElement>;
type AProps = MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const MotionDiv = (props: DivProps) => <motion.div {...props} />;
export const MotionH1 = (props: H1Props) => <motion.h1 {...props} />;
export const MotionP = (props: PProps) => <motion.p {...props} />;
export const MotionA = (props: AProps) => <motion.a {...props} />;

export default MotionDiv;

