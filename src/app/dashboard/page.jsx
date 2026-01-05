"use client";

import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return res.json();
};

export default function Dashboard() {
  const { data: session, status } = useSession();

  // ✅ Explicit authentication flag
  const isAuthenticated = status === "authenticated";

  const { data, error, isLoading } = useSWR(
    isAuthenticated ? "/api/dashboard" : null,
    fetcher
  );

  // 1️⃣ Session still resolving
  if (status === "loading") {
    return <div className={styles.loading}>Checking session...</div>;
  }

  // 2️⃣ User NOT authenticated
  if (!isAuthenticated) {
    return (
      <div className={styles.error}>
        Access denied. Please log in.
      </div>
    );
  }

  // 3️⃣ Authenticated but dashboard data loading
  if (isLoading) {
    return <div className={styles.loading}>Loading dashboard...</div>;
  }

  // 4️⃣ API error
  if (error) {
    return (
      <div className={styles.error}>
        Failed to load dashboard
      </div>
    );
  }

  // 5️⃣ Authenticated + data ready
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome, {session.user.name}
      </h1>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h2 className={styles.statTitle}>Users</h2>
          <p>{data.usersCount}</p>
        </div>
      </div>
    </div>
  );
}
