import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/auth/email/";

export const register = (email: string, password: string, firstName: string, lastName: string) => {
  return axios.post(API_URL + "register", {
    email,
    password,
    firstName,
    lastName
  });
};

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
