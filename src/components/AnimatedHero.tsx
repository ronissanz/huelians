import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function AnimatedHero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const cardContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
  };

  // Replaced emojis with abstract, premium placeholder images
  const visualCards = [
    { id: "1", title: "Phase Mixture", color: "from-slate-950 via-slate-900/80 to-cyan-900/50", border: "border-cyan-500/30", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500&auto=format&fit=crop" },
    { id: "2", title: "Expansion", color: "from-slate-950 via-slate-900/80 to-blue-900/50", border: "border-blue-500/30", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop" },
    { id: "3", title: "Overshoot", color: "from-slate-950 via-slate-900/80 to-indigo-900/50", border: "border-indigo-500/30", image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=500&auto=format&fit=crop" },
    { id: "4", title: "Collapse", color: "from-slate-950 via-slate-900/80 to-purple-900/50", border: "border-purple-500/30", image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=500&auto=format&fit=crop" },
  ];

  return (
    // Reduced padding-top to move the text higher up on the screen
    <div className="relative min-h-[calc(100vh-12rem)] w-full flex flex-col items-center justify-start pt-6 md:pt-12 pb-24 overflow-hidden">

      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="fixed top-0 left-0 w-full flex justify-center pointer-events-none z-[-1]">
        <div className="w-[1000px] h-[500px] bg-cyan-500/15 blur-[120px] rounded-full translate-y-[-40%]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-4xl px-4 w-full"
      >
        {/* The badge has been entirely removed from here */}

        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-cyan-500 mb-6 py-2 leading-tight"
        >
          Cycle Theory.
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          Explore the cyclical nature of societal development, historical patterns, and human progress in this comprehensive deep-dive.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/modules"
            className={cn(
              "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 group hover:-translate-y-0.5 transition-transform shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
            )}
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#06b6d4_50%,#0f172a_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-2 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors">
              Start the Lesson
            </span>
          </a>

          <a href="/about" className="px-8 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all w-full sm:w-auto flex justify-center items-center">
            View Syllabus
          </a>
        </motion.div>
      </motion.div>

      {/* Moved the cards up slightly as well (mt-10 md:mt-16) */}
      <motion.div 
        variants={cardContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl px-6 mt-10 md:mt-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {visualCards.map((card) => (
            <motion.div 
              key={card.id}
              variants={cardItem}
              whileHover={{ scale: 1.02, y: -5 }}
              className={cn(
                "group relative h-64 md:h-80 rounded-3xl p-6 flex flex-col justify-end overflow-hidden border backdrop-blur-sm transition-all duration-500 shadow-xl",
                card.border
              )}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image Layer */}
              <img 
                src={card.image} 
                alt={card.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700 z-0"
              />

              {/* Gradient Overlay (Fades from dark bottom to colored top) */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t opacity-90 z-0",
                card.color
              )} />
              
              {/* Techy abstract element */}
              <div className="absolute top-6 left-6 flex flex-col gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <div className="w-8 h-1 rounded-full bg-white"></div>
                <div className="w-5 h-1 rounded-full bg-white/70"></div>
                <div className="w-10 h-1 rounded-full bg-white/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-widest text-white/50 uppercase mb-2 block transition-colors group-hover:text-white/80">Phase 0{card.id}</span>
                <h3 className="text-xl font-bold text-white leading-tight">{card.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
} 