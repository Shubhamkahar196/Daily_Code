import React from 'react'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Card from './component/Card'



function App() {
 

  return (
    <>
     <NavBar/>
      <div className='cards'>
        <Card title="card 1" description="card 1"/>
        <Card title="card 2" description="card 2"/>
        <Card title="card 3" description="card 3"/>
        <Card title="card 4" description="card 4"/>
      </div>
     <Footer/>
    </>
  )
}

export default App
