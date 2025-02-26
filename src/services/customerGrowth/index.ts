import { api } from "@/lib/api"
import { CustomerGrowthResponse } from "./types"

const baseUrl = process.env.NEXT_PUBLIC_API_URL 

const getCustomerGrowth = async (): Promise<CustomerGrowthResponse | null> => {
  try {
    const response = await api.get(`${baseUrl}/customer-growth`)
    return response.data
  } catch (error) {
    console.error("Erro ao buscar customer growth:", error)
    return null
  }
}

export { getCustomerGrowth }