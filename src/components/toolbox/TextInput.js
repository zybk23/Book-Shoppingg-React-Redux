import React from "react";


const TextInput=({name,label,error,value,onChange,placeholder})=>{
    let wrapper="form-group";

    if(error && error.length>0){
        wrapper+="has-error"
    }
    return (
        <div className={wrapper}>
            <label htmlFor={name}>{label}</label>
            <div className={"field"}>
                <input type="text"
                       name={name}
                       className={"form-control"}
                       placeholder={placeholder}
                       value={value}
                       onChange={onChange}
                       />

                {
                    error&&<div className={"alert alert-danger"}>{error}</div>
                }
            </div>

        </div>
    )
};



export default TextInput;