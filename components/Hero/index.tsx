import React from "react";

import styles from "../../styles/components/Hero.module.scss";
import Navbar from "../UI/Navbar";

const Hero: React.FC = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1 className={styles.title}>Rowse</h1>
    </main>
  );
};

export default Hero;
