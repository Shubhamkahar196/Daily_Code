// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const [roomId, setRoomId] = useState("");
//   const [isJoining, setIsJoining] = useState(false);
//   const router = useRouter();

//   const handleJoinRoom = () => {
//     if (!roomId.trim()) return;

//     setIsJoining(true);
//     // Simulate loading for better UX
//     setTimeout(() => {
//       router.push(`/room/${roomId.trim()}`);
//     }, 500);
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       handleJoinRoom();
//     }
//   };

//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <h1 className="title">Welcome to Draw Chat</h1>
//         <p className="subtitle">Connect with friends and collaborate in real-time drawing sessions</p>

//         <div className="join-room-card">
//           <h2>Join a Room</h2>
//           <div className="input-group">
//             <input
//               type="text"
//               value={roomId}
//               onChange={(e) => setRoomId(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Enter room ID..."
//               className="room-input"
//               disabled={isJoining}
//             />
//             <button
//               onClick={handleJoinRoom}
//               disabled={!roomId.trim() || isJoining}
//               className="join-button"
//             >
//               {isJoining ? "Joining..." : "Join Room"}
//             </button>
//           </div>
//           <p className="hint">Share the room ID with others to collaborate</p>
//         </div>
//       </div>

//       <style jsx>{`
//         .home-container {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//         }

//         .hero-section {
//           text-align: center;
//           color: white;
//           max-width: 600px;
//           width: 100%;
//         }

//         .title {
//           font-size: 3rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//         }

//         .subtitle {
//           font-size: 1.2rem;
//           margin-bottom: 3rem;
//           opacity: 0.9;
//           line-height: 1.6;
//         }

//         .join-room-card {
//           background: rgba(255, 255, 255, 0.95);
//           border-radius: 16px;
//           padding: 2rem;
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
//           backdrop-filter: blur(10px);
//         }

//         .join-room-card h2 {
//           color: #333;
//           margin-bottom: 1.5rem;
//           font-size: 1.5rem;
//           font-weight: 600;
//         }

//         .input-group {
//           display: flex;
//           gap: 1rem;
//           margin-bottom: 1rem;
//           flex-direction: column;
//         }

//         @media (min-width: 480px) {
//           .input-group {
//             flex-direction: row;
//           }
//         }

//         .room-input {
//           flex: 1;
//           padding: 1rem;
//           border: 2px solid #e1e5e9;
//           border-radius: 8px;
//           font-size: 1rem;
//           outline: none;
//           transition: border-color 0.2s, box-shadow 0.2s;
//         }

//         .room-input:focus {
//           border-color: #667eea;
//           box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
//         }

//         .room-input:disabled {
//           background: #f8f9fa;
//           cursor: not-allowed;
//         }

//         .join-button {
//           padding: 1rem 2rem;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           border: none;
//           border-radius: 8px;
//           font-size: 1rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s;
//           white-space: nowrap;
//         }

//         .join-button:hover:not(:disabled) {
//           transform: translateY(-2px);
//           box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
//         }

//         .join-button:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//           transform: none;
//         }

//         .hint {
//           color: #666;
//           font-size: 0.9rem;
//           margin: 0;
//           font-style: italic;
//         }
//       `}</style>
//     </div>
//   );
// }


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
