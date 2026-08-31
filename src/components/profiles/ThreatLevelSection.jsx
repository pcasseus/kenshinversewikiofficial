import { useMemo } from "react";

/**
 * THREAT LEVEL METER (CLASSIC SEGMENTED)
 * - Traditional battery-style meter
 * - Reacts to Book 1 / 2 / 3
 * - Reads from character.psychProfile.threatMeter
 */

const SEGMENTS = 20; // number of blocks in the meter

const ThreatLevelSection = ({ character, selectedBooks }) => {
  if (!character?.psychProfile?.threatMeter) return null;

  const stage = useMemo(() => {
    if (selectedBooks?.includes(3)) return "end";
    if (selectedBooks?.includes(2)) return "mid";
    return "early";
  }, [selectedBooks]);

  const meter = character.psychProfile.threatMeter[stage];
  if (!meter) return null;

  const { value, label } = meter;

  const filledSegments = Math.round((value / 100) * SEGMENTS);

  const getSegmentColor = (index) => {
    const percent = ((index + 1) / SEGMENTS) * 100;

    if (percent <= 35) return "bg-green-500";
    if (percent <= 60) return "bg-yellow-400";
    if (percent <= 80) return "bg-orange-500";
    return "bg-red-600";
  };

  return (
    <section
      className="
        mt-10 mb-16
        border border-green-700/50
        rounded-lg
        bg-black
        px-6 py-5
      "
    >
      {/* HEADER */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-green-400 tracking-[0.35em] text-[10px] font-semibold uppercase">
          Threat Level Meter
        </h2>
        <span className="text-[9px] tracking-widest text-gray-500 uppercase">
          Adaptive Assessment
        </span>
      </div>

      {/* SEGMENTED METER */}
      <div className="flex gap-[3px]">
        {Array.from({ length: SEGMENTS }).map((_, index) => {
          const active = index < filledSegments;

          return (
            <div
              key={index}
              className={`
                h-6 flex-1 rounded-sm
                border border-black
                ${active ? getSegmentColor(index) : "bg-zinc-800"}
              `}
            />
          );
        })}
      </div>

      {/* SCALE LABELS */}
      <div className="mt-3 flex justify-between text-[10px] tracking-widest text-gray-400 uppercase">
        <span>Low</span>
        <span>Critical</span>
        <span>Run</span>
      </div>

      {/* STATUS */}
      <div className="mt-4 flex items-center gap-2 text-[11px] tracking-widest">
        <span className="text-green-300 uppercase">Status:</span>
        <span className="text-white">{label}</span>
        <span className="text-gray-400">({value}%)</span>
      </div>
    </section>
  );
};

export default ThreatLevelSection;
