import React from "react";
import styles from './IphoneIconStyled.module.css'
import sprite from "../../icons/productsSprite.svg";
const IphoneIcon = () => {
 return (
  <>
   <svg className={styles.headerIcon}>
    <use href={sprite + "#icon-mobile-devices"} />
   </svg>
  </>
 );
};

export default IphoneIcon;
