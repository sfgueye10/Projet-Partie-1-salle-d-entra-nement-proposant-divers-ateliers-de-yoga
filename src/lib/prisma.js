// src/lib/prisma.js
import { PrismaClient } from "@prisma/client";

// Crée une instance de PrismaClient
const prisma = new PrismaClient();

// Exporte l'instance pour pouvoir l'utiliser dans d'autres fichiers
export default prisma;
