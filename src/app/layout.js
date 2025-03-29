import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Myheader from "@/components/myheader/Myheader";
import Footer from "@/components/footer/Footer";
import { ThemeLangProvider } from "./context/ThemeLangContext"; // Ajout du provider

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Bonjour !",
	description: "Ici une nouvelle description de notre app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeLangProvider> {/* Contexte pour gérer thème & langue */}
					<Myheader />
					<div className="content">{children}</div>
					<Footer />
				</ThemeLangProvider>
			</body>
		</html>
	);
}
