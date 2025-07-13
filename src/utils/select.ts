export const selectStyles = {
    control: (baseStyle:any, state:any)=>({
        ...baseStyle,
        border:"none",
        minHeight:"40px",
        boxShadow:"none",
        "&:hover":{
            border:"none"
        }
    }),
    placeholder: (baseStyle:any)=>({
        ...baseStyle,
        color: "var(--vsc-color-font-placeholder)"
    }),
    indicatorSeparator: (baseStyle:any)=>({
        ...baseStyle,
        display:"none"
    }),
    option:(provided:any)=>({
        ...provided,
        color:"var(--vsc-color-font-primary)"
    })
}