import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import JobContext from '../context/jobcontext/JobContext';

const ChangePassword = () => {
    const {token,showAlert,LoginC,LoginS} = useContext(JobContext);
    const navigate = useNavigate();
    const handleSubmit = async()=>{
        let oldPassword = document.getElementById('oldPassword').value;
        let newPassword = document.getElementById('newPassword').value;
        let api = "";
        if(LoginC){
            api = 'company';
            console.log("Hello there");
        }
        else{
            api = 'student';
        }
        let url = `http://localhost:5000/${api}/password`;
        let rep = await axios.put(url,{oldPassword,Password:newPassword},{headers:{'auth-token':token}})
        .then((response)=>{
            if(response.data.success){
                showAlert('Password Changed Successfully','success');
                let nav = `/${api}/Profile`
                navigate(nav);
            }
            
        })
        .catch((error)=>{
            console.log(error.response.data.message);
            showAlert(error.response.data.message,'danger');
        });
    }
  return (
    <div className="card container my-5" style={{width: "25rem"}}>
      <div className="card-body">
      <h2 className="card-title">Change Password</h2>
      <div className="form-floating mb-3 ">
    <input type="password" className="form-control" id="oldPassword" placeholder="name@example.com"/>
    <label for="oldPassword">Old Password</label>
  </div>
  <div className="form-floating ">
    <input type="password" className="form-control" id="newPassword" placeholder="Password"/>
    <label for="newPassword">New Password</label>
  </div>
  <div className='btn btn-outline-info' style={{marginTop:"2rem"}}onClick={handleSubmit}>Save</div>
  </div>
  </div>
  )
}

export default ChangePassword