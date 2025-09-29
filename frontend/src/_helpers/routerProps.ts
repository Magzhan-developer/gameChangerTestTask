import {paths} from "./paths.ts";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import LoginPage from "../pages/Authorization/LoginPage/LoginPage.tsx";
import RegisterPage from "../pages/Authorization/RegisterPage/RegisterPage.tsx";

export const routerProps = {
    profilePage:{
        path:paths.profilePage,
        component:ProfilePage
    },
    loginPage:{
        path:paths.loginPage,
        component:LoginPage
    },
    registerPage:{
        path:paths.registerPage,
        component:RegisterPage
    }
}