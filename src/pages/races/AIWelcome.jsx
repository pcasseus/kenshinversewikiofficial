import React, { useEffect, useRef, useState } from 'react';
import AICoreCircle from '../../components/ui/AICoreCircle';
import { Play, Square } from 'lucide-react';

export default function AIWelcome() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef(null);

  const speak = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sfx/codex.mp3');
    } else {
      audioRef.current.currentTime = 0;
    }

    audioRef.current.volume = 1;
    audioRef.current.play().then(() => {
      setIsSpeaking(true);
    }).catch(err => {
      console.warn("Audio play failed:", err);
    });

    audioRef.current.onended = () => {
      setIsSpeaking(false);
    };
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsSpeaking(false);
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center text-center mb-16">
      <AICoreCircle isSpeaking={isSpeaking} size={120} />

      <h1 className="mt-4 text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-[#00ff9f] drop-shadow">
        Welcome to the Kenshinverse Codex
      </h1>

      <div className="mt-4 flex gap-4">
        <button
          onClick={speak}
          className="flex items-center gap-2 text-[#00ff9f] border border-[#00ff9f88] px-4 py-1.5 rounded hover:bg-[#002621] hover:shadow-md transition-all"
        >
          <Play size={16} /> Play Intro
        </button>

        <button
          onClick={stop}
          className="flex items-center gap-2 text-[#00ff9f] border border-[#00ff9f88] px-4 py-1.5 rounded hover:bg-[#330000] hover:shadow-md transition-all"
        >
          <Square size={16} /> Stop
        </button>
      </div>
    </div>
  );
}
