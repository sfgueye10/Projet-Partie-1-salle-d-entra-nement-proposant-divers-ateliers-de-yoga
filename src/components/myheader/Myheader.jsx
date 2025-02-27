import React from "react";
import Logo from "./Logo";
import Menu from "./menu/Menu";
import styles from "./Myheader.module.css";

const Myheader = (props) => {
	console.log(props);

	return (
		<div className={styles.Myheader}>
			<Logo />
			<Menu />
		</div>
	);
};

export default Myheader;
