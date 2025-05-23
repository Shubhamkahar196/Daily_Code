
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { networkAtom,jobsAtom,messagingAtom,notificationAtom } from './selector'
import { useMemo } from 'react';

function App() {
   return <RecoilRoot>
    <MainApp/>
   </RecoilRoot>

}


function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  
const finalValue = networkNotificationCount >= 100 ? "99+" : networkNotificationCount;

const jobsAtomCount = useRecoilValue(jobsAtom);
const notificationAtomCount = useRecoilValue(notificationAtom);

const messaginAtomCount = useRecoilValue(messagingAtom);

// useMemo 
const totalNotificationCount = useMemo ( ()=>{
  return  networkNotificationCount + jobsAtomCount + notificationAtomCount + messaginAtomCount ;
},[networkNotificationCount + jobsAtomCount + notificationAtomCount + messaginAtomCount]) 

  return (
    <>
        <button>Home</button>

        <button>My network ({finalValue})</button>
        <button>Jobs({jobsAtomCount}</button>
        <button>Messaging ({messaginAtomCount})</button>
        <button>Notification ({notificationAtomCount}</button>
         
         <button>Me ({totalNotificationCount})</button>
       
    </>
  )
}



export default App
