import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";


const socket = io.connect("http://localhost:9000", { autoConnect: false })


const Chat = () => {
    const [fb, setFB] = useState("")
  
    useEffect(() => {
      socket.on('connect', () => {
        //console.log(socket.id)
        setFB(socket.id)
      });
  
      socket.on('disconnect', () => {
      });
  
      socket.on('chat message', msg => {
      });

      socket.on('answer', answer => {
        console.log(answer)
        setFB(answer)
      });

  
      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
      };
    }, []);
    
    const message = useRef();
    const customer = useRef();

/*     const sendMessage = () => {
      socket.connect();
      socket.emit('chat message', message.current.value);
      setMs([...mss, message.current.value])
    } */

    const handle_customer = () => {
      socket.connect();
      socket.emit('customer-asking', customer.current.value);
    }

    return ( 
        <div>
        <input type="text" ref={customer} />
        <span>{fb}</span>
        <button onClick={ handle_customer }>Customer</button>
        <br />
      </div>
    );
}
 
export default Chat;