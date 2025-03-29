'use server';
import { z } from 'zod';

// Schéma de validation avec Zod
const contactSchema = z.object({
  nomprenom: z.string().min(1, 'Le nom  est requis.'),
  email: z.string().email('Adresse email invalide.'),
  message: z.string().min(5, 'Le message doit contenir au moins 5 caractères.'),
});

export async function handleContactForm(prevState, formData) {
  // Récupérer les données avec formData.get()
  const nomprenom = formData.get("nomprenom");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validation des données avec Zod
  const validationResult = contactSchema.safeParse({
    nomprenom,
    email,
    message,
  });

  // Vérifier si la validation a échoué
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    return { errors };
  }

  // Simuler l'envoi des données 
  console.log("Données soumises :", { nomprenom, email, message });

  // Retourner un état de succès
  return { success: true, errors: {} };
}
