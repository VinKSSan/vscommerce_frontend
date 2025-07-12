import Select from "react-select";

export default function FormSelect(props: any){
    const {
        className,
        validation, 
        dirty="false", 
        invalid="false", 
        onTurnDirty, 
        ...selectProps 
    } = props;

    function handleBlur(){
        onTurnDirty(props.name)
    }

    return (
        <div 
            className={className}
            data-dirty={dirty} 
            data-invalid={invalid} 
        >
            <Select
                onBlur={handleBlur} 
                onFocus={handleBlur}
                {...selectProps} 
            />
        </div>
    );
}