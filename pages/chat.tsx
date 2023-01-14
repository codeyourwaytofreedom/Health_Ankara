import { useEffect } from "react";
import io from 'socket.io-client';
import { useState } from "react";


const socket = io.connect("http://localhost:9000")


const Chat = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState("p");
  
    useEffect(() => {
      socket.on('connect', () => {
        setIsConnected(true);
      });
  
      socket.on('disconnect', () => {
        setIsConnected(false);
      });
  
      socket.on('pong', () => {
        setLastPong("ponged");
      });
  
      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
      };
    }, []);
  
    const sendPing = () => {
      socket.emit('ping');
    }

    return ( 
        <div>
        <p>Connected: { isConnected }</p>
        <p>Last pong: { lastPong }</p>
        <button onClick={ sendPing }>Send ping</button>
      </div>
    );
}
 
export default Chat;