// MobileLandscapeInterface.jsx
import React from "react";
import IncomingTransmissionPanel from "./IncomingTransmissionPanel";
import SignalFeedPanel from "./SignalFeedPanel";
import TrilogyProgressPanel from "./TrilogyProgressPanel";
import EditingProgressPanel from "./EditingProgressPanel";

const MobileLandscapeInterface = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-cyan-300 px-2 pt-[4.5rem] pb-6 space-y-4">
      {/* Horizontal stack with responsive wrap */}
      <div className="flex flex-wrap gap-4 justify-center items-start">
        <div className="w-full sm:w-1/2">
          <TrilogyProgressPanel />
        </div>
        <div className="w-full sm:w-1/2">
          <EditingProgressPanel />
        </div>
      </div>

      {/* Full-width below */}
      <IncomingTransmissionPanel />
      <SignalFeedPanel />
    </div>
  );
};

export default MobileLandscapeInterface;
