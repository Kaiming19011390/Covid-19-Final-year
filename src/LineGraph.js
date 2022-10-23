import React from 'react'
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Brush,AreaChart,Area,ResponsiveContainer,} from 'recharts';
 
const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },

  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  
];





function LineGraph() {

  return (
    <div style={{ width: '100%' }}>
        <h4>Still dk what to put</h4>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            width={500}
            height={250}
            data={data}
            syncId="anyId"
            margin={{top: 10,right: 30,left: 0,bottom: 0,}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Brush />
          </LineChart>
        </ResponsiveContainer>
        <h4>Still dk what to put</h4>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{ top: 10, right: 30,left: 0,bottom: 0,}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            <Brush />
          </LineChart>
        </ResponsiveContainer>

        <h4>Still dk what to put</h4>


        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            <Brush />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }

export default LineGraph;