import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "../SearchIcon/SearchIcon";
function Search() {
  return (
    <>
      <div className={styles.searchDiv}>
        <input
          className={styles.searchBox}
          type="text"
          placeholder="Search a album of your choice"
        />
        <SearchIcon />
      </div>
    </>
  );
}
export default Search;
