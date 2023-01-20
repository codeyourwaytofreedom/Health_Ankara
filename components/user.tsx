import { useEffect, useState, useRef } from "react";
import d from "../styles/desk.module.css";
import io from 'socket.io-client';
import h from "../styles/Home.module.css";

const socket = io.connect("http://localhost:9000", { autoConnect: false })

const User = ({uniq}) => {
    const [user_id, setUserid] = useState();
    const ans = useRef(); 

    const handle_desk = (e) => {
      e.preventDefault();
      socket.connect()
      socket.emit("answer",{to:uniq,text:ans.current.value})
      ans.current.value = "";
    }
    
    return ( 
      <>
        <div className={d.desk_actives_user}>
            <h3>{uniq}</h3>
            <div className={d.desk_actives_user_container}>
{/*               {
                messages.map((m) => 
                  <div className={m.q ? d.desk_actives_user_container_message_right : d.desk_actives_user_container_message_left}>
                    {m.q ?? m.a}
                  </div>
                )
              } */}
              {uniq}
            </div>
            <form action="" onSubmit={(e)=>handle_desk(e)}>
              <input type="text" ref={ans}/>
            </form>
        </div>
      </>
     );
}
 
export default User;