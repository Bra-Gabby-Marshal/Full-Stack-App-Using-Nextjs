"use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Register = () => {
  const [err, setErr] = React.useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log('Registering user:', { name, email, password });

    try {
      // Simulate API call
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      // Redirect to login page on successful registration
      res.status === 201 && router.push('/dashboard/login?success=Account has been created');

      if (res.ok) {
        console.log('Registration successful');
      } else {
        setErr(true);
      }
    } catch (err) {
      setErr(true);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type="text" placeholder='name' className={styles.input} required/>
        <input type="email" placeholder='Email' className={styles.input} required/>
        <input type="password" placeholder='Password' className={styles.input} required/>
        <button className={styles.button}>Register</button>
      </form>
      {err && <span className={styles.error}>Something went wrong!</span>}
      <Link href="/dashboard/login">Already have an account? Login</Link>
    </div>
  )
}

export default Register
