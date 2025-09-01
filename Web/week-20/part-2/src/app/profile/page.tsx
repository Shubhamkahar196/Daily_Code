// "use client"

import axios from "axios";


// bad way data fetching

// export default function Profile(){
//   const [profileAvatar, setProfileAvatar] = useState("");

//     useEffect(()=>{
//     axios.get("http://localhost:3000/app/api/profile",{
//             headers:{
//                 authorization: localStorage.getItem('token')
//             }
//         }).then(res =>{
//             setProfileAvatar(res.data.avatarUrl)

//         })
//     },[])
    
//     return <div>
//       {profileAvatar}
//     </div>
// }


// good way data fetchin in nextjs

export default async function Profile() {
           
    const res = await axios.get("http://localhost:3000/api/profile",{
        headers: {
         authorization: localStorage.getItem('token')
        }
    })
    const profilePicture = res.data. avatarUrl;
    
    return <div>
      {profilePicture}
    </div>
}