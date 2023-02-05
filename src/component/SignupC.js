import React,{useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import JobContext from '../context/jobcontext/JobContext'
const SignupC = () => {
  const {handleSubmitC,showAlert,BaseUrl} = useContext(JobContext);
  const navigate = useNavigate();
  let sub = async function handleSubmit(e){
    e.preventDefault();
      let Name = document.getElementById('Name').value;
      let Address = document.getElementById('address').value;
      let Email = document.getElementById('email').value;
      let Password = document.getElementById('password').value;
      
      const url = `${BaseUrl}/company/signup`;
      let response = await axios.post(url,{Name,Address,Email,Password})
      .then((response)=>{
        if(response.data.success){
        // console.log(response.data.authtoken);
        handleSubmitC('true',response.data.authtoken);
        showAlert('Successfully Logged In','success');
        navigate('/');
      }})
      .catch((err)=>{
          showAlert(err.response.data.message,'danger');
          console.log('error');
      });

  }
  return (
    <div className="card container my-5 shadow-lg p-3 mb-5 bg-light rounded" style={{width: "40rem"}}>
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
  <button className='btn btn-info my-2'style={{marginTop:'5rem'}} onClick={sub}>Submit</button>
  </div>
  </div>
  )
}

export default SignupC