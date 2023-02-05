import React,{useContext} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import JobContext from '../context/jobcontext/JobContext';
const LoginC = () => {
  const {handleSubmitC,showAlert} = useContext(JobContext);
  const navigate = useNavigate();
  const submit = async function (e){
    e.preventDefault();
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;
    
    const url = 'http://localhost:5000/company/login'
    let response = await axios.post(url,{Email,Password})
    .then((response)=>{
      if(response.data.success){
      // console.log(response.data.authtoken);
      handleSubmitC('true',response.data.authtoken);
      showAlert('Successfully Logged In','success');
      navigate('/company/Profile');
    }})
    .catch((err)=>{
        showAlert(err.response.data.message,'danger');
        console.log('error');
    });
  }
  return (
    <div className="card container my-5 shadow-lg p-3 mb-5 bg-light rounded" style={{width: "25rem"}}>
      <div className="card-body">
      <h2 className="card-title">Company Login</h2>
      <div className="form-floating mb-3 ">
    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
    <label for="email">Email address</label>
  </div>
  <div className="form-floating ">
    <input type="password" className="form-control" id="password" placeholder="Password"/>
    <label for="password">Password</label>
  </div>
  <button className='btn btn-outline-info'style={{marginTop:"2rem"}} onClick={submit}>Login</button>
  </div>
  </div>
  )
}

export default LoginC