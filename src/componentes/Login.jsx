import React, { useState } from 'react'
// import { auth } from '../firebaseconfig'
// import { Form, Button } from 'react-bootstrap'
// import logo from '../img/logo.png'
// import { useHistory}  from 'react-router-dom'
import { Box, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { useHistory } from 'react-router-dom';



const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState(null)
  const [isRegister, setIsRegister] = useState(true)
  
  const processData = e => {
    e.preventDefault()
        if(!email.trim()){
        setError('Ingrese Email')
        return
    }
    e.preventDefault()
        if(!pass.trim()){
        setError('Ingrese Contraseña')
        return
    }


  fetch('https://chat-app-comes.herokuapp.com/auth', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {

            "email": email,
            "password": pass,
        })
      
    })
    .then((res) => res.json())
    .then((res) => {
        console.log( res );
        // let inMemoryToken = res.token;
        // console.log( inMemoryToken );
        localStorage.token = res. token
        console.log(localStorage.token);
        // { Authorization: `Bearer  ${ inMemoryToken }`; }
      
        return history.push("/chat");
       
    })
    .catch(console.log)
  }
  return ( 
      <Grid
            item xs={12}>
              <form onSubmit={processData}>
                {

                  error && (
                    <div className="divAlert">{error}</div>
                  )

                }
              <Box 
              textAlign="center">
                
              <TextField
                type="email"
                className="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
                value={email}  
              />
              <br />
              <br/>
              <TextField
                type="password"
                className="password"
                placeholder="Contraseña"
                onChange={e => setPass(e.target.value)}                            
                value={pass}
                />
                </Box>
              <Box textAlign="center">
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Olvidé mi contraseña
            </Link>
            </Box>
              <Box textAlign="center">
              <br />
            <Button 
            type="submit"
            onClick={() => {
              console.info("enviare los datos");
            }}>
              {
                isRegister ? 'Acceder' : 'Registrarse'
              }
            </Button>
            </Box>
            <Box textAlign="center">
            <Link
              type="button"
              variant="body2"
              onClick={() => {
                setIsRegister(!isRegister)}}
            >
              {
                isRegister ? '¿Eres nuevo?' : '¿Ya tienes cuenta?'
              }
              
            </Link>
            </Box>
            
            </form>
          </Grid>
 )
}

export default Login;
