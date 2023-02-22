import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import useAuth from '../hooks/useAuth';
import { fetchData } from '../api/fetchData';

const Login = () => {
  const { auth, setAuth } = useAuth()

  const nameRef = useRef()
  const errRef = useRef()

  const [userName,setUserName] = useState('')
  const [passWord,setPassWord] = useState('')
  
  // handle the error msg
  const [errmsg,setErrmsg] = useState('')
  const [success, setSuccess] = useState(false)

  // when reder the page, automatic focus on the name input
  useEffect(()=>{
    nameRef.current.focus()
  },[])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetchData.post(
        '/login',
        { userName, passWord },
        {
          headers: { 'Content-Type':'application/json' },
          credentials: 'include'
        }
      );
      console.log(response)
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles
      // setAuth({ userName, passWord, roles, accessToken })
      setUserName('')
      setPassWord('')
    } catch (err) {
      if (!err.response) {
        setErrmsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrmsg('Missing Username or Password')
      } else if (err.response?.status === 401) {
        setErrmsg('Unauthorized')
      } else {
        setErrmsg('Login Failed')
      }
    }
  }
  return (
    <div className='signup'>
      <div>Login Form</div>
      <p>{errmsg}</p>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">User Name: </label>
          <input
            ref={nameRef}
            type="text"
            id="username"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pw">Password:</label>
          <input
            type="password"
            id="pw"
            value={passWord}
            onChange={(e)=>setPassWord(e.target.value)}
          />
        </div>
        <br />
        <Button size='small' variant="contained" type='submit' >Submit</Button>
      </form>
      <span>
        Do not have an account, <Link to='/'>Sign-up</Link> here
      </span>
    </div>
  )
}

export default Login
