import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Supprime toutes les anciennes données de la table `event`
  await prisma.event.deleteMany();


  console.log("✅ Base de données mise à jour avec succès !");
}

main()
  .catch((error) => {
    console.error("❌ Erreur lors du seed :", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
