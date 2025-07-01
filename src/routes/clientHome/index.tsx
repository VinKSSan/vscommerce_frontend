import { Outlet } from "react-router-dom";
import HeaderClient from "../../components/headerClient/header";

export default function ClientHome(){
    return(
        <>
            <HeaderClient/>
            <Outlet/>
        </>
    )
}