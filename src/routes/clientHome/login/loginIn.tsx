import './loginSty.css'

export default function Login(){
    return(
        <main>
            <section id="login-section" className="vsc-container">
                <div className="vsc-login-form-container">
                    <form className="vsc-card vsc-form">
                        <h2>Login</h2>
                        <div className="vsc-form-controls-container">
                            <div>
                                <input 
                                    className="vsc-form-control" 
                                    type="text" placeholder="Email"
                                />
                                <div className="vsc-form-error"></div>
                            </div>
                            <div>
                                <input className="vsc-form-control" type="password" placeholder="Senha"/>
                            </div>
                        </div>

                        <div className="vsc-login-form-buttons vsc-mt20">
                            <button type="submit" className="vsc-btn vsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}