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
import '../App.css';
import logo from '../images/logo.png'

const Login = () => {
  localStorage.clear();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
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

  if (isRegister){
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
      const response = res.message;
      if (response) {
        alert('Ingrese un nombre y contraseña correcto');
      } else {
        localStorage.token = res.token;
        return history.push("/chat");
      }
  })
  .catch(console.log)
  } else {
    fetch('https://chat-app-comes.herokuapp.com/users', {
      method: 'post',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify( {
          "name": name,
          "email": email,
          "password": pass,
      })
    
  })
  .then((res) => {
    if (res.status === 200) {
      alert('Usuario Registrado exitosamente, por favor inicie sesión');
    } else {
      alert ('El usuario ya esta registrado');
    }
  })
  .catch(console.log)
  } 
  
  }
  return ( 
    <div className ='containerLogin'>
      <Grid 
            item xs={12}>
              <div className = 'boxForm' >
                <div className = 'containerstart'> <img src={logo} className='logo' width='200px' alt = ''></img>
                </div>
      
               <form onSubmit={processData}>
                 {

                   error && (
                     <div className="divAlert">{error}</div>
                   )
 
                 }
               <Box 
               textAlign="center">
               <div className = {isRegister ? 'userName' : ''}>
                <TextField
                  type="text"
                  className="name"
                  placeholder="Nombre Usuario"
                  onChange={e => setName(e.target.value)}
                  value={name}  
                />
               </div>
               <br/>
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
                 console.info("olvide mi contraseña");
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
                 setIsRegister(!isRegister)
                  
               }}
             >
               {
                 isRegister ? '¿Eres nuevo?' : '¿Ya tienes cuenta?'
               }
              
              </Link>
              </Box>
            
              </form>
            </div>
          </Grid>
          </div>
 )
}

export default Login;
