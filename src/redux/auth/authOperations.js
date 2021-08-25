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
import Notification from "../../Components/notify";


export const registrationUserOperation =
 (InputFormState, history) => async (dispatch) => {
  try {
   const response = await registrationUserApi(InputFormState);
   dispatch(registerUserAction(response.data));
   history.push("/login");
   Notification("registrationSuccess");
  } catch (error) {
   dispatch(registerUserActionError(error.message));
   Notification("error");
  }
 };

export const loginUserOperation =
 (InputFormState, history) => async (dispatch) => {
  try {
   const response = await loginUserApi(InputFormState);
   dispatch(loginUserAction(response.data));
   history.push("/shop");
   Notification("loginSuccess");
  } catch (error) {
   dispatch(loginUserActionError(error.message));
   Notification("error");
  }
 };

export const logoutUserOperation = () => async (dispatch, getState) => {
 const authToken = getState().auth.token;

 try {
  await logoutApi(authToken);
  dispatch(logoutUserAction());
  Notification("logoutSuccess");
  
 } catch (error) {
  dispatch(logoutUserActionError(error.message));
  Notification("error");
 }
};