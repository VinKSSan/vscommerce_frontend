import { createContext } from "react";

type ContextCartCountType ={
    contextCartCount:number;
    setContextCartCount:(contextCartCount:number)=>void;
}

export const ContextCartCount = createContext<ContextCartCountType>({
    contextCartCount:0,
    setContextCartCount:()=>{}
})