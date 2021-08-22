import React from "react";
import { LaptopListContainer } from "./LaptopListStyled";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import { getAllAdvByCategoryApi } from "../../services/api";

import { setLaptops } from "../../redux/products/productsActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProductsFilterSelector} from "../../redux/products/productsSelectors";

const LaptopList = () => {

 const dispatch = useDispatch();
 const laptops = useSelector((state) =>
  getProductsFilterSelector(state, "laptops")
 );
 useEffect(() => {
  dispatch(getLaptops);
 });

 const getLaptops = async () => {
  const response = await getAllAdvByCategoryApi("laptops");
  if (response) {
   const laptopsList = Object.keys(response).map((key) => ({
    id: key,
    ...response[key],
   }));
   dispatch(setLaptops(laptopsList));
  }
 };

 return (
  <LaptopListContainer>
   {laptops?.map((laptop) => (
    <LaptopListItem laptop={laptop} key={laptop.id} />
   ))}
  </LaptopListContainer>
 );
};

export default LaptopList;
