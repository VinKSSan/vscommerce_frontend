
import cartIcon from "../../assets/icons/cart.svg"
import './headerSty.css'

export default function HeaderClient(){
    return(
        <header className="vsc-header-client">
            <nav className="vsc-container">
                <h1>VSCommerce</h1>
                <div className="vsc-navbar-right">
                <div className="vsc-menu-items-container">
                    <div className="vsc-menu-item">
                    <img src={cartIcon} alt="Carrinho de compras" />
                    </div>
                </div>
                <a href="#">Entrar</a>
                </div>
            </nav>
        </header>
    );
}