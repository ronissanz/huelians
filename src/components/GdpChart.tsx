import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Consumers', value: 14000 },
  { name: 'Businesses', value: 3500 },
  { name: 'Government', value: 4000 },
  { name: 'Net Exports', value: -600 },
];

export default function GdpChart() {
    return (
        <div className="w-full h-full flex flex-col">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 text-center">GDP Components (Billions)</h3>
            <div className="flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} />
                        <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#f8fafc', color: '#0f172a' }} />
                        <Bar dataKey="value" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
