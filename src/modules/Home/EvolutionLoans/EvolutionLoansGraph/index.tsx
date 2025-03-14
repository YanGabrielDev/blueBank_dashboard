"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { EvolutionLoansGraphProps } from "./types";
import useDarkModeStore from "@/stores/useDarkModeStore";

export const EvolutionLoansGraph = ({ data }: EvolutionLoansGraphProps) => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
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
        <Area
          name="Empréstimos"
          type="monotone"
          dataKey="loans"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
