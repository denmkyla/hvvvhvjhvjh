import { Box } from "@mui/material";
import React from "react";
import { Header } from "../../component";
const Dashboard = () => {
  return (
    <Box height="95%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10px"
      >
        <Header title="Приборный панель"></Header>
      </Box>
    </Box>
  );
};

export default Dashboard;
