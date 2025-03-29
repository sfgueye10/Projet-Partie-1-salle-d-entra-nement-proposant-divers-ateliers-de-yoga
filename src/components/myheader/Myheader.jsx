'use client';

import React from "react";
import Logo from "./Logo";
import Menu from "./menu/Menu";
import ToggleButtons from "@/components/ToggleButtons"; // Ajout des boutons
import styles from "./Myheader.module.css";

const Myheader = () => {
	return (
		<header className={styles.Myheader}>
			<Logo />
			<Menu />
			<ToggleButtons /> {/* Boutons pour changer le thème et la langue */}
		</header>
	);
};

export default Myheader;
