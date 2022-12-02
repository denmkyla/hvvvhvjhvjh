import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/Pages/Pages";
import Layout from "../../layout";
import { useDispatch, useSelector } from "react-redux";
import { getRoles } from "../../store/roles/rolesSlice";
import { getSystems } from "../../store/systems/systemsSlice";
import { getLevels } from "../../store/levels/levelsSlice";
import { getUsers } from "../../store/users/usersSlice";
const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const getData = async () => {
    dispatch(getRoles());
    dispatch(getSystems());
    dispatch(getLevels());
    dispatch(getUsers());
  };

  useEffect(() => {
    getData();
  }, [user]);

  return user ? <Layout /> : <Navigate to={LOGIN_ROUTE} />;
};

export default ProtectedRoutes;
