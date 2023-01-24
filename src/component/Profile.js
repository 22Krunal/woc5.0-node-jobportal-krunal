import React, { useEffect } from 'react'
import axios from 'axios'
const Profile = () => {
    
    useEffect((()=>{
         async function xxy(){
            let token = localStorage.getItem('token');
            const url = 'http://localhost:5000/company'
            const response = await axios.get(url,{headers:{'auth-token':token}});
            console.log(response);
        }
        xxy();
        console.log("hee")
    }),[]);
  return (
    <div>Profile</div>
  )
}

export default Profile