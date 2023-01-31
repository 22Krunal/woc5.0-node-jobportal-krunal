import React,{useEffect, useState} from "react";
import JobContext from "./JobContext";

const JobState = (props)=>{
    let loginS = localStorage.getItem('loginS');
    let loginC = localStorage.getItem('loginC');
    let Token = localStorage.getItem('token');
    const [LoginS, setLoginS] = useState(loginS);
    const [LoginC, setLoginC] = useState(loginC);
    const [token,settoken] = useState(Token);
    const [alert, setalert] = useState(null);
    useEffect(()=>console.log("hello"),[alert]);
    function handleSubmitS(value,authtoken){
        localStorage.setItem('loginS',value);
        localStorage.setItem('token',authtoken);
        setLoginS(value);
        settoken(authtoken);
    }
    function handleSubmitC(value,authtoken){
        localStorage.setItem('loginC',value);
        localStorage.setItem('token',authtoken);
        setLoginC(value);
        settoken(authtoken);
    }
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    console.log("hello alert");
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }
    return(
        <JobContext.Provider value={{LoginS,LoginC,handleSubmitS,handleSubmitC,token,showAlert,alert}}>
            {props.children}
        </JobContext.Provider>
    )
}

export default JobState;