import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
        <div>Learning UseCOntext</div>
       <Login/>
       <Profile/>
    </UserContextProvider>
  
  )
}

export default App