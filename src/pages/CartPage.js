import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartList from "../Components/cart/CartList";
import CartModal from "../Components/cart/cartModal/CartModal";
import CartOrder from "../Components/cart/cartOrder/CartOrder";
import Section from "../Components/section/Section";
import { createOrder } from "../redux/cart/cartActions";
import {
  cartItemSelector,
  cartModalSelector,
} from "../redux/cart/cartSelectors";

const CartPage = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(cartModalSelector);
  const cartItems = useSelector(cartItemSelector);

  useEffect(() => {
    dispatch(createOrder(cartItems));
  }, [dispatch, cartItems, openModal]);
  return (
    <>
      <Section title="Cart">
        <CartList />
        {openModal ? <CartModal children={<CartOrder />} /> : null}
      </Section>
    </>
  );
};

export default CartPage;
