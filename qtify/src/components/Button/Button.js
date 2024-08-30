import React from "react";
import styles from "./Button.module.css";
function Button() {
  const handleClick = () => {
    console.log("FeedBack Button clicked >>>");
  };

  return (
    <>
      <button onClick={handleClick} className={styles.buttonStyle}>
        Give Feedback
      </button>
    </>
  );
}
export default Button;
