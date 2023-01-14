import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";


const socket = io.connect("http://localhost:9000")


const Chat = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [mss, setMs] = useState("");
  
    useEffect(() => {
      socket.on('connect', () => {
        setIsConnected(true);
      });
  
      socket.on('disconnect', () => {
        setIsConnected(false);
      });
  
      socket.on('chat message', (ms) => {
        setMs(ms)
      });
  
      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
      };
    }, []);
    
    const message = useRef();

    const sendMessage = () => {
        socket.emit('chat message', message.current.value);
    }

    return ( 
        <div>
        <p>Connected: { isConnected }</p>
        <p>Message: { mss }</p>
        <input type="text" ref={message} />
        <button onClick={ sendMessage }>Send ping</button>
      </div>
    );
}
 
export default Chat;