import React from "react";
import { WatchUl } from './IpadListStyled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdvByCategoryApi } from "../../services/api";

import { setWatch } from "../../redux/products/productsActions";
import { getAppleWatchesSelector } from "../../redux/products/productsSelectors";


const AppleWatchList = () => {
  const dispatch = useDispatch();
  const appleWatch = useSelector(getAppleWatchesSelector);

  useEffect(() => {
    const setAppleWatches = async () => {
      const response = await getAllAdvByCategoryApi("appleWatch");
      if (response) {
        const watchList = Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
        dispatch(setWatch(watchList));
      }
    };
    setAppleWatches();
  }, [dispatch]);

  return (
    <WatchUl>
      {appleWatch?.map((watch) => (
        <p>{watch.name}</p>
        // <WatchListItem watch={watch} />
      ))}
    </WatchUl>
  );
};

export default AppleWatchList;

