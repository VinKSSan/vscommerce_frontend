export function update(inputs: any, name: string, newValue: any){
    return{...inputs,[name]: {...inputs[name],value: newValue}}
}

export function toValues(inputs: any){
    const data:any={}
    for(const name in inputs){
        data[name]=inputs[name].value
    }
    return data
}

export function updateAll(inputs: any, newValues: any) {
    const newInputs:any ={}
    for(const name in inputs){
        newInputs[name] = {...inputs[name],value:newValues[name]}
    } 
    return newInputs;
}

export function validate(inputs: any, name: string){
   if(!inputs[name].validation){
        return inputs;
   }
    const isInvalid = !inputs[name].validation(inputs[name].value)
    console.log(isInvalid.toString())
    return {...inputs,[name]:{...inputs[name], invalid: isInvalid.toString()}}
}

export function toDirty(inputs:any, name:string){
    
    const dirtyVar = inputs[name].dirty
    const ndVar = dirtyVar !== undefined? !(dirtyVar==="true"): false;
    console.log(ndVar, ndVar.toString())

    return {...inputs, [name]:{...inputs[name], dirty:ndVar.toString()}}
}