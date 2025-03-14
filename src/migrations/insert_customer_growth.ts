// 'use server'
// import {PrismaClient} from '@prisma/client';
// const prisma = new PrismaClient();
// async function main() {
//     const customerGrowth = [
//         { "month": 'Janeiro', "clients": 1000 },
//         { "month": 'Fevereiro', "clients": 1200 },
//         { "month": 'Março', "clients": 1500 },
//         { "month": 'Abril', "clients": 1800 },
//         { "month": 'Maio', "clients": 2100 },
//         { "month": 'Junho', "clients": 2500 },
//         { "month": 'Julho', "clients": 2800 },
//         { "month": 'Agosto', "clients": 3000 },
//         { "month": 'Setembro', "clients": 3200 },
//         { "month": 'Outubro', "clients": 3500 },
//         { "month": 'Novembro', "clients": 3800 },
//         { "month": 'Dezembro', "clients": 4000 },
//       ]
//     // Inserir um novo post
//     const existingEntry = await prisma.customerGrowth.findFirst({
//         where: {
//           month: 'March', // Verificando um mês específico
//         },
//       });
  
//       if (!existingEntry) {
//     customerGrowth.forEach((async (data) => {
//         const newEntry = await prisma.customerGrowthInsert.create({
//             data
//           });
//           console.log('Novo newEntry inserido:', newEntry);

//     }))
  
// }
  
  
//     // Buscar todos os posts para verificar
//     const customerGrowths = await prisma.customerGrowthInsert.findMany();
//     console.log('Todos os newEntrys:', customerGrowths);
//   }
  
//   main()
//     .catch((e) => {
//       throw e;
//     })
//     .finally(async () => {
//       await prisma.$disconnect();
//     });