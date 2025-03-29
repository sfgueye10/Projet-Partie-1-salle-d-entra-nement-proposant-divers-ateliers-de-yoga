import ClientEvents from "./ClientEvents";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL n'est pas défini dans .env.local");
}

async function getServerEvents() {
  const res = await fetch(`${API_URL}/api/events`, { cache: "no-store" });

  if (!res.ok) throw new Error("Erreur lors du chargement des événements");
  return res.json();
}

export default async function PageEvents() {
  const initialEvents = await getServerEvents();
  return <ClientEvents initialEvents={initialEvents} />;
}
