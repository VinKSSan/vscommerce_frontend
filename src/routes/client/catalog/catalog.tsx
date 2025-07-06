import './catalogSty.css'

import SearchBar from "../../../components/catalog/searchBar/searchBar"
import CatalogCard from "../../../components/catalog/catalogCard/catalogCard"
import LoadMoreBtn from "../../../components/catalog/loadMoreBtn/loadMoreBtn"
import { useEffect, useState } from 'react'
import * as productService from '../../../services/productServices'
import type { ProductDTO } from '../../../models/product'


export default function Catalog(){

    const [isLastPage, setIsLastPage]= useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams]= useState({
        page:0,
        name:"",
        size:12,
        sort:"name"
    });

    function handleLoad(){
        setQueryParams({...queryParams,page: queryParams.page+1})
    }


    useEffect(()=>{
            productService.findPageRequest(
                queryParams.page,
                queryParams.name,
                queryParams.size,
                queryParams.sort
            ).then(res=>{
                const nextPage = res.data.content;
                setProducts(prev => {
                    const filtered = nextPage.filter((item: ProductDTO) =>
                        !prev.some(p => p.id === item.id)
                    );
                    return [...prev, ...filtered];
                });

                setIsLastPage(res.data.last)
            })
    },[queryParams])

    function handleSearch(searchText:string){
        setProducts([])
        setQueryParams({...queryParams, page:0, name:searchText})
    }  
    return(
        <main>
            <section id="catalog-section" className="vsc-container">
                <SearchBar onSearch={handleSearch} />
                <div className="vsc-catalog-cards vsc-mb20 vsc-mt20">
                    
                    { 
                        products.map(
                            product => <CatalogCard key={product.id} product={product}/>
                        )
                    }
                    
                </div>
                {
                    !isLastPage && (
                        <div className='btn' onClick={handleLoad}>
                            <LoadMoreBtn/>
                        </div>
                    )

                }
            </section>
        </main>
    )
}