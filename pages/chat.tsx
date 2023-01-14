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

      socket.on('chat message', () => {
        console.log("message sent")
      });
  
      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
      };
    }, []);
  

    const sendMessage = () => {
        socket.emit('chat message', 'This is chat message');
    }

    return ( 
        <div>
        <p>Connected: { isConnected }</p>
        <p>Last pong: { lastPong }</p>
        <button onClick={ sendMessage }>Send ping</button>
      </div>
    );
}
 
export default Chat;