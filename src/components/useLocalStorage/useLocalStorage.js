import { useState, useEffect } from "react";


const getStoredValue  = (key, value) => {
    const retreived_value = JSON.parse(window.localStorage.getItem(key));
    if(retreived_value) return retreived_value;     // if key is in local storage return value
    if(value instanceof Function) return value();   // if value is a function returning something then function should return the value of that function 
    return value;                                   // if key doesn't exist return input value
}

const UseLocalStorage = (key,value) => {
    const [state,setState] = useState(()=>{
        return getStoredValue(key,value);
    })
    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(state));
    },[state])
    return [state,setState];
}

export default UseLocalStorage;