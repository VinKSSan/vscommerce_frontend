import './categorySty.css'

type Props ={
    name: string;
}

export default function ProductCategory({name}:Props){
    return(
        <div className="vsc-category">
            {name}
        </div>
    )
}