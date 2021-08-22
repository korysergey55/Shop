import React from "react";
import { useSelector } from "react-redux";
import AuthForm from "../Components/auth/AuthForm";
import CartList from "../Components/cart/CartList";
import CartModal from "../Components/cart/cartModal/CartModal";
import Section from "../Components/section/Section";
import { cartItemSelector, modalSelector } from "../redux/cart/cartSelectors";

const CartPage = () => {
    const openModal = useSelector(modalSelector);
   
 return (
  <>
   <Section title="Cart">
    <CartList />
    {openModal ? <CartModal children={<CartList />} /> : null}
   </Section>
  </>
 );
};

export default CartPage;
