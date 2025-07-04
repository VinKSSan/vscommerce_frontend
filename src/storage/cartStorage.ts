import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function saveCartStore(cart : OrderDTO){

    const cartStr = JSON.stringify(cart)

    localStorage.setItem(CART_KEY, cartStr)
}

export function getCartStore() : OrderDTO{
    const ordStr = localStorage.getItem(CART_KEY) || '{"items":[]}'
    const obj = JSON.parse(ordStr);
    
    const cart = new OrderDTO();
    obj.items.forEach((i:OrderItemDTO)=>{
        cart.items.push(new OrderItemDTO(i.productId,i.quantity,i.name,i.price,i.imgUrl))
    })
    return cart;
}

export function clearStore(){
    localStorage.setItem(CART_KEY,'{"items":[]}')
}