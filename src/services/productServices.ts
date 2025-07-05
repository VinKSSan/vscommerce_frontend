import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

export function findPageRequest(page :number, name:string, size:number,sort:string){
    const config : AxiosRequestConfig= {
        method:"GET",
        url: "/products",
        params:{
            page,
            name,
            size,
            sort
        }
    }
    return requestBackend(config);
}

export function findById(id :number){
    return requestBackend({url: `/products/${id}`});
}
