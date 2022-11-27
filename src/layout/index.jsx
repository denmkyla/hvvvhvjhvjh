import React from "react";
import { Outlet } from "react-router-dom";
import NavSidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import { Box } from "@mui/material";
const Layout = () => {
  return (
    <div className="app">
      <div className="content">
        <NavSidebar />
        <div>
          <Topbar />
          <Box sx={{ width: "100%", height: "93%"}}>
            <Box
              sx={{
                padding: "5px 25px",
                width: "100%",
                height: "100%",
                border: "1px solid #F8F5F2",
              }}
            >
              <Outlet />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Layout;
