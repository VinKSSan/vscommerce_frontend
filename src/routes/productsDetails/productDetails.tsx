import './productDetailsSty.css'
import ProductsDetailsCard from "../../components/details/deailsCard"
import ButtonInverse from "../../components/details/buttons/buttonInverse"
import ButtonPrimary from "../../components/details/buttons/buttonPrimary"

import HeaderClient from '../../components/headerClient/header'


import {type ProductDTO } from '../../models/product'

const product : ProductDTO = {
    id:2,
    name:"Smart TV",
    description:"Smart TV 55” 4K UHD LED Samsung 55DU7700 - Wi-Fi Bluetooth Alexa 3 HDMI",
    imgUrl:"https://a-static.mlcdn.com.br/800x560/smart-tv-55-4k-uhd-led-samsung-55du7700-wi-fi-bluetooth-alexa-3-hdmi/magazineluiza/238245100/53a0a1b3c987dc555bd33974e14d604c.jpg",
    price:2500.99,
    categories:[
        {   
            id:2,
            name:"Eletrônico"
        },
        {   
            id:3,
            name:"Computadores"
        }
    ]
}

export default function ProductsDetails(){
    return(
        <>
            <HeaderClient/>
            <main>
                <section id="product-details-section" className="vsc-container">
                    <ProductsDetailsCard product={product}/>
                    <div className="vsc-btn-page-container">
                        <ButtonPrimary contentBtn='comprar'/>
                        <ButtonInverse contentBtn='inicio'/>  
                    </div>
                </section>
            </main>
        </>
    )
}