export default function FormInput(props: any){
    const {
        validation, 
        dirty="false", 
        invalid="false", 
        onTurnDirty, 
        ...inputProps 
    } = props;

    function handleBlur(){
        onTurnDirty(props.name)
    }

    return (
        <input
            data-dirty={dirty} 
            data-invalid={invalid} 
            onBlur={handleBlur} 
            onFocus={handleBlur}
            {...inputProps} 
        />
    );
}