import React from "react";
import { Link } from "react-router-dom";

export default function Lore() {
  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff06_1px,transparent_1px)] bg-[length:4px_4px] pointer-events-none z-0" />

      <div className="absolute inset-x-0 top-0 h-[30rem] bg-gradient-to-b from-yellow-950/20 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 hidden md:block">
        <header className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-yellow-700 mb-4">
            KenshinVerse Database
          </p>

          <h1 className="text-5xl font-extrabold text-yellow-400 uppercase tracking-widest">
            Lore Index
          </h1>

          <p className="mt-5 text-gray-400 italic max-w-2xl mx-auto leading-relaxed">
            A living archive documenting the races, historical records,
            technologies, artifacts, and power classifications of the{" "}
            <span className="text-blue-300">KenshinVerse</span>.
          </p>

          <div className="mt-6 flex justify-center gap-3 text-[10px] uppercase tracking-widest">
            <span className="border border-green-800 text-green-400 px-3 py-1 rounded-full">
              Archive Online
            </span>

            <span className="border border-yellow-800 text-yellow-500 px-3 py-1 rounded-full">
              KVI Access
            </span>
          </div>
        </header>

        <section className="mb-24">
          <div className="flex items-end justify-between border-b border-yellow-700 pb-3 mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-700">
                Primary Database
              </p>

              <h2 className="mt-1 text-sm text-yellow-300 tracking-widest uppercase">
                Core Volumes
              </h2>
            </div>

            <span className="text-[10px] text-gray-600 uppercase tracking-widest">
              4 Active Records
            </span>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <LoreCard
              to="/lore/races"
              accent="green"
              icon="🧬"
              title="Races"
              description="Definitive records of humans, Deviants, Unnaturals, synthetic lifeforms, alien species, and other biological classifications documented within the KVI archive."
              label="Species Database"
              footer="Volume I"
            />

            <LoreCard
              to="/lore/leaderboard"
              accent="yellow"
              icon="🧠"
              title="Kenshinverse Leaderboard"
              description="A classified strength index tracking the most powerful known entities and their demonstrated combat potential during KVI."
              label="Power Analysis"
              footer="Power Index"
            />

            <LoreCard
              to="/lore/history"
              accent="amber"
              icon="📜"
              title="Historical Archives"
              description="Declassified incidents, organizational history, experimental programs, discoveries, and major events preserved within the historical record."
              label="Historical Database"
              footer="Archive Records"
            />

            <LoreCard
              to="/lore/tech"
              accent="cyan"
              icon="⚙️"
              title="Tech & Artifacts"
              description="Cataloged weapons, alien relics, experimental systems, integrated technology, engineered materials, and specialized equipment."
              label="Technology Database"
              footer="Technical Archive"
            />
          </div>
        </section>

        <section className="mb-20">
          <div className="border border-yellow-900 bg-yellow-950/10 rounded-2xl p-8">
            <div className="grid grid-cols-3 gap-8">
              <InfoBlock
                label="Archive Layer"
                value="KVI"
                description="Public database restricted to information approved for the KVI release."
              />

              <InfoBlock
                label="Active Volumes"
                value="04"
                description="Four primary lore databases are currently available for public access."
              />

              <InfoBlock
                label="Classification"
                value="Variable"
                description="Individual records may contain declassified, restricted, or partially redacted information."
              />
            </div>
          </div>
        </section>

        <footer className="text-xs text-green-400 text-center tracking-widest border-t border-yellow-700 pt-6">
          STATUS: ACCESS GRANTED — LORE ARCHIVE ONLINE
        </footer>
      </div>

      <div className="relative z-10 px-5 py-14 md:hidden">
        <header className="text-center">
          <p className="text-[9px] uppercase tracking-[0.3em] text-yellow-700 mb-3">
            KenshinVerse Database
          </p>

          <h1 className="text-3xl font-extrabold text-yellow-400 uppercase tracking-widest">
            Lore Index
          </h1>

          <p className="mt-4 text-gray-400 italic text-sm max-w-[26rem] mx-auto leading-relaxed">
            A living archive documenting the races, history, technology,
            artifacts, and power classifications of the{" "}
            <span className="text-blue-300">KenshinVerse</span>.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2 text-[9px] uppercase tracking-widest">
            <span className="border border-green-800 text-green-400 px-2.5 py-1 rounded-full">
              Archive Online
            </span>

            <span className="border border-yellow-800 text-yellow-500 px-2.5 py-1 rounded-full">
              KVI Access
            </span>
          </div>
        </header>

        <section className="mt-12">
          <div className="flex items-end justify-between border-b border-yellow-700 pb-2">
            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-yellow-700">
                Primary Database
              </p>

              <h2 className="mt-1 text-[11px] text-yellow-300 tracking-widest uppercase">
                Core Volumes
              </h2>
            </div>

            <span className="text-[8px] text-gray-600 uppercase tracking-widest">
              4 Active
            </span>
          </div>

          <div className="mt-6 space-y-5">
            <MobileLoreCard
              to="/lore/races"
              accent="green"
              icon="🧬"
              title="Races"
              description="Records of humans, Deviants, Unnaturals, synthetic beings, alien species, and other biological classifications."
              label="Species Database"
              footer="Volume I"
            />

            <MobileLoreCard
              to="/lore/leaderboard"
              accent="yellow"
              icon="🧠"
              title="Kenshinverse Leaderboard"
              description="A classified strength index tracking the most powerful known entities and their demonstrated KVI combat potential."
              label="Power Analysis"
              footer="Power Index"
            />

            <MobileLoreCard
              to="/lore/history"
              accent="amber"
              icon="📜"
              title="Historical Archives"
              description="Declassified incidents, organizations, experimental programs, discoveries, and major historical events."
              label="Historical Database"
              footer="Archive Records"
            />

            <MobileLoreCard
              to="/lore/tech"
              accent="cyan"
              icon="⚙️"
              title="Tech & Artifacts"
              description="Weapons, alien relics, experimental systems, advanced materials, integrated technology, and specialized equipment."
              label="Technology Database"
              footer="Technical Archive"
            />
          </div>
        </section>

        <section className="mt-12">
          <div className="text-[11px] text-yellow-300 tracking-widest uppercase border-b border-yellow-700 pb-2">
            Archive Status
          </div>

          <div className="mt-5 space-y-3">
            <MobileInfoBlock
              label="Archive Layer"
              value="KVI"
              description="Public lore is restricted to information approved for the KVI release."
            />

            <MobileInfoBlock
              label="Active Volumes"
              value="04"
              description="Four primary databases are currently available."
            />

            <MobileInfoBlock
              label="Classification"
              value="Variable"
              description="Some individual records remain restricted or partially redacted."
            />
          </div>
        </section>

        <footer className="mt-16 text-[10px] text-green-400 text-center tracking-widest border-t border-yellow-700 pt-4">
          LORE ARCHIVE ACTIVE
        </footer>
      </div>
    </div>
  );
}

