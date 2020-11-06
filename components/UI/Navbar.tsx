import React from "react";

import styles from "../../styles/components/Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.Navbar}>
      <h1 className={styles.title}>Rowse</h1>
    </nav>
  );
};

export default Navbar;
