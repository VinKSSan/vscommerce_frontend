import "./ccSty.css"

import computerImg from "../../../assets/images/computer.png";

export default function CatalogCard() {

    return(
        
        <div className="vsc-card">
            <div className="vsc-catalog-card-top vsc-line-bottom">
                <img src={computerImg} alt="Computer" />
            </div>
            <div className="vsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>
                    Computador Gamer XT
                </h4>
            </div>
        </div>
    )
}