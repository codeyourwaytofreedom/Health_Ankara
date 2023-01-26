import { use, useEffect, useRef } from "react";
import io from 'socket.io-client';
import { useState } from "react";
import h from "../styles/Home.module.css";
import e from "cors";



const socket = io("http://localhost:9000")

const Chat = ({modal}) => {  
  const [my_messages, setMymessages] = useState([]);
  const [chatId, setChatId] = useState("id")
  const customer = useRef();

  useEffect(()=> {
    socket.on('desk-response', (res) => {
      console.log(res)
      setMymessages([...my_messages, {who:"desk", message:res}])      
    });
  })
  

  const handle_customer = (e) => {
    e.preventDefault();
    setMymessages([...my_messages, {who:"customer", message:customer.current.value}])
    console.log(my_messages)
    setChatId(socket.id)
    socket.emit('customer-asking', customer.current.value);
    customer.current.value = "";

  }

    return ( 

          <div className={h.home_chatbox} style={{display: modal ? "flex" : "none"}}>
            <div className={h.home_chatbox_message_container}>
              {
                my_messages.map((m) => 
                  <div className={m.who === "desk" ? h.home_chatbox_message_container_message_right : h.home_chatbox_message_container_message_left}>
                    {m.message}
                  </div>
                )
              }
            </div>
            
            <div className={h.home_chatbox_sender}>
              <form action="" onSubmit={(e)=> handle_customer(e) }>
                <input type="text" placeholder="Ask help desk..." ref={customer} />
              </form>
            </div>
            {/* <h3 style={{color:"white", position:"absolute", top:"-50px"}}>{chatId}</h3> */}
          </div>
    );
}
 
export default Chat;