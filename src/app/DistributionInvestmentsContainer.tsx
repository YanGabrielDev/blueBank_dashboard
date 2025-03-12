import { DistributionInvestments } from "@/modules/Home/DistributionInvestments";
import { getDistributionInvestments } from "@/services/distributionInvestments";

export const  DistributionInvestmentsContainer = async () => {
    const distributionInvestments = await getDistributionInvestments();
  
    if (!distributionInvestments || (!distributionInvestments.data && !distributionInvestments.summary)) {
      return <span>Loading...</span>;
    }
  
    const { data, summary } = distributionInvestments;
    return <DistributionInvestments data={data} summary={summary.summary}/>
}