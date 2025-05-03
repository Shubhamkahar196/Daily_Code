import { useState, useEffect } from 'react'

import './App.css'
import { usePostTitle,useFetch } from './hooks/useFetch'

function App() {
// const postTitle = usePostTitle();

const[currentPost, setCurrentPost] = useState(1);
// calling useFetch from hook 
const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

//  first show Loading then show rendering post
if(loading){
  return <div>
    Loading...
  </div>
}
  return (
    <>
    <div> 
      {/* when i click on button they change  */}
    <button onClick={()=> setCurrentPost(1)}>1</button>
    <button onClick={()=> setCurrentPost(2)}>2</button>
    <button onClick={()=> setCurrentPost(3)}>3</button>
    
      
        {/* rendering */}
       {/* {postTitle} */}
       {JSON.stringify(finalData)}
      </div>
      
    </>
  )
}

export default App
