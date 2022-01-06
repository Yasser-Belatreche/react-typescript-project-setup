import React from "react";

// styles
import styles from "./Home.module.scss";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <p className={styles.title}>Home page</p>
    </div>
  );
};

export { Home };
