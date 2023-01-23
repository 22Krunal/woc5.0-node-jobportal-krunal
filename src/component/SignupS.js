import React,{useContext} from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import JobContext from '../context/jobcontext/JobContext'
const SignupS = () => {
  const a = useContext(JobContext);
  const Navigate = useNavigate();
  let sub = async function handleSubmit(e){
    // console.log('hello',document.getElementById('fn').value);
    e.preventDefault();
    let FirstName = document.getElementById('FirstName').value;
    let LastName = document.getElementById('LastName').value;
    let MiddleName = document.getElementById('MiddleName').value;
    let Email = document.getElementById('email').value;
    let Contact = document.getElementById('contact').value;
    let Id = document.getElementById('Id').value;
    let Address = document.getElementById('address').value;
    let Batch = document.getElementById('batch').value;    
    let Spi = document.getElementById('spi').value;
    let Password = document.getElementById('password').value;
console.log({FirstName,MiddleName,LastName,email,contact,Id,address,batch,spi,password});

  let url = 'http://localhost:5000/student/signup';
            let resp = await axios.post(url,{FirstName,MiddleName,LastName,Email,Contact,Id,Address,Batch,Spi,password});
            if(resp.data.success){
              localStorage.setItem('loginS',true);
              a.handleSubmitS(true);
              Navigate('/');
            }
            
  }
  return (
    <div className="card container my-5" style={{width: "40rem"}}>
      <div className="card-body">
      <h2 className="card-title">Student Register</h2>
      <div className="row g-3">
      <div className="form-floating mb-3 col-4 ">
    <input type="text" className="form-control" id="FirstName" placeholder="name@example.com"/>
    <label for="FirstName">First Name</label>
  </div>
  <div className="form-floating mb-3  col-4">
    <input type="text" className="form-control" id="MiddleName" placeholder="name@example.com"/>
    <label for="MiddleName">Middle Name</label>
  </div>
  <div className="form-floating mb-3  col-4">
    <input type="text" className="form-control" id="LastName" placeholder="name@example.com"/>
    <label for="LastName">Last Name</label>
  </div>
      </div>
      <div className="form-floating mb-3  ">
    <input type="text" className="form-control" id="Id" placeholder="name@example.com"/>
    <label for="Id">ID</label>
  </div>  
      <div className="form-floating mb-3  ">
    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
    <label for="email">Email address</label>
  </div>
  <div className="form-floating mb-3  ">
    <input type="text" className="form-control" id="contact" placeholder="name@example.com"/>
    <label for="contact">Contact</label>
  </div>
  <div className="form-floating mb-3  ">
    <input type="password" className="form-control" id="password" placeholder="name@example.com"/>
    <label for="password">Password</label>
  </div>
  <div className="form-floating mb-3  ">
    <input type="email" className="form-control" id="address" placeholder="name@example.com"/>
    <label for="address">Address</label>
  </div>
  <div className="form-floating mb-3  ">
    <input type="text" className="form-control" id="batch" placeholder="name@example.com"/>
    <label for="batch">Batch</label>
  </div>
  <div className="form-floating ">
    <input type="number" className="form-control" id="spi" min='0' max='10'placeholder="Password"/>
    <label for="spi">Spi</label>
  </div>
  <button className='btn btn-info my-2' onClick={sub}>Submit</button>
  </div>
  </div>
  )
}

export default SignupS