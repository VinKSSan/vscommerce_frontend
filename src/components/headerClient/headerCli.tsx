
import { Link } from "react-router-dom"
import './headerSty.css'
import CartIcon from "../cart/cartIcon/cartIconIn";
import amdIcon from '../../assets/icons/admin.svg'
import { hasAnyRoles } from "../../services/authService";
import { useContext } from "react";
import { ContextToken } from "../../utils/contextToken";

export default function HeaderClient(){

    const {contextTokenPayload}= useContext(ContextToken)
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
                    {
                    contextTokenPayload &&
                    hasAnyRoles(['ROLE_ADMIN']) &&
                    <Link to="/admin">
                        <div className="vsc-menu-item">
                            <img src={amdIcon} alt="Admin" />
                        </div>
                    </Link>
                    }
                </div>
                <Link to="/login">Entrar</Link>
                </div>
            </nav>
        </header>
    );
}