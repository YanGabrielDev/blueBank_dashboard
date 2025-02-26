import { CardWrapper } from "@/components/CardWrapper";
import { EvolutionLoansGraph } from "./EvolutionLoansGraph";
import { getEvolutionLoans } from "@/services/EvolutionLoans";

export const EvolutionLoans = async () => {
  const evolutionLoans = await getEvolutionLoans();

  if (!evolutionLoans?.data && !evolutionLoans?.summary) {
    return <span>Loading...</span>;
  }
  const { data, summary } = evolutionLoans;
  console.log(data);
  
  return (
    <div className="flex-col col-span-12">
      <CardWrapper
        title="Evolução de Empréstimos ao Longo do Tempo"
        writerText={summary.summary}
      >
        <EvolutionLoansGraph data={data} />
      </CardWrapper>
    </div>
  );
};
