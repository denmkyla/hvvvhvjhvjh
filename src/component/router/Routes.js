import {
  Correspondence,
  Dashboard,
  ElectronicAppeal,
  Kanban,
  Profile,
  Report,
  Settings,
  Task,
  Users,
} from "../../pages";
import Systems from "../../pages/systems/Systems";
import UserId from "../../pages/users/UserId";
import {
  CORRESPONDENCE_ROUTE,
  DASHBOARD_ROUTE,
  ELECTRONICAPPEL_ROUTE,
  KANBAN_ROUTE,
  PROFILE_ROUTE,
  REPORT_ROUTE,
  SETTINGS_ROUTE,
  SYSTEMS_ROUTE,
  TASK_ROUTE,
  USERID_ROUTE,
  USERS_ROUTE,
} from "../../utils/Pages/Pages";

const authRoutes = [
  {
    path: USERID_ROUTE,
    element: <UserId />,
    exact: true,
  },
  {
    path: USERS_ROUTE,
    element: <Users />,
    exact: true,
  },
  {
    path: DASHBOARD_ROUTE,
    element: <Dashboard />,
    exact: true,
  },
  {
    path: SETTINGS_ROUTE,
    element: <Settings />,
    exact: true,
  },
  {
    path: CORRESPONDENCE_ROUTE,
    element: <Correspondence />,
    exact: true,
  },
  {
    path: KANBAN_ROUTE,
    element: <Kanban />,
    exact: true,
  },
  {
    path: REPORT_ROUTE,
    element: <Report />,
    exact: true,
  },
  {
    path: TASK_ROUTE,
    element: <Task />,
    exact: true,
  },
  {
    path: ELECTRONICAPPEL_ROUTE,
    element: <ElectronicAppeal />,
    exact: true,
  },
  {
    path: PROFILE_ROUTE,
    element: <Profile />,
    exact: true,
  },
  {
    path: SYSTEMS_ROUTE,
    element: <Systems />,
    exact: true,
  },
];
export default authRoutes;
