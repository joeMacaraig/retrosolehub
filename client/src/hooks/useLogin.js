import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const login = async(username, password) => {
        setLoading(true);
        setError(null);

        const response = await fetch('/login', {
            method: "POST", 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({username, password})
        })
        
        const json = await response.json();

        if(!response.ok){
            setLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            //sace the user to the local storage
            localStorage.setItem('user', JSON.stringify(json));
            //update the auth context
            dispatch({type: 'LOGIN', payload: json});

            setLoading(false);
        }
    }

    return {login, loading, error};
}