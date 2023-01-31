import React, { useContext } from "react";
import axios from "axios";
import JobContext from "../context/jobcontext/JobContext";

const Job = (props) => {
    // console.log(props.data);
    // const a = useContext(JobContext);
    
  return (
    <div className="card my-2" >
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h2 className="card-title">{props.data.Position}</h2>
        <p className="card-text"><strong>Description:</strong>{props.data.Description}</p>
        <p className="card-text"><strong>Package:</strong>{props.data.Package}</p>
        <p className="card-text"><strong>Vacancy:</strong>{props.data.Vacancy}</p>
        {/* <p className="card-text"><strong>Description:</strong>{props.data.Description}</p> */}
        <button className="btn btn-outline-primary" onClick={()=>{props.handleDelete(props.data._id)}}>Delete</button>
      </div>
    </div>
  );
};

export default Job;
