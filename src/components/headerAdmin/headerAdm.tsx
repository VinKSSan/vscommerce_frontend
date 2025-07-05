import homeIcon from "../../assets/icons/home.svg"
import productsIcon from "../../assets/icons/products.svg"


export default function HeaderAdmin(){
    return(
        <header className="vsc-header-admin">
            <nav className="vsc-container">
                <h1>VSC Admin</h1>
                <div className="vsc-navbar-right">
                <div className="vsc-menu-items-container">
                    <div className="vsc-menu-item">
                    <img src={homeIcon} alt="Início" />
                    <p>Início</p>
                    </div>
                    <div className="vsc-menu-item">
                    <img src={productsIcon} alt="Cadastro de produtos" />
                    <p className="vsc-menu-item-active">Produtos</p>
                    </div>
                </div>
                <div className="vsc-logged-user">
                    <p>Maria Silva</p>
                    <a href="#">Sair</a>
                </div>
                </div>
            </nav>
            </header>
    );
}