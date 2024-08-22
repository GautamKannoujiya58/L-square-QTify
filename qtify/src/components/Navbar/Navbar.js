import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
