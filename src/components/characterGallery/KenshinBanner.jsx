import React from "react";

export default function KenshinBanner() {
  return (
    <section className="relative mb-10 overflow-hidden rounded-lg border border-yellow-500/50 bg-[#050505]">

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34, 197, 94, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              to right,
              rgba(34, 197, 94, 0.045) 1px,
              transparent 1px
            ),
            radial-gradient(
              circle at 20% 50%,
              rgba(234, 179, 8, 0.08),
              transparent 34%
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(34, 211, 238, 0.055),
              transparent 34%
            ),
            radial-gradient(
              circle at 80% 50%,
              rgba(217, 70, 239, 0.045),
              transparent 34%
            )
          `,
          backgroundSize:
            "30px 30px, 30px 30px, 100% 100%, 100% 100%, 100% 100%",
        }}
      />

      <div className="relative z-10 flex flex-col gap-2 border-b border-yellow-500/20 bg-black/80 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-green-400">
          S.T.A.T.I.C. Personnel Archive
        </span>

        <div className="flex flex-wrap gap-x-5 gap-y-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          <span>KVI Database</span>
          <span>Active Records</span>
        </div>
      </div>

 
      <span className="absolute left-5 top-16 h-10 w-10 border-l border-t border-yellow-500/40" />

      <span className="absolute right-5 top-16 h-10 w-10 border-r border-t border-yellow-500/40" />

      <span className="absolute bottom-5 left-5 h-10 w-10 border-b border-l border-yellow-500/40" />

      <span className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-yellow-500/40" />

 
      <div className="relative z-10 flex min-h-[300px] flex-col items-center justify-center px-6 py-12 text-center sm:min-h-[340px] sm:px-10">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-yellow-500/80 sm:text-xs">
          KVI Database
        </p>

        <h1 className="text-4xl font-black uppercase tracking-[0.12em] text-yellow-300 sm:text-5xl md:text-6xl">
          Character Gallery
        </h1>

        <div className="mt-5 h-px w-40 bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent" />

        <p className="mx-auto mt-5 max-w-3xl font-mono text-sm leading-7 text-zinc-300 sm:text-base">
          Access cleared character dossiers from{" "}
          <span className="font-bold text-yellow-300">
            KVI: Hello To Yesterday
          </span>
          . Additional personnel records will become available as they are
          cleared for archive access.
        </p>


        <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-px overflow-hidden rounded border border-yellow-700/40 bg-yellow-500/20 sm:grid-cols-3">
          <div className="bg-black px-4 py-3">
            <span className="block text-[9px] uppercase tracking-[0.18em] text-zinc-500">
              Archive
            </span>

            <span className="mt-1 block text-xs font-bold uppercase tracking-[0.14em] text-green-400">
              Online
            </span>
          </div>

          <div className="bg-black px-4 py-3">
            <span className="block text-[9px] uppercase tracking-[0.18em] text-zinc-500">
              Release
            </span>

            <span className="mt-1 block text-xs font-bold uppercase tracking-[0.14em] text-yellow-300">
              KVI
            </span>
          </div>

          <div className="bg-black px-4 py-3">
            <span className="block text-[9px] uppercase tracking-[0.18em] text-zinc-500">
              Access Level
            </span>

            <span className="mt-1 block text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
              Cleared
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-yellow-500/20 bg-black/70 px-5 py-3">
        <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          Personnel Database Interface
        </span>

        <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          S.T.A.T.I.C. Internal Record
        </span>
      </div>
    </section>
  );
}