import { useState } from 'react'

import './App.css'

function App() {
  // const [PostComponent] = useState(0)

  return (
   
      <div> 
      <PostComponent></PostComponent>
      
      </div> 
    
  )
}

const style = { width:200, backgroundColor: "blue", borderRadius: 10, borderColor: "gray", borderWidth: 1, display: "flex"}

function PostComponent() {
  return  <div>

  
  <div style={style}> 
   <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
    width: 20,
    height: 20,
    borderRadius: 20
   }}  />
    <div style={{fontSize: 10}}>
    <b>100xdevs</b>
    <div> 23,888 followers </div> 
    <div> 12m </div> 
    </div>
     </div>
     <div style={{fontSize: 12}}>
      what to know how to win big? Check out how these folks won $6000 in bounties.
     </div>
     </div>
    
     
}

export default App
