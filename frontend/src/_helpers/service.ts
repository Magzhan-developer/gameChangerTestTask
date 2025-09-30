import axios from "axios";
import type {registerBody} from "../_interfaces/LogInInterfaces.ts";

const BASE_URL = "http://localhost:3000/api/";

export const AuthApi = {
    registerUser:(body:registerBody) => axios.post(`${BASE_URL}auth/register`, JSON.stringify(body)),
    loginUser:(body:any) => axios.post(`${BASE_URL}auth/login`, body),
}