import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroDiv}>
      <div className={styles.hero}>
        <div className={styles.h1Div}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1 style={{ marginTop: "-20px" }}>
            Over thousands podcast episodes
          </h1>
        </div>
        <img
          className={styles.heroImg}
          src={require("../../assets/hero_headphones.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
