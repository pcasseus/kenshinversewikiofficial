import React from "react";

export default function KenshinBanner() {
  return (
    <section className="relative w-full h-[55vh] sm:h-[60vh] flex flex-col items-center justify-center overflow-hidden rounded-lg border border-yellow-500/40 mb-16 bg-[#0b0b0b]">
      {/* --- Layered comic background --- */}
      <div className="absolute inset-0 overflow-hidden">
        {/* angled motion lines */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,_rgba(255,255,255,0.03)_0px,_rgba(255,255,255,0.03)_2px,_transparent_2px,_transparent_6px)] opacity-40"></div>

        {/* halftone gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)] mix-blend-overlay"></div>

        {/* colored energy layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(110deg,_rgba(255,0,60,0.15)_0%,_rgba(255,255,0,0.05)_40%,_rgba(0,200,255,0.12)_80%)] mix-blend-screen blur-[2px]"></div>

        {/* paper texture */}
        <div className="absolute inset-0 bg-[url('/textures/comic-grain.png')] bg-repeat opacity-10 mix-blend-multiply"></div>
      </div>

      {/* --- Title --- */}
      <h1 className="relative z-10 text-center text-yellow-400 uppercase tracking-[6px] font-extrabold text-3xl sm:text-5xl md:text-6xl drop-shadow-[0_0_20px_rgba(255,215,0,0.7)]">
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-200 to-yellow-400 animate-titlePulse">
          Characters of the Kenshinverse
        </span>
      </h1>

      {/* --- Subheading --- */}
      <p className="relative z-10 mt-4 text-center text-yellow-200/90 italic text-sm sm:text-base max-w-2xl leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        The central hub for every major figure across all three books of the Kenshinverse.
        Use the filters or search below to explore their stories.
      </p>

      {/* --- Comic light bar --- */}
      <div className="relative z-10 mt-6 h-[3px] w-[250px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-barGlow"></div>

      {/* --- Vignette edges --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_transparent_70%,_rgba(0,0,0,0.9)_100%)] pointer-events-none"></div>

      {/* --- CSS Animations --- */}
      <style jsx>{`
        @keyframes titlePulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(255,215,0,0.8));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(255,255,255,0.9));
          }
        }
        .animate-titlePulse {
          animation: titlePulse 6s ease-in-out infinite;
        }

        @keyframes barGlow {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 12px rgba(255,215,0,0.8);
          }
          50% {
            opacity: 0.6;
            box-shadow: 0 0 20px rgba(255,255,255,0.6);
          }
        }
        .animate-barGlow {
          animation: barGlow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
