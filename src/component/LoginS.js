import React from 'react'

const LoginS = () => {
  return (
    <div className="card container my-5" style={{width: "25rem"}}>
      <div className="card-body">
      <h2 className="card-title">Student Login</h2>
      <div className="form-floating mb-3 ">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
    <label for="floatingInput">Email address</label>
  </div>
  <div className="form-floating ">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
    <label for="floatingPassword">Password</label>
  </div>
  </div>
  </div>
  )
}

export default LoginS