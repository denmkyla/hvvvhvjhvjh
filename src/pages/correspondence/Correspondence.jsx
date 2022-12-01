import React from "react";
import { Header } from "../../component";
import { Box, Button } from "@mui/material";

const Correspondence = () => {
  return (
    <Box height="95%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10px"
      >
        <Header title="Корреспонденция"></Header>
        <Button variant="contained" color="primary">
          egerg
        </Button>
      </Box>
    </Box>
  );
};

export default Correspondence;
