import React from 'react'
import axios from 'axios';




const PostJob = () => {
  const sub = async function(e){
    e.preventDefault();
    let token = localStorage.getItem('token');
    const url = 'http://localhost:5000/job';
    const Description = document.getElementById('Description').value;
    const Vacancy = document.getElementById('Vacancy').value;
    const Criteria = document.getElementById('Criteria').value;
    const Package = document.getElementById('Package').value;
    const Position = document.getElementById('Position').value;
    console.log({Description,Vacancy,Criteria,Package,Position});
    // const response = await axios({
    //   method: 'post',
    //   url: url,
    //   {Description,Vacancy,Criteria,Package,Position},{
    //   headers:{
    //     'Content-Type':'application/json',
    //     'auth-token':token,
    //     // 'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNTlkY2VkNTYyYzI2MGEyYjFmMGU5In0sImlhdCI6MTYzMDkwMzc5M30.w-LD5IglJ8kVyCt7T-b7d6UmEMTbt0LkBgv_sjz2KZI',
    //   }
    // });
    const response = await axios.post(url,{Description,Vacancy,Criteria,Package,Position},{headers:{
      'Content-Type':'application/json',
      'auth-token':token,
    }});
    if(response){
      console.log("great");
    }
  };
  return (
    <div className="card container my-5" style={{width: "40rem"}}>
      <div className="card-body">
      <h2 className="card-title">Post a Vacancy</h2> 
      <div className="form-floating mb-3  ">
    <input type="text" className="form-control" id="Description" placeholder="name@example.com"/>
    <label for="Description">Description</label>
  </div>
  <div className="form-floating mb-3  ">
    <input type="number" className="form-control" id="Vacancy" placeholder="name@example.com"/>
    <label for="Vacancy">Vacancy</label>
  </div>
  <div className="form-floating mb-3  ">
    <input type="Number" className="form-control" id="Criteria" max = "10" placeholder="name@example.com"/>
    <label for="Criteria">Criteria</label>
  </div>
  <div className="form-floating mb-3  ">
    <input type="text" className="form-control" id="Position" placeholder="name@example.com"/>
    <label for="Position">Position</label>
  </div>
  <div className="form-floating mb-3  ">
    <input type="number" className="form-control" id="Package" placeholder="name@example.com"/>
    <label for="Package">Package</label>
  </div>
  <button className='btn btn-info my-2' onClick={sub}>Submit</button>
  </div>
  </div>

  )
}

export default PostJob