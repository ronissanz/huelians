import { useState } from 'react';

export default function GdpChart() {
    const [priceBase, setPriceBase] = useState(100);
    const [priceCurrent, setPriceCurrent] = useState(120);
    const [quantity, setQuantity] = useState(1000);

    const nominalGDP = priceCurrent * quantity;
    const realGDP = priceBase * quantity;
    const inflationRate = ((priceCurrent - priceBase) / priceBase) * 100;

    return (
        <div className="w-full h-full flex flex-col justify-center gap-6 text-slate-800 dark:text-slate-200">
            
            <div className="space-y-6">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Base Year Price</label>
                        <span className="text-sm font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">${priceBase}</span>
                    </div>
                    <input type="range" min="50" max="200" value={priceBase} onChange={(e) => setPriceBase(Number(e.target.value))} className="accent-cyan-500 w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Current Year Price</label>
                        <span className="text-sm font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">${priceCurrent}</span>
                    </div>
                    <input type="range" min="50" max="250" value={priceCurrent} onChange={(e) => setPriceCurrent(Number(e.target.value))} className="accent-cyan-500 w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Production Volume (Units)</label>
                        <span className="text-sm font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">{quantity}</span>
                    </div>
                    <input type="range" min="500" max="2000" step="100" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="accent-cyan-500 w-full" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-center shadow-inner">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Nominal GDP</span>
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">${nominalGDP.toLocaleString()}</span>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-900/30 dark:to-slate-800 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800 flex flex-col justify-center shadow-md">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 block mb-1">Real GDP (Base Adj)</span>
                    <span className="text-3xl font-bold text-cyan-700 dark:text-cyan-300">${realGDP.toLocaleString()}</span>
                </div>
            </div>
            <div className="text-center text-xs font-medium text-slate-500 mt-2">
                Calculated Price Inflation: <span className={`font-bold ml-1 ${inflationRate > 0 ? "text-red-500" : "text-green-500"}`}>{inflationRate > 0 ? '+' : ''}{inflationRate.toFixed(1)}%</span>
            </div>
        </div>
    );
}
