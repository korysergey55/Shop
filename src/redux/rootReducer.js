import { combineReducers } from "redux";
import authReducer from "./auth/authReducers";
import cartReducer from "./cart/cartReducer";
import FilterReducer from "./filter/filterReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
 cart: cartReducer,
 products: productsReducer,
 filter: FilterReducer,
 auth: authReducer,
});

export default rootReducer;


