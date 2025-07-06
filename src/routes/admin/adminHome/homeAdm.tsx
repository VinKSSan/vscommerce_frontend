import { useEffect, useState } from 'react'
import './styles.css'
import type { UserDTO } from '../../../models/user'
import * as userService from '../../../services/userService'

export default function HomeAdmin(){
    const [user, setUser] = useState<UserDTO>()

    useEffect(()=>{
        userService.findUser()
            .then(res=>{
                setUser(res.data)
                console.log("sucess",res.data)
            })
            .catch(err=>{
                console.error("erro: ",err)
            })
    },[])
    return(
        <main>
            <section id="admin-home-section" className="vsc-container">
                <h2 className="vsc-section-title dsc-mb20">Bem-vindo à àrea administrativa {user?.name}</h2>
            </section>
        </main>
    )
}
