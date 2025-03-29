"use client"; // Marquer ce composant comme un Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Utiliser next/navigation au lieu de next/router
import styles from './merci.module.css';
import Head from 'next/head';  // Importer le composant Head pour ajouter des métadonnées

export default function ThankYouPage() {
    const router = useRouter(); // Initialisation du routeur pour la redirection

    useEffect(() => {
        // Définir un délai de 10 secondes avant la redirection
        const timer = setTimeout(() => {
            router.push('/'); // Rediriger vers la page d'accueil
        }, 10000); 
        // Nettoyer le timer si le composant est démonté avant la fin du délai
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            {/* Métadonnées pour le SEO */}
            <Head>
                <title>Merci - Studio ZenFlow</title>  {/* Titre de la page */}
                <meta name="description" content="Merci de nous avoir contactés ! Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais." />  {/* Description */}
                <meta name="keywords" content="merci, contact, Studio ZenFlow, réponse rapide, page de remerciement" />  {/* Mots-clés */}
            </Head>

            <div className={styles.container}>
                <h1 className={styles.title}>Merci de nous avoir contactés !</h1>
                <p className={styles.message}>
                    Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                </p>
                <p className={styles.redirect}>
                    Retour à l'accueil<br />
                    (Vous serez redirigé automatiquement dans 10 secondes)
                </p>
                <a href="/" className={styles.link}>Retour à l’accueil</a>
            </div>
        </>
    );
}
