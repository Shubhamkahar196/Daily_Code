import React ,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login,logout } from './store/authSlice'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  .then( (userData)=>{
    if(userData ){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  })
  .finally(()=> setLoading(false))
},[])

if(loading){
  return <div>Loading</div>
}

}

export default App
