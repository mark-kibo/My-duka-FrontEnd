import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function PieChartPlot() {

    return (
        <>
            <PieChart width={400} height={250}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='grid grid-cols-4'>

                {data.map((item, index) => (
                    <p key={index} className='cursor-pointer font- font-semibold'>{item.name}</p>
                ))}
            </div>

            {/* <div className='grid grid-cols-4 mt-5'>

                {COLORS.map((item, index) => (
                    <div className='h-[30px] w-[30px]' style={{background:item}} key={index}>

                    </div>
                ))}
            </div> */}
        </>
    );
}
