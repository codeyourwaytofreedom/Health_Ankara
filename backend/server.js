const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

app.use(cors({ origin: true, credentials: true }));

let active_users = [];

io.on('connection', (socket) => {
  //console.log('a user connected');
  //console.log(socket.id);
  
  // on message
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    //io.emit('chat message', msg); // --> to all users, including the sender
    socket.broadcast.emit('chat message', msg);  // --> to all users but the sender
  });

  socket.on('customer-asking', (question, asker_id) => {
    console.log(question, asker_id)
/*     let ids = [];
    active_users.map( au => ids.push(au.user_id))
    if(!ids.includes(socket.id))
    {
      active_users.push({user_id:socket.id, user_messages:[{q:question}]});
      console.log("yeni kullanıcı yazdı: Aktif kullanıcılar şunlar: ",active_users);
      io.emit('active-users', active_users);
      io.emit('receive-question', question, socket.id);
    }
    else{
      let userIndex = active_users.findIndex(( user => user.user_id === socket.id));
      active_users[userIndex].user_messages.push({q:question})
      console.log("Mevcut kullanıcıya yeni mesaj: Aktif kullanıcılar son hali: ", active_users)
      io.emit('receive-question', question, socket.id)
      io.emit('active-users', active_users);
    } */
    
    
  })
  socket.on('disconnect', () => {
    console.log("disconnect öncesi kullanıcılar", active_users)
    active_users = active_users.filter( user => user.user_id !==socket.id)
    console.log("disconnect sonrası kullanıcılar", active_users)
    io.emit('active-users', active_users);
    console.log(socket.id, "this id disconnected")
    console.log(active_users)
    //io.emit('active-users', active_users)
    //io.emit("take-him-out", socket.id)
  })
  socket.on('answer', (answer) => {
    console.log(active_users)
    console.log("Cevap sonrası kullanıcılar bunlar: ")
    //io.emit('active-users', active_users);
    io.emit('desk-answer', answer)
    //console.log(answer, "arrived")
  })
});

server.listen(9000, () => {
  console.log('listening on 9000');
});



//could be useful
/*   socket.onAny((event, ...args) => {
    console.log(event, args);
  }); */