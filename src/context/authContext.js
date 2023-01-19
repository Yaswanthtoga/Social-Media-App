import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))||null
    );

    const login = ()=>{
        // To-Do
        setCurrentUser({id:1,name:"Yaswanth",profilePic:"https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg"})
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])

    return (
        <AuthContext.Provider value={{ currentUser,login }}>
            {children}
        </AuthContext.Provider>
    )
}