import React, { useEffect, useState } from "react";
import AICoreCircle from "../ui/AICoreCircle";
import "../ui/AIBootup.css";

const AIBootup = ({ onComplete }) => {
  const [confirmedStart, setConfirmedStart] = useState(false);
  const [skipped, setSkipped] = useState(false);

  const unlockScroll = () => {
    document.body.style.overflow = "auto";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 500);
    const el = document.querySelector(".ai-access-panel");
    if (el) el.classList.add("scroll-unlocked");
  };

  const handleConfirm = () => {
    setConfirmedStart(true);

    const audio = new Audio("/sfx/bootup_mobile.mp3");
    audio.volume = 1;
    audio.play();
    audio.onended = () => {
      unlockScroll();
      document.body.classList.remove("hide-navbar");
      onComplete?.();
    };
  };

  const handleSkip = () => {
    setSkipped(true);
    unlockScroll();
    document.body.classList.remove("hide-navbar");
    onComplete?.();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("hide-navbar");
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("hide-navbar");
    };
  }, []);

  return (
    <div className="ai-access-panel fixed inset-0 z-50 w-full bg-black text-center text-sm text-cyan-300 flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-2 w-full max-w-[500px]">
        <div className={`ai-core-wrapper transition-all duration-700 ${confirmedStart ? "down-shift" : ""}`}>
          <AICoreCircle size={176} isSpeaking={confirmedStart} />
        </div>

        {!confirmedStart ? (
          <>
            <div className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-cyan-400/80">
              System loaded. Begin sequence?
            </div>
            <button
              onClick={handleConfirm}
              className="px-4 py-2 text-[11px] sm:text-xs bg-cyan-500 hover:bg-cyan-400 text-black rounded-full transition"
            >
              I’m ready
            </button>
          </>
        ) : (
          <>
            <video
              src="/videos/bootup_mobile.mp4"
              autoPlay
              playsInline
              controls={false}
              muted={false}
              className="rounded-md w-[90%] sm:w-[85%] max-w-[460px] -mt-4 mb-2"
              onEnded={() => {
                unlockScroll();
                document.body.classList.remove("hide-navbar");
                onComplete?.();
              }}
            />
            {!skipped && (
              <button
                onClick={handleSkip}
                className="skip-intro-button mt-4"
              >
                <span className="glitch-text" data-text="Skip Intro">Skip Intro</span>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AIBootup;
