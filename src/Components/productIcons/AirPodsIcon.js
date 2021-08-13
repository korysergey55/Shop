import React from "react";
import styles from "./IphoneIconStyled.module.css";
import sprite from "../../icons/productsSprite.svg";

const AirPodsIcon = () => {
 return (
  <>
   <svg className={styles.headerIcon}>
    <use href={sprite + "#icon-headphones"} />
   </svg>
  </>
 );
};

export default AirPodsIcon;
