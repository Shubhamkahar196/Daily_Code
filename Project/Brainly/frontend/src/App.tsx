
import { Button } from './components/ui/Button'

import './App.css'
import { PlusIcon } from './icons/Plus'

function App() {
 

  return (
    <>
     
      <Button startIcon={<PlusIcon/>} size='sm' variant='primary' text='Share' />
      <Button  size="lg"  variant='secondary' text='Add Content' />
      
     
    </>
  )
}

export default App
