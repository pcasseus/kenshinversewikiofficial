import React, { useState } from "react";

const TrilogyProgressPanel = () => {
  const [coverFailed, setCoverFailed] = useState(false);

  return (
    <div className="relative flex h-full w-full flex-col space-y-4 overflow-hidden rounded-lg border border-green-600 bg-black/70 p-4 shadow-lg backdrop-blur-md animate-fadeIn">
      <div className="pointer-events-none absolute left-1/2 top-10 z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-green-500/10 blur-2xl animate-pulse-spin" />

      <div className="z-10 w-fit rounded-sm border border-lime-400 bg-black/60 px-2 py-1 text-[10px] uppercase tracking-wider text-lime-300">
        System File: KVI
      </div>

      <div className="relative z-10 text-center">
        <h2 className="text-lg font-bold tracking-wide text-green-400">
          KVI
        </h2>

        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-200">
          Hello To Yesterday
        </p>

        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-gray-500">
          Book I
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[230px]">
        {!coverFailed ? (
          <img
            src="/kvi-cover.jpg"
            alt="KVI: Hello To Yesterday book cover"
            onError={() => setCoverFailed(true)}
            className="aspect-[2/3] w-full rounded-md border border-green-700 object-cover shadow-[0_0_20px_rgba(34,197,94,0.18)]"
          />
        ) : (
          <div className="flex aspect-[2/3] w-full flex-col items-center justify-center rounded-md border border-dashed border-green-500 bg-green-950/10 px-4 text-center shadow-[0_0_20px_rgba(34,197,94,0.12)]">
            <div className="text-[10px] uppercase tracking-[0.3em] text-green-500">
              Cover File Pending
            </div>

            <div className="mt-4 text-2xl font-bold tracking-wide text-green-300">
              KVI
            </div>

            <div className="mt-1 text-sm font-semibold uppercase tracking-widest text-yellow-200">
              Hello To Yesterday
            </div>

            <div className="mt-5 text-[10px] uppercase tracking-[0.24em] text-gray-500">
              Artwork Coming Soon
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 space-y-3 rounded-md border border-green-600 bg-black/50 p-3 text-sm text-white shadow-[0_0_12px_rgba(34,197,94,0.2)]">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-green-500">
            Projected Release
          </div>

          <div className="mt-1 font-bold text-green-300">
            Spring 2027
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-widest text-green-500">
            Target Window
          </div>

          <div className="mt-1 text-gray-300">
            May – June 2027
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-widest text-green-500">
            Release Status
          </div>

          <div className="mt-1 text-yellow-200">
            Final Date TBD
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-auto border-t border-green-900 pt-3 font-mono text-[11px] text-green-300">
        <div className="mb-1 font-bold tracking-wider text-green-400">
          STATUS ▸ RELEASE ARCHIVE ACTIVE
        </div>

        <div className="text-green-200">
          Public-facing KVI archive initialized.
        </div>

        <div className="mt-1 italic text-green-500 opacity-70">
          Publication data pending final confirmation.
        </div>
      </div>
    </div>
  );
};

export default TrilogyProgressPanel;