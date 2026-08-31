import React, { useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function Broadcast() {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-20">

      {/* Header */}
      <header className="text-center mb-24">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-green-400 uppercase tracking-[0.3em]">
          Broadcast
        </h1>
        <p className="mt-6 text-gray-400 italic max-w-3xl mx-auto leading-relaxed">
          Official outward-facing channels for the KenshinVerse.  
          Follow along for updates, community posts, behind-the-scenes development,
          and moments from across the universe.
        </p>
      </header>

      {/* ================= DESKTOP ================= */}
      <section className="hidden md:flex justify-center gap-16 max-w-7xl mx-auto">

        <PhoneCard
          platform="Instagram"
          handle="@thekenshinverse"
          link="https://www.instagram.com/thekenshinverse/"
          icon={<FaInstagram />}
          accent="from-pink-500 to-yellow-400"
          embedSrc="https://www.instagram.com/thekenshinverse/embed"
        />

        <PhoneCard
          platform="TikTok"
          handle="@thekenshinverse"
          link="https://www.tiktok.com/@thekenshinverse"
          icon={<FaTiktok />}
          accent="from-cyan-400 to-fuchsia-500"
          embedSrc="https://www.tiktok.com/embed/@thekenshinverse"
        />

        {/* X / Twitter — fallback only */}
        <PhoneCard
          platform="X / Twitter"
          handle="@thekenshinvers3"
          link="https://x.com/thekenshinvers3"
          icon={<FaTwitter />}
          accent="from-blue-400 to-sky-500"
          forceFallback
        />

      </section>

      {/* ================= MOBILE ================= */}
      <section className="md:hidden space-y-14 max-w-sm mx-auto">

        <MobileCard
          platform="Instagram"
          handle="@thekenshinverse"
          link="https://www.instagram.com/thekenshinverse/"
          icon={<FaInstagram />}
          accent="from-pink-500 to-yellow-400"
        />

        <MobileCard
          platform="TikTok"
          handle="@thekenshinverse"
          link="https://www.tiktok.com/@thekenshinverse"
          icon={<FaTiktok />}
          accent="from-cyan-400 to-fuchsia-500"
        />

        <MobileCard
          platform="X / Twitter"
          handle="@thekenshinvers3"
          link="https://x.com/thekenshinvers3"
          icon={<FaTwitter />}
          accent="from-blue-400 to-sky-500"
        />

      </section>

      {/* ================= GITHUB ================= */}
      <section className="mt-32 max-w-4xl mx-auto">
        <div className="border border-green-600/40 rounded-3xl p-10 bg-green-900/10 shadow-xl text-center">
          <div className="flex justify-center items-center gap-3 mb-5">
            <FaGithub className="text-green-400 text-3xl" />
            <h2 className="text-3xl font-bold text-green-400 tracking-wide">
              Source & Development
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Want to see how the KenshinVerse site is built?  
            The public GitHub repository contains the live codebase and ongoing
            development history.
          </p>

          <a
            href="https://github.com/pcasseus/patrickscomicseries"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 border border-green-500 text-green-400 px-8 py-4 rounded-xl hover:bg-green-500 hover:text-black transition font-mono tracking-wide"
          >
            View GitHub Repository →
          </a>
        </div>
      </section>

      <footer className="mt-36 text-xs text-green-400 text-center tracking-widest border-t border-green-700 pt-6">
        STATUS: BROADCAST CHANNELS ACTIVE
      </footer>
    </div>
  );
}

/* ================= DESKTOP PHONE ================= */
function PhoneCard({
  platform,
  handle,
  link,
  icon,
  accent,
  embedSrc,
  forceFallback = false,
}) {
  const [embedFailed, setEmbedFailed] = useState(false);
  const showFallback = forceFallback || embedFailed;

  return (
    <div className="relative w-[360px]">
      <div className="rounded-[2.8rem] border border-gray-700 bg-black shadow-[0_0_60px_rgba(0,255,170,0.15)] p-4">
        <div className="rounded-[2.2rem] border border-gray-800 bg-black overflow-hidden h-[620px] flex flex-col">

          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-800">
            <div
              className={`text-lg p-2 rounded-full bg-gradient-to-r ${accent} text-black`}
            >
              {icon}
            </div>
            <div>
              <div className="text-sm font-bold">{platform}</div>
              <div className="text-xs text-gray-400">{handle}</div>
            </div>
          </div>

          {/* Content */}
          {showFallback ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-8 text-gray-400">
              <div
                className={`text-6xl mb-4 bg-gradient-to-r ${accent} text-transparent bg-clip-text`}
              >
                {icon}
              </div>
              <p className="text-sm">
                Live previews aren’t available here.
                <br />
                Tap below to view the page directly.
              </p>
            </div>
          ) : (
            <iframe
              src={embedSrc}
              title={platform}
              className="flex-1 w-full border-none bg-black"
              loading="lazy"
              onError={() => setEmbedFailed(true)}
            />
          )}

          {/* CTA */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-4 text-sm border-t border-gray-800 hover:bg-gray-900 transition"
          >
            Open on {platform} →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ================= MOBILE CARD ================= */
function MobileCard({ platform, handle, link, icon, accent }) {
  return (
    <div className="rounded-[2.4rem] border border-gray-700 bg-black shadow-xl p-4">
      <div className="rounded-[1.9rem] border border-gray-800 bg-black overflow-hidden">

        <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-800">
          <div
            className={`p-2 rounded-full bg-gradient-to-r ${accent} text-black`}
          >
            {icon}
          </div>
          <div>
            <div className="font-bold">{platform}</div>
            <div className="text-xs text-gray-400">{handle}</div>
          </div>
        </div>

        <div className="px-6 py-10 text-center text-gray-400 text-sm">
          View the live {platform} page directly.
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center py-4 border-t border-gray-800 hover:bg-gray-900 transition"
        >
          Open on {platform} →
        </a>
      </div>
    </div>
  );
}
