"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

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
      <Navbar className="bg-white shadow-md w-full p-4" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page!</h1>
        <div className="flex space-x-4">
          <button onClick={handleMarket} className="btn">
            Market
          </button>
          <button onClick={handleLogin} className="btn">
            Login
          </button>
          <button onClick={handleRegister} className="btn">
            Register
          </button>
        </div>
      </div>
    </div>

  );
}


export default Home;
