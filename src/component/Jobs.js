import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Job from './Job';
const Jobs = () => {
    const [data, setdata] = useState([]);
    async function getJobs(){
        let url = 'http://localhost:5000/job';
        let resp = await axios.get(url);
        console.log(resp.data.resp);
        setdata(resp.data.resp);        
    }
    // console.log(data.data.resp);
    useEffect(()=>{
        getJobs();
    },[])
  return (
    <div>
        {true?data.map((value,idx)=>{    
       return <Job data = {value} key={idx}/>
    }):<>hello</>}
    </div>
  )
}

export default Jobs