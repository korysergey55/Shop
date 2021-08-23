import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdvByCategoryApi } from "../../services/api";

import { setIpads } from "../../redux/products/productsActions";
import { getIpadsSelector } from "../../redux/products/productsSelectors";

const IpadList = () => {

 const dispatch = useDispatch();
 const ipads = useSelector(getIpadsSelector);

 useEffect(() => {
  dispatch(getIpads);
 }, [dispatch]);

 const getIpads = async () => {
  const response = await getAllAdvByCategoryApi("ipad");

  if (response) {
   const ipadsList = Object.keys(response).map((key) => ({
    id: key,
    ...response[key],
   }));
   dispatch(setIpads(ipadsList));
  }
 };
 return (
  <ul>
   {ipads?.map((ipad) => (
    <li>{ipad.description}</li>
   ))}
  </ul>
 );
};

export default IpadList;
