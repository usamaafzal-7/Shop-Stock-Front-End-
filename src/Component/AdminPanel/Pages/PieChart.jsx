import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';


const data02 = [
    { name: 'A1', value: 30 },
    { name: 'A2', value: 20 },
    { name: 'B1', value: 50 },
    { name: 'B2', value: 18 },

];

const ChartsPie = () => {


    return (
        <ResponsiveContainer width="100%" height="90%">
            <PieChart >
                {/* <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" /> */}
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#3568EE" label />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default ChartsPie