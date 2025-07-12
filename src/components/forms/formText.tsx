export default function FormTextArea(props: any){
    const {
        validation, 
        dirty="false", 
        invalid="false", 
        onTurnDirty, 
        ...textareaProps 
    } = props;

    function handleBlur(){
        onTurnDirty(props.name)
    }

    return (
        <textarea
            data-dirty={dirty} 
            data-invalid={invalid} 
            onBlur={handleBlur} 
            onFocus={handleBlur}
            {...textareaProps} 
        />
    );
}