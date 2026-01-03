"use client";

import { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      {/* Moon on the left */}
      <span className={styles.moon}>🌙</span>

      {/* Sun on the right */}
      <span className={styles.sun}>☀️</span>

      {/* Sliding ball */}
      <span
        className={`${styles.ball} ${
          mode === "light" ? styles.light : styles.dark
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
