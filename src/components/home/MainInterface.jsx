import React from "react";
import TopHUD from "./TopHUD";
import TrilogyProgressPanel from "./TrilogyProgressPanel";
import EditingProgressPanel from "./EditingProgressPanel";
import IncomingTransmissionPanel from "./IncomingTransmissionPanel";
import SignalFeedPanel from "./SignalFeedPanel";

const MainInterface = ({ onRedoBootup }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <TopHUD onRedoBootup={onRedoBootup} />

      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-[minmax(260px,320px)_minmax(0,1fr)_minmax(260px,320px)] gap-4 px-4 py-5 xl:grid-cols-[minmax(300px,360px)_minmax(0,1fr)_minmax(300px,360px)] xl:gap-6 xl:px-6">
        <aside className="min-w-0">
          <TrilogyProgressPanel />
        </aside>

        <main className="min-w-0">
          <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-6">
            <IncomingTransmissionPanel />
            <SignalFeedPanel />
          </div>
        </main>

        <aside className="min-w-0">
          <EditingProgressPanel />
        </aside>
      </div>
    </div>
  );
};

export default MainInterface;