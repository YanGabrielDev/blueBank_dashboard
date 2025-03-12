import { CustomerGrowth } from "@/modules/Home/CustomerGrowth";
import { getCustomerGrowth } from "@/services/customerGrowth";

export const  CustomerGrowthContainer = async () => {
    const customerGrowth = await getCustomerGrowth();
  
    if (!customerGrowth || (!customerGrowth.data && !customerGrowth.summary)) {
      return <span>Loading...</span>;
    }
  
    const { data, summary } = customerGrowth;
    return <CustomerGrowth data={data} summary={summary.summary}/>
}