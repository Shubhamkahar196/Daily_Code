import { useState } from 'react'

import './App.css'
import ButtonUI from './component/ButtonUI/Button'
import PlusIcon from './component/icons/PlusIcon'
import ShareIcon from './component/icons/ShareIcon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ButtonUI variant={"primary"}
        startIcon={<PlusIcon variantSize={"lg"} />} 
        endIcon={<ShareIcon variantSize={"lg"} />} 
        size="lg" 
        title={"Share"}/>
    </div>
     
  )
}

export default App
