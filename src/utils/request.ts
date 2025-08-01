import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { BASE_URL } from "./system";
import { getAccessToken } from "../services/authService";
import { navigateTo } from "../services/navigationService";

export function requestBackend(config : AxiosRequestConfig){
    const headers = config.withCredentials 
    ? {
        ...config.headers,
        Authorization :  "Bearer" + getAccessToken()
    } : config.headers
    return axios({...config, baseURL: BASE_URL, headers})
}

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
    function (config) {
        // DO SOMETHING BEFORE REQUEST IS SENT
        return config;
    },
    function (error) {
        // DO SOMETHING WITH REQUEST ERROR
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
    function (response) {
        // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
        return response;
    },
    function (error) {
        // DO SOMETHING WITH RESPONSE ERROR
        if (error.response?.status === 401) {
            navigateTo("/login");
        }
        if (error.response?.status === 403) {
            navigateTo("/catalog");
        }
        return Promise.reject(error);
    }
);