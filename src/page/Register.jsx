import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Register = () => {
  const user_regux = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
  const pw_regux = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@-_$#]).{8,30}$/;

  const nameRef = useRef()
  const errRef = useRef()

  //for control user name input and validaion
  const [userName,setUserName] = useState('')
  const [validName,setValidName] = useState('false')
  const [userFocus,setUserFocus] = useState('false')

  //for control user pw input and validaion
  const [passWord,setPassWord] = useState('')
  const [validPw,setValidPw] = useState('false')
  const [pwFocus,setPwFocus] = useState('false')

  //for control 2nd time pw input and validaion
  const [rPassWord,setRPassWord] = useState('')
  const [validrPw,setValidRPw] = useState('false')
  const [rPwFocus,setRPwFocus] = useState('false')
  
  // handle the error msg
  const [errmsg,setErrmsg] = useState('')
  const [success, setSuccess] =useState(false)

  // when reder the page, automatic focus on the name input
  useEffect(()=>{
    nameRef.current.focus()
  },[])
  
  useEffect(()=>{
    const userResult = user_regux.test(userName)
    setValidName(userResult)
    const pwResult = pw_regux.test(passWord)
    setValidPw(pwResult)
    const rpwResult = passWord === rPassWord
    setValidRPw(rpwResult)
  },[userName,passWord,rPassWord])
  return (
    <div className='signup'>
      <div>Register Form</div>
      <form action="">
        <div>
          <label htmlFor="username">User Name: </label>
          <input ref={nameRef} type="text" id="username"/>
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
      <Link to='/login'>Sign-in</Link>
    </div>
  )
}

export default Register
