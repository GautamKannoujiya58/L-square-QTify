import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";
function AlbumCard({ title, follows, albumImage }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imgDiv}>
          <img src={albumImage} alt="cardImage" />
        </div>
        <div className={styles.chip}>
          <Chip
            style={{
              color: "#FFFFFF",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "10px",
              lineHeight: "15px",
              paddingBottom: "8px",
            }}
            label={follows + " Follows"}
          />
        </div>
        <p className={styles.contentType}>{title}</p>
      </div>
    </>
  );
}
export default AlbumCard;
