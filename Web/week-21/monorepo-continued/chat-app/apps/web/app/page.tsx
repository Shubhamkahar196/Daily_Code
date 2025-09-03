"use client"

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleJoinRoom = () => {
    router.push("/chat/123");
  };

  // const handleInputChange = () => {
  //   alert("hi");
  // };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextInput
          // onChange={handleInputChange}
          size="small"
          placeholder="Room name"
        />
        <button onClick={handleJoinRoom}>Join room</button>
      </div>
    </div>
  );
}




// import { TextInput } from "@repo/ui/text-input";
// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function Home() {
//   const router = useRouter();
//   const [roomName, setRoomName] = useState("");

//   const handleJoinRoom = () => {
//     router.push(`/chat/${roomName}`);
//   };

//   const handleInputChange = (event) => {
//     setRoomName(event.target.value);
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//         }}
//       >
//         <TextInput
//           onChange={handleInputChange}
//           size="small"
//           placeholder="Room name"
//         />
//         <button onClick={handleJoinRoom}>Join room</button>
//       </div>
//     </div>
//   );
// }

