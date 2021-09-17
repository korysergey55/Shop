import React from "react";
import { IpadUl } from './IpadListStyled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdvByCategoryApi } from "../../services/api";

import { setIpads } from "../../redux/products/productsActions";
import { getIpadsSelector } from "../../redux/products/productsSelectors";
import IpadListItem from './ipadList/IpadListItem'

const IpadList = () => {
  const dispatch = useDispatch();
  const ipads = useSelector(getIpadsSelector);

  useEffect(() => {
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
    getIpads();
  }, [dispatch]);

  return (
    <IpadUl>
      {ipads?.map((ipad) => (
        <IpadListItem ipad={ipad} />
      ))}
    </IpadUl>
  );
};

export default IpadList;
