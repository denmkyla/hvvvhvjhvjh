import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import $api from "../../http";
import { Header } from "../../component";
import { Box } from "@mui/material";

const UserId = () => {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    $api.get("/users/" + params.id).then((data) => {
      setUser(data.data);
    });
  }, []);
  return (
    <Box height="95%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10px"
      >
        <Header title="Редактирование пользователя"></Header>
      </Box>
      <Box bgcolor={'green'} width="100%" height='100%'>
wf
      </Box>
    </Box>
  );
};

export default UserId;
