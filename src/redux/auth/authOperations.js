import {
 registrationUserApi,
 loginUserApi,
 logoutApi,
} from "../../services/authApi";
import {
 registerUserAction,
 registerUserActionError,
 loginUserAction,
 loginUserActionError,
 logoutUserAction,
 logoutUserActionError,
} from "./authActions";
import { store } from "react-notifications-component";

export const registrationUserOperation =
 (InputFormState, history) => async (dispatch) => {
  try {
   const response = await registrationUserApi(InputFormState);
   dispatch(registerUserAction(response.data.name));
   history.push("/login");
   store.addNotification({
    title: "Wonderful!",
    message: "You was secsesful Registrated. Login please",
    type: "success",
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
     duration: 5000,
     onScreen: false,
    },
   });
  } catch (error) {
   dispatch(registerUserActionError(error.message));
   store.addNotification({
    title: "error",
    message: "error",
    type: "error",
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
     duration: 5000,
     onScreen: false,
    },
   });
  }
 };

export const loginUserOperation =
 (InputFormState, history) => async (dispatch) => {
  try {
   const response = await loginUserApi(InputFormState);
   dispatch(loginUserAction(response.data));
   history.push("/");
   store.addNotification({
    title: "Welcome",
    message: "You was secsesful Login in",
    type: "success",
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
     duration: 5000,
     onScreen: false,
    },
   });
  } catch (error) {
   dispatch(loginUserActionError(error.message));
  }
 };

export const logoutUserOperation = () => async (dispatch, getState) => {
 const authToken = getState().auth.token;

 try {
  const response = await logoutApi(authToken);
  dispatch(logoutUserAction(response.data));
  // history.push("/");
 } catch (error) {
  dispatch(logoutUserActionError(error.message));
 }
};
