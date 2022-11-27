import { BrowserRouter } from "react-router-dom";
import { AppRouter, AuthProvider } from "./component";
import { CssBaseline } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRoles } from "./store/roles/rolesSlice";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoles());
  }, []);
  return (
    <BrowserRouter>
      <CssBaseline />
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
