import React, { useEffect,useContext,useState,useRef } from 'react'
import axios from 'axios'
import JobContext from '../context/jobcontext/JobContext';
import { useNavigate } from 'react-router-dom';
const ProfileS = () => {
  const {token,showAlert,handleSubmitS} = useContext(JobContext);
  const [user, setuser] = useState({eFirstName:"",eMiddleName:"",eLastName:"",eAddress:"",eContact:"",eSpi:"",eBatch:"",eEmail:""});
  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Address, setAddress] = useState('');
  const [Contact, setContact] = useState('');
  const [Spi, setSpi] = useState('');
  const [Batch, setBatch] = useState('');
  const [Email,  setEmail] = useState('');
  const [id,setId] = useState('');
  const navigate = useNavigate();
   const fill = useRef(null);
   async function getProfile(){
    const url = 'http://localhost:5000/student';
    const response = await axios.get(url,{headers:{'auth-token':token}})
    .then((response)=>{
    console.log('hello inside');
    console.log(response);
    let data = response.data.data;
    console.log(user,data);
    setFirstName(data.FirstName);
    setMiddleName(data.MiddleName);
    setLastName(data.LastName);
    setEmail(data.email);
    setAddress(data.Address);
    setSpi(data.SPI);
    setBatch(data.Batch);
    setContact(data.Contact);
    setId(data._id);
    setuser({eFirstName:data.FirstName,eMiddleName:data.MiddleName,eLastName:data.LastName,eAddress:data.Address,eContact:data.Contact,eSpi:data.SPI,eBatch:data.Batch,eEmail:data.email});
  })
    .catch((response)=>{
      if(!response.data.success){
        showAlert(response.data.message,'danger');
      }
    });
    
    
  }
   useEffect(() => {
  
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
const handleSubmit = async(id) =>{
  console.log(id);
  const url = `http://localhost:5000/student/${id}`
  let object = {FirstName,MiddleName,LastName,SPI:Spi,Batch,Contact,Address,email:Email};
  const response = await axios.put(url,object)
  .then((response)=>{
    if(response.data.success){
      showAlert('Updated Successfully','success');
      getProfile();
      fill.current.click();
    }
  })
  .catch((error)=>{
    showAlert(error.data.message,'danger');
  })

}

const handleDelete = async(id) =>{
  const url = `http://localhost:5000/student/${id}`;
  const response = await axios.delete(url,{headers:{'auth-token':token}})
  .then((response)=>{
    if(response.data.success){
      showAlert('Deleted Successfully','success');
      handleSubmitS('','');
      navigate('/');
    }
  })
  .catch((error)=>{
    showAlert(error.data.message,'danger');
  });
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
                <h6 className="f-w-600">{user.eFirstName} {user.eMiddleName} {user.eLastName}</h6>
                <p> {user.eEmail}</p>
                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
            </div>
        </div>
        <div className="col-sm-8">
            <div className="card-block fs-5">
                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Acedmics</h6>
                <div className="row">
                    <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">SPI</p>
                        <h6 className="text-muted f-w-400">{user.eSpi}</h6>
                    </div>
                    <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Batch</p>
                        <h6 className="text-muted f-w-400">{user.eBatch}</h6>
                    </div>
                </div>
                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Contact Infromation</h6>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Contact</p>
                            <h6 className="text-muted f-w-400">{user.eContact}</h6>
                        </div>
                        <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Address</p>
                            <h6 className="text-muted f-w-400">{user.eAddress}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>

<div>
<div className='col'>
  <button className='btn btn-danger mx-2' onClick={()=>{handleDelete(id)}}>Delete</button>
   <button type="button" ref={fill} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Update
    </button>
</div>
    
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
            <button type="button" className="btn btn-primary" onClick={()=>handleSubmit(id)}>Save changes</button>
          </div>
        </div>
      </div>
    </div></div>
</>
  )
}

export default ProfileS