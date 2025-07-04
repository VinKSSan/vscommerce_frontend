import { Link } from "react-router-dom";
import cartIcon from "../../../assets/icons/cart.svg"

import "./cartIconSty.css"
import { useContext} from "react";
import { ContextCartCount } from "../../../utils/contextCount";

export default function CartIcon(){
    
    const {contextCartCount}= useContext(ContextCartCount);
    return(
        <Link style={{display:'flex'}} to="/cart">
            <img src={cartIcon} alt="Carrinho de compras" />
            {contextCartCount>0 &&
                <div className="vsc-cart-count">{contextCartCount}</div>
            }
        </Link>
    );
}