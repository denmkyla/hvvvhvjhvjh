import React from "react";
import { Link } from "react-router-dom";
import { PRIMARY } from "../../style/colors/Colors";
import { Box } from "@mui/material";
import { logo } from "../../component";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  CORRESPONDENCE_ROUTE,
  DASHBOARD_ROUTE,
  ELECTRONICAPPEL_ROUTE,
  KANBAN_ROUTE,
  REPORT_ROUTE,
  USERS_ROUTE,
  SETTINGS_ROUTE,
  SYSTEMS_ROUTE,
  TASK_ROUTE,
} from "../../utils/Pages/Pages";
import { Sidebar, MenuItem, Menu, useProSidebar } from "react-pro-sidebar";
import { useState } from "react";
import Copyright from "../../component/ui/Copyright";

const NavSidebar = () => {
  const { collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Приборный панель");
  const listItems = [
    {
      listIcon: <DashboardIcon />,
      listText: "Приборный панель",
      link: DASHBOARD_ROUTE,
    },
    {
      listIcon: <ViewKanbanIcon />,
      listText: "Канбан",
      link: KANBAN_ROUTE,
    },
    {
      listIcon: <AccountTreeIcon />,
      listText: "Системы",
      link: SYSTEMS_ROUTE,
    },
    {
      listIcon: <AssignmentIcon />,
      listText: "Задачи",
      link: TASK_ROUTE,
    },
    {
      listIcon: <AssignmentTurnedInIcon />,
      listText: "Корреспонденция",
      link: CORRESPONDENCE_ROUTE,
    },
    {
      listIcon: <EmailIcon />,
      listText: "Электронное обращения",
      link: ELECTRONICAPPEL_ROUTE,
    },
    {
      listIcon: <GroupIcon />,
      listText: "Пользователи",
      link: USERS_ROUTE,
    },
    {
      listIcon: <AdfScannerIcon />,
      listText: "Отчеты",
      link: REPORT_ROUTE,
    },
    {
      listIcon: <SettingsIcon />,
      listText: "Настройки",
      link: SETTINGS_ROUTE,
    },
  ];
  return (
    <Box
      sx={{
        "& .sidebar-inner": {
          background: `${PRIMARY.main} !important`,
          height: "100vh",
          borderRadius: "0px 25px 25px 0px",
        },
        "& .icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          padding: collapsed
            ? "5px 10px 5px 10px !important"
            : "5px 0px 5px 25px !important",
          borderRadius: "25px 0px 0px 25px",
        },
        "& .menu-anchor": {
          padding: collapsed
            ? "5px 5px 5px 10px !important"
            : "5px 0px 5px 25px !important",
          color: "white",
          borderRadius: collapsed ? "50px" : "25px 0px 0px 25px",
        },
        "& .menu-anchor:hover": {
          backgroundColor: "white",
          color: `${PRIMARY.main} !important`,
          transition: "all 500ms ease",
        },
        "& .menu-item.active>.menu-anchor": {
          color: `${PRIMARY.main} !important`,
          backgroundColor: "white",
        },
      }}
    >
      <Sidebar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxHeight: "100px",
            margin: "25px 0px",
          }}
        >
          {collapsed ? (
            <img src={logo} alt="logo" width="50px" />
          ) : (
            <img src={logo} alt="logo" width="80px" />
          )}
        </Box>
        <Menu>
          {listItems.map((listItem, index) => (
            <MenuItem
              icon={listItem.listIcon}
              routerLink={<Link to={listItem.link} />}
              active={selected === listItem.listText}
              onClick={() => setSelected(listItem.listText)}
              key={index}
            >
              {!collapsed && listItem.listText}
            </MenuItem>
          ))}
        </Menu>
        {!collapsed && <Copyright />}
      </Sidebar>
    </Box>
  );
};

export default NavSidebar;
