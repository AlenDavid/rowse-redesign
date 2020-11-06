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
          <a href="#">Shop</a>
          <a href="#">Skin concerns</a>
        </div>
        <span
          className={`${styles.flex5} ${styles.center} ${styles.main_title}`}
        >
          The <span>Greenhouse</span>
        </span>
        <div
          className={`${styles.flex4} ${styles.center} ${styles.navbarcontent}`}
        >
          <a href="#">Beauty Recipes</a>
          <a href="#">Routines</a>
        </div>
        <div className={`${styles.flex2} ${styles.right}`}>
          <a className={styles.icon} href="#">
            <FontAwesomeIcon icon="search" />
          </a>
          <a className={styles.icon} href="#">
            {" "}
            <FontAwesomeIcon icon="store" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
