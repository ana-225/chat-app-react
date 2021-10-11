import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import socketIOClient from "socket.io-client";
import jwt_decode from 'jwt-decode';
import '../../App.css';


const MessageEdit = () => {
  const socketEndpoint = "https://chat-app-comes.herokuapp.com";
  const socket = socketIOClient(socketEndpoint);
    let [message, setMessage] = useState('');

const handleSubmit = (textMessage) => {
  const token = localStorage.token;
  const tokenDecoded = jwt_decode(token);
        socket.emit(
          "chat message",
          JSON.stringify({
            // eslint-disable-next-line
            text: textMessage,
            username: tokenDecoded.name,
          })
        );

      };
      return (
        <Container component="main" maxWidth="xl">
        <div className="inputMessage">
          <TextField
            variant="outlined"
            margin="none"
            required
            fullWidth
            type="text"
            autoFocus
            placeholder= 'Ingresa aca tu mensaje'
            onChange={(e) => setMessage(e.target.value)}
            // onKeyPress={this.handleKeyPress.bind(this)}
          />
          {/* <div className="submit"> */}
          <Button
            type="button"
            variant="danger"
            onClick={() =>handleSubmit(message)}>
            Enviar mensaje
          </Button>
          </div>
        {/* </div> */}
      </Container>
      );
    };

export default MessageEdit;