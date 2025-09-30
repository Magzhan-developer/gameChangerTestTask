import {authModule, authReducer} from "../pages/Authorization/AuthDucks.ts";

const reducers = {
    [authModule]:authReducer
}

export default reducers;