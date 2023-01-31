import React,{useContext,useEffect,useState} from 'react'
import axios from 'axios';
import JobContext from '../context/jobcontext/JobContext';
import "./ProfileC.css"
const ProfileC = () => {
    const a = useContext(JobContext);
    // const [user, setuser] = useState({eName:"",eEmail:"",eAddress:"",ePassword:""});
    const [name,setname] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
useEffect(() => {
  async function getProfile(){
    const url = 'http://localhost:5000/company';
    const response = await axios.get(url,{headers:{'auth-token':a.token}});
  console.log('hello inside');
    console.log(response);
    const resp = response.data.data;
    // setuser({eName:resp.Name,eEmail:resp.Email,eAddress:resp.eAddress,ePassword:resp.Password});
    setname(resp.Name);
    setemail(resp.Email);
    setaddress(resp.Address);
  }
  console.log('hello');
  getProfile();
}, [])
const onChange=(event)=>{

    setname(event.target.value);
    // setuser({...user,[event.target.name]:event.target.value});
}
const submit = (e)=>{
    e.preventDefault();
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
                <h6 className="f-w-600">{name}</h6>
                <p>Web Designer</p>
                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
            </div>
        </div>
        <div className="col-sm-8">
            <div className="card-block">
                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                <div className="row">
                    <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{email}</h6>
                    </div>
                    <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Address</p>
                        <h6 className="text-muted f-w-400">{address}</h6>
                    </div>
                </div>
                {/* <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Recent</p>
                            <h6 className="text-muted f-w-400">Sam Disuja</h6>
                        </div>
                        <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Most Viewed</p>
                            <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                        </div>
                    </div> */}
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
   <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
            ...
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

export default ProfileC