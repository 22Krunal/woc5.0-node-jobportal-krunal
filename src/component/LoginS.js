import React,{useContext} from 'react'
import JobContext from '../context/jobcontext/JobContext';
const LoginS = () => {
  const {loginStudent} = useContext(JobContext);


  let handleLogin = async function login(e){
    e.preventDefault();
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;
    loginStudent({Email,Password});
  }
  
  return (
    <div className="card container my-5 shadow-lg p-3 mb-5 bg-light rounded" style={{width: "25rem"}}>
      <div className="card-body">
      <h2 className="card-title">Student Login</h2>
      <div className="form-floating mb-3 ">
    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
    <label for="email">Email address</label>
  </div>
  <div className="form-floating mb-3">
    <input type="password" className="form-control" id="password" placeholder="Password"/>
    <label for="password">Password</label>
  </div>
  <div className='btn btn-outline-info my-3' style={{marginTop:"5rem"}}onClick={handleLogin}>Login</div>
  </div>
  </div>
  )
}

export default LoginS