import { useState } from 'react';

export default function CentralBankDash() {
    const [rate, setRate] = useState(5); // 0 to 10

    // High rate = low inflation, low job growth
    // Low rate = high inflation, high job growth
    const inflation = Math.max(1, 10 - rate);
    const jobs = Math.max(1, 10 - rate * 0.8);

    return (
        <div className="w-full flex flex-col items-center gap-8">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white text-center">Interest Rate Control</h3>
            
            <div className="flex gap-8 w-full justify-center">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Inflation</span>
                    <div className="w-16 h-32 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative flex items-end">
                        <div className="w-full bg-red-400 transition-all duration-300" style={{ height: `${inflation * 10}%` }}></div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Job Growth</span>
                    <div className="w-16 h-32 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative flex items-end">
                        <div className="w-full bg-cyan-400 transition-all duration-300" style={{ height: `${jobs * 10}%` }}></div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-xs">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span>Gas (Stimulate)</span>
                    <span>Brake (Cool)</span>
                </div>
                <input 
                    type="range" 
                    min="0" max="10" 
                    value={rate} 
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full accent-cyan-500"
                />
            </div>
        </div>
    );
}
