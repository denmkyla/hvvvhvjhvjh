import * as React from "react";
import { Paper, Box, Grid, Link, Typography, CssBaseline } from "@mui/material";
import { PRIMARY } from "../../style/colors/Colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/auth/authSlice";
import { useEffect } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import PropTypes from "prop-types";
import {
  bgImg,
  logo,
  CustomSnackbar,
  CustomTextField,
  CustomButton,
  BackDrop,
  Copyright,
} from "../../component";
import Skeleton from "@mui/material/Skeleton";

function Media(props) {
  const { loading = false } = props;
  return loading ? (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Box>
  ) : (
    <Skeleton
      sx={{ bgcolor: "white" }}
      animation="wave"
      variant="rectangular"
      width="100%"
      height="100%"
    ></Skeleton>
  );
}
Media.propTypes = {
  loading: PropTypes.bool,
};
export default function Login() {
  const { user, isLoading, isError, isSuccess, isMessege } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }
  }, [user, isLoading, isError, isSuccess, isMessege, navigate, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={false} sm={7} md={9}>
        <Media loading></Media>
      </Grid>
      <Grid item xs={12} sm={5} md={3} component={Paper} elevation={1} square>
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "97vh",
          }}
        >
          <Box
            sx={{
              marginBottom: "10px",
            }}
          >
            <img src={logo} alt="logo" width="90px" />
          </Box>
          <Typography
            component="h1"
            align="center"
            sx={{
              color: PRIMARY.secondary,
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Автоматизированная система управления проектами
          </Typography>
          <Box
            component="form"
            validate="true"
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <CustomTextField
              margin="normal"
              required
              fullWidth
              size="small"
              id="email"
              label="Имя пользователя"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              size="small"
              name="password"
              label="Пароль"
              type={showPassword ? "text " : "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <CustomButton
              sx={{ marginTop: "15px" }}
              type="submit"
              fullWidth
              endIcon={<LoginIcon />}
            >
              Войти
            </CustomButton>
            <BackDrop isLoading={isLoading}></BackDrop>
            <CustomSnackbar
              open={isError}
              type="error"
              title={"Ошибка!"}
              messege={isMessege}
            ></CustomSnackbar>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ color: PRIMARY.secondary }}
                >
                  Забыли пароль?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ marginTop: "auto" }} />
      </Grid>
    </Grid>
  );
}
