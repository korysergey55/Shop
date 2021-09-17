import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdvByCategoryApi } from "../../services/api";

import { setAppleWatches } from "../../redux/products/productsActions";
import { getAppleWatchesSelector } from "../../redux/products/productsSelectors";

const AppleWatchList = () => {
  const dispatch = useDispatch();
  const appleWatch = useSelector(getAppleWatchesSelector);

  useEffect(() => {
    const getWatches = async () => {
      const response = await getAllAdvByCategoryApi("appleWatch");
      if (response) {
        const watchList = Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
        dispatch(setAppleWatches(watchList));
      }
    };
    getWatches();
  }, [dispatch]);

  return (
    <ul>
      {appleWatch?.map((watch) => (
        <p>{watch.name}</p>
        // <WatchListItem watch={watch} />
      ))}
    </ul>
  );
};

export default AppleWatchList;

