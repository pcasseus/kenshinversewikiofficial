import React from "react";
import { FaInstagram, FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-zinc-900 to-black text-white font-mono px-6 py-16 overflow-hidden relative">
      {/* ⚡ Name Header */}
      <div className="text-center mb-12 z-10 relative">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-widest text-yellow-400 mb-2 animate-pulse-slow">
          Patrick Casseus Jr.
        </h1>
        <p className="text-lg text-gray-400 italic animate-fade-in-delayed">
          Coder by day. Creator by nature.
        </p>
        <p className="text-xs text-yellow-300 opacity-30 mt-2 tracking-widest">
          FILE VERSION: PCJR.2025 | LAST UPDATED: DEC 2025
        </p>
      </div>


      {/* 📖 About Paragraphs */}
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">
        <p className="text-lg leading-relaxed text-gray-300">
          I'm a Grad Student at Pace University studying Computer Science, but writing has always been my escape — a way to turn pressure into creativity. This site is home to my original series: a world I started building in 2022, originally inspired by Marvel, DC, and anime, but now fully transformed into something of my own.
        </p>
        <p className="text-gray-400">
          From powerful characters and explosive battles to slow-burn arcs about identity, morality, and trauma — this series is personal. Every story I write pulls from something real. Something human.
        </p>
      </div>

      {/* 🕒 Timeline */}
      <div id="evolution" className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-yellow-300 mb-6 text-center flex justify-center items-center gap-2">
          🕒 Story Evolution
        </h2>
        <div className="bg-gradient-to-br from-yellow-500/5 to-yellow-400/5 p-6 rounded-xl border border-yellow-500/20 shadow-inner backdrop-blur-md">
          <div className="grid gap-6">
            <div className="bg-zinc-800 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-300 font-semibold">March 2022 — Genesis</p>
              <p className="text-gray-300 mt-1">
                Started as a superhero fanfic starring a character based on myself.
              </p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-300 font-semibold">Late 2022 — The Shift</p>
              <p className="text-gray-300 mt-1">
                Made the bold decision to abandon all borrowed characters and build my own universe from scratch.
              </p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-300 font-semibold">2023–Present — Expansion</p>
              <p className="text-gray-300 mt-1">
                Now over 50 characters strong with full arcs, powers, relationships, and long-form storylines across books.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🌐 Socials */}
      <div className="max-w-4xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold text-yellow-300 mb-6">📱 Connect With Me</h2>
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <a
            href="https://www.instagram.com/patrickcasseuss/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-pink-400 transition-all"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-all"
          >
            <FaTwitter /> Twitter
          </a>
          <a
            href="https://x.com/KenshinZenkai"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-fuchsia-400 transition-all"
          >
            <FaTiktok /> TikTok
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-casseus-jr-558618305/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-300 transition-all"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      {/* ✨ Closing Quote */}
      <div className="mt-24 text-center text-lg text-yellow-400 italic quote-entry">
        “Every power I’ve written comes from something I’ve felt. That’s how you make fiction feel real.”
      </div>
    </div>
  );
};

export default About;
