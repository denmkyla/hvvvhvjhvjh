import React from "react";
import Typography from "@mui/material/Typography";

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      ©ГП «Инфо-Система». | Все права защищены.
    </Typography>
  );
};

export default Copyright;
