import { createAction } from "@reduxjs/toolkit";

const setPhones = createAction("@products/getPhones");
const setLaptops = createAction("@products/getLaptops");
const setProductWithId = createAction("@products/setproductWithId");

const setLoader = createAction("@products/getPhones");
const setError = createAction("@products/setError");
const resetError = createAction("@products/resetError");


export {
 setPhones,
 setLaptops,
 setProductWithId,
 setError,
 resetError,
 setLoader,
};
