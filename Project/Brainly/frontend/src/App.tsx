
import Button from './components/ui/Button'

import './App.css'
import PlusIcon from './icons/Plus'
import ShareIcon from './icons/ShareIcons'
import { Card } from './components/Card/Card'

function App() {
 

  return (
    <>
    

    
      <Button startIcon={<PlusIcon/>} size='lg' variant='primary' text='Add Content' />
      <Button  size="lg"  variant='secondary' text='Share Brain' startIcon={<ShareIcon/>} />
       <Card/>
     
    </>
  )
}

export default App
