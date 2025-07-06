import { useState } from 'react';
import './loginSty.css'
import type { CredentialsDTO } from '../../../models/auth';
import { loginRequest } from '../../../services/authService';
import { saveToken } from '../../../storage/accessTokenStorage';

export default function Login(){

    const [formData, setFormData] = useState<CredentialsDTO>({
        username:'',
        password:''
    })

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        loginRequest(formData)
            .then(res=>{
                saveToken(res.data.access_token)
                console.log(res.data)
            })
            .catch(err=>{
                console.error("pal...",err)
            })
    }

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        const name = e.target.name
        setFormData(prev=>({...prev,[name]:value}))
    }

    return(
        <main>
            <section id="login-section" className="vsc-container">
                <div className="vsc-login-form-container">
                    <form onSubmit={handleSubmit} className="vsc-card vsc-form">
                        <h2>Login</h2>
                        <div className="vsc-form-controls-container">
                            <div>
                                <input 
                                    onChange={handleInputChange}
                                    name='username'
                                    value={formData.username}
                                    className="vsc-form-control" 
                                    type="text" placeholder="Email"
                                />
                                <div className="vsc-form-error"></div>
                            </div>
                            <div>
                                <input
                                    onChange={handleInputChange}
                                    name='password'
                                    value={formData.password} 
                                    className="vsc-form-control" 
                                    type="password" 
                                    placeholder="Senha"/>
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