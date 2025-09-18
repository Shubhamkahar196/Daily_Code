"use client"

export function AuthPage({isSignin}:{
    isSignin: boolean
}) {
    return <div className="w-screen h-screen flex justify-center items-center text-black">
    <div className=" p-2 m-2 bg-white rounded">

        <div className="p-2">
<input type="text" placeholder="email" /> 
        </div>
    

    <div className="p-2">
<input type="text" placeholder="password" />
    </div>
    
<div className="pt-2">
 <button onClick={()=>{

    }}>{isSignin ? "Sign in" : "Signup" }</button>
</div>
   
    </div>
    </div>
}