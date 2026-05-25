import { useState } from 'react';

export default function CentralBankDash() {
    const [baseRate, setBaseRate] = useState(5);

    const inflation = Math.max(1, 10 - baseRate);
    const employment = Math.max(1, 10 - baseRate * 0.7);

    return (
        <div className="w-full h-full flex flex-row items-center justify-center gap-16">
            {/* Vertical Slider */}
            <div className="flex flex-col items-center h-64 justify-between py-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-2">Brake</span>
                <input 
                    type="range" 
                    min="0" max="10" 
                    step="0.1"
                    value={baseRate} 
                    onChange={(e) => setBaseRate(Number(e.target.value))}
                    className="h-48 appearance-none bg-slate-200 dark:bg-slate-700 rounded-lg outline-none cursor-pointer border border-slate-300 dark:border-slate-600 shadow-inner"
                    style={{ writingMode: 'vertical-lr', direction: 'rtl' }}
                />
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-500 mt-2">Gas</span>
                <div className="mt-6 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest block text-cyan-600 dark:text-cyan-400">Base Rate</span>
                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{baseRate.toFixed(1)}%</span>
                </div>
            </div>

            {/* Metrics */}
            <div className="flex gap-10 h-64 items-end pb-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-48 bg-slate-100 dark:bg-slate-800/50 rounded-t-2xl overflow-hidden relative flex items-end border border-slate-200 dark:border-slate-700 shadow-inner">
                        <div className="w-full bg-gradient-to-t from-red-600 to-red-400 transition-all duration-300 ease-out" style={{ height: `${inflation * 10}%` }}></div>
                        {/* Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                            <div className="border-b border-white w-full h-1/4"></div>
                            <div className="border-b border-white w-full h-1/4"></div>
                            <div className="border-b border-white w-full h-1/4"></div>
                        </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center">Inflation<br/>Pressure</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-48 bg-slate-100 dark:bg-slate-800/50 rounded-t-2xl overflow-hidden relative flex items-end border border-slate-200 dark:border-slate-700 shadow-inner">
                        <div className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 transition-all duration-300 ease-out" style={{ height: `${employment * 10}%` }}></div>
                        <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                            <div className="border-b border-white w-full h-1/4"></div>
                            <div className="border-b border-white w-full h-1/4"></div>
                            <div className="border-b border-white w-full h-1/4"></div>
                        </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center">Employment<br/>Growth</span>
                </div>
            </div>
        </div>
    );
}
