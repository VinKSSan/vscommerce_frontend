import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/headerAdmin/headerAdm";

export default function Admin(){
    return(
        <>
            <HeaderAdmin/>
            <Outlet/>
        </>
    )
}