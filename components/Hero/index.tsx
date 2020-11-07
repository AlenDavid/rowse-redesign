import React from "react";

import styles from "../../styles/components/Hero.module.scss";

import Navbar from "../UI/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero: React.FC = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={`${styles.card_big} ${styles.card}`}>
            <span className={styles.arrow_icon}>
              <FontAwesomeIcon size="3x" icon="long-arrow-alt-down" />
            </span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={`${styles.card_sm} ${styles.card}`}>
            <h2>Care for mature skin</h2>
            <p>Keep an eye out for selection of raw ingredients.</p>
            <a href="#products">view products</a>
          </div>
          <div className={`${styles.card_sm} ${styles.card}`}>
            <h2>Evening Primrose oil</h2>
            <p>100% organic cold-pressed oil.</p>
            <a href="#Evening-Primrose-oil">view product</a>
          </div>
          <div className={`${styles.card_sm} ${styles.card}`}>
            <h2>Facial & Gua Sha kit</h2>
            <p>Our all time best-seller back in stock</p>
            <a href="#kit-facial-gua-sha">discover</a>
          </div>
          <div className={`${styles.card_sm} ${styles.card}`}>
            <h2>Concerns & Routines</h2>
            <p>Our all time best-seller back in stock</p>
            <a href="#all-time-products">view products</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
