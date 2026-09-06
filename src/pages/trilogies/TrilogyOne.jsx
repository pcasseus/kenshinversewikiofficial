import React from "react";
import {
  Clock3,
  Hourglass,
  Lock,
  ShieldAlert,
} from "lucide-react";

export default function TrilogyOne() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080806] text-white">
      <TimeBackdrop />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* HEADER */}
        <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-yellow-300/55 sm:text-xs">
            Kenshinverse Narrative Archive
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.2em] text-yellow-300 sm:text-6xl">
            Trilogy I
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm italic leading-relaxed text-white/50 sm:text-base">
            Three volumes bound by time. One looks backward. One stands in the
            present. One waits beyond what can currently be seen.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-yellow-300/18 sm:w-24" />

            <Hourglass
              size={18}
              className="text-yellow-300/60"
            />

            <span className="h-px w-16 bg-yellow-300/18 sm:w-24" />
          </div>

          <div className="mt-4 flex items-center justify-center gap-5 text-[9px] uppercase tracking-[0.34em]">
            <span className="text-stone-400/45">Past</span>
            <span className="text-yellow-300/45">Present</span>
            <span className="text-red-400/40">Future</span>
          </div>
        </header>

        {/* TRILOGY */}
        <section className="grid gap-8 md:grid-cols-3 lg:gap-10">
          <BookVolume
            phase="01"
            title="KVI"
            subtitle="Hello To Yesterday"
            temporalLabel="Past → Present"
            theme="past"
            publicRecord
            description="Three years after a near-extinction event changed his life forever, Wesley Johnson is forced to confront a past long thought buried. When that past collides with the present, a chain of events is set in motion that will determine the course of his future and fracture the world around him."
          />

          <BookVolume
            phase="02"
            title="KVII"
            subtitle="Redacted"
            temporalLabel="Present → Future"
            theme="present"
            classified
          />

          <BookVolume
            phase="03"
            title="KVIII"
            subtitle="Redacted"
            temporalLabel="Future → ?"
            theme="future"
            classified
          />
        </section>

        {/* TIME FOOTER */}
        <section className="mt-20 flex flex-col items-center sm:mt-28">
          <div className="flex items-center gap-4">
            <span className="h-px w-20 bg-yellow-300/12 sm:w-32" />

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-300/18 bg-black/60">
              <Clock3
                size={18}
                className="text-yellow-300/60"
              />
            </div>

            <span className="h-px w-20 bg-red-400/10 sm:w-32" />
          </div>

          <p className="mt-4 text-[9px] uppercase tracking-[0.38em] text-white/25">
            Yesterday leaves a mark. Today makes the choice. Tomorrow remains
            unwritten.
          </p>
        </section>
      </div>
    </main>
  );
}

