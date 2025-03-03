import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg" width={350}  style={{border: "2px solid black", overflow: "hidden"}} alt="" />
        
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card