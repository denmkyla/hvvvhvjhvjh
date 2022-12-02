import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSession, logout } from "../../store/auth/authSlice";
import authService from "../../services/authService";
import jwtDecode from "jwt-decode";
import { getRoles } from "../../store/roles/rolesSlice";
import { getSystems } from "../../store/systems/systemsSlice";
import { getLevels } from "../../store/levels/levelsSlice";
const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getData = async () => {
    dispatch(getRoles());
    dispatch(getSystems());
    dispatch(getLevels());
  };

  useEffect(() => {
    const initialize = async () => {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && authService.isValidToken(accessToken)) {
        dispatch(setSession(accessToken));
        getData();
      } else {
        dispatch(logout());
      }
    };
    initialize();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
