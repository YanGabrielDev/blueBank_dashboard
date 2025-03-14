"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DistributionInvestmentsGraphProps } from "./types";
import useDarkModeStore from "@/stores/useDarkModeStore";

export const DistributionInvestmentsGraph = ({
  data,
}: DistributionInvestmentsGraphProps) => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
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
        <Bar
          dataKey="fixedIncome"
          stackId="a"
          fill="#8884d8"
          name="Renda Fixa"
        />
        <Bar dataKey="stocks" stackId="a" fill="#82ca9d" name="Ações" />
        <Bar
          dataKey="realEstateFunds"
          stackId="a"
          fill="#ffc658"
          name="Fundos Imobiliários"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
