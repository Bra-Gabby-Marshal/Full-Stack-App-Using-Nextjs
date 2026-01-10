"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        name="email"
        type="email"
        placeholder="Email"
        className={styles.input}
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className={styles.input}
        required
      />

      {error && <p className={styles.error}>{error}</p>}

      <button className={styles.button} disabled={loading}>
        {loading ? "Signing in..." : "Login"}
      </button>

      {/* Optional Google login */}
      {/* <button type="button" onClick={() => signIn("google")}>
        Login with Google
      </button> */}
    </form>
  );
}
