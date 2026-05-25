import { useState, useEffect } from 'react';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [moduleNum, setModuleNum] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = document.querySelector('.snap-y');
            if (scrollContainer) {
                const scrolled = scrollContainer.scrollTop;
                const max = scrollContainer.scrollHeight - scrollContainer.clientHeight;
                const percent = (scrolled / max) * 100;
                setProgress(Math.min(100, Math.max(0, percent)));
                
                const currentMod = Math.round((scrolled / scrollContainer.clientHeight)) + 1;
                setModuleNum(Math.min(4, Math.max(1, currentMod)));
            }
        };

        const scrollContainer = document.querySelector('.snap-y');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            return () => scrollContainer.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div 
            className="fixed bottom-6 right-6 z-50 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-white/10 backdrop-blur-md shadow-lg py-2 rounded-full transition-all duration-300 ease-out overflow-hidden ${isHovered ? 'px-4' : 'px-2'}`}>
                <div className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" className="rotate-[-90deg]">
                        <circle cx="12" cy="12" r="10" fill="transparent" stroke="currentColor" strokeWidth="2" className="text-slate-200 dark:text-slate-800" />
                        <circle 
                            cx="12" cy="12" r="10" fill="transparent" stroke="currentColor" strokeWidth="2" 
                            className="text-cyan-500 transition-all duration-300 ease-out"
                            strokeDasharray={62.8} 
                            strokeDashoffset={62.8 - (progress / 100) * 62.8}
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div className={`text-xs font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap transition-all duration-300 ${isHovered ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'}`}>
                    Module {moduleNum} &middot; {Math.round(progress)}% Complete
                </div>
            </div>
        </div>
    );
}
