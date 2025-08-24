"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup(){
 const [username, setUsername] = useState("");
 const [password , setPassword] = useState("");

 const router = useRouter();

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className=" border p-2">
            <input type="text" placeholder="username" onChange={e =>{
                setUsername(e.target.value)
            }} />
            <input type="password" placeholder="passowrd" onChange ={e=>{
                setPassword(e.target.value)}}/>
         

         {/* after submitting signup redirect to signin */}
   
            {/* <button onClick={ async()=>{
                         await axios.post("http://localhost:3000/api/v1/signup",{
                            username,
                            password
                          })

                          router.push("/signin")
            }}>Signup</button> */}

              <button
  onClick={async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/signup", {
        username,
        password,
      });
      if (response.status === 200) {
        router.push("/signin");
      } else {
        console.error("Error signing up:", response);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }}
>
  Signup
</button>


        </div>
    </div>
}