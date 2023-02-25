import React from 'react'
import { getUserDetails } from '../../helper/SesssionHelper'

const Profile = () => {

  const profile = getUserDetails()
  return (
    <div className='container'>
      <div className="card col-md-4 m-auto p-2">
          <img style={{width:"100px"}} className='col-md-6 img-fluid img-thumbnail' src={profile[0].photo} alt="" />
          <h4 style={{color:"green"}}>Name: {profile[0].name}</h4>
          <p>Email:{profile[0].email}</p>
          <p>Mobile:{profile[0].mobile}</p>
      </div>
    </div>
  )
}

export default Profile