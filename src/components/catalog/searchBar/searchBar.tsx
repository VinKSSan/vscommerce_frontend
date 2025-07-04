import { useState } from "react";
import "./searchBarSty.css"

type Props={
    onSearch:(term:string)=>void;
}

export default function SearchBar({onSearch}:Props){

   const [searchTerm, setSearchTerm]  = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setSearchTerm(event? event.target.value: "") 
    }

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        onSearch(searchTerm)
    }

    function handleReset(){
        setSearchTerm("");
        onSearch(searchTerm)
    }
    return(
        <form onSubmit={handleSubmit} className="vsc-search-bar">
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" 
                    width="100%" height="100%" 
                    viewBox="0 0 50 50"
                >
                    <path 
                        d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z">     
                    </path>
                </svg>
            </button>
            <input 
                type="text" 
                placeholder="Nome do produto" 
                value={searchTerm}
                onChange={handleChange}    
            />
            <button onClick={handleReset}> 
                <svg xmlns="http://www.w3.org/2000/svg" 
                    x="0px" y="0px"
                    width="100%" height="100%" 
                    viewBox="0 0 50 50"
                >
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg>
            </button>
        </form>
    )
}