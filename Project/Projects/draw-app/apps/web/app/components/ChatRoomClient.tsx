
"use client";

import { useEffect, useState, useRef } from "react";
import { useSocket } from "../hooks/useSocket";

interface Message {
  message: string;
  timestamp?: number;
  userId?: string;
}

interface ChatRoomClientProps {
  messages: Message[];
  id: string;
}

export function ChatRoomClient({ messages, id }: ChatRoomClientProps) {
  const { socket, loading, error } = useSocket();
  const [chats, setChats] = useState<Message[]>(messages || []);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  useEffect(() => {
    if (socket && !loading) {
      setIsConnected(true);
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: "join_room", roomId: id }));
      } else {
        console.warn("WebSocket is not open on join_room. ReadyState:", socket.readyState);
      }

      socket.onmessage = (event) => {
        try {
          const parseData = JSON.parse(event.data);
          if (parseData.type === "chat") {
            setChats((prev) => [...prev, {
              message: parseData.message,
              timestamp: Date.now(),
              userId: parseData.userId
            }]);
          } else if (parseData.type === "error") {
            console.error("WebSocket error message:", parseData.message);
            setLocalError(parseData.message);
            setIsConnected(false);
          }
        } catch (err) {
          console.error("Failed to parse message:", err);
        }
      };

      socket.onclose = () => {
        setIsConnected(false);
      };
    } else {
      setIsConnected(false);
    }
  }, [socket, loading, id]);

  const handleSendMessage = () => {
    if (!socket || !currentMessage.trim() || !isConnected) return;

    try {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          type: "chat",
          roomId: id,
          message: currentMessage.trim()
        }));
        setCurrentMessage("");
      } else {
        console.warn("WebSocket is not open. ReadyState:", socket.readyState);
      }
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (loading) {
    return (
      <div className="chat-container">
        <div className="loading">Connecting to chat...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="chat-container">
        <div className="error">Connection error: {error}</div>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="connection-status">
        {isConnected ? (
          <span className="status-connected">🟢 Connected to room: {id}</span>
        ) : (
          <span className="status-disconnected">🔴 Disconnected</span>
        )}
      </div>

      <div className="messages-container">
        {chats.length === 0 ? (
          <div className="no-messages">No messages yet. Start the conversation!</div>
        ) : (
          chats.map((msg, index) => (
            <div key={index} className="message">
              <div className="message-content">{msg.message}</div>
              {msg.timestamp && (
                <div className="message-time">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </div>
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={!isConnected}
          className="message-input"
        />
        <button
          onClick={handleSendMessage}
          disabled={!currentMessage.trim() || !isConnected}
          className="send-button"
        >
          Send
        </button>
      </div>

      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          max-width: 800px;
          margin: 0 auto;
          background: #f5f5f5;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .connection-status {
          padding: 10px;
          background: #fff;
          border-bottom: 1px solid #e0e0e0;
          font-size: 14px;
        }

        .status-connected {
          color: #28a745;
        }

        .status-disconnected {
          color: #dc3545;
        }

        .loading, .error {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          font-size: 16px;
        }

        .error {
          color: #dc3545;
          flex-direction: column;
          gap: 10px;
        }

        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .no-messages {
          text-align: center;
          color: #666;
          font-style: italic;
        }

        .message {
          background: #fff;
          padding: 12px 16px;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          max-width: 70%;
          word-wrap: break-word;
        }

        .message-content {
          margin-bottom: 4px;
        }

        .message-time {
          font-size: 12px;
          color: #666;
          text-align: right;
        }

        .input-container {
          display: flex;
          padding: 20px;
          background: #fff;
          border-top: 1px solid #e0e0e0;
          gap: 10px;
        }

        .message-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 24px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.2s;
        }

        .message-input:focus {
          border-color: #007bff;
        }

        .message-input:disabled {
          background: #f8f9fa;
          cursor: not-allowed;
        }

        .send-button {
          padding: 12px 24px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 24px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .send-button:hover:not(:disabled) {
          background: #0056b3;
        }

        .send-button:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

