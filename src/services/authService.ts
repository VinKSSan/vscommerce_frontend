import QueryString from "qs";
import type { CredentialsDTO, PayloadDto, RoleEnum } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";
import * as accessTokenStorage from "../storage/accessTokenStorage";
import { jwtDecode } from "jwt-decode";



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

export function getPayload():PayloadDto | undefined {
    try{
        const token = accessTokenStorage.getToken();
        return (
            token == null
            ? undefined
            : ( jwtDecode(token) as PayloadDto )
        ) 
    }
    catch(error){
        console.error(error)
        return undefined
    }
}

export function isAuthenticated(): boolean {
    const tokenPayload = getPayload();
    return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
}


export function hasAnyRoles(roles: RoleEnum[]): boolean {
    if (roles.length === 0) {
        return true;
    }
    const tokenPayload = getPayload();
    if (tokenPayload !== undefined) {
        for (let i = 0; i < roles.length; i++) {
            if (tokenPayload.authorities.includes(roles[i])) {
            return true;
        }}
    //return roles.some(role => tokenData.authorities.includes(role));
    }
    return false;
}
