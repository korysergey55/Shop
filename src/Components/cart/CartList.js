import React from "react";
import styles from "./CartListStyled.module.css";
import CartListItem from "./cartListItem/CartListItem";

import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/cart/cartActions";
import { cartItemLengthSelector, cartItemSelector } from "../../redux/cart/cartSelectors";

const CartList = () => {
    
 const cartItems = useSelector(cartItemSelector);
 
 const dispatch = useDispatch();

 const getTotalPrice = () =>
  cartItems.reduce((acc, product) => {
   acc += Number(product.price);
   return acc;
  }, 0);

 return (
  <div className={styles.CartListContainerWrapper}>
   {cartItems.length ? (
    <>
    
     <ul className={styles.CartListContainer}>
      {cartItems.map((product) => (
       <CartListItem key={product.id} product={product} />
      ))}
     </ul>
     <div className={styles.totalInfo}>
      <p className={styles.totalInfoTitle}>Total price in order:</p>
      <p className={styles.totalInfoPrice}>
       {getTotalPrice()} <span className={styles.totalInfoPrice}>грн</span>
      </p>
      <button
       type="button"
       onClick={() => dispatch(createOrder())}
       className={styles.orderButton}
      >
       Bay
      </button>
     </div>
    </>
   ) : (
    <p>Cart is empty!</p>
   )}
  </div>
 );
};
export default CartList;
