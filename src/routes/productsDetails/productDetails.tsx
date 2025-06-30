import './productDetailsSty.css'
import ProductsDetailsCard from "../../components/details/deailsCard"
import ButtonInverse from "../../components/details/buttons/buttonInverse"
import ButtonPrimary from "../../components/details/buttons/buttonPrimary"

import HeaderClient from '../../components/headerClient/header'

export default function ProductsDetails(){
    return(
        <>
            <HeaderClient/>
            <main>
                <section id="product-details-section" className="vsc-container">
                    <ProductsDetailsCard/>
                    <div className="vsc-btn-page-container">
                        <ButtonPrimary/>
                        <ButtonInverse/>  
                    </div>
                </section>
            </main>
        </>
    )
}