import React from "react";

const job = (props) => {
    // console.log(props.data);
  return (
    <div className="card my-2" >
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h2 className="card-title">{props.data.Position}</h2>
        <p className="card-text"><strong>Description:</strong>{props.data.Description}</p>
        <p className="card-text"><strong>Package:</strong>{props.data.Package}</p>
        <p className="card-text"><strong>Vacancy:</strong>{props.data.Vacancy}</p>
        {/* <p className="card-text"><strong>Description:</strong>{props.data.Description}</p> */}
        <button className="btn btn-outline-primary">Apply</button>
      </div>
    </div>
  );
};

export default job;
