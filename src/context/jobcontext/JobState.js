import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import JobContext from "./JobContext";
import axios from "axios";
const JobState = (props)=>{
    let loginS = localStorage.getItem('loginS');
    let loginC = localStorage.getItem('loginC');
    let Token = localStorage.getItem('token');
    const [LoginS, setLoginS] = useState(loginS);
    const [LoginC, setLoginC] = useState(loginC);
    const [token,settoken] = useState(Token);
    const [alert, setalert] = useState(null);
    const navigate = useNavigate();
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
  const loginStudent = async({Email,Password})=>{
      let url = 'http://localhost:5000/student/login';
       await axios.post(url,{Email,Password})
      .then((response)=>{
        console.log(response.data);
        if(response.data.success){
        handleSubmitS('true',response.data.authtoken);
        showAlert('Successfully Logged In','success');
        navigate('/student/Profile');
      }})
      .catch((err)=>{
          showAlert(err.response.data.message,'danger');
          console.log('error');
      });
      
    
  }
    return(
        <JobContext.Provider value={{LoginS,LoginC,handleSubmitS,handleSubmitC,token,showAlert,alert,loginStudent}}>
            {props.children}
        </JobContext.Provider>
    )
}

export default JobState;