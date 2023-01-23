import React,{useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import JobContext from '../context/jobcontext/JobContext'
const SignupC = () => {
  const a = useContext(JobContext);
  const navigate = useNavigate();
  let sub = async function handleSubmit(e){
    console.log('hello what is happening')
    e.preventDefault();
      let Name = document.getElementById('Name').value;
      let Address = document.getElementById('address').value;
      let Email = document.getElementById('email').value;
      let Password = document.getElementById('password').value;
      
      const url = 'http://localhost:5000/company/signup';
      let response = await axios.post(url,{Name,Address,Email,Password});
      if(response.data.success){
        console.log(response.data.authtoken);
        localStorage.setItem('token',response.data.authtoken);
        localStorage.setItem('loginC',true);
        a.handleSubmitC(true);
        navigate('/');
      }
      else{
        console.log('error');
      }
  }
  return (
    <div className="card container my-5" style={{width: "40rem"}}>
      <div className="card-body">
      <h2 className="card-title">Company Register</h2>
      <div className="form-floating mb-3 ">
    <input type="text" className="form-control" id="Name" placeholder="name@example.com"/>
    <label for="Name">Name</label>
  </div> 
      <div className="form-floating mb-3  ">
    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
    <label for="email">Email address</label>
  </div>
  
  <div className="form-floating mb-3  ">
    <input type="password" className="form-control" id="password" placeholder="name@example.com"/>
    <label for="password">Password</label>
  </div>
  <div className="form-floating mb-3  ">
    <input type="email" className="form-control" id="address" placeholder="name@example.com"/>
    <label for="address">Address</label>
  </div>
  <button className='btn btn-info my-2' onClick={sub}>Submit</button>
  </div>
  </div>
  )
}

export default SignupC