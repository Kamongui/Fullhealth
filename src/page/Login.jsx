import React from 'react';
import { Link } from 'react-router-dom'; 
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div className='signup'>
      <div>Login Form</div>
      <form action="">
        <div>
          <label htmlFor="username">User Name: </label>
          <input type="text" id="username"/>
        </div>
        <div>
          <label htmlFor="pw">Password:</label>
          <input type="password" id="pw" />
        </div>
        <br />
        <Button size='small' variant="contained" onClick={()=>console.log('text')} >Login</Button>
      </form>
      Do not have an account, <Link to='/register'>Sign-up</Link> here
    </div>
  )
}

export default Login
