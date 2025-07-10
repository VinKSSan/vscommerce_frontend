import './detailsBtnSty.css'

type Props = {
    contentBtn:string
}


export default function ButtonPrimary({contentBtn}:Props){
        return(
            <div className="btn vsc-btn vsc-btn-blue">
                {contentBtn}
            </div>
        );
}