import { useContext, useState } from 'react';
import './loginSty.css'
import * as authService from '../../../services/authService';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/contextToken';
import { clearCart } from '../../../services/cartService';
import FormInput from '../../../components/formInput/formInput';
import * as forms from '../../../utils/forms';


export default function Login(){

    const {setContextTokenPayload}= useContext(ContextToken)

    const navigate  =useNavigate();

    const [formData, setFormData] = useState({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    .test(value.toLowerCase())
                ;
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        authService.loginRequest(forms.toValues(formData))
            .then(res=>{
                authService.login(res.data.access_token)
                setContextTokenPayload(authService.getPayload())
                clearCart()
                navigate("/cart")
            })
            .catch(err=>{
                console.error("pal...",err)
            })
    }

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        const name = e.target.name
        setFormData(prev=>forms.update(prev,name,value))
    }

    return(
        <main>
            <section id="login-section" className="vsc-container">
                <div className="vsc-login-form-container">
                    <form onSubmit={handleSubmit} className="vsc-card vsc-form">
                        <h2>Login</h2>
                        <div className="vsc-form-controls-container">
                            <div>
                                <FormInput 
                                    onChange={handleInputChange}
                                    className="vsc-form-control" 
                                    {...formData.username} 
                                />
                                <div className="vsc-form-error"></div>
                            </div>
                            <div>
                                <FormInput
                                    onChange={handleInputChange}
                                    className="vsc-form-control" 
                                    {...formData.password}
                                />
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