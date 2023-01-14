import { useEffect } from "react";
import io from 'socket.io-client';
import { useState } from "react";


const socket = io("http://localhost:9000")


const Chat = () => {
    const [price_from_socket, setPricefromScoket] = useState(null);

    useEffect(() => {
        socket.on('connect', () => {
          console.log("Connected to Socket")
        });
    
        socket.on('disconnect', () => {
            console.log("Disconnected from Socket")
        });

        socket.on('chat message', (ms) => {
            console.log("New user message received from the Socket server")
        });

        socket.on('pong', () => {
            console.log("Ponged Socket")
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
          socket.off('pong');
        };
      }, []);




    const price = 500;
    const bidup = () => {
        socket.emit('chat message', price_from_socket ?? price);
    }

    return ( 
        <div className="live">
            <div className="live_images">
                { price_from_socket ?? price}
                <button>Test Socket</button>
            </div>
        </div> 
    );
}
 
export default Chat;