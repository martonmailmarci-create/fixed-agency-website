"use client";

import { motion, easeOut } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionOverlay() {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ x: "100%" }}
      animate={{ x: ["100%", 0, "-100%"] }}
      transition={{ duration: 0.6, ease: easeOut, times: [0, 0.5, 1] }}
      className="fixed inset-0 z-[60] pointer-events-none"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-[0.06]" />
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
    </motion.div>
  );
}
