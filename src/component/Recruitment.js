import React, { useEffect,useState,useContext } from 'react'
import axios from 'axios'
import Job from './Job';
import JobContext from '../context/jobcontext/JobContext';
const Recruitment = () => {
    const [data, setdata] = useState([]);
    const {token,showAlert} = useContext(JobContext);
    async function getJobs(){
        let url = 'http://localhost:5000/job/myjobs';
        let resp = await axios.get(url,{headers:{'auth-token':token}});
        setdata(resp.data.resp);        
    }
    const handleDelete = async(id) =>{
      const url = `http://localhost:5000/job/${id}`;
      const resp = await axios.delete(url,{headers:{'auth-token':token}});
      if(resp){
        showAlert('Deleted Successfully','success');
        getJobs();
      }
      else{
        console.log("retry");
      }
    }
    useEffect(()=>{
        getJobs();
    },[])
  return (
    <div>
      {data.length == 0 &&<h2>No Jobs Posted Yet!!!</h2>}
        {data?data.map((value,idx)=>{    
       return <Job data = {value} key={idx} handleDelete={handleDelete} login={'company'}/>
    }):<></>}
    </div>
  )
}

export default Recruitment;