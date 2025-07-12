import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

export function findCategorys(){
    const config : AxiosRequestConfig= {
        method:"GET",
        url: "/categories",
    }
    return requestBackend(config);
}