import ButtonInverse from "../details/buttons/buttonInverse";
import ButtonPrimary from "../details/buttons/buttonPrimary";

type Props = {
    message: string;
    id: number;
    onDialogAnswer: (b:boolean,id:number)=>void;
}

export default function DialogConfirmation({message, id, onDialogAnswer} : Props){
    return(
        <div  className="vsc-dialog-background"  onClick={()=>onDialogAnswer(false, id)}>
            <div className="vsc-dialog-box" onClick={e=>e.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dialog-btn-box">
                    <div onClick={()=>onDialogAnswer(true, id)}>
                        <ButtonPrimary contentBtn="yes"/>
                    </div>
                    <div onClick={()=>onDialogAnswer(false, id)}>
                        <ButtonInverse contentBtn="No"/>
                    </div>
                </div>
            </div>
        </div>
    )
}