function LoreCard({
  to,
  accent,
  icon,
  title,
  description,
  label,
  footer,
}) {
  const styles = {
    green: {
      border: "border-green-700 hover:border-green-400",
      background:
        "bg-gradient-to-br from-green-950/70 via-black to-black",
      title: "text-green-300 group-hover:text-green-200",
      label: "text-green-600",
      footer: "text-green-500",
      glow: "bg-green-500/5",
    },

    yellow: {
      border: "border-yellow-700 hover:border-yellow-400",
      background:
        "bg-gradient-to-br from-yellow-950/80 via-black to-black",
      title: "text-yellow-300 group-hover:text-yellow-200",
      label: "text-yellow-600",
      footer: "text-yellow-500",
      glow: "bg-yellow-500/5",
    },

    amber: {
      border: "border-amber-800 hover:border-amber-500",
      background:
        "bg-gradient-to-br from-amber-950/60 via-black to-black",
      title: "text-amber-300 group-hover:text-amber-200",
      label: "text-amber-700",
      footer: "text-amber-500",
      glow: "bg-amber-500/5",
    },

    cyan: {
      border: "border-cyan-900 hover:border-cyan-600",
      background:
        "bg-gradient-to-br from-cyan-950/40 via-black to-black",
      title: "text-cyan-300 group-hover:text-cyan-200",
      label: "text-cyan-700",
      footer: "text-cyan-500",
      glow: "bg-cyan-500/5",
    },
  };

  const style = styles[accent];

  return (
    <Link
      to={to}
      className={`group relative min-h-[19rem] border rounded-2xl p-8 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${style.border} ${style.background}`}
    >
      <div
        className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none ${style.glow}`}
      />

      <p
        className={`text-[10px] uppercase tracking-[0.25em] ${style.label}`}
      >
        {label}
      </p>

      <h3
        className={`mt-4 text-2xl font-bold tracking-wide transition-colors ${style.title}`}
      >
        <span className="mr-2">{icon}</span>
        {title}
      </h3>

      <p className="mt-5 text-gray-400 leading-relaxed">
        {description}
      </p>

      <div className="absolute bottom-7 left-8 right-8 flex items-center justify-between border-t border-white/5 pt-4">
        <span className={`text-[10px] uppercase tracking-widest ${style.footer}`}>
          {footer}
        </span>

        <span className={`text-xs ${style.footer}`}>
          Access →
        </span>
      </div>
    </Link>
  );
}

function MobileLoreCard({
  to,
  accent,
  icon,
  title,
  description,
  label,
  footer,
}) {
  const styles = {
    green: {
      border: "border-green-700",
      background:
        "bg-gradient-to-br from-green-950/70 via-black to-black",
      title: "text-green-300",
      label: "text-green-600",
      footer: "text-green-500",
    },

    yellow: {
      border: "border-yellow-700",
      background:
        "bg-gradient-to-br from-yellow-950/80 via-black to-black",
      title: "text-yellow-300",
      label: "text-yellow-600",
      footer: "text-yellow-500",
    },

    amber: {
      border: "border-amber-800",
      background:
        "bg-gradient-to-br from-amber-950/60 via-black to-black",
      title: "text-amber-300",
      label: "text-amber-700",
      footer: "text-amber-500",
    },

    cyan: {
      border: "border-cyan-900",
      background:
        "bg-gradient-to-br from-cyan-950/40 via-black to-black",
      title: "text-cyan-300",
      label: "text-cyan-700",
      footer: "text-cyan-500",
    },
  };

  const style = styles[accent];

  return (
    <Link
      to={to}
      className={`block border rounded-xl p-5 shadow-lg ${style.border} ${style.background}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p
            className={`text-[8px] uppercase tracking-[0.2em] ${style.label}`}
          >
            {label}
          </p>

          <h3
            className={`mt-2 text-lg font-bold tracking-wide ${style.title}`}
          >
            <span className="mr-2">{icon}</span>
            {title}
          </h3>
        </div>

        <span
          className={`text-[8px] uppercase tracking-widest whitespace-nowrap ${style.footer}`}
        >
          {footer}
        </span>
      </div>

      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-5 pt-3 border-t border-white/5 flex justify-end">
        <span className={`text-[10px] ${style.footer}`}>
          Access Record →
        </span>
      </div>
    </Link>
  );
}

function InfoBlock({ label, value, description }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-yellow-700">
        {label}
      </p>

      <p className="mt-2 text-xl font-bold text-yellow-300">
        {value}
      </p>

      <p className="mt-3 text-xs text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function MobileInfoBlock({ label, value, description }) {
  return (
    <div className="border border-yellow-950 bg-black/60 rounded-xl p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[9px] uppercase tracking-[0.2em] text-yellow-700">
          {label}
        </p>

        <p className="text-sm font-bold text-yellow-300">
          {value}
        </p>
      </div>

      <p className="mt-2 text-xs text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}