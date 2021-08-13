import { combineReducers } from "redux";
import authReducer from "./auth/authReducers";
import cartReducer from "./cart/cartReducer";
import FilterReducer from "./filter/filterReducer";
import productsReducer from "./products/productsReducer";

// ----------persist-----------------//
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistAuthConfig = {
 key: "cart",
 storage,
 whitelist: [ "items"],
};

const rootReducer = combineReducers({
 cart: persistReducer(persistAuthConfig, cartReducer),
 products: productsReducer,
 filter: FilterReducer,
 auth: authReducer,
});

export default rootReducer;


