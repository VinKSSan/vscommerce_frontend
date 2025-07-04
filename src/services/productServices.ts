import axios, { type AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

const host = BASE_URL

export function findPageRequest(page :number, name:string, size:number,sort:string){
    const config : AxiosRequestConfig = {
        method:"GET",
        baseURL: BASE_URL,
        url: "/products",
        params:{
            page,
            name,
            size,
            sort
        }
    }
    return axios(config);
//    return axios.get(host+`/products?size=${size}`)
}

export function findById(id :number){
    return axios.get(host+`/products/${id}`);
}
