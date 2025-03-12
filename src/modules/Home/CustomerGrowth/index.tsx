import React from "react";
import { CardWrapper } from "../../../components/CardWrapper";
import { CustomerGrowthData } from "@/services/customerGrowth/types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SummaryDisplay from "@/components/SummaryDisplay";
import { CustomerGrowthGraph } from "./CustomerGrowthGraph";

type CustomerGrowthProps = {
  data: CustomerGrowthData[];
  summary: string;
};
export const CustomerGrowth = ({ data, summary }: CustomerGrowthProps) => {
  return (
    <div className="flex-col col-span-12 sm:col-span-6 lg:col-span-6">
      <Dialog>
        <DialogTrigger className="w-full">
          <CardWrapper title="Crescimento de Clientes ao Longo do Tempo">
            <CustomerGrowthGraph data={data} />
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
