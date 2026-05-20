import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function AnimatedHero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="relative min-h-[calc(100vh-12rem)] w-full flex flex-col items-center justify-center mt-8">

      {/* THE FIX 1: Softer Grid 
          Changed the color to a very faint white (0.03 opacity) and made the squares slightly larger.
      */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="fixed top-0 left-0 w-full flex justify-center pointer-events-none z-[-1]">
        <div className="w-[1000px] h-[500px] bg-cyan-500/15 blur-[120px] rounded-full translate-y-[-40%]" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-4xl px-4 w-full"
      >
        {/* Floating Particles */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[10%] md:left-[20%] w-2 h-2 rounded-full bg-cyan-400 blur-[1px] pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-[5%] md:right-[15%] w-3 h-3 rounded-full bg-blue-400 blur-[2px] pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-10 left-[20%] md:left-[30%] w-1.5 h-1.5 rounded-full bg-cyan-300 pointer-events-none"
        />
        <motion.div variants={item} className="mb-8 flex justify-center">
          <span className="px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            ✨ GNED07 Interactive Lesson
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          whileHover={{ scale: 1.05, textShadow: "0px 10px 30px rgba(6,182,212,0.8)" }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-600 mb-6 py-2 leading-tight drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-default transition-all duration-300"
        >
          Cycle Theory
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          Explore the cyclical nature of societal development, historical patterns, and human progress in this comprehensive deep-dive.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/modules"
            className={cn(
              "relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 group hover:-translate-y-1 transition-transform shadow-2xl shadow-cyan-500/20 w-full sm:w-auto"
            )}
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#06b6d4_50%,#0f172a_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-2 text-base font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors">
              Start the Lesson
            </span>
          </a>

          <a href="/about" className="text-base font-medium text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
            View Syllabus <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </motion.div>

    </div>
  );
}