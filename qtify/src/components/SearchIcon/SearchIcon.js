import React from "react";
import Searchicon from "../../assets/SearchIcon.png";
import styles from "../SearchIcon/SearchIcon.module.css";
function SearchIcon() {
  const handleClick = () => {
    console.log("SearchIcon Button clicked >>>");
  };
  return (
    <>
      <button onClick={handleClick} className={styles.searchIconButton}>
        <img src={Searchicon} alt="search-box" />
      </button>
    </>
  );
}
export default SearchIcon;
