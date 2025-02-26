export interface CustomerGrowthData{
    month: string, 
    clients: number
}

export interface CustomerGrowthResponse{
 data: CustomerGrowthData[]
 summary: {summary: string}
}