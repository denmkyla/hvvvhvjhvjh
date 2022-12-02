import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField, Button } from "@mui/material";
import { CustomSelect, CustomRadioButton } from "..";
import { ToastContainer, toast } from "react-toastify";
import BackDrop from "../ui/BackDrop";
import { useSelector, useDispatch } from "react-redux";
import { createUsers } from "../../store/users/usersSlice";

const CreateUser = ({ title, open, setOpen, children }) => {
  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state.roles);
  const { systems } = useSelector((state) => state.systems);
  const { levels } = useSelector((state) => state.levels);
  const { isLoading } = useSelector((state) => state.users);

  const gender = [{ name: "Мужской" }, { name: "Женский" }];
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      name: data.get("name"),
      surname: data.get("surname"),
      job: data.get("job"),
      role: data.get("role"),
      level: data.get("level"),
      login: data.get("login"),
      password: data.get("password"),
      email: data.get("email"),
      gender: data.get("gender"),
      systems: data.get("system"),
    };
    dispatch(createUsers(userData));
  };
  return (
    <Dialog open={open} maxWidth="xl">
      <DialogTitle>{title}</DialogTitle>
      <ToastContainer />
      <BackDrop isLoading={isLoading}></BackDrop>
      <DialogContent dividers>
        <Box
          width="100%"
          component="form"
          onSubmit={handleSubmit}
          validate="true"
          sx={{ mt: 1 }}
        >
          <Box display="flex" flexDirection="row" gap="10px">
            <Box
              width="500px"
              minWidth="400px"
              display="flex"
              flexDirection="column"
              gap="10px"
            >
              <TextField
                required
                fullWidth
                size="small"
                id="name"
                label="Имя"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                required
                fullWidth
                size="small"
                name="surname"
                label="Фамилия"
                type="text"
                id="surname"
                autoComplete="surname"
              />
              <TextField
                required
                fullWidth
                size="small"
                name="job"
                label="Должность"
                type="text"
                id="job"
                autoComplete="job"
              />
              <CustomSelect
                name="role"
                label="Роль"
                id="role"
                item={roles}
                req={true}
              ></CustomSelect>
              <CustomSelect
                name="level"
                id="level"
                label="Уровень"
                item={levels}
                req={true}
              ></CustomSelect>
            </Box>
            <Box
              width="500px"
              minWidth="400px"
              display="flex"
              flexDirection="column"
              gap="10px"
            >
              <TextField
                required
                fullWidth
                size="small"
                name="login"
                label="Имя пользователя"
                type="text"
                id="login"
                autoComplete="login"
              />
              <TextField
                required
                fullWidth
                size="small"
                name="password"
                label="Пароль"
                type="text"
                id="password"
                autoComplete="password"
              />
              <TextField
                required
                fullWidth
                size="small"
                name="email"
                label="Email"
                type="text"
                id="email"
                autoComplete="email"
              />
              <CustomRadioButton
                name="gender"
                id="gender"
                label="Пол"
                item={gender}
                required
              ></CustomRadioButton>
              <CustomSelect
                name="system"
                id="system"
                label="Привязать к"
                item={systems}
              ></CustomSelect>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                gap="20px"
              >
                <Button variant="contained" type="submit" fullWidth>
                  Создать
                </Button>
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => setOpen()}
                  fullWidth
                >
                  Отмена
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUser;
