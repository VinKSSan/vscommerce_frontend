import "./ccSty.css"

import type { ProductDTO } from "../../../models/product";

type Props ={
    product:ProductDTO;
}

export default function CatalogCard({product}:Props) {

    return(
        
        <div className="vsc-card">
            <div className="vsc-catalog-card-top vsc-line-bottom">
                <img src={product.imgUrl} alt="Computer" />
            </div>
            <div className="vsc-catalog-card-bottom">
                <h3>{product.price}</h3>
                <h4>{product.name}</h4>
            </div>
        </div>
    )
}