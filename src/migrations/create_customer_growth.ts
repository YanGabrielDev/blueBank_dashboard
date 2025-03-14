'use server'
import { turso } from "@/lib/db";

export async function createCustomerGrowthTable() {
    try {
        await turso.execute(`
      CREATE TABLE IF NOT EXISTS customer_growth (
        id SERIAL PRIMARY KEY,
        month VARCHAR(255) NOT NULL,
        clients int NOT NULL,
        year int
      )
    `);
        console.log("Tabela 'customer_growth' criada com sucesso!");
    } catch (error) {
        console.error("Erro ao criar a tabela 'customer_growth':", error);
    }
}