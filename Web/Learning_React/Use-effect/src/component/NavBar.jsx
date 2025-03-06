import React1, {useEffect} from 'react'

const navbar = ( {color}) => {
    
   //case 1: run on every render
  useEffect(() =>{
    alert("Hey I will run on every render"); 
  })
 
  //case 2 : run only on first render
  useEffect(() =>{
    alert("Hey Welcome to my page. This is the First render"); 
  },[])
 
  //example of cleanup function
  useEffect(()=>{
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () =>{
        alert("component was unmounted")
    }
  })

  //case 3: Run only when certain values change
  useEffect(()=>{
    alert("Hey I am running beacuase color was channged")
  },[color])
    
   

  return (
    <div>
     I am navbar {color} color hehe....
    </div>
  )
}

export default navbar