import React from "react";
import styles from "./IphoneIconStyled.module.css";
import sprite from "../../icons/productsSprite.svg";

const AppleWatchIcon = () => {
 return (
  <>
   <svg className={styles.headerIcon}>
    <use href={sprite + "#icon-watch"} />
   </svg>
  </>
 );
};

export default AppleWatchIcon;
