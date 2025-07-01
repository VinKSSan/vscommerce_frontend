import './catalogSty.css'

import SearchBar from "../../../components/catalog/searchBar/searchBar"
import CatalogCard from "../../../components/catalog/catalogCard/catalogCard"
import LoadMoreBtn from "../../../components/catalog/loadMoreBtn/loadMoreBtn"
import type { ProductDTO } from "../../../models/product"


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


export default function Catalog(){
    return(
        <main>
            <section id="catalog-section" className="vsc-container">
                <SearchBar/>
                <div className="vsc-catalog-cards vsc-mb20 vsc-mt20">
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                    <CatalogCard product={product}/>
                </div>
                <LoadMoreBtn/>
            </section>
        </main>
    )
}