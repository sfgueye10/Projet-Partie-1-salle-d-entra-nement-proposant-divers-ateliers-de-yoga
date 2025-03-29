"use client";
import React, { useState } from "react";
import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";
import Image from "next/image";

const links = [
  { label: "Accueil", path: "/" },
  { label: "Événements", path: "/events" },
  { label: "Contact", path: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.menu}>
      {/* Menu desktop - caché sur mobile */}
      <ul className={styles.menuList}>
        {links.map((link, index) => (
          <MenuItem key={index} label={link.label} path={link.path} />
        ))}
      </ul>

      {/* Bouton hamburger - visible seulement sur mobile */}
      <button
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Menu"
      >
        <Image
          src={open ? "/icons/close.png" : "/icons/menu.png"}
          alt="Menu"
          width={30}
          height={30}
        />
      </button>

      {/* Menu mobile - conditionné par open */}
      <div className={styles.mobileMenu} open={open}>
        <ul>
          {links.map((link, index) => (
            <MenuItem
              key={index}
              label={link.label}
              path={link.path}
              onClick={() => setOpen(false)}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;