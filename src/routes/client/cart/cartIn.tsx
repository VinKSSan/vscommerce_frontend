import { useContext, useState } from 'react'
import './cartSty.css'
import { clearCart, decreaseItem, getCart, increaseItem } from '../../../services/cartService'
import type { OrderDTO } from '../../../models/order'
import { Link } from 'react-router-dom'
import { ContextCartCount } from '../../../utils/contextCount'

export default function Cart(){
    const [cartItems, setItems] = useState<OrderDTO>(getCart)

    const {setContextCartCount} = useContext(ContextCartCount);

    function clearClick(){
        clearCart();
        updateItems()
    }

    function handleIncrease(productId : number){
       increaseItem(productId)
       setItems(getCart()) 
    }
    function handleDecrease(productId : number){
       decreaseItem(productId)
       updateItems()
    }

    function updateItems(){
       const newItems = getCart(); 
       setItems(newItems)
       setContextCartCount(newItems.items.length)
    }
    return(
        <main>
            <section id="cart-container-section" className="vsc-container">
                  
                {cartItems.items.length>0 
                ? (
                    <div className="vsc-card vsc-mb20"> 
                        {cartItems.items.map(item =>(
                            <div key={item.productId} className="vsc-cart-item-container vsc-line-bottom">
                                <div className="vsc-cart-item-left">
                                    <img src={item.imgUrl} alt="Computador" />
                                    <div className="vsc-cart-item-description">
                                        <h3>{item.name}</h3>
                                        <div className="vsc-cart-item-quantity-container">
                                            <div onClick={()=>{ 
                                                    handleDecrease(item.productId)
                                                }}  
                                                className="vsc-cart-item-quantity-btn"
                                            >-</div>
                                            <p>{item.quantity}</p>
                                            <div onClick={()=>{ 
                                                    handleIncrease(item.productId)
                                                }} 
                                                className="vsc-cart-item-quantity-btn"
                                            >+</div>
                                        </div>
                                    </div>
                                </div>
                            <div className="vsc-cart-item-right">R$ {item.subTotal.toFixed(2)}</div>
                        </div>
                        ))}
                    </div>
                ) : (
                    <div>
                       <h2> Carrinho Vazio</h2>
                    </div>
                )    
                }
               
                <div className="vsc-cart-total-container">
                    <h3>R$ {cartItems.total.toFixed(2)}</h3>
                </div>
                <div className="vsc-btn-page-container">
                    <div className="btn vsc-btn vsc-btn-blue">
                        <h3>Finalizar pedido</h3>
                    </div>
                    <Link to="/catalog" >
                        <div className="btn vsc-btn vsc-btn-white">
                            <h3>Continuar comprando</h3>
                        </div>
                    </Link>
                     <div onClick={clearClick} className="btn vsc-btn vsc-btn-blue">
                        <h3>limpar</h3>
                    </div>
                </div>
            </section>
        </main>
    )
}