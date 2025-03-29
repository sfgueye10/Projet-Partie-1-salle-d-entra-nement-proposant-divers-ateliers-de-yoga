'use client';
 
import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Hook pour la redirection
import styles from './contact.module.css';
import { handleContactForm } from './actions'; // Assure-toi que le chemin est correct
import Head from 'next/head';  // Importation du composant Head pour ajouter des métadonnées
 
const PageContact = () => {
  const [state, setState] = useState({ nomprenom: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const router = useRouter();  // Initialisation du hook useRouter
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const formData = new FormData(e.target);
    const result = await handleContactForm(null, formData);
 
    if (result.errors && Object.keys(result.errors).length > 0) {
      setErrors(result.errors);
    } else {
      router.push('/merci');  //  Redirection vers la page de remerciement
    }
  };
 
  return (
<>
      {/* Métadonnées pour le SEO */}
<Head>
<title>Contactez-nous - Studio ZenFlow</title>  {/* Titre de la page */}
<meta name="description" content="Contactez le Studio ZenFlow pour plus d'informations sur nos cours de yoga et de Pilates. Nous sommes là pour répondre à toutes vos questions." />  {/* Description */}
<meta name="keywords" content="contact, Studio ZenFlow, yoga, Pilates, demande d'informations" />  {/* Mots-clés */}
</Head>
 
      <form className={styles.container} onSubmit={handleSubmit}>
<h1 className={styles.title}>Contacter-nous</h1>
 
        <input
          type="text"
          name="nomprenom"
          placeholder="Nom Prénom"
          value={state.nomprenom}
          onChange={(e) => setState({ ...state, nomprenom: e.target.value })}
        />
        {errors.nomprenom && <p className={styles.error}>{errors.nomprenom}</p>}
 
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
 
        <textarea
          name="message"
          rows="3"
          placeholder="Rédiger votre message"
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
 
        <button type="submit">Envoyer</button>
</form>
</>
  );
};
 
export default PageContact;