

import './App.css'

function App() {
  

  return (
      
      <div style={{background: "#dfe6e9", height: "100vh"}}> 
      <PostComponent></PostComponent>
      
      </div> 
    
  )
}

const style = { width:200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, display: "flex"}

function PostComponent() {
  return  <div style={style}>

  
  <div style={{display:"flex"}}> 
   <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
    width: 40,
    height: 40,
    borderRadius: 20
   }}  />
    <div style={{fontSize: 10, marginLeft: 10}}>
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
