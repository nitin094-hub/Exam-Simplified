import React, { useState } from 'react'
import styles from "../styles/Login.module.scss";
import api from "../api/UnProtectedApi";

function Login() {
  const [loginData,setLoginData] = useState({
    email:"",
    password:""
  })

  const onSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await api.post("api-token-auth/",loginData);
      console.log(response);
    }
    catch(err){
      console.log(err.response);

    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
            <h1>Login</h1>
            <form className={styles.loginForm} onSubmit={onSubmit}>
                <input type="email" placeholder='Email Address' onChange={(e)=>{
                  setLoginData({
                    ...loginData,
                    email:e.target.value
                  })
                }} required/>
                <input type="password" placeholder='Password' onChange={(e)=>{
                  setLoginData({
                    ...loginData,
                    password:e.target.value
                  })
                }} required/>
                <button className={styles.loginBtn} type="submit">
                    <h3>Login</h3>
                </button>
            </form>
      </div>
    </div>
  )
}

export default Login
