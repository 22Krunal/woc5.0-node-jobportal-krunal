import React,{useContext} from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import JobContext from '../context/jobcontext/JobContext';
const LoginS = () => {
  const a = useContext(JobContext);
  const navigate = useNavigate();


  let handleLogin = async function login(e){
    e.preventDefault();
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;
    let url = 'http://localhost:5000/student/login';
    let response = await axios.post(url,{Email,Password});
    // const data = await response.json();
    if(response.data.success){
      a.handleSubmitS(true,response.data.authtoken);
      navigate('/');
    }
    console.log(response.data.success);
  }
  return (
    <div className="card container my-5" style={{width: "25rem"}}>
      <div className="card-body">
      <h2 className="card-title">Student Login</h2>
      <div className="form-floating mb-3 ">
    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
    <label for="email">Email address</label>
  </div>
  <div className="form-floating ">
    <input type="password" className="form-control" id="password" placeholder="Password"/>
    <label for="password">Password</label>
  </div>
  <div className='btn btn-outline-info' onClick={handleLogin}>Login</div>
  </div>
  </div>
  )
}

export default LoginS