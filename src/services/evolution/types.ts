export interface EvolutionLoansData{
    month: string;
    loans: number;
}

export interface EvolutionLoansResponse{
 data: EvolutionLoansData[]
 summary: {summary: string}
}

