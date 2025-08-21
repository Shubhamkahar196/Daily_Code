// "use client"

import Link from "next/link"
// import { useRouter } from "next/router"



export default function Home(){
  //  const router = useRouter();

  return <div className="text-lg w-screen h-screen flex items-center justify-center">
    <div>
      Todo Application
        
         {/* bad way to routing */}
        {/* <button onClick={()=>{
          router.push("/signin")
        }}>Signin </button> */}


   

    {/* Good way to routing */}
    
      <br />
    <Link className="text-md border m-2" href="/signin">Sign into Todo App</Link>
    <br />
    <Link className="text-md border m-2" href="/signup">Signup into Todo App</Link> 
      </div>
  </div>
}