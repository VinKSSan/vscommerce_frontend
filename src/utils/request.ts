import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { BASE_URL } from "./system";
import { getAccessToken } from "../services/authService";

export function requestBackend(config : AxiosRequestConfig){
    const headers = config.withCredentials 
    ? {
        ...config.headers,
        Authorization :  "Bearer" + getAccessToken()
    } : config.headers
    return axios({...config, baseURL: BASE_URL, headers})
}