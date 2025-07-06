import type { OrderDTO } from "../models/order"
import { requestBackend } from "../utils/request"

export function findOrderById(id:number){
    const config =  {
        url: `/orders/${id}`,
        withCredentials:true
    }
    return requestBackend(config)
}

export function placeOrder(cart: OrderDTO){
    const config={
        url:"/orders",
        method:"POST",
        withCredentials: true,
        data: cart
    }
    return requestBackend(config)
}