import { api } from "@/lib/api"
import { DistributionInvestmentsResponse } from "./types"
const baseUrl = process.env.NEXT_PUBLIC_API_URL 

const getDistributionInvestments = async (): Promise<DistributionInvestmentsResponse | null> => {
    try {
      const response = await api.get(`${baseUrl}/distribution-investments`)
      return response.data
    } catch (error) {
      console.error("Erro ao buscar distribution investments:", error)
      return null
    }
  }

  export {getDistributionInvestments}