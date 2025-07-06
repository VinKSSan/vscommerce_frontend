import QueryString from "qs";
import type { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";
import * as accessTokenStorage from "../storage/accessTokenStorage";



export function loginRequest(loginData:CredentialsDTO){
    const headers ={
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":"Basic "+window.btoa(CLIENT_ID+":"+CLIENT_SECRET)
    }

    const body = QueryString.stringify({...loginData,grant_type:"password"})
    
    const config : AxiosRequestConfig = {
        method: "POST",
        url:"/oauth/token",
        data:body,
        headers
    }

    return requestBackend(config)
} 


export function logout(){
    accessTokenStorage.removeToken()
}

export function login(token:string){
    accessTokenStorage.saveToken(token)
}

export function getAccessToken(){
   return accessTokenStorage.getToken()
}

