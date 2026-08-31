import React from "react";
import TopHUD from "./TopHUD";
import TrilogyProgressPanel from "./TrilogyProgressPanel";
import EditingProgressPanel from "./EditingProgressPanel";
import IncomingTransmissionPanel from "./IncomingTransmissionPanel";
import SignalFeedPanel from "./SignalFeedPanel";

const MainInterface = ({ onRedoBootup }) => {
  return (
    <div className="hidden md:flex flex-col min-h-screen h-auto overflow-y-auto">
      <TopHUD onRedoBootup={onRedoBootup} />

      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr_400px] min-h-screen">
          {/* Left Sidebar */}
          <div className="home-sidebar-panel">
            <TrilogyProgressPanel />
          </div>

          {/* Center Panel */}
          <div className="overflow-y-auto max-h-[calc(100vh-80px)] px-4 py-6 sm:p-6">
            <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-6">
              <IncomingTransmissionPanel />
              <SignalFeedPanel />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="home-sidebar-panel">
            <EditingProgressPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInterface;
