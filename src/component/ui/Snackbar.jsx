import React from "react";
import { Snackbar, AlertTitle, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { reset } from "../../store/auth/authSlice";
const CustomSnackbar = ({ open, type, title, messege }) => {
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickway") return;
    dispatch(reset());
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={type} elevation={6}>
        <AlertTitle>{title}</AlertTitle>
        {messege}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
