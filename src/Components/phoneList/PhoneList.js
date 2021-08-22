import React from "react";
import { PhoneListContainer } from "./PhoneListStyled";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { getAllAdvByCategoryApi } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPhones } from "../../redux/products/productsActions";
import { getProductsFilterSelector } from "../../redux/products/productsSelectors";

const PhoneList = () => {
 const dispatch = useDispatch();
 const phones = useSelector((state) =>
  getProductsFilterSelector(state, "phones")
 );

 useEffect(() => {
  dispatch(getPhones);
 });

 const getPhones = async () => {
  const response = await getAllAdvByCategoryApi("phones");

  if (response) {
   const phonesList = Object.keys(response).map((key) => ({
    id: key,
    ...response[key],
   }));
   dispatch(setPhones(phonesList));
  }
 };

 return (
  <PhoneListContainer>
   {phones?.map((phone) => (
    <PhoneListItem phone={phone} key={phone.id} />
   ))}
  </PhoneListContainer>
 );
};
export default PhoneList;
