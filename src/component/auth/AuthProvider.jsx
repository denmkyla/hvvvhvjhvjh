import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSession, logout } from "../../store/auth/authSlice";
import authService from "../../services/authService";
import jwtDecode from "jwt-decode";
const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const initialize = async () => {
      const accessToken = window.localStorage.getItem("accessToken");
      const HandleTokenExpired = (exp) => {
        let expiredTimer;
        window.clearTimeout(expiredTimer);
        const currentTime = Date.now();
        const timeLeft = exp * 1000 - currentTime;
        console.log(timeLeft);
        expiredTimer = window.setTimeout(() => {
          dispatch(logout());
        }, timeLeft);
      };
      if (accessToken && authService.isValidToken(accessToken)) {
        dispatch(setSession(accessToken));
        const { exp } = jwtDecode(accessToken);
        HandleTokenExpired(exp);
      } else {
        dispatch(logout());
      }
    };
    initialize();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
