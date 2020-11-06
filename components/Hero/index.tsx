import React from "react";

import styles from "../../styles/components/Hero.module.scss";
import Navbar from "../UI/Navbar";

const Hero: React.FC = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.card}></div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.card_sm}></div>
          <div className={styles.card_sm}></div>
          <div className={styles.card_sm}></div>
          <div className={styles.card_sm}></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
