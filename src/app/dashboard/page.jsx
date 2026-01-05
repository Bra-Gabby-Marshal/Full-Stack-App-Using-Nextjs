"use client";
import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Dashboard = () => {
  const { data, error, isValidating } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  const isLoading = !data && !error;

  console.log("Data:", data);
  console.log("Error:", error);
  console.log("Loading:", isLoading);

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>Failed to fetch data</p>}

      {!isLoading && !error && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
