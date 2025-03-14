import DarkModeToggle from "@/components/DarkModeToggle";
import { CustomerGrowthContainer } from "./CustomerGrowthContainer";
import { DistributionInvestmentsContainer } from "./DistributionInvestmentsContainer";
import { EvolutionLoansContainer } from "./EvolutionLoansContainer";

export default function Home() {
  const greeting = () => {
    const horaAtual = new Date().getHours();

    if (horaAtual >= 6 && horaAtual < 12) {
      return "Bom dia!";
    }
    if (horaAtual >= 12 && horaAtual < 18) {
      return "Boa tarde!";
    }
    return "Boa noite!";
  };
  const greetingText = greeting()

  return (
    <div className="w-full bg-background dark:bg-darkBackground">
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col p-8 pb-0">
          <h1 className="text-xl font-bold dark:text-darkPrimaryText">
            {greetingText}
          </h1>
          <h2 className="text-xs font-normal text-secondaryText dark:text-darkSecondaryText">
            bem-vindo aos seus insights financeiros
          </h2>
        </div>
        <div className="p-8 pb-0">
          <DarkModeToggle />
        </div>
      </div>

      <div className="p-8 grid grid-cols-12 gap-4">
        <CustomerGrowthContainer />
        <DistributionInvestmentsContainer />
        <EvolutionLoansContainer />
      </div>
    </div>
  );
}
