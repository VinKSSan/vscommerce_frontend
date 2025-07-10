import ButtonPrimary from "../details/buttons/buttonPrimary";

type Props = {
    message: string;
    onDialogClose: ()=>void;
}

export default function DialogInformation({message, onDialogClose} : Props){
    return(
        <div  className="vsc-dialog-background"  onClick={()=>onDialogClose()}>
            <div className="vsc-dialog-box" onClick={e=>e.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dialog-btn" onClick={()=>onDialogClose()}>
                    <ButtonPrimary contentBtn="ok"/>
                </div>
            </div>
        </div>
    )
}