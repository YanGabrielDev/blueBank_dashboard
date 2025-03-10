import { CustomerGrowth } from "@/modules/Home/CustomerGrowth";
import { DistributionInvestments } from "@/modules/Home/DistributionInvestments";
import { EvolutionLoans } from "@/modules/Home/EvolutionLoans";

export default function Home() {
  return (
    <div className="w-full bg-background">
      <div className="flex flex-col p-8 pb-0">
        <h1 className="text-xl font-bold">Boa noite</h1>
        <h2 className="text-xs font-normal text-secondaryText">
          bem-vindo aos seus insights financeiros
        </h2>
      </div>
      <div className="p-8 grid grid-cols-12 gap-4">
        <CustomerGrowth />
        <DistributionInvestments />
        <EvolutionLoans />
      </div>
    </div>
  );
}
