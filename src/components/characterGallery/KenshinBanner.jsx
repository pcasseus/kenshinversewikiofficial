import React from "react";

export default function KenshinBanner() {
  return (
    <section className="relative mb-16 flex h-[55vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-yellow-500/40 bg-[#0b0b0b] sm:h-[60vh]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,_rgba(255,255,255,0.03)_0px,_rgba(255,255,255,0.03)_2px,_transparent_2px,_transparent_6px)] opacity-40" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)] mix-blend-overlay" />

        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(110deg,_rgba(255,0,60,0.15)_0%,_rgba(255,255,0,0.05)_40%,_rgba(0,200,255,0.12)_80%)] mix-blend-screen blur-[2px]" />

        <div className="absolute inset-0 bg-[url('/textures/comic-grain.png')] bg-repeat opacity-10 mix-blend-multiply" />
      </div>

      <div className="relative z-10 px-6 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-yellow-500/80 sm:text-sm">
          KVI Database
        </p>

        <h1 className="text-3xl font-extrabold uppercase tracking-[6px] text-yellow-400 drop-shadow-[0_0_20px_rgba(255,215,0,0.7)] sm:text-5xl md:text-6xl">
          <span className="animate-titlePulse block bg-gradient-to-r from-yellow-300 via-orange-200 to-yellow-400 bg-clip-text text-transparent">
            Character Gallery
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm italic leading-relaxed text-yellow-200/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] sm:text-base">
          Access character dossiers from KVI: Hello To Yesterday.
          Additional records will be released as they are cleared for access.
        </p>
      </div>

      <div className="animate-barGlow relative z-10 mt-6 h-[3px] w-[250px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,_transparent_70%,_rgba(0,0,0,0.9)_100%)]" />

      <style>{`
        @keyframes titlePulse {
          0%,
          100% {
            filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8));
          }

          50% {
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.9));
          }
        }

        .animate-titlePulse {
          animation: titlePulse 6s ease-in-out infinite;
        }

        @keyframes barGlow {
          0%,
          100% {
            opacity: 1;
            box-shadow: 0 0 12px rgba(255, 215, 0, 0.8);
          }

          50% {
            opacity: 0.6;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          }
        }

        .animate-barGlow {
          animation: barGlow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}