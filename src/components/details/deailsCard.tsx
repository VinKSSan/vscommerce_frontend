import './detailsSty.css'

import ProductCategory from './productCategory/category'
import type { ProductDTO } from '../../models/product'

type Props ={
  product: ProductDTO
}

export default function ProductsDetailsCard({product}:Props){
    return(
        <div className="vsc-card vsc-mb20">
          <div className="vsc-product-details-top vsc-line-bottom">
            <img src={product.imgUrl} alt="Computador" />
          </div>
          <div className="vsc-product-details-bottom">
            <h3>{product.price.toFixed(2)}</h3>
            <h4>R$ {product.name}</h4>
            <p>{product.description}</p>
            <div className="vsc-category-container">
                {
                  product.categories.map(c=>(
                      <ProductCategory key={c.id} name={c.name}/>
                  ))
                }
            </div>
          </div>
        </div>
    );
}