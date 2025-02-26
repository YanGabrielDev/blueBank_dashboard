import React from "react";
import { CardWrapper } from "../../../components/CardWrapper";
import { getDistributionInvestments } from "@/services/distributionInvestments";
import { DistributionInvestmentsGraph } from "./DistributionInvestmentsGraph";


export const DistributionInvestments = async () => {
  const distributionInvestments = await getDistributionInvestments();


  if (!distributionInvestments?.data && !distributionInvestments?.summary) {
   return <span>Loading...</span>;
  }
  return (
    <div className="flex-col col-span-12 sm:col-span-6 lg:col-span-6">
        <CardWrapper title="Distribuição de Investimentos" writerText={distributionInvestments.summary.summary}>
          <DistributionInvestmentsGraph data={distributionInvestments?.data} />
        </CardWrapper>
      </div>
  );
};
