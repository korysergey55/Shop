import { createAction } from "@reduxjs/toolkit";

const setPhones = createAction("@products/getPhones");
const setLaptops = createAction("@products/getLaptops");

const setLoader = createAction("@products/getPhones");
const setError = createAction("@products/setError");
const resetError = createAction("@products/resetError");


export { setError, resetError, setLoader, setPhones, setLaptops};
