import { getAllAdvByCategoryApi } from "../../services/api";
import { setLaptops, setLoader, setPhones } from "./productsActions";

export const getAllAdvByCategoryApiOperation =
 (category) => async (dispatch) => {
  try {
   dispatch(setLoader());
   const response = await getAllAdvByCategoryApi(category);
   if (response) {
    const products = Object.keys(response).map((key) => ({
     id: key,
     ...response[key],
    }));

    if (category === "phones") {
     dispatch(setPhones(products));
    }
    if (category === "laptops") {
     dispatch(setLaptops(products));
    }
   }
  } catch (error) {
  } finally {
   dispatch(setLoader());
  }
 };
