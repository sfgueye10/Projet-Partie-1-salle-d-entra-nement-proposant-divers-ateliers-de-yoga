import styles from "./events.module.css";
import Card from "@/components/card/Card"; // Import du composant Card
import eventData from "@/data/eventData.json"; // Import des données

const PageEvents = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Calendrier des événements</h1>
			<div className={styles.description}>
			 Découvrez la sérénité et l'énergie dans notre salle d'entraînement, où
			 une variété d'ateliers de yoga et de Pilates vous attend. Que vous soyez
			 débutant ou pratiquant confirmé, nos événements vous permettent de vous
			 détendre, de renforcer votre corps et de trouver votre équilibre.
			 Explorez notre calendrier et rejoignez-nous pour des séances qui
			 nourrissent à la fois le corps et l'esprit.
			</div>
			<div className={styles.cardContainer}>
				{eventData.map((event) => (
					<Card
						key={event.id} // Clé unique pour React
						id={event.id}
						date={event.date}
						title={event.title}
						location={event.location}
						imageUrl={event.imageUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default PageEvents;

