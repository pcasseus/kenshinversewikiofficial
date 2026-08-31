import React, { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Reset email sent. Check your inbox.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Reset Password</h1>

      <form onSubmit={handleReset} className="flex flex-col gap-4 w-80">
        <input
          className="p-2 rounded text-black"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="bg-yellow-500 py-2 rounded font-bold text-black">
          Send Reset Email
        </button>
      </form>

      {message && <p className="text-green-400 mt-4">{message}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <Link to="/login" className="mt-4 text-yellow-300 underline">Back to Login</Link>
    </div>
  );
}
