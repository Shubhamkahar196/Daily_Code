import { useState, useEffect } from 'react'

import './App.css'
import { usePostTitle } from './hooks/useFetch'

function App() {
const postTitle = usePostTitle();
  return (
    <>
      <div>
        {/* rendering */}
       {postTitle}
      </div>
      
    </>
  )
}

export default App
