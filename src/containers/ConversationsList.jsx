import React from "react";
import { useEffect, useState } from "react";
// import MessagesArea from "../componentes/MessagesArea";
import MessageList from "../componentes/chatbox/MessageList";
import socketIOClient from "socket.io-client";
import MessageEdit from "../componentes/chatbox/MessageEdit";


function ConversationsList() {
   const token = localStorage.token;
   if (token !== undefined) { 
   const socketEndpoint = "https://chat-app-comes.herokuapp.com";
   const fetchEndpoint = `${socketEndpoint}/messages`;

   const socket = socketIOClient(socketEndpoint);
   const [messages, setMessages] = useState([]);
   useEffect(() => {
      fetch(fetchEndpoint, {
         method: 'get',
         headers: {
             'Accept': 'application/json, text/plain, */*',
             'Authorization': `Bearer ${token}`,
             'Content-Type': 'application/json'
             
         },
      })

      .then((res) => res.json())
      .then(setMessages)
      .catch(console.log);
   }, []);
   useEffect(() => {
      if (socket) {
         socket.on("chat message", (msgs) => {
            setMessages(msgs);
         });
      }
   }, []);
return (
   <React.Fragment>
      {messages.length > 0 ? (
         <MessageList
         messages={messages}
      // <MessagesArea
      //    messages={messages}
      //    username={props.username}
      //    userId={props.uid}

         />
      ) : null}
      <MessageEdit/>
   </React.Fragment>

 );
      } else {
   return console.log('usuario no logeado');
}
}
export default ConversationsList;