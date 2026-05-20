import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Chapter {
  id: string;
  title: string;
  featured?: boolean;
}

const chapters: Chapter[] = [
  { 
    id: '1', 
    title: 'Foundations and Early Growth', 
    featured: true
  },
  { 
    id: '2', 
    title: 'Expansion and Peak Hubris', 
  },
  { 
    id: '3', 
    title: 'Totalitarian Control and Collapse', 
  },
  { 
    id: '4', 
    title: 'The Modern Cycle Case Study', 
  }
];

export default function AnimatedCards() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={container} 
      initial="hidden" 
      animate="show" 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-24"
    >
      {chapters.map((chapter) => (
        <Card key={chapter.id} chapter={chapter} itemVariant={item} />
      ))}
    </motion.div>
  );
}

function Card({ chapter, itemVariant }: { chapter: Chapter, itemVariant: any }) {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.a
      ref={divRef}
      href={`/chapters/${chapter.id}`}
      variants={itemVariant}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative block p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-white/5 hover:border-cyan-500/50 transition-colors overflow-hidden shadow-xl ${
        chapter.featured ? 'md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800' : 'md:col-span-1'
      }`}
    >
      {/* 3D Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 rounded-3xl"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6,182,212,.15), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-slate-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:bg-cyan-500/10 transition-colors">
            CHAPTER {chapter.id}
          </span>
          <h2 className={`font-bold text-white mb-4 leading-snug group-hover:text-cyan-300 transition-colors ${chapter.featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
            {chapter.title}
          </h2>
        </div>
        
        <div className="mt-8 flex items-center text-sm font-medium text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          Read Chapter <span aria-hidden="true" className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.a>
  );
}
