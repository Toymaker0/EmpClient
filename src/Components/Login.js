import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const navigate=useNavigate()
  const [LoginData,setLoginData]=useState({userName:'',password:''})

  const handleLogin=async(e)=>{
    e.preventDefault()
    let res=await axios.post('http://localhost:9000/login/',LoginData)
    console.log(res);
    if(res.data=='auth'){
     navigate('/dashboard')

    }
    
  }
  const handleChange=(e)=>{
    setLoginData({...LoginData,[e.target.name]:e.target.value})
    console.log(LoginData);
  }
  return (
    <>
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <form onSubmit={handleLogin}>
        <div className="login_area m-2 p-2 text-center">
          <div className="m-2 ">
            <input type="text" placeholder="userName" name='userName' onChange={(e)=>{handleChange(e)}} />
          </div>
          <div className="m-2 ">
            <input type="text" placeholder="password" name='password' onChange={(e)=>{handleChange(e)}} />
          </div>
          <div className="m-2 ">
            <Button type="submit">login</Button>         
           </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default Login;
