import React from "react";
import LogoImage from "../../assets/logoImage.png";
import styles from "../Logo/Logo.module.css";

export default function Logo() {
  return (
    <img className={styles.imgTag} src={LogoImage} alt="logo" width={67} />
  );
}
