import { CardWrapper } from "@/components/CardWrapper";
import { EvolutionLoansGraph } from "./EvolutionLoansGraph";
import { EvolutionLoansData } from "@/services/evolution/types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SummaryDisplay from "@/components/SummaryDisplay";
type EvolutionLoansProps = {
  data: EvolutionLoansData[];
  summary: string;
};
export const EvolutionLoans = ({ data, summary }: EvolutionLoansProps) => {
  return (
    <div className="flex-col col-span-12">
      <Dialog>
        <DialogTrigger className="w-full">
          <CardWrapper title="Evolução de Empréstimos ao Longo do Tempo">
            <EvolutionLoansGraph data={data} />
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
