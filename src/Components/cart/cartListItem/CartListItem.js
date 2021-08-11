import React from "react";
import styles from "./CartListItemStyled.module.css"
import sprite from "../../../icons/products/products.svg";

const CartListItem = ({ product, removeFromCart }) => {

  const { name, price, id, image } = product;
  const remove = () => removeFromCart(id);
  return (
   <li li className={styles.CartListItemContainer}>
    <p className={styles.cartItemName}>{name}</p>
    <img src={image} alt={name} className={styles.cartItemNameImage} />
    <p className={styles.cartPrice}>{price} грн</p>
    <div className={styles.iconContainer} onClick={remove}>
     <svg className={styles.iconBin}>
      <use href={sprite + "#icon-bin"} />
     </svg>
    </div>
   </li>
  );
};

export default CartListItem;