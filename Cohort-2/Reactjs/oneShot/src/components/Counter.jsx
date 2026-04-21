// React hook= special function that allows function components
// to use React features without writing classcomponents (React v16.8) 
// (useState,useEffect,useContext,useReducer,useCallback,and more)

// useState() =>
//     A React hook that allows the creation of stateful variable 
//    AND a setter function up update its value in the virtual DOM.
//    [name.setName]

import { useState } from "react"

function Counter(){
    const [name,setName] = useState("");
    const[age,setAge] = useState(0);

const updateName = ()=>{
    setName("sk")
}

const incrementAge = (e)=>{
    setAge((prev)=> prev+e)
}
    return(
        <>
        <p>Name: {name}</p>
        <button onClick={updateName}>set-name</button>

        <p>Name: {age}</p>
        <button onClick={()=>incrementAge(+2)}>IncrementAge</button>
        </>
    )
}

export default Counter