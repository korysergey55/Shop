import React, { Component } from "react";
import { PhoneListContainer } from "./PhoneListStyled";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { getAllAdvByCategoryApi } from "../../services/api";

import { connect } from "react-redux";
import { setPhones } from "../../redux/products/productsActions";
import { addToCart } from "../../redux/cart/cartActions";

class PhoneList extends Component {
 componentDidMount() {
  this.getPhones();
 }
 getPhones = async () => {
  const response = await getAllAdvByCategoryApi("phones");

  if (response) {
   const phones = Object.keys(response).map((key) => ({
    id: key,
    ...response[key],
   }));
   this.props.setPhones(phones);
  }
 };
 render() {
  return (
   <PhoneListContainer>
    {this.props.phones.map((phone) => (
     <PhoneListItem
      phone={phone}
      key={phone.id}
      addToCart={this.props.addToCart}
     />
    ))}
   </PhoneListContainer>
  );
 }
}

const mapStateToProps = (state) => {
 return {
  phones: state.products.items.phones,
 };
};

const mapDispatchToProps = { addToCart, setPhones };

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
