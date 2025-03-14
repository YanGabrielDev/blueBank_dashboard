"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CustomerGrowthGraphProps } from "./types";
import useDarkModeStore from "@/stores/useDarkModeStore";

export const CustomerGrowthGraph = ({ data }: CustomerGrowthGraphProps) => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tick={{ fill: isDarkMode ? "#a5a6aa" : "#37383a" }}
          tickLine={{ stroke: isDarkMode ? "#a5a6aa" : "#37383a" }}
        />
        <YAxis
          tick={{ fill: isDarkMode ? "#a5a6aa" : "#37383a" }}
          tickLine={{ stroke: isDarkMode ? "#a5a6aa" : "#37383a" }}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="clients"
          stroke="#8884d8"
          name="Clientes"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
