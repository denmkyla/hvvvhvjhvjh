import React from "react";
import ReactDOM from "react-dom/client";
import "./style/css/index.css";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import Store from "./store/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ProSidebarProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </ProSidebarProvider>
);
