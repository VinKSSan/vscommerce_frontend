import { OrderItemDTO, type OrderDTO } from "../models/order";
import type { ProductDTO } from "../models/product";
import * as cartStore from "../storage/cartStorage"

export function saveCart(cart : OrderDTO){
    cartStore.saveCartStore(cart)
}

export function getCart():OrderDTO{
    return cartStore.getCartStore()
}

export function addProduct( product : ProductDTO){
    const cart = cartStore.getCartStore();

    const item = cart.items.find(i=>i.productId===product.id)

    if(!item){
        const newItem = new OrderItemDTO(product.id,1, product.name, product.price, product.imgUrl)
        cart.items.push(newItem)
        cartStore.saveCartStore(cart);
    }

}

export function clearCart(){
    cartStore.clearStore()
}

export function increaseItem(productId : number){
    const cart = cartStore.getCartStore();
    const item = cart.items.find(i=>i.productId===productId);
    if(item){
        item.quantity++;
        cartStore.saveCartStore(cart);
    }
}
export function decreaseItem(productId : number){
    const cart = cartStore.getCartStore();
    const item = cart.items.find(i=>i.productId===productId);
    if(item){
        item.quantity--;
        if(item.quantity < 1){
           cart.items = cart.items.filter(i=>i.productId!==productId)
        }
        cartStore.saveCartStore(cart);
    }
}