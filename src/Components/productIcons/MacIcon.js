import React from "react";
import styles from "./IphoneIconStyled.module.css";
import sprite from "../../icons/productsSprite.svg";

const MacIcon = () => {
 return (
  <>
   <svg className={styles.headerIcon}>
    <use href={sprite + "#icon-computer-desktop"} />
   </svg>
  </>
 );
};

export default MacIcon;
