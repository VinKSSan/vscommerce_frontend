import './detailsBtnSty.css'

type Props = {
    contentBtn:string
}

export default function ButtonInverse({contentBtn}:Props){
    return(
        <div className="vsc-btn vsc-btn-white">
                {contentBtn}
        </div>
    )
}