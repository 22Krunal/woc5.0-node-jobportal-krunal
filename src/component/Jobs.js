import React, { useEffect,useState,useContext } from 'react'
import axios from 'axios'
import Job from './Job';
import JobContext from '../context/jobcontext/JobContext';
const Jobs = () => {
    const [data, setdata] = useState([]);
    const {token} = useContext(JobContext);
    async function getJobs(){
      // let token = localStorage.getItem('token');
      // console.log(token);
        let url = 'http://localhost:5000/job';
        let resp = await axios.get(url,{headers:{'auth-token':token}});
        // console.log(resp.data.data);
        setdata(resp.data.resp);        
    }
    // const {token} = useContext(JobContext);
    const handleDelete = async(id) =>{
      // console.log("hello",id);
      const url = `http://localhost:5000/job/${id}`;
      const resp = await axios.delete(url,{headers:{'auth-token':token}});
      // getJobs();
      if(resp){
        // console.log("done",resp);
        getJobs();
        // setdata(resp.data.resp);
      }
      else{
        console.log("retry");
      }
    }
    // console.log(data.data.resp);
    useEffect(()=>{
      // console.log("mast maza karo",token);
        getJobs();
    },[])
  return (
    <div>
        {data?data.map((value,idx)=>{    
       return <Job data = {value} key={idx} handleDelete={handleDelete}/>
    }):<>hello</>}
    </div>
  )
}

export default Jobs