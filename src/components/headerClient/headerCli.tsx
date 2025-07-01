
import { Link } from "react-router-dom"
import cartIcon from "../../assets/icons/cart.svg"
import './headerSty.css'

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
                        <Link to="/cart">
                            <img src={cartIcon} alt="Carrinho de compras" />
                        </Link>
                    </div>
                </div>
                <Link to="/login">Entrar</Link>
                </div>
            </nav>
        </header>
    );
}