import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '1980', purchasingPower: 100 },
  { year: '1985', purchasingPower: 76.5 },
  { year: '1990', purchasingPower: 63.2 },
  { year: '1995', purchasingPower: 53.6 },
  { year: '2000', purchasingPower: 47.9 },
  { year: '2005', purchasingPower: 42.1 },
  { year: '2010', purchasingPower: 37.3 },
  { year: '2015', purchasingPower: 34.5 },
  { year: '2020', purchasingPower: 31.2 },
  { year: '2026', purchasingPower: 26.0 },
];

export default function InflationChart() {
    return (
        <div className="w-full h-full flex flex-col justify-center">
            <div className="flex-grow w-full h-full pt-8">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5}/>
                                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} vertical={false} />
                        <XAxis dataKey="year" stroke="#64748b" fontSize={12} tickMargin={10} axisLine={false} tickLine={false} />
                        <YAxis stroke="#64748b" fontSize={12} domain={[0, 100]} tickFormatter={(val) => `$${val}`} axisLine={false} tickLine={false} />
                        <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f8fafc', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            itemStyle={{ color: '#22d3ee', fontWeight: 'bold' }}
                            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Value']}
                            labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
                        />
                        <Area type="monotone" dataKey="purchasingPower" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
