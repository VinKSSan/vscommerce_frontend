import editIcon from "../../../assets/icons/edit.svg"
import deleteIcon from "../../../assets/icons/delete.svg"
import './productSty.css'
import { useEffect, useState } from "react";
import { findPageRequest } from "../../../services/productServices";
import type { ProductDTO } from "../../../models/product";


export default function  ProductListing(){

    const [isLastPage, setIsLastPage]= useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams]= useState({
        page:0,
        name:"",
        size:12,
        sort:"name"
    });

    useEffect(()=>{
            findPageRequest(
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

    return(
        <main>
            <section id="product-listing-section" className="vsc-container">
                <h2 className="vsc-section-title vsc-mb20">Cadastro de produtos</h2>

                <div className="vsc-btn-page-container vsc-mb20">
                    <div className="vsc-btn vsc-btn-white">Novo</div>
                </div>

                <form className="vsc-search-bar">
                    <button type="submit">🔎︎</button>
                    <input type="text" placeholder="Nome do produto" />
                    <button type="reset">🗙</button>
                </form>

                <table className="vsc-table vsc-mb20 vsc-mt20">
                    <thead>
                        <tr>
                        <th className="vsc-tb576">ID</th>
                        <th></th>
                        <th className="vsc-tb768">Preço</th>
                        <th className="vsc-txt-left">Nome</th>
                        <th></th>
                        <th></th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(p=>(
                                <tr>
                                    <td className="vsc-tb576">{p.id}</td>
                                    <td><img className="vsc-product-listing-image" src={p.imgUrl} alt="Computer"/></td>
                                    <td className="vsc-tb768">R$ {p.price}</td>
                                    <td className="vsc-txt-left">{p.name}</td>
                                    <td><img className="vsc-product-listing-btn" src={editIcon} alt="Editar"/></td>
                                    <td><img className="vsc-product-listing-btn" src={deleteIcon} alt="Deletar"/></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className="vsc-btn-next-page">Carregar mais</div>
            </section>
        </main>
    );
}