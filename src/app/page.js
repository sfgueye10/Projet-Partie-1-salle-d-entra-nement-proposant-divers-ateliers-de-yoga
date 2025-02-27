import Activity from "@/components/activity/Activity";


const activities = [
	{
		name: "Yoga Vinyasa",
		description: "Un atelier dynamique de Yoga Vinyasa pour renforcer et détendre votre corps.",
		image: "/images/yogaV.jpg", 
	},
	{
		name: "Pilates",
		description: "Rejoignez notre séance de Pilates pour améliorer votre posture et flexibilité.",
		image: "/images/pilate.jpg", 
	},
	{
		name: "Yoga Relaxation",
		description: "Un atelier pour se détendre et se recentrer, avec des techniques de relaxation profondes.",
		image: "/images/yogaR.jpg", 
	},
	{
		name: "Pilates avancé",
		description: "Atelier Pilates pour ceux qui souhaitent relever un défi plus grand.",
		image: "/images/pilateA.jpg",
	},
];

export default function Home() {
	return (
		<div>
			<h1>Bienvenue à notre salle d'entraînement</h1>
			<p>
				Nous proposons une variété d'ateliers de yoga et de Pilates pour tous les niveaux.
				Rejoignez-nous pour améliorer votre bien-être et atteindre vos objectifs de santé.
			</p>

			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "20px",
					justifyContent: "center",
				}}
			>
				{activities.map((activity, index) => (
					<Activity key={index} {...activity} />
				))}
			</div>
		</div>
	);
}

