import styles from "./eventDetails.module.css"; 

const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL n'est pas défini dans .env.local");
}

// Fonction pour récupérer les événements depuis l'API
async function fetchEvent(eventId) {
  const res = await fetch(`${API_URL}/api/events/${eventId}`, {
    cache: "no-store", // Désactive la mise en cache pour obtenir les données en temps réel
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}

// Composant de la page de détail d'événement
export default async function PageEventDetail({ params }) {
  // Assurer que 'params' est bien résolu
  const { id: eventId } = await params;  // Ajouter 'await' pour récupérer l'id correctement

  // Récupérer l'événement en utilisant l'ID
  const event = await fetchEvent(eventId);

  // Vérifier si l'événement existe
  if (!event) {
    return <p className={styles.notFound}>Événement non trouvé !</p>;
  }

  // Affichage des détails de l'événement avec l'image
  return (
    <div className={styles.container}>
      <h1>{event.title}</h1>
      {event.imageUrl && (
        <img src={event.imageUrl} alt={event.title} className={styles.eventImage} />
      )}
      <p>{event.description}</p>
      <p>Lieu : {event.location}</p>
      <p>Date : {event.date}</p>
    </div>
  );
}
