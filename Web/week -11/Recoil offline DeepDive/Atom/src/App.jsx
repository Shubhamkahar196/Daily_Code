
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { networkAtom,jobsAtom,messagingAtom,notificationAtom } from './atom'

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
// const [messaginAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);
const messaginAtomCount = useRecoilValue(messagingAtom);

  return (
    <>
        <button>Home</button>

        <button>My network ({finalValue})</button>
        <button>Jobs({jobsAtomCount}</button>
        <button>Messaging ({messaginAtomCount})</button>
        <button>Notification ({notificationAtomCount}</button>

       
    </>
  )
}

function ButtonUpdater(){
  const [messaginAtomCount, setMessagingAtomCount] = useSetRecoilState(messagingAtom);
  return <button onClick={() =>{
          setMessagingAtomCount(messaginAtomCount + 1);
        }}>Me</button>
}

export default App
