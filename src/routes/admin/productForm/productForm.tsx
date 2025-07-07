import './formSty.css'

export default function  ProductForm(){
    return(
        <main>
            <section id="product-form-section" className="vsc-container">
                <div className="vsc-product-form-container">
                <form className="vsc-card dsc-form">
                    <h2>Dados do produto</h2>
                    <div className="vsc-form-controls-container">
                    <div>
                        <input className="vsc-form-control" type="text" placeholder="Nome"/>
                    </div>
                    <div>
                        <input className="vsc-form-control" type="text" placeholder="Preço"/>
                    </div>
                    <div>
                        <input className="vsc-form-control" type="text" placeholder="Imagem"/>
                    </div>
                    <div>
                        <select className="vsc-form-control dsc-select" required>
                        <option value="" disabled selected>Categorias</option>
                        <option value="1">Valor 1</option>
                        <option value="2">Valor 2</option>
                        </select>
                    </div>
                    <div>
                        <textarea className="vsc-form-control dsc-textarea" placeholder="Descrição"></textarea>
                    </div>
                    </div>

                    <div className="vsc-product-form-buttons">
                    <button type="reset" className="vsc-btn dsc-btn-white">Cancelar</button>
                    <button type="submit" className="vsc-btn dsc-btn-blue">Salvar</button>
                    </div>
                </form>
                </div>
            </section>
    </main>
    );
}