import {paths} from "./paths.ts";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AuthPage from "../pages/Authorization/AuthPage.tsx";

export const routerProps = {
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