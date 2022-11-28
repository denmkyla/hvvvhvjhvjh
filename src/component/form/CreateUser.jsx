import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import {
  CustomButton,
  CustomTextField,
  CustomSelect,
  CustomRadioButton,
  TransitionAlerts,
} from "..";
import { useDispatch, useSelector } from "react-redux";
import $api from "../../http";
import { getUsers } from "../../store/users/usersSlice";
const CreateUser = ({ title, open, setOpen, children }) => {
  const { roles } = useSelector((state) => state.roles);
  const [level, setLevel] = useState([]);
  const [systems, setSystems] = useState({});
  const [openAlert, setOpenAlert] = React.useState(false);
  const [status, setStatus] = React.useState([]);

  const gender = [{ name: "Мужской" }, { name: "Женский" }];
  const dispatch = useDispatch();

  useEffect(() => {
    const getLevel = async () => {
      try {
        const response = await $api.get("/level");
        setLevel(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      }
    };
    const getSystems = async () => {
      try {
        const response = await $api.get("/systems");
        setSystems(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      }
    };
    getLevel();
    getSystems();
  }, []);

  const handleSubmit = (event) => {
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
    $api
      .post("/register", userData)
      .then((data) => {
        setOpenAlert(true);
        setStatus({
          severity: "success",
          text: "Пользователь успешно создан!",
          title: "Успешно!",
        });
        dispatch(getUsers());
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setOpenAlert(true);
          setStatus({
            severity: "error",
            text: `${error.response.data}`,
            title: "Ошибка!",
          });
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };
  return (
    <Dialog open={open} maxWidth="xl">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <Box
          width="100%"
          component="form"
          onSubmit={handleSubmit}
          validate="true"
          sx={{ mt: 1 }}
        >
          <TransitionAlerts
            open={openAlert}
            setOpen={setOpenAlert}
            severity={status.severity}
            title={status.title}
            text={status.text}
          ></TransitionAlerts>

          <Box display="flex" flexDirection="row" gap="10px">
            <Box
              width="500px"
              minWidth="400px"
              display="flex"
              flexDirection="column"
              gap="10px"
            >
              <CustomTextField
                required
                fullWidth
                size="small"
                id="name"
                label="Имя"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <CustomTextField
                required
                fullWidth
                size="small"
                name="surname"
                label="Фамилия"
                type="text"
                id="surname"
                autoComplete="surname"
              />
              <CustomTextField
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
                req="true"
              ></CustomSelect>
              <CustomSelect
                name="level"
                id="level"
                label="Уровень"
                item={level}
                req="true"
              ></CustomSelect>
            </Box>
            <Box
              width="500px"
              minWidth="400px"
              display="flex"
              flexDirection="column"
              gap="10px"
            >
              <CustomTextField
                required
                fullWidth
                size="small"
                name="login"
                label="Имя пользователя"
                type="text"
                id="login"
                autoComplete="login"
              />
              <CustomTextField
                required
                fullWidth
                size="small"
                name="password"
                label="Пароль"
                type="text"
                id="password"
                autoComplete="password"
              />
              <CustomTextField
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
                <CustomButton type="submit" fullWidth>
                  Создать
                </CustomButton>
                <CustomButton onClick={() => setOpen()} fullWidth>
                  Отмена
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUser;
