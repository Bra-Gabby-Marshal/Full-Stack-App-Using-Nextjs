"use client";  
import React, { use } from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className={styles.container}>
      <button onClick={()=>signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login
