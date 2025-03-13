import { EvolutionLoans } from "@/modules/Home/EvolutionLoans";
import { getEvolutionLoans } from "../services/evolution";

export const  EvolutionLoansContainer = async () => {
    const evolutionLoans = await getEvolutionLoans();
  
    if (!evolutionLoans || (!evolutionLoans.data && !evolutionLoans.summary)) {
      return <span>Loading...</span>;
    }
  
    const { data, summary } = evolutionLoans;
    return <EvolutionLoans data={data} summary={summary.summary}/>
}