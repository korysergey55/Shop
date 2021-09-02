import React from 'react';
import sprite from "../../../icons/header/symbol-defs.svg";
import styles from "./CartIconStyled.module.css";

const CartIcon = () => {
  return (
    <>
      <svg className={styles.cart}>
        <use href={sprite + "#icon-shopping-cart"} />
      </svg>
    </>
  );
}

export default CartIcon;