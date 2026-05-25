import { motion } from 'framer-motion';
import { Ship, Plane, Factory, Globe } from 'lucide-react';

export default function GlobalTradeViz() {
    return (
        <div className="relative w-full max-w-lg h-64 mx-auto flex items-center justify-between px-10">
            {/* Connection Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <motion.path
                    d="M 60 128 Q 150 50 250 128 T 440 128"
                    fill="transparent"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </svg>

            <motion.div 
                className="z-10 bg-white dark:bg-slate-800 p-4 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-cyan-500"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Factory size={32} />
            </motion.div>

            <motion.div 
                className="z-10 bg-white dark:bg-slate-800 p-4 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-cyan-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Ship size={32} />
            </motion.div>

            <motion.div 
                className="z-10 bg-white dark:bg-slate-800 p-4 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-cyan-500"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Globe size={32} />
            </motion.div>
        </div>
    );
}
