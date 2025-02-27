import Image from "next/image";
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
     {/* Hero Section */}
<section className="relative h-[400px]"> {/* Réduction de la hauteur */}
  <Image
    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600"
    alt="Yoga class"
    fill
    className="object-cover brightness-75"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-5xl font-bold mb-6">Bienvenue au Studio ZenFlow</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Découvrez l'équilibre parfait entre le corps et l'esprit grâce à nos
        cours de yoga et de Pilates dirigés par des experts
      </p>
    </div>
  </div>
</section>

     {/* Activities Section */}
<section className="mt-12">
  <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2> {/* Ajout du titre */}
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
</section>
    </div>
  );
}
