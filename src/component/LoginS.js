import React from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const LoginS = () => {
  const navigate = useNavigate();


  let handleLogin = async function login(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let url = 'http://localhost:5000/student/login';
    let response = await axios.post(url,{email,password});
    // const data = await response.json();
    if(response.data.success){
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