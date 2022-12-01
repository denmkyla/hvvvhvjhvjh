import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuAvatar from "../../component/ui/Menu";
import { useProSidebar } from "react-pro-sidebar";
import { useSelector } from "react-redux";
const Topbar = () => {
  const { collapseSidebar } = useProSidebar();
  const { user, isSuccess, isMessege } = useSelector((state) => state.auth);
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        maxHeight: "6vh",
        pt: "5px",
        borderBottom: "1px solid #F8F5F2",
      }}
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <IconButton onClick={() => collapseSidebar()}>
          <MenuIcon sx={{ fontSize: "28px" }} />
        </IconButton>
        <Box
          display="flex"
          backgroundColor="#F8F5F2"
          borderRadius="25px"
          width="400px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon sx={{ fontSize: "24px" }} />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box>
          <IconButton>
            <NotificationsIcon sx={{ fontSize: "28px" }} />
          </IconButton>
        </Box>
        <MenuAvatar user={user}></MenuAvatar>
      </Box>
    </Box>
  );
};

export default Topbar;
