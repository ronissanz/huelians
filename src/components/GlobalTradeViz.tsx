import { motion } from 'framer-motion';

export default function GlobalTradeViz() {
    return (
        <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-4">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
                {/* Node Japan to USA */}
                <motion.path
                    d="M 100 80 Q 200 100 300 150"
                    fill="transparent"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                {/* Node Italy to USA */}
                <motion.path
                    d="M 100 220 Q 200 200 300 150"
                    fill="transparent"
                    stroke="#0ea5e9"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            </svg>

            {/* Nodes */}
            <div className="absolute top-[20%] left-[15%] flex flex-col items-center gap-2">
                <div className="w-5 h-5 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 text-center">Japan<br/>(Main Wings)</span>
            </div>

            <div className="absolute bottom-[20%] left-[15%] flex flex-col items-center gap-2">
                <div className="w-5 h-5 bg-sky-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.6)]"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 text-center">Italy<br/>(Fuselage)</span>
            </div>

            <div className="absolute top-[50%] right-[15%] -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] border-2 border-white dark:border-slate-800"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white text-center">USA<br/>(Final Assembly)</span>
            </div>
        </div>
    );
}
