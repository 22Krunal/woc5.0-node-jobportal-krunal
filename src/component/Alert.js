import React, { useContext } from 'react'
import JobContext from '../context/jobcontext/JobContext';

const Alert = (props) => {
    const {alert} = useContext(JobContext);
    const capitalize=(word)=>{
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <>
            {/* {true&&
        <div className={`alert alert-success alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
</div>} */}
{alert&&
<div class={`alert alert-${alert.type}`} role="alert" style={{height:'50px'}}>
  <strong>{capitalize(alert.type)}</strong> {alert.msg}
</div>
}
</>


    )
}

export default Alert
