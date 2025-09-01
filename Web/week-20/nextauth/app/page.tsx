"use client"


import { SessionProvider, signOut, useSession,signIn } from "next-auth/react";


export default function Home() {
  
  return <SessionProvider>
    <RealHome/>
  </SessionProvider>
    
  
}


function RealHome(){
  const session = useSession();

  return (
    <div>
        {session.status === 'authenticated' && <button onClick={ ()=>signOut()}>Logout</button>}

        {session.status ==='unauthenticated' && <button onClick={()=>signIn()}>Signin</button>}
    </div>
  )
}
