import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/components/Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navcontainer}>
      <div className={styles.navbar}>
        <h1 className={styles.flex2}>ROWSE</h1>
        <div
          className={`${styles.flex4} ${styles.center} ${styles.navbarcontent}`}
        >
          <a href="#shop">Shop</a>
          <a href="#skin">Skin concerns</a>
        </div>
        <span
          className={`${styles.flex5} ${styles.center} ${styles.main_title}`}
        >
          THE <span>GREENHOUSE</span>
        </span>
        <div
          className={`${styles.flex4} ${styles.center} ${styles.navbarcontent}`}
        >
          <a href="#recipes">Beauty Recipes</a>
          <a href="#routines">Routines</a>
        </div>
        <div className={`${styles.flex2} ${styles.right}`}>
          <a className={styles.icon} href="/search">
            <FontAwesomeIcon icon="search" />
          </a>
          <a className={styles.icon} href="/store">
            {" "}
            <FontAwesomeIcon icon="store" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
