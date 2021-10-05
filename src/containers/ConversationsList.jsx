import React from "react";
import { useEffect, useState } from "react";
// import MessagesArea from "../componentes/MessagesArea";
import MessageList from "../componentes/chatbox/MessageList";
import socketIOClient from "socket.io-client";
import MessageEdit from "../componentes/chatbox/MessageEdit";
const socketEndpoint = "https://chat-app-comes.herokuapp.com";
const fetchEndpoint = `${socketEndpoint}/messages`;
const socket = socketIOClient(socketEndpoint);
function ConversationsList() {
   const [messages, setMessages] = useState([]);
   useEffect(() => {
      fetch(fetchEndpoint)
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
   console.log(messages);
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
}
export default ConversationsList;