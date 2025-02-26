import React from "react";
import { CustomerGrowthGraph } from "./CustomerGrowthGraph";
import { CardWrapper } from "../../../components/CardWrapper";
import { getCustomerGrowth } from "@/services/customerGrowth";

export const CustomerGrowth = async () => {
  const customerGrowth = await getCustomerGrowth();

  if (!customerGrowth || (!customerGrowth.data && !customerGrowth.summary)) {
    return <span>Loading...</span>;
  }

  const { data, summary } = customerGrowth;

  return (
      <div className="flex-col col-span-12 sm:col-span-6 lg:col-span-6">
        <CardWrapper title="Crescimento de Clientes ao Longo do Tempo" writerText={summary.summary}>
          <CustomerGrowthGraph data={data} />
        </CardWrapper>
      </div>
  );
};