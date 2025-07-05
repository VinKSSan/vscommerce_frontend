import { Outlet } from "react-router-dom";
import HeaderClient from "../../components/headerClient/headerCli";

export default function ClientHome(){
    return(
        <>
            <HeaderClient/>
            <Outlet/>
        </>
    )
}