import React from "react";
import { CardWrapper } from "../../../components/CardWrapper";
import { DistributionInvestmentsGraph } from "./DistributionInvestmentsGraph";
import { DistributionInvestmentsData } from "@/services/distributionInvestments/types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SummaryDisplay from "@/components/SummaryDisplay";

type DistributionInvestmentsProps = {
  data: DistributionInvestmentsData[];
  summary: string;
};

export const DistributionInvestments = async ({
  data,
  summary,
}: DistributionInvestmentsProps) => {
  return (
    <div className="flex-col col-span-12 sm:col-span-6 lg:col-span-6">
      <Dialog>
        <DialogTrigger className="w-full">
          <CardWrapper title="Distribuição de Investimentos">
            <DistributionInvestmentsGraph data={data} />
          </CardWrapper>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Resumo inteligente</DialogTitle>
          <SummaryDisplay text={summary} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
