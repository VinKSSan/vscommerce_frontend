import { requestBackend } from "../utils/request"

export function findOrderById(id:number){
    const config =  {
        url: `/orders/${id}`,
        withCredentials:true
    }
    return requestBackend(config)
}