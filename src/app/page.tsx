"use client";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Progress from "@/components/Progress";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });
  return (
    <motion.main ref={ref}>
      <Progress y={hookedYPostion} />
      <Hero />
      <Guide />
    </motion.main>
  );
}
