import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import {
	CalendarIcon,
	MapPinIcon,
	UsersIcon,
	ChartBarIcon,
	ShareIcon,
} from "@heroicons/react/20/solid";

const Card = ({
	id,
	date = "Dimanche, 12 Avril | 10:00 AM",
	title = "Atelier Yoga & Méditation",
	location = "Montréal, Canada",
	imageUrl,
}) => {
	return (
		<div className={styles.card}>
			{/* Header avec image */}
			<div className={styles.cardHeader}>
				{imageUrl && (
					<Image src={imageUrl} alt={title} fill className={styles.cardImage} />
				)}
			</div>

			{/* Contenu */}
			<div className={styles.cardContent}>
				<div className={styles.eventDate}>
					<CalendarIcon className="h-5 w-5 text-green-600" />
					<span>{date}</span>
				</div>

				<h3 className={styles.eventTitle}>{title}</h3>

				<div className={styles.eventLocation}>
					<MapPinIcon className="h-5 w-5 text-green-600" />
					<span>{location}</span>
				</div>
			</div>

			{/* Footer avec icônes */}
			<div className={styles.cardFooter}>
				<UsersIcon className="h-5 w-5 text-gray-500 hover:text-green-600" />
				<ChartBarIcon className="h-5 w-5 text-gray-500 hover:text-green-600" />
				<ShareIcon className="h-5 w-5 text-gray-500 hover:text-green-600" />
			</div>

			{/* Bouton "Voir Détails" */}
			<div className={styles.cardActions}>
				<Link href={`/events/${id}`} className={styles.detailsButton}>
					VOIR DÉTAILS
				</Link>
			</div>
		</div>
	);
};

export default Card;
