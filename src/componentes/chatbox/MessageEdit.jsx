import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import socketIOClient from "socket.io-client";

const socketEndpoint = "https://chat-app-comes.herokuapp.com";
const socket = socketIOClient(socketEndpoint);
const MessageEdit = () => {

    let [message, setMessage] = useState('');

 
const handleSubmit = (textMessage) => {

        socket.emit(
          "chat message",
          JSON.stringify({
            // eslint-disable-next-line
            text:textMessage,
            username:'ana',
          })
        );
      };
      return (
        <Container component="main" maxWidth="xs">
        <div className="inputMessage">
          <TextField
          
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            autoFocus
            placeholder="Please input your message"
            onChange={(e) => setMessage(e.target.value)}

            // onKeyPress={this.handleKeyPress.bind(this)}
          />
          <div className="submit">
          {/* <input value={clientName} type='text' placeholder='Ingrese un nombre' onChange={(e) => setClientName(e.target.value)}></input> */}

          <Button
        type="button"
        variant="danger"
        onClick={() =>handleSubmit(message)}>
        Enviar mensaje
      </Button>
          </div>
        </div>
      </Container>
      );
    };

export default MessageEdit;