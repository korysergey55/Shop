import axios from "axios";

// const baseURL = "https://react-shop-5c360-default-rtdb.firebaseio.com/"; //korysergey55@gmail.com
const BASE_URL = "https://criptoshop-62529-default-rtdb.firebaseio.com/"; //korysergeyDev@gmail.com

export const registrationUserApi = async (inputFormState) => {
 try {
  const response = await axios.post(`${BASE_URL}/users/signup.json`, {
   ...inputFormState,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const loginUserApi = async (inputFormState) => {
 try {
  const response = await axios.post(`${BASE_URL}/users/login.json`, {
   ...inputFormState,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const logoutApi = async (authToken) => {
 axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
 try {
  const response = await axios.post(`${BASE_URL}/users/logout.json`);
  return response;
 } catch (error) {
  console.log(error);
 }
};
