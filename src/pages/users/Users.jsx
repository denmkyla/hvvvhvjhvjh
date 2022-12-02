import { Box, IconButton, Stack, Tooltip, Button } from "@mui/material";
import React, { useMemo } from "react";
import EditIcon from "@mui/icons-material/Edit";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockResetSharpIcon from "@mui/icons-material/LockResetSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import { PRIMARY } from "../../style/colors/Colors";
import { CustomDataGrid, Header } from "../../component";
import { Link } from "react-router-dom";
import { USERS_ROUTE } from "../../utils/Pages/Pages";
import { useState } from "react";
import { CreateUser } from "../../component";
import CancelIcon from "@mui/icons-material/Cancel";
import { toast, ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { deleteUsers, updateUsers } from "../../store/users/usersSlice";
const Users = () => {
  const [pageSize, setPageSize] = useState(25);
  const [openDialog, setOpenDialog] = useState(false);
  const { user, isSuccess } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpenDialog(false);
  };

  if (isSuccess) {
    toast.success("ggg");
  }
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
              backgroundColor={status === "true" ? PRIMARY.main : PRIMARY.red}
              sx={{ borderRadius: "25px" }}
            >
              {status === "true" ? (
                <CheckCircleSharpIcon sx={{ color: "white" }} />
              ) : (
                <CancelIcon sx={{ color: "white" }} />
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
                  <div>
                    <IconButton
                      size="small"
                      disabled={params.row.status === "true" ? false : true}
                      onClick={() =>
                        dispatch(
                          updateUsers({ ...params.row, status: "false" })
                        )
                      }
                    >
                      <LockPersonIcon sx={{ color: PRIMARY.secondary }} />
                    </IconButton>
                  </div>
                </Tooltip>
                <Tooltip title="Разблокировать">
                  <div>
                    <IconButton
                      size="small"
                      disabled={params.row.status === "true" ? true : false}
                      onClick={() =>
                        dispatch(updateUsers({ ...params.row, status: "true" }))
                      }
                    >
                      <LockOpenIcon sx={{ color: PRIMARY.secondary }} />
                    </IconButton>
                  </div>
                </Tooltip>
                <Tooltip title="Сбросить пароль">
                  <IconButton size="small">
                    <LockResetSharpIcon sx={{ color: PRIMARY.secondary }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Удалить">
                  <IconButton
                    size="small"
                    onClick={() => dispatch(deleteUsers(params.row.id))}
                  >
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
    <Box height="100%" display="flex" flexDirection="column">
      <ToastContainer />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10px"
      >
        <Header title="Пользователи"></Header>
        <Button variant="contained" onClick={() => setOpenDialog(true)}>
          Добавить пользователя
        </Button>
        <CreateUser
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
