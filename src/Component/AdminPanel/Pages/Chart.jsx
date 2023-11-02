import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Chart = () => {
  const data = [
    {
      name: 'Jan',
      uv: 700,
      pv: 350,

    },
    {
      name: 'Feb',
      uv: 900,
      pv: 850,

    },
    {
      name: 'Mar',
      uv: 900,
      pv: 1150,

    },
    {
      name: 'Apr',
      uv: 900,
      pv: 910,

    },
    {
      name: 'May',
      uv: 900,
      pv: 750,

    },
    {
      name: 'Jun',
      uv: 900,
      pv: 600,

    },
    {
      name: 'Jul',
      uv: 900,
      pv: 780,

    },
    {
      name: 'Aug',
      uv: 900,
      pv: 1000,

    },
    {
      name: 'Sep',
      uv: 900,
      pv: 1100,

    },
    {
      name: 'Oct',
      uv: 900,
      pv: 900,

    },
    {
      name: 'Nov',
      uv: 900,
      pv: 800,

    },
    {
      name: 'Dec',
      uv: 1200,
      pv: 1200,

    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{
        top: 20,
        right: 30,
        left: 10,
        bottom: 34,
      }}
        barSize={10}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis dataKey='uv' scale='auto' />
        <Tooltip />
        <Legend />2
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#3568EE" />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default Chart