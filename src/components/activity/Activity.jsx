import styles from "./Activity.module.css";

const getRandomColor = () => {
	const colors = ["#A8D5BA", "#F7CAC9", "#FFDDC1", "#B5EAD7", "#C7CEEA"];
	return colors[Math.floor(Math.random() * colors.length)];
};

const Activity = ({ name, description, image }) => {
	const avatarColor = getRandomColor();
	const initials = name ? name.charAt(0).toUpperCase() : "?";

	return (
		<div className={styles.card}>
			<div className={styles.avatarContainer}>
				{image ? (
					<img src={image} alt={name} className={styles.avatarImage} />
				) : (
					<div
						className={styles.avatarPlaceholder}
						style={{ backgroundColor: avatarColor }}
					>
						{initials}
					</div>
				)}
			</div>
			<h3 className={styles.name}>{name}</h3>
			<p className={styles.description}>{description}</p>
			<button className={styles.button}>Voir Détails</button>
		</div>
	);
};

export default Activity;