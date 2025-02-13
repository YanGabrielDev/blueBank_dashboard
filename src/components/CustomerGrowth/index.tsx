import React from "react";
import { CustomerGrowthGraph } from "./CustomerGrowthGraph";
import { CardWrapper } from "../CardWrapper";
export const CustomerGrowth = async () => {
  const response = await fetch("http://127.0.0.1:8000/summary/customerGrowth");
  const { data, summary } = await response.json();
  console.log(data);

  if (!data) {
    <span>Loading...</span>;
  }
  return (
    <div className="px-12 py-8 grid grid-cols-12 gap-4">
      <div className="flex-col col-span-12 sm:col-span-6 lg:col-span-6">
        <CardWrapper title="Crescimento de Clientes ao Longo do Tempo" writerText={summary.summary}>
          <CustomerGrowthGraph data={data} />
        </CardWrapper>
      </div>
    </div>
  );
};
