import './catalogSty.css'

import SearchBar from "../../../components/catalog/searchBar/searchBar"
import CatalogCard from "../../../components/catalog/catalogCard/catalogCard"
import LoadMoreBtn from "../../../components/catalog/loadMoreBtn/loadMoreBtn"
import * as productService from '../../../services/productServices'


export default function Catalog(){
    return(
        <main>
            <section id="catalog-section" className="vsc-container">
                <SearchBar/>
                <div className="vsc-catalog-cards vsc-mb20 vsc-mt20">
                    
                    {
                        productService.findAll().map(
                            product => <CatalogCard key={product.id} product={product}/>
                        )
                    }
                    
                </div>
                <LoadMoreBtn/>
            </section>
        </main>
    )
}