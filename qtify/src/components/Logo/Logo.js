import React from "react";
import LogoImage from "../../assets/logoImage.png";
import styles from "../Logo/Logo.module.css";

export default function Logo() {
  return (
    <>
      <div className={styles.imgTag}>
        <img src={LogoImage} alt="logo" width={67} />
      </div>
    </>
  );
}
