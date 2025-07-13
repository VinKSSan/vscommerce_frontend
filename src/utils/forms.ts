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

export function toDirtyAll(inputs:any){
    const newInputs:any = {};
    for (const name in inputs){
        newInputs[name] = {...inputs[name], dirty:"true"}
    }
    return newInputs
}

export function validateAll(inputs:any){
    const newInputs:any= {}

    console.log(inputs)
    for(const n in inputs){
        console.log(n)
        if(inputs[n].validation){
            const isInvalid = !inputs[n].validation(inputs[n].value);
            newInputs[n] = {...inputs[n], invalid: isInvalid.toString()}
           
        }
        else{
            newInputs[n]= {...inputs[n]}
            
        }
    }
    return newInputs;
}

export function dirtyValidateAll(inputs:any){
    return validateAll(toDirtyAll(inputs))
}

export function hasAnyInvalid(inputs: any){
    for(const name in inputs){
        if(inputs[name].dirty==="true" && inputs[name].invalid==="true"){
            return true
        }
    }
    return false;
}

export function setBackendErrors(inputs:any, errors:any){
    const newInputs = {...inputs};
    errors.forEach(item => {
       newInputs[item.fieldName].message = item.message;
       newInputs[item.fieldName].dirty = "true"
       newInputs[item.fieldName].invalid = "true" 
    });
    return newInputs;
}