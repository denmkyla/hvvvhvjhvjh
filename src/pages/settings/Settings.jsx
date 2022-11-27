import React from 'react'
import { Header } from "../../component";
import { Box } from "@mui/material";
const Settings = () => {
  return (
    <Box height="95%">
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="10px"
    >
      <Header title="Настройки"></Header>
    </Box>
  </Box>
  )
}

export default Settings