import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '1980', purchasingPower: 100 },
  { year: '1990', purchasingPower: 63 },
  { year: '2000', purchasingPower: 48 },
  { year: '2010', purchasingPower: 37 },
  { year: '2020', purchasingPower: 30 },
  { year: '2026', purchasingPower: 26 },
];

export default function InflationChart() {
    return (
        <div className="w-full h-full flex flex-col">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 text-center">Purchasing Power of $100</h3>
            <div className="flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
                        <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 100]} />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#f8fafc', color: '#0f172a' }} />
                        <Line type="monotone" dataKey="purchasingPower" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', strokeWidth: 2 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
