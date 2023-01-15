import { useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";


const socket = io.connect("http://localhost:9000", { autoConnect: false })


const Chat = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [mss, setMs] = useState([]);
    const [customer_messages, setCustomerMessages] = useState([])
  
    useEffect(() => {
      socket.on('connect', () => {
        setIsConnected(socket.id);
        //console.log(socket.id)
      });
  
      socket.on('disconnect', () => {
        setIsConnected(false);
      });
  
      socket.on('chat message', msg => {
        setCustomerMessages([...customer_messages, msg])
      });

      socket.on('answer', answer => {
        console.log(answer)
      });

  
      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
      };
    }, []);
    
    const message = useRef();
    const customer = useRef();

    const sendMessage = () => {
      socket.connect();
      socket.emit('chat message', message.current.value);
      setMs([...mss, message.current.value])
    }

    const handle_customer = () => {
      socket.connect();
      socket.emit('customer-asking', customer.current.value, isConnected);
    }

    return ( 
        <div>
        <p>Connected: { isConnected }</p>
        {
          mss.map(m =>
              <p>Message: { m }</p>
            )
        }

        {
          customer_messages.map(m =>
              <p>Message: { m }</p>
            )
        }
        
        <input type="text" ref={message} />
        <button onClick={ sendMessage }>Send ping</button>
        <br />
        <br />
        <br />
        <input type="text" ref={customer} />
        <button onClick={ handle_customer }>Customer</button>
        <br />
      </div>
    );
}
 
export default Chat;