import React from "react";
import styles from "./IphoneIconStyled.module.css";
import sprite from "../../icons/productsSprite.svg";

const IpadIcon = () => {
 return (
  <>
   <svg className={styles.headerIcon}>
    <use href={sprite + "#icon-tablet"} />
   </svg>
  </>
 );
};

export default IpadIcon;
