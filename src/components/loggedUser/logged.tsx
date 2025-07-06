import { Link } from "react-router-dom"
import * as  authService from "../../services/authService"
import { useContext } from "react"
import { ContextToken } from "../../utils/contextToken"

export default function LoggedUser(){
    
    const {contextTokenPayload,setContextTokenPayload} = useContext(ContextToken)

    function handleLogout(){
        authService.logout();
        setContextTokenPayload(undefined)
    }

    return(
        authService.isAuthenticated() ? (
            <div className="vsc-logged-user">
                <p>{contextTokenPayload?.user_name}</p>
                <button className="btn" onClick={handleLogout}>Sair</button>
            </div>
        ) : (
            <div>
                <Link to="/login">Entrar</Link>
            </div>
        )
    )
}