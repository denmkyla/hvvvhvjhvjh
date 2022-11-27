import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../../pages";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "../../utils/Pages/Pages";

import ProtectedRoutes from "./ProtectedRoutes";
import authRoutes from "./Routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        {authRoutes.map(({ path, element, exact }) => (
          <Route element={element} key={path} path={path} exact={exact}></Route>
        ))}
        <Route
          path="*"
          element={<Navigate to={DASHBOARD_ROUTE} replace />}
        ></Route>
      </Route>
      <Route element={<Login />} path={LOGIN_ROUTE} exact="true"></Route>
    </Routes>
  );
};

export default AppRouter;
