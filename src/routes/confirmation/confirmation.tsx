import { useEffect, useState } from "react"
import { OrderDTO } from "../../models/order"
import { useParams } from "react-router-dom"
import { findOrderById } from "../../services/orderService"
import { Link } from "react-router-dom"

import './confirmSty.css'

export default function Confirmation(){

    const params = useParams()

    const [order, setOrder] = useState<OrderDTO>()

    useEffect(()=>{
        findOrderById(Number(params.orderId))
            .then(res=>{
                setOrder(res.data)
            }
        )
    },[params])

    return(
        <main>
            <section id="confirmation-section" className="vsc-container">
                <div className="vsc-card vsc-mb20">
                {
                    <div className="vsc-card vsc-mb20"> 
                        {order?.items.map(item =>(
                            <div key={item.productId} className="vsc-cart-item-container vsc-line-bottom">
                                    <div className="vsc-cart-item-left">
                                        <img src={item.imgUrl} alt="Computador" />
                                        <div className="vsc-cart-item-description">
                                            <h3>{item.name}</h3>
                                            <div className="vsc-cart-item-quantity-container">
                                                <p>{item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="vsc-cart-item-right">R$ {item.subTotal.toFixed(2)}</div>
                            </div>
                        ))}
                    </div>
                }
                </div>
                <div className="vsc-cart-total-container">
                    <h3>R$ {order?.total.toFixed(2)}</h3>
                </div>
                <div className="vsc-confirmation-message dsc-mb20">
                    Pedido realizado! Número {order?.id}
                </div>
                <div className="vsc-btn-page-container">
                    <Link to="/">
                        <div className="vsc-btn dsc-btn-white">
                            Início
                        </div>
                    </Link>
                </div>
            </section>
            </main>
    )
} 