import React,{useState} from 'react'

const DarkMode = () => {  
    // first way with state 
    const[darkMode, setDarkMode] = useState(true);

  return (
    <div className={`h-screen ${darkMode ? "bg-white" : "bg-blue-800"}`}>
       <button onClick={()=>
        setDarkMode(!darkMode)
       }>Tooggle Theme</button>
        </div>
  )

}    


export default DarkMode






