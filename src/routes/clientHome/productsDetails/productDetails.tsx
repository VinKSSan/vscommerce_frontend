import './productDetailsSty.css'
import ProductsDetailsCard from "../../../components/details/deailsCard"
import ButtonInverse from "../../../components/details/buttons/buttonInverse"
import ButtonPrimary from "../../../components/details/buttons/buttonPrimary"
import * as productService from '../../../services/productServices'
import * as cartService from '../../../services/cartService'


import {useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { ProductDTO } from '../../../models/product'


export default function ProductsDetails(){

    const [product, setProduct] = useState<ProductDTO>();

    const params = useParams();

    const navigate = useNavigate()

    useEffect(()=>{
        productService.findById(Number(params.productId))
            .then(res => setProduct(res.data))
            .catch(err=>{
                console.log(err.response.data)
                setTimeout(()=>{navigate("/")},2000)
            })
    },[params,navigate]);

    function handleBuyClick(){
        console.log('exec')
        if(product) {
            console.log('exec2')
            cartService.addProduct(product)
            navigate("/cart")
        }
    }

    const productNotFound = ( 
                    <div
                        style={{
                        height:'50vh',
                        width:'50vw',
                        backgroundColor:'var(--vsc-color-card-border)',
                        }}
                    >
                        <h1
                        style={{
                            fontSize:'14pt',
                            color:'var(--vsc-color-btn-primary)',
                        }}
                        >PRODUTO NÃO ENCONTRADO!</h1>
                    </div> 
                )

    

    return(
        <main>
            <section id="product-details-section" className="vsc-container">
               {
                    product ? 
                        <ProductsDetailsCard product={product}/> 
                    :
                        productNotFound
                               
               } 
                <div className="vsc-btn-page-container">
                    <div onClick={handleBuyClick} className="btn">
                        <ButtonPrimary  contentBtn='comprar'/>
                    </div>
                    <Link to="/">
                        <ButtonInverse contentBtn='inicio'/>  
                    </Link>
                </div>
            </section>
        </main>
    )
}