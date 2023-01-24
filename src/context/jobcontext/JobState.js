import React,{useState} from "react";
import JobContext from "./JobContext";

const JobState = (props)=>{
    let loginS = localStorage.getItem('loginS');
    let loginC = localStorage.getItem('loginC');
    let Token = localStorage.getItem('token');
    const [LoginS, setLoginS] = useState(loginS);
    const [LoginC, setLoginC] = useState(loginC);
    const [token,settoken] = useState(Token);
    function handleSubmitS(value,authtoken){
        localStorage.setItem('loginS',true);
        localStorage.setItem('token',authtoken);
        setLoginS(value);
        settoken(authtoken);
    }
    function handleSubmitC(value,authtoken){
        localStorage.setItem('loginC',true);
        localStorage.setItem('token',authtoken);
        setLoginC(value);
        settoken(authtoken);
    }
    return(
        <JobContext.Provider value={{LoginS,LoginC,handleSubmitS,handleSubmitC,token}}>
            {props.children}
        </JobContext.Provider>
    )
}

export default JobState;