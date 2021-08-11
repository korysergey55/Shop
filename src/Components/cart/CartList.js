import React from "react";
import styles from "./CartListStyled.module.css";
import CartListItem from "./cartListItem/CartListItem";

import { connect } from "react-redux";
import { createOrder, removeFromCartByID } from "../../redux/cart/cartActions";

const CartList = ({ cart, removeFromCartByID, createOrder }) => {

 const getTotalPrice = () =>
  cart.reduce((acc, product) => {
   acc += Number(product.price);
   return acc;
  }, 0);

 return (
  <div className={styles.CartListContainerWrapper}>
   {cart.length ? (
    <>
     <ul className={styles.CartListContainer}>
      {cart.map((product) => (
       <CartListItem
        key={product.id}
        product={product}
        removeFromCart={removeFromCartByID}
       />
      ))}
     </ul>
     <div className={styles.totalInfo}>
      <p className={styles.totalInfoTitle}>Total price in order:</p>
      <p className={styles.totalInfoPrice}>
       {getTotalPrice()} <span className={styles.totalInfoPrice}>грн</span>
      </p>
     <button type="button" onClick={createOrder} className={styles.orderButton}>
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

const mapStateToProps = (state) => ({ cart: state.cart.items });

const mapDispatchToProps = { removeFromCartByID, createOrder };

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
