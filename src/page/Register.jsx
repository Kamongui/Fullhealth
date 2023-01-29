import React from 'react';
import Button from '@mui/material/Button';

const Register = () => {
  return (
    <div className='signup'>
      <div>Register Form</div>
      <form action="">
        <div>
          <label htmlFor="username">User Name: </label>
          <input type="text" id="username"/>
        </div>
        <div>
          <label htmlFor="pw">Password:</label>
          <input type="password" id="pw" />
        </div>
        <div>
          <label htmlFor="cfmpw">Comfirm Password:
          </label><input type="password" id="cfmpw" />
        </div>
        <br />
        <Button size='small' variant="contained" onClick={()=>console.log('text')} >Submit</Button>
      </form>
      Sign-in
    </div>
  )
}

export default Register
