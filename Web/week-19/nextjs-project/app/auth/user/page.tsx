// better way to fetching data in next js

import axios from "axios";

export default async function User(){
    const response = axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")

    const data = (await response).data;

    return    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data?.name}
                </div>
                
                {data?.email}
            </div>
        </div>
    </div>
}






// bad way to that  fetching data in next js


// // "use client"
// // import { useEffect, useState } from "react"
// import axios from "axios"
// // export default async function User(){
// //     const [loading,setLoading] = useState(true)
// //     const[data, setData] = useState({})


// // /

// //     // useEffect(()=>{
// //     //   axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
// //     //   .then(response =>{
// //     //     setData(response.data);
// //     //     setLoading(false);
// //     //   })
// //     // },[])

// //     // if(loading){
// //     //     return <div>
// //     //         loading...
// //     //     </div>
// //     // }

// //     return <div>
// //     User page
// //     {data.name}
// //     {data.email}
// //     </div>
// // }