function BookVolume({
  phase,
  title,
  subtitle,
  temporalLabel,
  theme,
  description,
  publicRecord = false,
  classified = false,
}) {
  return (
    <article
      className={`relative min-h-[700px] overflow-hidden rounded-[28px] border shadow-[0_35px_100px_rgba(0,0,0,0.45)] ${getBookShell(
        theme
      )}`}
    >
      {/* TEMPORAL COVER */}
      <div className="relative h-[390px] overflow-hidden">
        <TemporalSurface theme={theme} />

        <TemporalClock theme={theme} />

        <div className="relative z-20 flex h-full flex-col justify-between p-7 sm:p-8">
          {/* META */}
          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.28em]">
            <span className={getMetaColor(theme)}>
              Volume {phase}
            </span>

            <span className={getMetaColor(theme)}>
              {publicRecord ? "Public Record" : "Restricted"}
            </span>
          </div>

          {/* TITLE */}
          <div>
            <p
              className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] ${getTemporalLabelColor(
                theme
              )}`}
            >
              {temporalLabel}
            </p>

            <h2
              className={`text-4xl font-black uppercase tracking-[0.18em] sm:text-5xl ${getMainTitleColor(
                theme
              )}`}
            >
              {title}
            </h2>

            <p
              className={`mt-3 text-sm font-bold uppercase tracking-[0.22em] ${getSubtitleColor(
                theme
              )}`}
            >
              {subtitle}
            </p>
          </div>

          {/* COVER RECORD */}
          {publicRecord ? (
            <PublicCoverState />
          ) : (
            <RestrictedCoverState theme={theme} />
          )}
        </div>
      </div>

      {/* RECORD CONTENT */}
      <div
        className={`relative min-h-[310px] border-t p-7 sm:p-8 ${getInfoSurface(
          theme
        )}`}
      >
        {classified && (
          <ClassifiedWatermark theme={theme} />
        )}

        <div className="relative z-10">
          {publicRecord ? (
            <PublicRecord description={description} />
          ) : (
            <RestrictedRecord theme={theme} />
          )}
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------
   TEMPORAL SURFACES
------------------------------------------------------- */

function TemporalSurface({ theme }) {
  if (theme === "past") {
    return (
      <>
        {/* PRESENT */}
        <div className="absolute inset-0 bg-[#030303]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_42%,rgba(212,175,55,0.055),transparent_38%)]" />

        {/* PAST BREAKING INTO PRESENT */}
        <div
          className="absolute -left-8 top-0 h-full w-[47%] bg-gradient-to-r from-[#292721] via-[#151411] to-transparent opacity-55"
          style={{
            clipPath: "polygon(0 0, 78% 0, 100% 100%, 0 100%)",
          }}
        />

        <div
          className="absolute left-[7%] top-[14%] h-[72%] w-px bg-stone-300/10"
        />

        <div
          className="absolute left-[12%] top-[20%] h-[58%] w-px bg-stone-300/[0.05]"
        />

        {/* PALE MEMORY SHARD */}
        <div
          className="absolute right-0 top-0 h-28 w-28 bg-[#d6d2c8]/80"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 38% 0)",
          }}
        />

        <div
          className="absolute right-0 top-0 h-20 w-20 bg-white/70"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 52% 0)",
          }}
        />
      </>
    );
  }

  if (theme === "present") {
    return (
      <>
        <div className="absolute inset-0 bg-[#050504]" />

        {/* THE PRESENT */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-yellow-300/25" />

        <div className="absolute left-1/2 top-0 h-full w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-300/[0.035] to-transparent" />

        {/* FUTURE BEING SHAPED */}
        <div
          className="absolute right-0 top-0 h-full w-[54%] bg-gradient-to-r from-yellow-900/[0.06] via-amber-500/[0.05] to-yellow-300/[0.10]"
          style={{
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* FORWARD PROJECTION LINES */}
        <div className="absolute left-1/2 top-[45%] h-px w-[48%] bg-gradient-to-r from-yellow-300/20 to-transparent" />

        <div className="absolute left-1/2 top-[52%] h-px w-[40%] rotate-[7deg] bg-gradient-to-r from-yellow-300/12 to-transparent" />

        <div className="absolute left-1/2 top-[38%] h-px w-[36%] -rotate-[7deg] bg-gradient-to-r from-yellow-300/10 to-transparent" />
      </>
    );
  }

  return (
    <>
      {/* UNKNOWN FUTURE */}
      <div className="absolute inset-0 bg-[#060405]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(153,27,27,0.20),transparent_42%)]" />

      {/* RED HORIZON */}
      <div className="absolute inset-x-0 bottom-[23%] h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-[22%] h-20 bg-gradient-to-t from-red-950/10 to-transparent" />

      {/* FUTURE FADING INTO NOTHING */}
      <div
        className="absolute right-[-8%] top-0 h-full w-[48%]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(127,29,29,0.035) 38%, rgba(127,29,29,0.08) 100%)",
          maskImage:
            "linear-gradient(to right, black 0%, black 65%, transparent 100%)",
        }}
      />

      {/* UNCERTAIN PATH */}
      <div className="absolute left-1/2 top-[56%] h-px w-[42%] bg-gradient-to-r from-red-500/22 via-red-400/10 to-transparent" />

      <div className="absolute left-1/2 top-[56%] h-px w-[32%] rotate-[13deg] bg-gradient-to-r from-red-500/12 to-transparent" />

      <div className="absolute left-1/2 top-[56%] h-px w-[27%] -rotate-[16deg] bg-gradient-to-r from-red-500/10 to-transparent" />
    </>
  );
}

/* -------------------------------------------------------
   TEMPORAL CLOCK ART
------------------------------------------------------- */

function TemporalClock({ theme }) {
  if (theme === "past") {
    return (
      <div className="pointer-events-none absolute inset-0">
        {/* OLD CLOCK OFFSET LEFT */}
        <div className="absolute left-[38%] top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-200/[0.07]" />

        <div className="absolute left-[38%] top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/[0.065]" />

        <div className="absolute left-[38%] top-1/2 h-[2px] w-[90px] origin-left -translate-y-1/2 rotate-[16deg] bg-yellow-300/[0.09]" />

        <div className="absolute left-[38%] top-1/2 h-[2px] w-[72px] origin-left -translate-y-1/2 -rotate-[74deg] bg-stone-200/[0.08]" />

        <span className="absolute left-[38%] top-[13%] -translate-x-1/2 font-serif text-3xl font-bold text-stone-200/[0.075]">
          XII
        </span>

        <span className="absolute bottom-[13%] left-[38%] -translate-x-1/2 font-serif text-3xl font-bold text-stone-200/[0.06]">
          VI
        </span>
      </div>
    );
  }

  if (theme === "present") {
    return (
      <div className="pointer-events-none absolute inset-0">
        {/* CLOCK CENTERED ON NOW */}
        <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/[0.075]" />

        <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/[0.045]" />

        <div className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/25" />

        <div className="absolute left-1/2 top-1/2 h-[2px] w-[92px] origin-left -translate-y-1/2 rotate-[8deg] bg-yellow-300/[0.13]" />

        <div className="absolute left-1/2 top-1/2 h-[2px] w-[68px] origin-left -translate-y-1/2 -rotate-[54deg] bg-yellow-300/[0.09]" />

        <span className="absolute left-1/2 top-[13%] -translate-x-1/2 font-serif text-3xl font-bold text-yellow-200/[0.07]">
          XII
        </span>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* INCOMPLETE FUTURE CLOCK */}
      <div
        className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/[0.09]"
        style={{
          clipPath: "polygon(0 0, 74% 0, 56% 100%, 0 100%)",
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/[0.06]"
        style={{
          clipPath: "polygon(0 0, 68% 0, 50% 100%, 0 100%)",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[2px] w-[92px] origin-left -translate-y-1/2 rotate-[12deg] bg-red-500/[0.12]" />

      <span className="absolute left-[33%] top-[13%] font-serif text-3xl font-bold text-red-400/[0.07]">
        XII
      </span>

      <span className="absolute bottom-[15%] left-[28%] font-serif text-3xl font-bold text-red-400/[0.05]">
        VI
      </span>
    </div>
  );
}

/* -------------------------------------------------------
   COVER STATES
------------------------------------------------------- */

function PublicCoverState() {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.3em] text-white/28">
        Official Cover
      </p>

      <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-yellow-300">
        Artwork Pending
      </p>
    </div>
  );
}

function RestrictedCoverState({ theme }) {
  const future = theme === "future";

  return (
    <div className="flex items-center gap-3">
      <ShieldAlert
        size={15}
        className={
          future
            ? "text-red-500/75"
            : "text-yellow-300/75"
        }
      />

      <div>
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
          Cover Record
        </p>

        <p
          className={`mt-1 text-xs font-bold uppercase tracking-[0.22em] ${
            future
              ? "text-red-400/80"
              : "text-yellow-300/80"
          }`}
        >
          Restricted
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   PUBLIC INFO
------------------------------------------------------- */

function PublicRecord({ description }) {
  return (
    <>
      <p className="text-[9px] uppercase tracking-[0.3em] text-yellow-300/50">
        Released Archive Information
      </p>

      <p className="mt-5 text-sm leading-7 text-white/70">
        {description}
      </p>

      <div className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-stone-300/35">
        <Clock3 size={14} />
        Yesterday collides with now
      </div>
    </>
  );
}

/* -------------------------------------------------------
   RESTRICTED INFO
------------------------------------------------------- */

function RestrictedRecord({ theme }) {
  const future = theme === "future";

  return (
    <>
      <div
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
          future
            ? "text-red-400/80"
            : "text-yellow-300/75"
        }`}
      >
        <ShieldAlert size={15} />
        Clearance Required
      </div>

      <div className="mt-7 space-y-3">
        <Redaction
          width="w-full"
          future={future}
        />

        <Redaction
          width="w-[86%]"
          future={future}
        />

        <Redaction
          width="w-[68%]"
          future={future}
        />

        <Redaction
          width="w-[92%]"
          future={future}
        />

        <Redaction
          width="w-[58%]"
          future={future}
        />
      </div>

      <p className="mt-7 text-xs leading-relaxed text-white/32">
        Narrative details remain sealed until the corresponding volume is
        authorized for public release.
      </p>

      <div
        className={`mt-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[9px] uppercase tracking-[0.24em] ${
          future
            ? "border-red-500/15 text-red-300/50"
            : "border-yellow-300/12 text-yellow-200/45"
        }`}
      >
        <Lock size={13} />
        Archive Locked
      </div>
    </>
  );
}

