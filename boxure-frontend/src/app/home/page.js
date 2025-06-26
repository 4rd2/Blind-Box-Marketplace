"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Home.module.css";
import { Navbar1 } from "@/components/Header";

function Home() {
  const router = useRouter();

  const handleMarket = () => {
    router.push("/market");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div>
      <Navbar1 />
      <div className={styles.home}>
        <h1 className={styles.title}>Welcome to the Home Page!</h1>
        <button className={styles.btn} onClick={handleLogin}>Login</button>
        <button className={styles.btn} onClick={handleRegister}>Register</button>
    </div>
    </div>
    
  );
}

export default Home;
