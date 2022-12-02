import React from "react";
import { Header } from "../../component";
import { Box, Stack ,tab} from "@mui/material";
const Report = () => {
  return (
    <Box height="95%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10px"
      >
        <Header title="Отчеты"></Header>
      </Box>
      <Stack direction="column" spacing={2}>
        
      </Stack>
    </Box>
  );
};

export default Report;
