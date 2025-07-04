
import { Link } from "react-router-dom"
import './headerSty.css'
import CartIcon from "../cart/cartIcon/cartIconIn";

export default function HeaderClient(){
    return(
        <header className="vsc-header-client">
            <nav className="vsc-container">
                <Link to="/"> 
                    <h1>VSCommerce</h1>
                </Link>
                <div className="vsc-navbar-right">
                <div className="vsc-menu-items-container">
                    <div className="vsc-menu-item">
                        <CartIcon/>
                    </div>
                </div>
                <Link to="/login">Entrar</Link>
                </div>
            </nav>
        </header>
    );
}