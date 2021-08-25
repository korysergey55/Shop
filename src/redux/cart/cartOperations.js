import Notification from "../../Components/notify";
import { addToCart, remuveAllFromCart, setError } from "./cartActions";
// import { useSelector } from "react-redux";
// import { cartItemSelector } from "./cartSelectors";

const addToCartOperation = (data) => async (dispatch) => {
 //  const cartItems = useSelector(cartItemSelector);
 //  if (
 //   cartItems.filter((item) =>
 //    item.name.toLowerCase().trim().includes(data.name.toLowerCase().trim())
 //   )
 //  ) {
 //   console.log("exist");
 //   return
 //  }
 try {
  Notification("sucses");
  await dispatch(addToCart(data));
 } catch (error) {
  Notification("danger");
  dispatch(setError(error));
 }
};

const remuveAllFromCartOperation = (data) => async (dispatch) => {
 try {
  await dispatch(remuveAllFromCart());
  Notification("deleteAllFromCart");
 } catch (error) {
  Notification("danger");
  dispatch(setError(error));
 }
};

export { addToCartOperation, remuveAllFromCartOperation };
