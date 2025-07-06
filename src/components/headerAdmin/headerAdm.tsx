import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/icons/home.svg"
import productsIcon from "../../assets/icons/products.svg"
import LoggedUser from "../loggedUser/logged";


export default function HeaderAdmin(){
    return(
        <header className="vsc-header-admin">
            <nav className="vsc-container">
                <h1>VSC Admin</h1>
                <div className="vsc-navbar-right">
                <div className="vsc-menu-items-container">
                    <NavLink 
                        to="/admin/home"
                        className={({isActive})=>isActive ? "vsc-menu-item-active" : ""}    
                    >
                        <div className="vsc-menu-item">
                            <img src={homeIcon} alt="Início" />
                            <p>Início</p>
                        </div>
                    </NavLink>
                    <NavLink 
                        to="/admin/products"
                        className={({isActive})=>isActive ? "vsc-menu-item-active" : ""}
                        >
                        <div className="vsc-menu-item">
                            <img src={productsIcon} alt="Cadastro de produtos" />
                            <p >Produtos</p>
                        </div>
                    </NavLink>
                </div>
                    <LoggedUser/>
                </div>
            </nav>
            </header>
    );
}