import { useContext, useState } from 'react';
import './loginSty.css'
import * as authService from '../../../services/authService';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/contextToken';
import { clearCart } from '../../../services/cartService';
import FormInput from '../../../components/forms/formInput';
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
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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
            validation: function (value: string) {
                return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                    .test(value.toLowerCase())
                ;
            },
            message: "ao menos 8 caracteres, uma letra, um numero e um caracter especial"
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
        setFormData(prev=>{
            const up = forms.update(prev,name,value);
            const valid = forms.validate(up, name);
            return valid
        })
    }

    function handleTurnDirty(name: string){
        setFormData(prev=>(forms.toDirty(prev, name)))
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
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                    className="vsc-form-control" 
                                    {...formData.username} 
                                />
                                <div className='vsc-form-error' >{formData.username.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    onChange={handleInputChange}
                                    onTurnDirty={handleTurnDirty}
                                    className="vsc-form-control" 
                                    {...formData.password}
                                />
                                <div className='vsc-form-error' >{formData.password.message}</div>
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