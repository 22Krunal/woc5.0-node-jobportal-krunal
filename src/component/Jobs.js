import React, { useEffect,useContext } from 'react'
import Job from './Job';
import JobContext from '../context/jobcontext/JobContext';
const Jobs = () => {
    const {getJobs,DeleteJob,jobs} = useContext(JobContext);
    
    useEffect(()=>{
        getJobs();
    },[])
  return (
    <div>
      {jobs.length === 0 && <h2>Sorry No Jobs Available For You!!!</h2>}
        {jobs?jobs.map((value,idx)=>{    
       return <Job data = {value} key={idx} handleDelete={DeleteJob} login = {'student'}/>
    }):<>hello</>}
    </div>
  )
}

export default Jobs