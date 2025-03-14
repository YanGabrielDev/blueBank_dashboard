import 'server-only';

import { createClient } from "@libsql/client";

// Criação do cliente Turso
export const turso = createClient({
    url: process.env.TURSO_DATABASE_URL ?? 's',
    authToken: process.env.TURSO_AUTH_TOKEN,
});


// Função para criar a tabela "houses"
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