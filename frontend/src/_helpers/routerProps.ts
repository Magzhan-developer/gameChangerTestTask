import {paths} from "./paths.ts";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AuthPage from "../pages/Authorization/AuthPage.tsx";
import DashboardPage from "../pages/DashboardPage/Dashboard.tsx";

export const routerProps = {
    dashboardPage:{
        path:paths.dashboard,
        component:DashboardPage
    },
    profilePage:{
        path:paths.profilePage,
        component:ProfilePage
    },
    loginPage:{
        path:paths.loginPage,
        component:AuthPage
    },
    registerPage:{
        path:paths.registerPage,
        component:AuthPage
    }
}