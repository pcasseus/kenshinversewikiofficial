import React, { useState } from "react";
import { Lock } from "lucide-react";
import TrilogyCastModal from "./TrilogyCastModal.jsx";

export default function TrilogyOne() {
  const [activePhase, setActivePhase] = useState(null);

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-white">

      {/* HEADER */}
      <header className="text-center mb-20 sm:mb-32">
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-widest text-yellow-300">
          Trilogy I
        </h1>

        <p className="mt-6 text-sm sm:text-base text-gray-400 italic max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          An informational archive outlining the three-part narrative that defines
          the opening saga of the Kenshinverse. Each volume represents a distinct
          emotional phase of a single unfolding story.
        </p>
      </header>

      {/* MOBILE STACK (DEFAULT) */}
      <section className="grid gap-8 md:hidden">
        <PhaseCard
          tier={1}
          mood="bittersweet"
          title="Book I"
          description="A teenager lives quietly on Earth, unaware that a long-buried past is beginning to resurface. When that past collides with the present, a chain of events is set in motion that will determine the course of his future and fracture the world around him."
          status="Rewrites in Progress"
          unlocked
          onViewCast={() => setActivePhase(1)}
        />

        <PhaseCard
          tier={2}
          mood="heavy"
          title="Book II"
          description="As the consequences of the war spread outward, Wesley Johnson is left adrift, his sense of identity unraveling as he pieces together a shattered reality while facing a future he has long feared beneath the shadow of an unknown threat and impossible odds."
          status="Rewrites Scheduled"
          unlocked={false}
        />

        <PhaseCard
          tier={3}
          mood="hopeful"
          title="Book III"
          description="With the boundaries of Earth permanently altered, the events of the past two years open the door to forces beyond any threat previously faced. Stories converge, long-running arcs reach their conclusions, and the saga draws toward an explosive finale."
          status="Rewrites Scheduled"
          unlocked={false}
        />
      </section>

      {/* DESKTOP TIMELINE */}
      <section className="relative hidden md:grid grid-cols-3 gap-16 items-start">

        {/* Connector: Book I → Book II */}
        <div className="absolute top-1/2 left-[8%] right-[40%] h-px bg-gradient-to-r from-pink-300 to-slate-400 opacity-50" />

        {/* Branch to Book III */}
        <div className="absolute top-[50%] right-[16.6%] h-32 w-px bg-emerald-300/50" />

        <PhaseCard
          tier={1}
          mood="bittersweet"
          title="Book I"
          description="A teenager lives quietly on Earth, unaware that a long-buried past is beginning to resurface. When that past collides with the present, a chain of events is set in motion that will determine the course of his future and fracture the world around him."
          status="Rewrites in Progress"
          unlocked
          onViewCast={() => setActivePhase(1)}
        />

        <PhaseCard
          tier={2}
          mood="heavy"
          title="Book II"
          description="As the consequences of the war spread outward, Wesley Johnson is left adrift, his sense of identity unraveling as he pieces together a shattered reality while facing a future he has long feared beneath the shadow of an unknown threat and impossible odds."
          status="Rewrites Scheduled"
          unlocked={false}
        />

        <PhaseCard
          tier={3}
          mood="hopeful"
          title="Book III"
          description="With the boundaries of Earth permanently altered, the events of the past two years open the door to forces beyond any threat previously faced. Stories converge, long-running arcs reach their conclusions, and the saga draws toward an explosive finale."
          status="Rewrites Scheduled"
          unlocked={false}
        />
      </section>

      {/* CAST MODAL */}
      {activePhase && (
        <TrilogyCastModal
          phase={activePhase}
          onClose={() => setActivePhase(null)}
        />
      )}

      {/* FOOTER */}
      <footer className="mt-24 sm:mt-32 text-[10px] sm:text-xs text-emerald-300 text-center tracking-widest border-t border-emerald-400/30 pt-6">
        STATUS: TRILOGY ARCHIVE ACTIVE
      </footer>
    </div>
  );
}

/* ----------------------------------------
   Phase Card
---------------------------------------- */

function PhaseCard({
  tier,
  mood,
  title,
  description,
  status,
  unlocked = false,
  onViewCast,
}) {
  const moodStyles = {
    bittersweet:
      "bg-gradient-to-br from-pink-200/20 to-purple-200/10 border-pink-300/40",
    heavy:
      "bg-gradient-to-br from-slate-400/10 to-slate-700/30 border-slate-400/40",
    hopeful:
      "bg-gradient-to-br from-emerald-200/25 to-yellow-200/20 border-emerald-300/60",
  };

  return (
    <div
      className={`relative rounded-2xl sm:rounded-3xl border p-6 sm:p-8 backdrop-blur-sm shadow-xl ${moodStyles[mood]}`}
    >
      <div className="text-[10px] uppercase tracking-widest mb-3 opacity-70">
        Phase {tier}
      </div>

      <h3 className="text-lg sm:text-xl font-bold mb-4">{title}</h3>

      <p className="text-sm text-gray-200 leading-relaxed">
        {description}
      </p>

      <p className="mt-5 text-xs italic text-yellow-200">
        Status: {status}
      </p>

      {unlocked ? (
        <button
          onClick={onViewCast}
          className="mt-6 text-xs uppercase tracking-widest text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          View Cast
        </button>
      ) : (
        <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 text-gray-400 cursor-not-allowed">
          <Lock size={14} />
          Cast Locked
        </div>
      )}
    </div>
  );
}
