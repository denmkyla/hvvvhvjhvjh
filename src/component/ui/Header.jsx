import React from "react";
import { Box, Typography } from "@mui/material";
import { PRIMARY } from "../../style/colors/Colors";
const Header = ({ title }) => {
  return (
    <Box>
      <Typography variant="h6" color={PRIMARY.secondary} fontWeight="500">
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
