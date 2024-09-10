import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>

<Outlet/>

      Profile <br/>

      <Link to="settings">
        open settings
      </Link>  

     

    </div>
  )
}

export default Profile