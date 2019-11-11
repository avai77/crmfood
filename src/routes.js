
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Waiters from "views/Waiters.jsx";
import Menu from "views/Menu.jsx";
import UserPage from "views/User.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Waiters",
    icon: "nc-icon nc-badge",
    component: Waiters,
    layout: "/admin"
  },
  {
    path: "/menu",
    name: "Menu",
    icon: "nc-icon nc-tile-56",
    component: Menu,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },

];
export default routes;
