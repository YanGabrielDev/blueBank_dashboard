import { api } from "@/lib/api"
import { EvolutionLoansResponse } from "./types"
const baseUrl = process.env.NEXT_PUBLIC_API_URL 

const getEvolutionLoans = async (): Promise<EvolutionLoansResponse | null> => {
    try {
      const response = await api.get(`${baseUrl}/evolution-loans`)
      return response.data
    } catch (error) {
      console.error("Erro ao buscar evolution loans:", error)
      return null
    }
  }

  export {getEvolutionLoans}