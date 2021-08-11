import React, { Component, Suspense } from "react";
import { MainContainer } from "./MainStyled";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { createNewOrderApi, getAllAdvByCategoryApi } from "../../services/api";

class Main extends Component {
 state = {
  cart: [],
  phones: [],
  laptops: [],
  error: "К сожалению товары по данной категории отсутствуют",
 };

 async componentDidMount() {
  this.getPhones();
  this.getLaptops();
 }

 getPhones = async () => {
  const response = await getAllAdvByCategoryApi("phones");
  // if (response) {
  //  const phones = Object.keys(response).map((key) => ({
  //   id: key,
  //   ...response[key],
  //  }));
  this.setState({ response });
  // }
 };

 getLaptops = async () => {
  const response = await getAllAdvByCategoryApi("laptops");
  // if (response) {
  //  const laptops = Object.keys(response).map((key) => ({
  //   id: key,
  //   ...response[key],
  //  }));
  this.setState({ response });
  // }
 };

 addNewAdv = (category, product) => {
  this.setState((prevState) => ({
   [category]: [...prevState[category], product],
  }));
 };

 addToCart = (product) =>
  this.setState((prev) => ({ cart: [...prev.cart, product] }));

 removeFromCart = (id) =>
  this.setState((prev) => ({
   cart: [...prev.cart.filter((product) => product.id !== id)],
  }));

 createOrder = () => {
  createNewOrderApi(this.state.cart);
  this.removeAllFromCart();
 };

 removeAllFromCart = () => this.setState({ cart: [] });

 getData = (name) => {
  switch (name) {
   case "products":
    return {
     phones: this.state.phones,
     laptops: this.state.laptops,
     addToCart: this.addToCart,
    };
   case "cart":
    return {
     cart: this.state.cart,
     removeFromCart: this.removeFromCart,
     createOrder: this.createOrder,
    };
   case "administration":
    return {
     addNewAdv: this.addNewAdv,
    };

   default:
    return {};
  }
 };

 render() {
  return (
   <MainContainer>
    <Suspense fallback={<h2>...loading</h2>}>
     <Switch>
      {mainRoutes.map(({ name, path, exact, component }) => (
       <Route
        path={path}
        exact={exact}
        component={component}
        key={path}
       />
      ))}
     </Switch>
    </Suspense>
   </MainContainer>
  );
 }
}

export default Main;
