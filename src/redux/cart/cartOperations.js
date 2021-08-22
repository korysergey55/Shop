import { addToCart } from "./cartActions";

const addToCartOperation = (data) => (dispatch) => {
 
  dispatch(addToCart(data));
  alert("Товар добавлен в коризину");
 
};

export  { addToCartOperation };
