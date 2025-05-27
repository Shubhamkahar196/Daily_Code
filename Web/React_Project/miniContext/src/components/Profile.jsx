import React from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = UserContext(UserContext)

  if(!user) return <div>Please login</div>

  return <div>Welcome {user.username}</div>
 
}

export default Profile