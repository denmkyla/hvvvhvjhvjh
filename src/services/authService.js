import jwtDecode from "jwt-decode";
import $api from "../http";

const login = async (userData) => {
  return await $api.post("/login", userData);
};

const Logout = async () => {
  localStorage.clear();
};

// Logout user
const setSession = async (accessToken) => {
  if (accessToken) {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  } else {
    localStorage.clear();
    throw new Error("accsessTokenInValid");
  }
};

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const authService = {
  Logout,
  login,
  isValidToken,
  setSession,
};

export default authService;
