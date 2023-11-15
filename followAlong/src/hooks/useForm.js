import { useState } from "react"

export const useForm = (initialValue, cb) => {
    const [values, setValues] = useState(initialValue); // initial value is object defining what initial input values will be

    const clearForm = () => {
        setValues(initialValue);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        cb();
    }
    const handleChanges = e => {
        setValues({...values, [e.target.name]: e.target.value});
    }
    return [values, clearForm, handleChanges, handleSubmit];
}