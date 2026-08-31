import React from "react";
import TopHUD from "./TopHUD";
import TrilogyProgressPanel from "./TrilogyProgressPanel";
import EditingProgressPanel from "./EditingProgressPanel";
import IncomingTransmissionPanel from "./IncomingTransmissionPanel";
import SignalFeedPanel from "./SignalFeedPanel";

const MobileInterface = ({ onRedoBootup }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-cyan-300">
      <TopHUD onRedoBootup={onRedoBootup} />

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-3 py-4 sm:px-5 sm:py-6">
        <IncomingTransmissionPanel />

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          <TrilogyProgressPanel />
          <EditingProgressPanel />
        </div>

        <SignalFeedPanel />
      </div>
    </div>
  );
};

export default MobileInterface;