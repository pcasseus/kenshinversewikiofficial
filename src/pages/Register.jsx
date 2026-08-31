import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirm) return setError("Passwords do not match.");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center px-4 overflow-hidden">
      {/* 🔲 Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-black to-zinc-900 opacity-90 z-0" />
      <div className="absolute inset-0 animate-scroll-matrix bg-[url('/matrix.gif')] bg-cover bg-center opacity-[0.05] z-0" />

      {/* 🧾 Register Box */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-xl border border-yellow-400 shadow-lg bg-black/60 backdrop-blur-sm animate-glow-pulse">
        <h1 className="text-3xl font-extrabold text-yellow-400 text-center uppercase tracking-widest mb-6">
          Register
        </h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded bg-zinc-900 text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded bg-zinc-900 text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-2 rounded bg-zinc-900 text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded shadow-lg transition"
          >
            Register
          </button>
        </form>

        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}

        <div className="mt-6 text-center">
          <Link to="/login" className="text-yellow-300 underline hover:text-yellow-200">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
