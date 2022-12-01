import { BrowserRouter } from "react-router-dom";
import { AppRouter, AuthProvider } from "./component";
import { CssBaseline } from "@mui/material";
const App = () => {
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
