import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { fetchData } from '../api/fetchData';

const Register = () => {
  const user_regux = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
  const pw_regux = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@-_$#]).{8,30}$/;

  const nameRef = useRef()
  const errRef = useRef()

  //for control user name input and validaion
  const [userName,setUserName] = useState('')
  const [validName,setValidName] = useState(false)
  const [userFocus,setUserFocus] = useState(false)

  //for control user pw input and validaion
  const [passWord,setPassWord] = useState('')
  const [validPw,setValidPw] = useState(false)
  const [pwFocus,setPwFocus] = useState(false)

  //for control 2nd time pw input and validaion
  const [rPassWord,setRPassWord] = useState('')
  const [validrPw,setValidRPw] = useState(false)
  const [rPwFocus,setRPwFocus] = useState(false)
  
  // handle the error msg
  const [errmsg,setErrmsg] = useState('')
  const [success, setSuccess] =useState(false)

  // when reder the page, automatic focus on the name input
  // if (!auth.userName) {
  //   useEffect(()=>{
  //     nameRef.current.focus()
  //   },[])
  // }

  // For validation input info
  useEffect(()=>{
    const userResult = user_regux.test(userName)
    setValidName(userResult)
    const pwResult = pw_regux.test(passWord)
    setValidPw(pwResult)
    const rpwResult = passWord === rPassWord
    setValidRPw(rpwResult)
  },[userName,passWord,rPassWord])
  
  const handlerSubmit = async (e) => {
    e.preventDefault()
    console.log(userName,passWord)
    try {
      await fetchData.post('/register',{userName, passWord})
      setSuccess(true)
    } catch (err) {
      if (err.response.status === 409) {
        setErrmsg(err?.response.data.message)
      } else {
        setErrmsg(err.response)
      }
      errRef.current.focus()
    }
  }
  return (
    <>
      {(success)
        ?<>
          <p>Register Success!</p>
          <div>
            <Link to='/login'>Sign-in</Link>
          </div>
        </>
        :<div className='signup'>
          <div ref={errRef}>{errmsg}</div>
          <div>Register Form (Err msg not yet finish)</div>
          <form onSubmit={handlerSubmit}>
            <div>
              <label htmlFor="username">User Name: </label>
              <input
                ref={nameRef}
                type="text"
                id="username"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                onFocus={() =>{setUserFocus(true),setErrmsg('')}} 
                onBlur={() =>setUserFocus(false)}
              />
            </div>
            {(userName !== '' && !validName && !userFocus)?<div>Enter a name start with 3-20</div>:null}
            <div>
              <label htmlFor="pw">Password:</label>
              <input
                type="password"
                id="pw"
                value={passWord}
                onChange={(e)=>setPassWord(e.target.value)}
                onFocus={() =>setPwFocus(true)} 
                onBlur={() =>setPwFocus(false)}
              />
              {(passWord !== '' && !validPw && !pwFocus)?<div>test</div>:null}
            </div>
            <div>
              <label htmlFor="cfmpw">Comfirm Password:</label>
              <input
                type="password"
                id="cfmpw"
                value={rPassWord}
                onChange={(e)=>setRPassWord(e.target.value)}
                onFocus={() =>setRPwFocus(true)} 
                onBlur={() =>setRPwFocus(false)}
              />
            </div>
            {(rPassWord !== '' && !validrPw && !rPwFocus)?<div>Password do not match!</div>:null}
            <br />
            <Button size='small' variant="contained" type='submit' disabled={(validName && validPw && validrPw)?false:true} >Submit</Button>
          </form>
          <span>
            If already have an account, <Link to='/login'>Sign-in</Link> here.
          </span>
        </div>
      }
    </>
    
  )
}

export default Register
