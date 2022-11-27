import React from "react";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";
const BackDrop = ({ isLoading }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex:"100" }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDrop;
