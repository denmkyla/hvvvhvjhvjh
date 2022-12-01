import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { PROFILE_ROUTE } from "../../utils/Pages/Pages";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import { PRIMARY } from "../../style/colors/Colors.js";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const MenuAvatar = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <ListItem
          sx={{ color: "black" }}
          secondaryAction={
            <Tooltip title="Настройки аккаунта">
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </Tooltip>
          }
        >
          <ListItemAvatar>
            <AccountCircleIcon sx={{ fontSize: "50px" }} />
          </ListItemAvatar>
          <ListItemText
            primary={user.name + " " + user.surname}
            secondary={user.role}
          />
        </ListItem>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem component={Link} to={PROFILE_ROUTE}>
          <Avatar />
          <Typography sx={{ color: "#161c24" }}>Профиль</Typography>
        </MenuItem>

        <Divider />
        <MenuItem onClick={() => dispatch(logout())}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Выйти
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default MenuAvatar;
