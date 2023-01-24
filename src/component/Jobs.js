import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Job from './Job';
const Jobs = () => {
    const [data, setdata] = useState([]);
    async function getJobs(){
      let token = localStorage.getItem('token');
        let url = 'http://localhost:5000/job';
        let resp = await axios.get(url,{headers:{
          'Content-Type':'application/json',
          'auth-token':token,
        }});
        // console.log(resp.data.data);
        setdata(resp.data.data);        
    }
    // console.log(data.data.resp);
    useEffect(()=>{
        getJobs();
    },[])
  return (
    <div>
        {data?data.map((value,idx)=>{    
       return <Job data = {value} key={idx}/>
    }):<>hello</>}
    </div>
  )
}

export default Jobs