import React from "react";

import MobileRiskAssessment from "./MobileRiskAssessment";
import MobilePsychFindings from "./MobilePsychFindings";

const MobilePsychology = ({
  character,
  activeStage = "beginning",
}) => {
  const profile =
    character?.psychProfile;

  if (!profile) {
    return (
      <section className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-8 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
          Psychological record
          unavailable
        </p>
      </section>
    );
  }

  return (
    <div className="space-y-5">
      <section
        className="overflow-hidden rounded-lg border border-yellow-600/60 bg-[#070706]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(234,179,8,0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              to right,
              rgba(234,179,8,0.03) 1px,
              transparent 1px
            )
          `,
          backgroundSize:
            "24px 24px",
        }}
      >
        <div className="px-4 py-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-yellow-600">
            S.T.A.T.I.C.
            Psychological Record
          </span>

          <h2 className="mt-2 text-xl font-black uppercase tracking-[0.1em] text-yellow-300">
            Psychological History
          </h2>

          <p className="mt-2 max-w-sm text-[11px] leading-5 text-zinc-500">
            Behavioral,
            personality, and
            operational risk records
            associated with this
            subject.
          </p>
        </div>
      </section>

      <MobileRiskAssessment
        character={
          character
        }
        activeStage={
          activeStage
        }
      />

      <MobilePsychFindings
        character={
          character
        }
      />
    </div>
  );
};

export default MobilePsychology;