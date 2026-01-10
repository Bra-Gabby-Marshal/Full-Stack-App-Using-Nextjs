"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return res.json();
};

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const { data, error, isLoading } = useSWR(
    session ? "/api/dashboard" : null,
    fetcher
  );

  // ✅ REDIRECT AFTER RENDER
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/dashboard/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Checking session...</div>;
  }

  if (!session) {
    return null; // redirect handled in useEffect
  }

  if (isLoading) {
    return <div className={styles.loading}>Loading dashboard...</div>;
  }

  if (error) {
    return <div className={styles.error}>Failed to load dashboard</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome, {session.user.name}
      </h1>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h2 className={styles.statTitle}>Users</h2>
          <p>{data?.usersCount}</p>
        </div>
      </div>
    </div>
  );
}
