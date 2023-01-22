import React,{useState} from "react";
import JobContext from "./JobContext";

const JobState = (props)=>{
    let loginS = localStorage.getItem('loginS');
    let loginC = localStorage.getItem('loginC');
    const [LoginS, setLoginS] = useState(loginS);
    const [LoginC, setLoginC] = useState(loginC);
    function handleSubmitS(value){
        setLoginS(value);
    }
    function handleSubmitC(value){
        setLoginC(value);
    }
    return(
        <JobContext.Provider value={{LoginS,LoginC,handleSubmitS,handleSubmitC}}>
            {props.children}
        </JobContext.Provider>
    )
}

export default JobState;