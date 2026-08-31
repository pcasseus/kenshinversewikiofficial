// MobileInterface.jsx
import React from "react";
import TopHUD from "./TopHUD";
import TrilogyProgressPanel from "./TrilogyProgressPanel";
import EditingProgressPanel from "./EditingProgressPanel";
import IncomingTransmissionPanel from "./IncomingTransmissionPanel";
import SignalFeedPanel from "./SignalFeedPanel";

const MobileInterface = ({ onRedoBootup }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-cyan-300 px-4 pt-[4.5rem] pb-6 space-y-6">
      <TopHUD onRedoBootup={onRedoBootup} />

      <TrilogyProgressPanel />
      <IncomingTransmissionPanel />
      <SignalFeedPanel />
      <EditingProgressPanel />
    </div>
  );
};

export default MobileInterface;
