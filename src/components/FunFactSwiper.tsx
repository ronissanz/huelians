import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Zap } from 'lucide-react';

const cards = [
    {
        type: 'fact',
        tag: "DID YOU KNOW?",
        title: "The Scale of Supply Chains",
        content: "A single cargo ship blocking the Suez Canal in 2021 held up an estimated $9.6 billion of trade each day. That's over $400 million every hour.",
    },
    {
        type: 'qa',
        tag: "QUICK CHECK",
        title: "Inflation Impact",
        content: "If your salary increases by 3% this year, but inflation rises by 5%, did your real purchasing power go up or down?",
        answer: "Down. Your real purchasing power decreased by 2%. You are technically making less money in real terms."
    },
    {
        type: 'fact',
        tag: "DID YOU KNOW?",
        title: "The Power of GDP",
        content: "If the state of California were a sovereign nation, its GDP would rank as the 5th largest economy in the world, larger than India or the UK."
    },
    {
        type: 'qa',
        tag: "QUICK CHECK",
        title: "Central Bank Actions",
        content: "When a central bank lowers interest rates, what is the primary goal?",
        answer: "To stimulate the economy by making borrowing cheaper, encouraging businesses to expand and consumers to spend."
    }
];

export default function FunFactSwiper() {
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleNext = () => {
        if (cards[index].type === 'qa' && !showAnswer) {
            setShowAnswer(true);
        } else {
            setShowAnswer(false);
            setIndex((prev) => (prev + 1) % cards.length);
        }
    };

    return (
        <div className="relative w-full max-w-2xl h-56 mx-auto mt-16 perspective-1000">
            {/* Background stacked cards for visual cue */}
            <div className="absolute inset-x-4 -bottom-4 h-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/30 dark:border-white/5 rounded-3xl shadow-sm rotate-1 scale-95 pointer-events-none"></div>
            <div className="absolute inset-x-8 -bottom-8 h-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border border-white/20 dark:border-white/5 rounded-3xl shadow-sm -rotate-1 scale-90 pointer-events-none"></div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={index + (showAnswer ? '-ans' : '')}
                    initial={{ opacity: 0, x: 50, rotateY: -10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -50, rotateY: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-white/60 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] rounded-3xl p-8 flex flex-col justify-center cursor-pointer group"
                    onClick={handleNext}
                >
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                            <Zap size={14} className={cards[index].type === 'qa' ? 'text-yellow-500' : ''} />
                            {cards[index].tag}
                        </span>
                        <span className="text-xs text-slate-400">{index + 1} / {cards.length}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cards[index].title}</h3>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {showAnswer ? cards[index].answer : cards[index].content}
                    </p>
                    
                    <div className="absolute bottom-6 right-6 flex items-center gap-2 text-cyan-600 dark:text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-semibold uppercase tracking-wider">
                            {cards[index].type === 'qa' && !showAnswer ? 'Reveal Answer' : 'Next'}
                        </span>
                        <ChevronRight size={18} />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
