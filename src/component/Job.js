import React  from "react";

const Job = (props) => {
    
    
  return (
    <div className="card my-2" >
      <div className="card-body">
        <h2 className="card-title">{props.data.Position}</h2>
        <p className="card-text"><strong>Description: </strong>{props.data.Description}</p>
        <p className="card-text"><strong>Package: </strong>{props.data.Package} LPA</p>
        <p className="card-text"><strong>Vacancy: </strong>{props.data.Vacancy}</p>
        <p className="card-text"><strong>Criteria: </strong>{props.data.Criteria}</p>
       {props.login === 'company'&& <button className="btn btn-outline-danger" onClick={()=>{props.handleDelete(props.data._id)}}>Delete</button>}
       {props.login === 'student'&& <button className="btn btn-outline-primary">Apply</button>}
       </div>
    </div>
  );
};

export default Job;
