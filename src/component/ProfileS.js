import React, { useEffect,useContext,useState,useRef } from 'react'
import axios from 'axios'
import JobContext from '../context/jobcontext/JobContext';
const ProfileS = () => {
  const a = useContext(JobContext);
  const [user, setuser] = useState({eFirstName:"",eMiddleName:"",eLastName:"",eAddress:"",eContact:"",eSpi:"",eBatch:"",eEmail:""});
  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Address, setAddress] = useState('');
  const [Contact, setContact] = useState('');
  const [Spi, setSpi] = useState('');
  const [Batch, setBatch] = useState('');
  const [Email,  setEmail] = useState('');
   const fill = useRef(null);
  useEffect(() => {
  async function getProfile(){
    const url = 'http://localhost:5000/student';
    const response = await axios.get(url,{headers:{'auth-token':a.token}});
  console.log('hello inside');
    console.log(response);
    let data = response.data.data;
    setuser({eFirstName:data.FirstName,eMiddleName:data.MiddleName,eLastName:data.LastName,eAddress:data.Address,eContact:data.Contact,eSpi:data.SPI,eBatch:data.Batch,eEmail:data.email});
    console.log(user,data);
    setFirstName(user.eFirstName);
    setMiddleName(user.eMiddleName);
    setLastName(user.eLastName);
    setEmail(user.eEmail);
    setAddress(user.eAddress);
    setSpi(user.eSpi);
    setBatch(user.eBatch);
    setContact(user.eContact);

  }
  console.log('hello');
  getProfile();
}, []); 


const handlechange=(event)=>{
    if(event.target.name==="eFirstName")setFirstName(event.target.value);
    else if(event.target.name==="eMiddleName")setMiddleName(event.target.value);
    else if(event.target.name==="eLastName")setLastName(event.target.value);
    else if(event.target.name==="eContact")setContact(event.target.value);
    else if(event.target.name==="eEmail")setEmail(event.target.value);
    else if(event.target.name==="eSpi")setSpi(event.target.value);
    else if(event.target.name==="eBatch")setBatch(event.target.value);
    else setAddress(event.target.value);
    setuser({...user,[event.target.name]:event.target.value});

    // setnote({...note,[event.target.name]:event.target.value,eid:noteid});


}
  return (
    <>
    <div className="page-content page-container mx-5" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
<div className="col-xxl-6 col-md-12">    
<div className="card user-card-full">
  <div className="row m-l-0 m-r-0">
      <div className="col-sm-4 bg-c-lite-green user-profile">
          <div className="card-block text-center text-white">
              <div className="m-b-25">
                  <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/>
                </div>
                <h6 className="f-w-600">{user.FirstName} {user.MiddleName} {user.LastName}</h6>
                <p> Batch -{user.Batch}</p>
                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
            </div>
        </div>
        <div className="col-sm-8">
            <div className="card-block fs-5">
                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                <div className="row">
                    <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{user.email}</h6>
                    </div>
                    <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Address</p>
                        <h6 className="text-muted f-w-400">{user.Address}</h6>
                    </div>
                </div>
                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Contact</p>
                            <h6 className="text-muted f-w-400">{user.Contact}</h6>
                        </div>
                        <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">SPI</p>
                            <h6 className="text-muted f-w-400">{user.SPI}</h6>
                        </div>
                    </div>
                    {/* <ul className="social-link list-unstyled m-t-40 m-b-10">
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                    </ul> */}
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
<div>
   <button type="button"  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form action="">
                <div className="row"> 
  <div className=" mb-1 col-4">
    <label htmlFor="eFirstName" className="form-label">FirstName</label>
    <input type="text" className="form-control" id="eFirstName" value = {FirstName}name="eFirstName" onChange={handlechange}/>
    </div>
    <div className=" mb-1 col-4">
    <label htmlFor="eMiddleName" className="form-label">MiddleName</label>
    <input type="text" className="form-control" id="eMiddleName" name="eMiddleName" value = {MiddleName} onChange={handlechange}/>
    </div>
    <div className=" mb-1 col-4">
    <label htmlFor="eLastName" className="form-label">LastName</label>
    <input type="text" className="form-control" id="eLastName" name="eLastName" value = {LastName} onChange={handlechange}/>
    </div>
  </div>
  <div className="row">
  <div className=" mb-1 col-6">
    <label htmlFor="eContact" className="form-label">Contact</label>
    <input type="text" className="form-control" id="eContact" name="eContact" value = {Contact} onChange={handlechange}/>
    </div>
    <div className=" mb-1 col-6">
    <label htmlFor="eEmail" className="form-label">Email</label>
    <input type="email" className="form-control" id="eEmail" name="eEmail" value = {Email} onChange={handlechange}/>
    </div>
    </div>
    <div className=" mb-1 col-12">
    <label htmlFor="eAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="eAddress" name="eAddress" value = {Address} onChange={handlechange}/>
    </div>
    <div className="row">
  <div className=" mb-1 col-6">
    <label htmlFor="eSpi" className="form-label">Spi</label>
    <input type="number" className="form-control" id="eSpi" name="eSpi" value = {Spi} onChange={handlechange}/>
    </div>
    <div className=" mb-1 col-6">
    <label htmlFor="eBatch" className="form-label">Batch</label>
    <input type="text" className="form-control" id="eBatch" name="eBatch" value = {Batch} onChange={handlechange}/>
    </div>
    </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div></div>
</>
  )
}

export default ProfileS