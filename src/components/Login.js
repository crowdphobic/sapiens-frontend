import React, {useState, useContext} from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {userLogin} from '../api/userApi'
import { UserContext } from '../context/userContext';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorHandling, setErrorHandling] = useState('');
 
  const {setUserEmail, setUserPrefernce, setAuthToken} = useContext(UserContext);

  const navigate = useNavigate()
  const getEmail = (e) => {
    setEmail(e.target.value);
  }

  const getPassword = (e) => {
    setPassword(e.target.value);
  }
  const login = (e) => {
    
    const reqBody = {
      email: email,
      password: password
    }
    userLogin(reqBody).then(response => {
      if(response.msg) {
        setErrorHandling(response.msg)
        setEmail('')
        setPassword('')
      } else {
        setUserEmail(response.email)
        setUserPrefernce(response.preference)
        setAuthToken(response.userToken)
        setErrorHandling('')
        setEmail('')
        setPassword('')
        navigate('/preference')
      }
    }).catch(error => {
      setErrorHandling('SOMETHING WENT WRONG')
      setEmail('')
      setPassword('')
    })
  }
  return (
   <div className='box'>
    <span><h3>Login</h3></span>
     <div className='login-div'>
     <TextField
         onChange={e => getEmail(e)}
          required
          id="outlined-required"
          label="Email"
          value={email}
          placeholder="Email"
        />
        <TextField
          onChange={e => getPassword(e)}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          value={password}
          placeholder="Password"
        />
        <Button onClick={e => login(e)} variant="contained">Login</Button>
     </div>
     <span>{errorHandling ? errorHandling : ''}</span>
   </div>
  )
}

export default Login