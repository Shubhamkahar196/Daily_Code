import { useState } from 'preact/hooks'
import './app.css'
import React from 'react';
import { Children } from 'preact/compat'

export function App() {
  const [count, setCount] = useState(0)

  return (

    // you can do like this  

    <div style={{display: "flex"}}>
       <Card Children={ <div style={{color: "green"}}> 
        What do you want to post <br /> <br />
        <input type="text" />
         </div>}/>
         <Card Children={"hii there"}/>
    </div>

    // you  can do also look like this

    // <div style={{ display: "flex", background: "gray" }}>
    //   <Card >
    //     <div style={{ color: "green" }}>
    //       What do you want to post <br /> <br />
    //       <input type="text" />
    //     </div>
    //   </Card>

    //   <Card>
    //     Hii there
    //   </Card>
    // </div>


    



  )
}

function Card({ Children }) {
  return <div style={{ backgroundColor: "white", borderRadius: 10, color: "white", padding: 10, margin: 10 }}>
    {Children}
  </div>
}
