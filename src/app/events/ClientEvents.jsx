"use client";
import { useEffect, useState } from "react";
import styles from "./events.module.css";
import Card from "@/components/card/Card";
import Head from "next/head"; // Importer Head pour ajouter des métadonnées

const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL n'est pas défini dans .env.local");
}

export default function ClientEvents({ initialEvents }) {
  const [events, setEvents] = useState(initialEvents);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/events`);
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error("Erreur lors du rafraîchissement :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchEvents();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Calendrier des événements de Yoga et Pilates</title>
        <meta name="description" content="Découvrez notre calendrier d'événements, incluant des séances de yoga et Pilates, pour renforcer votre corps et esprit." />
        <meta name="keywords" content="événements, yoga, pilates, bien-être, relaxation, calendrier" />
        <meta name="author" content="TonNom ou leNomDeTonSite" />
      </Head>
      <h1 className={styles.title}>Calendrier des événements</h1>
      <p className={styles.description}>
        Découvrez la sérénité et l'énergie dans notre salle d'entraînement, où
        une variété d'ateliers de yoga et de Pilates vous attend. Que vous soyez
        débutant ou pratiquant confirmé, nos événements vous permettent de vous
        détendre, de renforcer votre corps et de trouver votre équilibre.
        Explorez notre calendrier et rejoignez-nous pour des séances qui
        nourrissent à la fois le corps et l'esprit.
      </p>
      <button onClick={fetchEvents} disabled={loading} style={{ padding: 4, fontSize: 16, cursor: "pointer", width: 170 }}>
        {loading ? "Chargement..." : "Rafraîchir"}
      </button>
      <div className={styles.cardContainer}>
        {events.map((event) => (
          <Card key={event.id} id={event.id} date={event.date} title={event.title} location={event.location} imageUrl={event.imageUrl} />
        ))}
      </div>
    </div>
  );
}
