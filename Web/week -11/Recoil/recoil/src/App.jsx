import React ,{useState} from 'react'
import ContextApi from './ContextApi';
import {RecoilRoot} from 'recoil';
const App = () => {
  return (

    // this is context api 
    // <div>
      
    //   <ContextApi/>
    // </div>


    // atom 
    //  an "atom" is a small, reusable building block of UI, 
// like an icon or input field, used to create more complex components and consistent design systems

   
    <RecoilRoot>
     <ContextApi/>
    </RecoilRoot>
  )
}


export default App