import './catalogSty.css'

import SearchBar from "../../../components/catalog/searchBar/searchBar"
import CatalogCard from "../../../components/catalog/catalogCard/catalogCard"
import LoadMoreBtn from "../../../components/catalog/loadMoreBtn/loadMoreBtn"
import { useEffect, useState } from 'react'
import axios from 'axios'
import type { ProductDTO } from '../../../models/product'

const host = "http://localhost:8080";

export default function Catalog(){

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(()=>{
        axios.get(host+`/products?size=12`)
            .then(res=>{
                setProducts(res.data.content)
            })
    },[])


    return(
        <main>
            <section id="catalog-section" className="vsc-container">
                <SearchBar/>
                <div className="vsc-catalog-cards vsc-mb20 vsc-mt20">
                    
                    {
                        products.map(
                            product => <CatalogCard key={product.id} product={product}/>
                        )
                    }
                    
                </div>
                <LoadMoreBtn/>
            </section>
        </main>
    )
}