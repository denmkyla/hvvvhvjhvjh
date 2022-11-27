import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/users/usersSlice";
import { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockResetSharpIcon from "@mui/icons-material/LockResetSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import { PRIMARY } from "../../style/colors/Colors";
import {
  CustomButton,
  CustomDataGrid,
  Header,
} from "../../component";
import { Link } from "react-router-dom";
import { USERS_ROUTE } from "../../utils/Pages/Pages";
import { useState } from "react";
import CustomDialog from "../../component/ui/Dialog";

const Users = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const handleClose = () => {
    setOpenDialog(false);
  };
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 60 },
      { field: "name", headerName: "Имя", flex: 1 },
      { field: "surname", headerName: "Фамилия", flex: 1 },
      { field: "login", headerName: "Имя пользователя", flex: 1 },
      { field: "job", headerName: "Должность", flex: 1 },
      { field: "role", headerName: "Роль", flex: 1 },
      { field: "email", headerName: "E-mail", flex: 1 },
      { field: "systems", headerName: "Система", flex: 1 },
      {
        field: "status",
        headerName: "Статус",
        flex: 1,
        renderCell: ({ row: { status } }) => {
          return (
            <Box
              width="80%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={status ? PRIMARY.main : "red"}
              sx={{ borderRadius: "25px" }}
            >
              {status ? (
                <CheckCircleSharpIcon sx={{ color: "white" }} />
              ) : (
                <CheckCircleSharpIcon sx={{ color: "white" }} />
              )}
            </Box>
          );
        },
      },
      {
        field: "action",
        headerName: "Функции",
        width: 200,
        renderCell: (params) => {
          return (
            <>
              <Stack direction="row">
                <Tooltip title="Редактировать">
                  <IconButton
                    size="small"
                    component={Link}
                    to={USERS_ROUTE + "/" + params.row.id}
                  >
                    <EditIcon sx={{ color: PRIMARY.secondary }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Заблокировать">
                  <IconButton size="small">
                    <LockPersonIcon sx={{ color: PRIMARY.secondary }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Разблокировать">
                  <IconButton size="small">
                    <LockOpenIcon sx={{ color: PRIMARY.secondary }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Сбросить пароль">
                  <IconButton size="small">
                    <LockResetSharpIcon sx={{ color: PRIMARY.secondary }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Удалить">
                  <IconButton size="small">
                    <DeleteIcon sx={{ color: PRIMARY.secondary }} />
                  </IconButton>
                </Tooltip>
              </Stack>
            </>
          );
        },
      },
    ],
    []
  );

  return (
    <Box height="95%" display="flex" flexDirection="column">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10px"
      >
        <Header title="Пользователи"></Header>
        <CustomButton onClick={() => setOpenDialog(true)}>
          Добавить пользователя
        </CustomButton>
        <CustomDialog
          title="Создание пользователя"
          open={openDialog}
          setOpen={handleClose}
        />
      </Box>
      <CustomDataGrid
        rows={user}
        columns={columns}
        pageSize={pageSize}
        setPageSize={setPageSize}
      ></CustomDataGrid>
    </Box>
  );
};

export default Users;
