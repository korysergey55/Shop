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

export const registrationUserOperation =
 (InputFormState, history) => async (dispatch) => {
  try {
   const response = await registrationUserApi(InputFormState);
   dispatch(registerUserAction(response.data.name));
   alert("You was secsesful Registrated. Login please");
   history.push("/login");
  } catch (error) {
   dispatch(registerUserActionError(error.message));
  }
 };

export const loginUserOperation =
 (InputFormState, history) => async (dispatch) => {
  try {
   const response = await loginUserApi(InputFormState);
   dispatch(loginUserAction(response.data));
   history.push("/");
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
