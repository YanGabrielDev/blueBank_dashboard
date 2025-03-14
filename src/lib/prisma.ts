import { PrismaClient } from '@prisma/client';
import { createClient } from '@libsql/client';

// Configura o cliente do Turso DB
const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

// Estende o Prisma Client para usar o driver do Turso DB
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.TURSO_DATABASE_URL!,
    },
  },
});

export default prisma;