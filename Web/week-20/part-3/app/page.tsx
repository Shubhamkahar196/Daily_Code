// "use client"
import { getServerSession } from "next-auth";
// import { SessionProvider, signIn, signOut,useSession } from "next-auth/react";


export default async function Home() {

  // return (
  // <SessionProvider>
  //  <OtherHome/>
  // </SessionProvider>


  // );

  const session = await getServerSession();
  

  return (
    <div>
 {JSON.stringify(session)}
    </div>
   
  )
}

// function OtherHome(){
//   const session = useSession();
//   return <div>
//     {session.status == "authenticated" && <button className="border-2" onClick={()=> signOut}> Sign out</button>}
//     {session.status == "unauthenticated" && <button onClick={()=> signIn}> Sign in</button>}
//   </div>
// }
