import React from "react";

const EditingProgressPanel = () => {
  return (
    <div className="flex h-full w-full flex-col space-y-5 rounded-lg border border-yellow-600 bg-black/70 p-4 text-xs text-white shadow-lg backdrop-blur-md animate-fadeIn">
      <div>
        <div className="w-fit rounded border border-yellow-700 bg-yellow-900/10 px-2 py-1 text-[10px] uppercase tracking-widest text-yellow-400">
          KVI Publication Data
        </div>

        <h3 className="mt-3 border-b border-yellow-600 pb-2 text-sm font-semibold text-yellow-300">
          Hello To Yesterday
        </h3>
      </div>

      <div className="space-y-3">
        <div className="text-[10px] uppercase tracking-widest text-yellow-500">
          Official Synopsis
        </div>

        <div className="rounded-md border border-yellow-800 bg-yellow-950/10 p-4">
          <p className="leading-relaxed text-gray-300">
            Three years after a near-extinction event changed his life 
            forever, Wesley Johnson is forced to confront a past long 
            thought buried. When that past collides with the present, a 
            chain of events is set in motion that will determine the 
            course of his future and fracture the world around him.
          </p>

          <p className="mt-2 text-[10px] italic text-yellow-600">
            Publication copy pending.
          </p>
        </div>
      </div>

      <div className="space-y-3 border-t border-yellow-900 pt-4">
        <div className="text-[10px] uppercase tracking-widest text-yellow-500">
          Availability
        </div>

        <div className="space-y-3">
          <div className="rounded-md border border-yellow-800 bg-black/40 p-3">
            <div className="text-[10px] uppercase tracking-wider text-gray-500">
              Amazon
            </div>

            <div className="mt-1 font-semibold text-yellow-200">
              Link TBD
            </div>
          </div>

          <div className="rounded-md border border-yellow-800 bg-black/40 p-3">
            <div className="text-[10px] uppercase tracking-wider text-gray-500">
              Release Window
            </div>

            <div className="mt-1 font-semibold text-yellow-200">
              Spring 2027
            </div>

            <div className="mt-1 text-[10px] text-yellow-600">
              Targeting May – June
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 border-t border-yellow-900 pt-4">
        <div className="text-[10px] uppercase tracking-widest text-yellow-500">
          Publication Status
        </div>

        <div className="relative overflow-hidden rounded-lg border border-yellow-500 bg-yellow-900/10 px-3 py-3 shadow-lg">
          <div className="font-bold tracking-wide text-yellow-400">
            KVI ▸ RELEASE PREPARATION
          </div>

          <div className="mt-1 text-yellow-200">
            Final release date pending.
          </div>

          <div className="mt-1 italic text-yellow-600 opacity-70">
            Distribution details will appear here once confirmed.
          </div>

          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-yellow-500 via-transparent to-yellow-500 opacity-40 animate-scrollLine" />
        </div>
      </div>

      <div className="mt-auto border-t border-yellow-900 pt-4 font-mono text-[10px] text-yellow-500">
        <div className="uppercase tracking-widest">
          [Publication Node Standing By]
        </div>
      </div>
    </div>
  );
};

export default EditingProgressPanel;