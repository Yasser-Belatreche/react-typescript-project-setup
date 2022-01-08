import React from "react";

// styles
import styles from "./Home.module.scss";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <h1>Happy Coding ✌️✌️</h1>
      <p>
        Made By{" "}
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/yasser-belatreche-6b450620a/"
        >
          Yasser
        </a>
      </p>
    </div>
  );
};

export { Home };
