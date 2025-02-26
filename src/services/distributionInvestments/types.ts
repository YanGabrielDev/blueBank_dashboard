export interface DistributionInvestmentsData{
    month: string,
    fixedIncome: number,
    stocks: number,
    realEstateFunds: number
}

export interface DistributionInvestmentsResponse{
 data: DistributionInvestmentsData[]
 summary: {summary: string}
}