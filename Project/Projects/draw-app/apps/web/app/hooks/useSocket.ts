import { useEffect, useState, useRef, useCallback } from "react";
import { WS_URL } from "../config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [error, setError] = useState<string | null>(null);
    const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const reconnectAttempts = useRef(0);
    const maxReconnectAttempts = 5;
    const socketRef = useRef<WebSocket | null>(null);

    const connect = useCallback(() => {
        try {
            // TODO: Replace with dynamic token from auth context or env
            const token = process.env.NEXT_PUBLIC_WS_TOKEN || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNDMzOTdjMy01OTNkLTQwMjctYjExNC0yOTAyNGJhYjAyMTgiLCJpYXQiOjE3MzY2OTczMzB9.BxDMP3FqBsM6TrZcAGYFRA2FlmazFwQJ78mOHskatiM";
            const ws = new WebSocket(`${WS_URL}?token=${token}`);
            socketRef.current = ws;

            ws.onopen = () => {
                console.log("WebSocket connected");
                setLoading(false);
                setError(null);
                setSocket(ws);
                reconnectAttempts.current = 0;
            };

            ws.onclose = (event) => {
                console.log("WebSocket closed", event.code, event.reason);
                setSocket(null);
                setLoading(true);

                if (reconnectAttempts.current < maxReconnectAttempts) {
                    reconnectAttempts.current++;
                    console.log(`Reconnecting in 2 seconds... (attempt ${reconnectAttempts.current})`);
                    reconnectTimeoutRef.current = setTimeout(connect, 2000);
                } else {
                    setError("Failed to connect after multiple attempts");
                }
            };

            ws.onerror = (event) => {
                console.error("WebSocket error", event);
                setError("WebSocket connection error");
            };
        } catch (err) {
            console.error("Failed to create WebSocket", err);
            setError("Failed to initialize WebSocket");
        }
    }, []);

    useEffect(() => {
        connect();

        return () => {
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
            }
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, [connect]);

    return {
        socket,
        loading,
        error
    };
}
