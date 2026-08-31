import React from "react";
import TopHUD from "./TopHUD";
import TrilogyProgressPanel from "./TrilogyProgressPanel";
import EditingProgressPanel from "./EditingProgressPanel";
import IncomingTransmissionPanel from "./IncomingTransmissionPanel";

const MainInterface = ({ onRedoBootup }) => {
  return (
    <div className="flex min-h-[calc(100dvh-48px)] w-full flex-col overflow-x-hidden bg-black">
      <TopHUD onRedoBootup={onRedoBootup} />

      <div className="mx-auto flex w-full max-w-[1720px] flex-1 px-4 pb-0 pt-5 xl:px-6 xl:pb-0 xl:pt-6">
        <div className="grid w-full flex-1 grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,2fr)_minmax(280px,0.8fr)] xl:gap-6">
          <aside className="flex min-h-0 min-w-0">
            <TrilogyProgressPanel />
          </aside>

          <main className="flex min-h-0 min-w-0">
            <IncomingTransmissionPanel />
          </main>

          <aside className="flex min-h-0 min-w-0">
            <EditingProgressPanel />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MainInterface;