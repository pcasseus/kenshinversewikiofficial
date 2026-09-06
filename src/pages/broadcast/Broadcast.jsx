import React from "react";

import {
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const channels = [
  {
    platform: "Instagram",
    handle: "@thekenshiniverse",
    link: "https://www.instagram.com/thekenshinverse/",
    icon: <FaInstagram />,
    accent: "from-pink-500 to-yellow-400",
    label: "Visual Archive",
    description:
      "Character reveals, artwork, visual updates, behind-the-scenes material, and official KenshinVerse posts.",
  },
  {
    platform: "TikTok",
    handle: "@thekenshiniverse",
    link: "https://www.tiktok.com/@thekenshinverse",
    icon: <FaTiktok />,
    accent: "from-cyan-400 to-fuchsia-500",
    label: "Transmissions",
    description:
      "Short-form updates, character content, edits, development clips, and transmissions from across the KenshinVerse.",
  },
];

export default function Broadcast() {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-20">

      <header className="text-center mb-20 md:mb-24">
        <div className="inline-flex items-center gap-3 mb-5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.32em] text-green-400/70">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          External Network Active
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-green-400 uppercase tracking-[0.22em] sm:tracking-[0.3em]">
          Broadcast
        </h1>

        <p className="mt-6 text-gray-400 italic max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
          Official outward-facing channels for the KenshinVerse. Follow along
          for updates, community posts, behind-the-scenes development, and
          transmissions from across the universe.
        </p>
      </header>

      <section className="hidden md:flex justify-center items-stretch gap-10 lg:gap-16 max-w-5xl mx-auto">
        {channels.map((channel) => (
          <PhoneCard key={channel.platform} {...channel} />
        ))}
      </section>

      <section className="md:hidden space-y-10 max-w-sm mx-auto">
        {channels.map((channel) => (
          <MobileCard key={channel.platform} {...channel} />
        ))}
      </section>

      <footer className="mt-28 md:mt-36 text-[10px] sm:text-xs text-green-400 text-center tracking-[0.2em] sm:tracking-widest border-t border-green-700/60 pt-6 font-mono">
        STATUS: BROADCAST CHANNELS ACTIVE
      </footer>
    </div>
  );
}

function PhoneCard({
  platform,
  handle,
  link,
  icon,
  accent,
  label,
  description,
}) {
  return (
    <div className="relative w-[320px] lg:w-[340px] xl:w-[360px]">
      <div className="absolute -inset-4 rounded-[3rem] bg-green-400/5 blur-3xl pointer-events-none" />

      <div className="relative rounded-[2.8rem] border border-gray-700 bg-black shadow-[0_0_60px_rgba(0,255,170,0.12)] p-4">
        <div className="rounded-[2.2rem] border border-gray-800 bg-black overflow-hidden h-[620px] flex flex-col">

          <div className="h-6 flex items-center justify-center">
            <div className="w-20 h-1 rounded-full bg-gray-800" />
          </div>

          <div className="flex items-center gap-3 px-5 py-4 border-y border-gray-800 bg-white/[0.015]">
            <div
              className={`text-lg p-2.5 rounded-full bg-gradient-to-r ${accent} text-black shadow-lg`}
            >
              {icon}
            </div>

            <div className="min-w-0">
              <div className="text-sm font-bold tracking-wide">
                {platform}
              </div>

              <div className="text-xs text-gray-400 font-mono truncate">
                {handle}
              </div>
            </div>

            <span className="ml-auto h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${platform}`}
            className="group flex-1 flex flex-col items-center justify-center text-center px-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_55%)] opacity-70" />

            <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`text-7xl mb-8 bg-gradient-to-r ${accent} text-transparent bg-clip-text transition-transform duration-300 group-hover:scale-110`}
              >
                {icon}
              </div>

              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-green-400/60 mb-3">
                Channel Online
              </div>

              <h3 className="text-xl font-black uppercase tracking-[0.16em] text-white mb-4">
                {label}
              </h3>

              <p className="text-sm text-gray-400 leading-6 max-w-[245px]">
                {description}
              </p>

              <div className="mt-8 px-4 py-2 border border-gray-800 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 group-hover:border-green-500/50 group-hover:text-green-400 transition">
                {handle}
              </div>
            </div>
          </a>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 text-center py-4 text-xs font-mono tracking-wide border-t border-gray-800 hover:bg-green-400 hover:text-black transition"
          >
            Open on {platform}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <div className="h-7 flex items-center justify-center">
            <div className="w-24 h-1 rounded-full bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileCard({
  platform,
  handle,
  link,
  icon,
  accent,
  label,
  description,
}) {
  return (
    <div className="relative">
      <div className="absolute -inset-3 bg-green-500/5 blur-2xl rounded-[2.6rem] pointer-events-none" />

      <div className="relative rounded-[2.4rem] border border-gray-700 bg-black shadow-[0_0_40px_rgba(0,255,170,0.08)] p-3">
        <div className="rounded-[1.9rem] border border-gray-800 bg-black overflow-hidden">

          <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-800">
            <div
              className={`p-2.5 rounded-full bg-gradient-to-r ${accent} text-black`}
            >
              {icon}
            </div>

            <div className="min-w-0">
              <div className="font-bold">
                {platform}
              </div>

              <div className="text-xs text-gray-400 font-mono truncate">
                {handle}
              </div>
            </div>

            <span className="ml-auto h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${platform}`}
            className="group block relative overflow-hidden px-6 py-12 text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.07),transparent_60%)]" />

            <div className="relative z-10">
              <div
                className={`inline-flex text-5xl mb-6 bg-gradient-to-r ${accent} text-transparent bg-clip-text transition-transform group-hover:scale-110`}
              >
                {icon}
              </div>

              <div className="text-[9px] uppercase tracking-[0.3em] text-green-400/60 font-mono mb-3">
                Channel Online
              </div>

              <h3 className="text-lg font-black uppercase tracking-[0.14em] mb-4">
                {label}
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                {description}
              </p>
            </div>
          </a>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 text-center py-4 border-t border-gray-800 hover:bg-green-400 hover:text-black transition font-mono text-xs"
          >
            Open on {platform}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}