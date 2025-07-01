import './productDetailsSty.css'
import ProductsDetailsCard from "../../../components/details/deailsCard"
import ButtonInverse from "../../../components/details/buttons/buttonInverse"
import ButtonPrimary from "../../../components/details/buttons/buttonPrimary"
import * as productService from '../../../services/productServices'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'




export default function ProductsDetails(){

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

    const params = useParams();

    const product = productService.findById(Number(params.productId));

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
                    <ButtonPrimary contentBtn='comprar'/>
                    <Link to="/">
                        <ButtonInverse contentBtn='inicio'/>  
                    </Link>
                </div>
            </section>
        </main>
    )
}