function Redaction({
  width,
  future = false,
}) {
  return (
    <div
      className={`h-[10px] rounded-sm ${width} ${
        future
          ? "bg-red-950/65 ring-1 ring-red-400/[0.04]"
          : "bg-black ring-1 ring-yellow-300/[0.04]"
      }`}
      aria-hidden="true"
    />
  );
}

/* -------------------------------------------------------
   CLASSIFIED WATERMARK
------------------------------------------------------- */

function ClassifiedWatermark({ theme }) {
  const future = theme === "future";

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <span
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-4xl font-black uppercase tracking-[0.24em] ${
          future
            ? "text-red-400/[0.02]"
            : "text-yellow-300/[0.018]"
        }`}
      >
        Classified
      </span>
    </div>
  );
}

/* -------------------------------------------------------
   THEME HELPERS
------------------------------------------------------- */

function getBookShell(theme) {
  if (theme === "past") {
    return "border-stone-300/12 bg-[#050505]";
  }

  if (theme === "present") {
    return "border-yellow-300/14 bg-[#050504]";
  }

  return "border-red-500/14 bg-[#060405]";
}

function getInfoSurface(theme) {
  if (theme === "past") {
    return "border-white/[0.08] bg-[#070707]";
  }

  if (theme === "present") {
    return "border-yellow-300/[0.08] bg-[#090806]";
  }

  return "border-red-500/[0.08] bg-[#080506]";
}

function getMetaColor(theme) {
  if (theme === "past") {
    return "text-stone-300/28";
  }

  if (theme === "present") {
    return "text-yellow-200/28";
  }

  return "text-red-300/30";
}

function getTemporalLabelColor(theme) {
  if (theme === "past") {
    return "text-stone-300/45";
  }

  if (theme === "present") {
    return "text-yellow-300/50";
  }

  return "text-red-400/45";
}

function getMainTitleColor(theme) {
  if (theme === "future") {
    return "text-red-400";
  }

  return "text-yellow-300";
}

function getSubtitleColor(theme) {
  if (theme === "past") {
    return "text-yellow-200/80";
  }

  if (theme === "present") {
    return "text-yellow-200/65";
  }

  return "text-red-300/55";
}

/* -------------------------------------------------------
   PAGE BACKGROUND
------------------------------------------------------- */

function TimeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* BASE */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#080705_0%,#12100c_48%,#090706_100%)]" />

      {/* CENTRAL AMBIENCE */}
      <div className="absolute left-1/2 top-[22%] h-[650px] w-[980px] -translate-x-1/2 rounded-full bg-yellow-300/[0.016] blur-3xl" />

      {/* PAST SIDE */}
      <div className="absolute -left-72 top-20 h-[680px] w-[680px] rounded-full border border-stone-200/[0.045]" />
      <div className="absolute -left-56 top-36 h-[540px] w-[540px] rounded-full border border-yellow-300/[0.035]" />

      <span className="absolute left-[3%] top-[18%] font-serif text-7xl text-stone-200/[0.025]">
        XII
      </span>

      <span className="absolute bottom-[12%] left-[5%] font-serif text-7xl text-stone-200/[0.02]">
        VI
      </span>

      {/* PRESENT */}
      <div className="absolute left-1/2 top-[10%] h-[80%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-yellow-300/[0.045] to-transparent" />

      {/* FUTURE SIDE */}
      <div className="absolute -right-72 bottom-[-120px] h-[700px] w-[700px] rounded-full border border-red-500/[0.04]" />

      <div className="absolute -right-56 bottom-[-40px] h-[540px] w-[540px] rounded-full border border-red-400/[0.025]" />

      <span className="absolute right-[5%] top-[20%] font-serif text-7xl text-red-400/[0.018]">
        III
      </span>

      <span className="absolute bottom-[10%] right-[6%] font-serif text-7xl text-red-400/[0.018]">
        IX
      </span>

      {/* FAINT TIMELINE */}
      <div className="absolute left-[17%] top-[18%] h-px w-[66%] bg-gradient-to-r from-stone-200/[0.025] via-yellow-300/[0.045] to-red-500/[0.025]" />
    </div>
  );
}