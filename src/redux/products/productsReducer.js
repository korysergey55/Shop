import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
 setPhones,
 setLaptops,
 setProductWithId,
 setError,
 resetError,
 setLoader,
} from "./productsActions";

const productItemsReducer = createReducer(
 { phones: [], laptops: [] },
 {
  [setPhones]: (state, action) => ({ ...state, phones: [...action.payload] }),
  [setLaptops]: (state, action) => ({ ...state, laptops: [...action.payload] }),
 }
);
const productWithIdReducer = createReducer(
 { setproductWithId: [] },
 { [setProductWithId]: (state, action) => ({ ...action.payload }) }
);

const productsErrorReducer = createReducer("", {
 [setError]: (_, action) => action.payload,
 [resetError]: () => "",
});

const productsLoaderReducer = createReducer(false, {
 [setLoader]: (state) => !state,
});

const productsReducer = combineReducers({
 items: productItemsReducer,
 productWithId: productWithIdReducer,
 error: productsErrorReducer,
 loader: productsLoaderReducer,
});

export default productsReducer;

// =========================== redux ==============================

// import { combineReducers } from "redux";
// import {
//   RESETERROR,
//   SETERROR,
//   SETLAPTOPS,
//   SETLOADER,
//   SETPHONES,
// } from "./productsActions";

// const productItemsReducer = (state = { phones: [], laptops: [] }, action) => {
//   switch (action.type) {
//     case SETLAPTOPS:
//       return {
//         ...state,
//         laptops: [...action.payload],
//       };
//     case SETPHONES:
//       return {
//         ...state,
//         phones: [...action.payload],
//       };

//     default:
//       return state;
//   }
// };
// const productsLoaderReducer = (state = false, action) => {
//   switch (action.type) {
//     case SETLOADER:
//       return !state;
//     default:
//       return state;
//   }
// };
// const productsErrorReducer = (state = "", action) => {
//   switch (action.type) {
//     case SETERROR:
//       return action.payload;
//     case RESETERROR:
//       return "";
//     default:
//       return state;
//   }
// };

// const productsReducer = combineReducers({
//   items: productItemsReducer,
//   loader: productsLoaderReducer,
//   error: productsErrorReducer,
// });

// export default productsReducer;
