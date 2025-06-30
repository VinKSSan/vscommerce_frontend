import './detailsSty.css'

import computerImg from '../../assets/images/computer.png'
import ProductCategory from './productCategory/category'


export default function ProductsDetailsCard(){
    return(
        <div className="vsc-card vsc-mb20">
          <div className="vsc-product-details-top vsc-line-bottom">
            <img src={computerImg} alt="Computador" />
          </div>
          <div className="vsc-product-details-bottom">
            <h3>R$ 5000,00</h3>
            <h4>Computador Gamer XT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="vsc-category-container">
                <ProductCategory name="Eletrônicos"/>
                <ProductCategory name="Computadores"/>
            </div>
          </div>
        </div>
    );
}