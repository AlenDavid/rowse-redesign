import React from "react";

import styles from "../../styles/components/Container.module.scss";

const Container: React.FC = ({ children }) => {
  return <div className={styles.container} children={children} />;
};

export default Container;
