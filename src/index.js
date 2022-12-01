import React from "react";
import ReactDOM from "react-dom/client";
import "./style/css/index.css";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import Store from "./store/Store";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "./style/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProSidebarProvider>
    <Provider store={Store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </ProSidebarProvider>
);
