import Notification from "../../Components/notify";
import { addToCart, remuveAllFromCart, setError } from "./cartActions";

const addToCartOperation = (data) => async (dispatch) => {
 try {
  await dispatch(addToCart(data));
  Notification("sucses");
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
