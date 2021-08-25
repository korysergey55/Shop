import React from "react";
import styles from "./CartListStyled.module.css";
import CartListItem from "./cartListItem/CartListItem";

import { useDispatch, useSelector } from "react-redux";
import { taggleModal } from "../../redux/cart/cartActions";
import {
 cartItemSelector,
 cartTotalPricelSelector,
} from "../../redux/cart/cartSelectors";
import { remuveAllFromCartOperation } from "../../redux/cart/cartOperations";

const CartList = () => {
 const dispatch = useDispatch();
 const cartItems = useSelector(cartItemSelector);
 const totalPriceInOrder = useSelector(cartTotalPricelSelector);

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
       {totalPriceInOrder} <span className={styles.totalInfoPrice}>грн</span>
      </p>
      <button
       type="button"
       onClick={() => dispatch(taggleModal())}
       className={styles.orderButton}
      >
       Bay
      </button>
      <button
       type="button"
       onClick={() => dispatch(remuveAllFromCartOperation())}
       className={styles.remuveOrderButton}
      >
       Remuve all
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

//  const getTotalPrice = () =>
//   cartItems.reduce((acc, product) => {
//    acc += Number(product.price);
//    return acc;
//   }, 0);
