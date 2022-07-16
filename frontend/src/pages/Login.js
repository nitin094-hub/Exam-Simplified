import React from 'react'
import styles from "../styles/Login.module.scss";

function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
            <h1>Login</h1>
            <form className={styles.loginForm}>
                <input type="email" placeholder='Email Address' required/>
                <input type="password" placeholder='Password' required/>
                <button className={styles.loginBtn}>
                    <h3>Login</h3>
                </button>
            </form>
      </div>
    </div>
  )
}

export default Login
