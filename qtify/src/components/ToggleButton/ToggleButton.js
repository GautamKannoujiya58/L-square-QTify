import React, { useState } from "react";
import styles from "./ToggleButton.module.css";
function ToggleButton({ isClicked, albumName }) {
  const [isShowAll, setIsShowALL] = useState(false);
  const handleShowAllClick = () => {
    const prevState = !isShowAll;
    setIsShowALL(prevState);
    isClicked(prevState);
  };
  return (
    <>
      <div className={styles.albumTopBar}>
        {albumName === "NewAlbum" ? (
          <p className={styles.heading}>Top Albums</p>
        ) : (
          <p className={styles.heading}>New Albums</p>
        )}

        {!isShowAll ? (
          <button className={styles.toggleButton} onClick={handleShowAllClick}>
            Show all
          </button>
        ) : (
          <button className={styles.toggleButton} onClick={handleShowAllClick}>
            Collapse
          </button>
        )}
      </div>
    </>
  );
}
export default ToggleButton;
