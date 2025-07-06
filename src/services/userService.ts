import { requestBackend } from "../utils/request";

export function findUser(){
    const config = {
        url: `/users/me`,
        withCredentials: true,
    }
    return requestBackend(config);
}