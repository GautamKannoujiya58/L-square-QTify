import React from "react";
import Searchicon from "../../assets/SearchIcon.png";
import styles from "../SearchIcon/SearchIcon.module.css";
function SearchIcon() {
  return (
    <>
      <button className={styles.searchIconDiv}>
        <img src={Searchicon} alt="search-box" />
      </button>
    </>
  );
}
export default SearchIcon;
