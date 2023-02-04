import React, { useEffect,useContext} from 'react'
// import { Link } from 'react-router-dom'
import {  Link, useNavigate,useLocation } from 'react-router-dom'
import JobContext from '../context/jobcontext/JobContext';

const Navbar = () => {
  const {handleSubmitC,handleSubmitS,LoginC,LoginS,token} = useContext(JobContext);
  // let login = localStorage.getItem('login');
  let navigate = useNavigate();
  // const [Login, setLogin] = useState(login);
  let sub = ()=>{
    handleSubmitS('','');
    handleSubmitC('','');
  // setLogin(false);
  navigate('/');
} 
// const location = useLocation();
useEffect((()=>{
    // let lc = localStorage.getItem('loginC');
    // let ls = localStorage.getItem('loginS');
    // let token = localStorage.getItem('token');
    // handleSubmitC(lc,token);
    // handleSubmitS(ls,token);
  console.log("Mounted");
}),[]);
  return (
    <div> 
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" >JobPortal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="navbar-brand" to="/">Home</Link>
        </li>
        {!(LoginS)?<></>:
        <>
        <li className="nav-item">
          <Link className="navbar-brand" to="/Job">Jobs</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to="/student/Profile">Profile</Link>
        </li>
        <li className="nav-item">
          <button className='btn btn-outline-primary' onClick={sub}>LogOut</button>
        </li>
        </>
        }
        {!(LoginC)?<></>:
      <>
      <li className="nav-item">
        <Link className="navbar-brand" to="/PostJob">Post Job</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-brand" to="/myJobs">Recuritment</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-brand" to="/company/Profile">Profile</Link>
      </li>
      <li className="nav-item">
        <button className='btn btn-outline-primary' onClick={sub}>LogOut</button>
      </li>
      </>
      }
</ul>
</div>
  </div>
</nav>
          </div>
  )
}

export default Navbar