       'use client'
       import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
       
       interface CustomerGrowthGraphProps{
        data: {month: string, clients: number}[]
       }
       export const CustomerGrowthGraph = ({data}: CustomerGrowthGraphProps) => {

        return(<ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="clients" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer> )
        }