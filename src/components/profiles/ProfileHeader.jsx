import React, { useMemo, useState } from "react";
import PsychEvaluationSection from "./PsychEvaluationSection";

const ProfileHeader = ({ character }) => {
  if (!character) return null;

  const visuals = character?.stats?.bookVisuals || {};
  const books = Object.keys(visuals);

  const [activeBook, setActiveBook] = useState(books[0] || null);
  const [flipped, setFlipped] = useState(false);

  const data = useMemo(() => {
    if (!activeBook) return null;
    return visuals[activeBook];
  }, [activeBook, visuals]);

  const aliases = character.aliases || [];

  return (
    <section className="mb-16 sm:mb-20 lg:mb-24">
      <div
        className="
          grid
          grid-cols-1
          items-start
          gap-8

          md:grid-cols-[280px_minmax(0,1fr)]
          md:gap-8

          lg:grid-cols-[320px_minmax(0,1fr)]
          lg:gap-10

          xl:grid-cols-[380px_minmax(0,1fr)]
          xl:gap-12
        "
      >
        {/* LEFT COLUMN */}
        <aside className="min-w-0 space-y-4">
          <button
            type="button"
            onClick={() => setFlipped((prev) => !prev)}
            className="
              w-full
              rounded
              border
              border-yellow-500
              py-2
              text-xs
              tracking-widest
              text-yellow-400
              transition
              hover:bg-yellow-500
              hover:text-black
            "
          >
            {flipped
              ? "VIEW LIVE-ACTION FANCAST"
              : "VIEW BOOK VISUAL IDENTIFIER"}
          </button>

          {/* FLIP CARD */}
          <div
            className="relative w-full"
            style={{ perspective: "1400px" }}
          >
            <div
              className="relative transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)",
              }}
            >
              {/* FRONT */}
              <div
                className="
                  rounded-md
                  border
                  border-yellow-500
                  bg-black/40
                  p-3
                "
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="
                    block
                    h-auto
                    w-full
                    rounded
                    object-cover
                  "
                />

                {character.fancast?.actor && (
                  <p
                    className="
                      mt-3
                      text-center
                      text-xs
                      uppercase
                      tracking-widest
                      text-yellow-400
                    "
                  >
                    Live-Action Fancast: {character.fancast.actor}
                  </p>
                )}
              </div>

              {/* BACK */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  rounded-md
                  border
                  border-green-500
                  bg-black/95
                  p-4
                "
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h3
                  className="
                    mb-3
                    text-xs
                    uppercase
                    tracking-widest
                    text-green-400
                  "
                >
                  Book Visual Identifier
                </h3>

                {/* BOOK TOGGLES */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {books.map((book) => (
                    <button
                      key={book}
                      type="button"
                      onClick={() => setActiveBook(book)}
                      className={`
                        rounded
                        border
                        px-3
                        py-1
                        text-xs
                        tracking-widest
                        ${
                          activeBook === book
                            ? "border-green-400 bg-green-900/30 text-green-300"
                            : "border-zinc-600 text-zinc-400"
                        }
                      `}
                    >
                      Book {book}
                    </button>
                  ))}
                </div>

                {/* VISUAL DATA */}
                {data && (
                  <div
                    className="
                      min-h-0
                      flex-1
                      space-y-4
                      overflow-y-auto
                      pr-2
                      font-mono
                      text-sm
                      text-gray-300
                    "
                  >
                    {/* CORE VISUAL DATA */}
                    <div className="space-y-1">
                      <p>
                        <span className="text-green-400">
                          Height:
                        </span>{" "}
                        {data.height}
                      </p>

                      <p>
                        <span className="text-green-400">
                          Physique:
                        </span>{" "}
                        {data.physique}
                      </p>

                      <p>
                        <span className="text-green-400">
                          Eyes:
                        </span>{" "}
                        {data.eyes}
                      </p>

                      <p>
                        <span className="text-green-400">
                          Skin Tone:
                        </span>{" "}
                        {data.skinTone}
                      </p>
                    </div>

                    {/* HAIR */}
                    {data.hair && (
                      <div className="space-y-3 border-t border-green-400/30 pt-3">
                        <h4 className="text-xs uppercase tracking-widest text-green-400">
                          Hair
                        </h4>

                        {typeof data.hair === "string" && (
                          <p className="text-xs leading-relaxed text-gray-300">
                            {data.hair}
                          </p>
                        )}

                        {typeof data.hair === "object" &&
                          !data.hair.style &&
                          Object.values(data.hair).map(
                            (phase, index) => (
                              <div
                                key={index}
                                className="
                                  rounded
                                  border
                                  border-green-400/20
                                  bg-black/40
                                  p-2
                                "
                              >
                                <p
                                  className="
                                    mb-1
                                    text-xs
                                    uppercase
                                    tracking-widest
                                    text-green-300
                                  "
                                >
                                  {phase.label}
                                </p>

                                <p className="text-xs leading-relaxed text-gray-300">
                                  {phase.style}
                                </p>
                              </div>
                            )
                          )}

                        {data.hair.style && (
                          <div
                            className="
                              rounded
                              border
                              border-green-400/20
                              bg-black/40
                              p-2
                            "
                          >
                            <p className="text-xs leading-relaxed text-gray-300">
                              {data.hair.style}
                              {data.hair.color
                                ? `, ${data.hair.color}`
                                : ""}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* FACIAL HAIR */}
                    {data.facialHair && (
                      <div className="border-t border-green-400/30 pt-3">
                        <h4
                          className="
                            mb-1
                            text-xs
                            uppercase
                            tracking-widest
                            text-green-400
                          "
                        >
                          Facial Hair
                        </h4>

                        <p className="text-xs leading-relaxed text-gray-300">
                          {data.facialHair}
                        </p>
                      </div>
                    )}

                    {/* TATTOOS */}
                    {(data.tattoo ||
                      Array.isArray(data.tattoos)) && (
                      <div className="border-t border-green-400/30 pt-3">
                        <h4
                          className="
                            mb-2
                            text-xs
                            uppercase
                            tracking-widest
                            text-green-400
                          "
                        >
                          Tattoo Record
                        </h4>

                        {typeof data.tattoo === "string" && (
                          <p className="text-xs leading-relaxed text-gray-300">
                            {data.tattoo}
                          </p>
                        )}

                        {Array.isArray(data.tattoos) && (
                          <ul className="space-y-2 text-xs leading-relaxed">
                            {data.tattoos.map(
                              (tattoo, index) => (
                                <li key={index}>
                                  {tattoo}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* SCARS */}
                    {Array.isArray(data.scars) &&
                      data.scars.length > 0 && (
                        <div className="border-t border-green-400/30 pt-3">
                          <h4
                            className="
                              mb-2
                              text-xs
                              uppercase
                              tracking-widest
                              text-green-400
                            "
                          >
                            Scarring Record
                          </h4>

                          <ul className="space-y-2 text-xs leading-relaxed">
                            {data.scars.map((scar) => (
                              <li key={scar.id}>
                                <span className="text-green-300">
                                  {scar.location}:
                                </span>{" "}
                                {scar.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FANCAST NOTICE */}
          {character.fancast?.note && (
            <div
              className="
                rounded
                border
                border-zinc-800
                bg-black/50
                px-3
                py-2
                text-[11px]
                leading-relaxed
                text-gray-500
              "
            >
              <span
                className="
                  mb-1
                  block
                  uppercase
                  tracking-widest
                  text-yellow-400
                "
              >
                Fancast Notice
              </span>

              {character.fancast.note}
            </div>
          )}
        </aside>

        {/* RIGHT COLUMN */}
        <main className="min-w-0 space-y-6 sm:space-y-8">
          {/* NAME */}
          <div className="min-w-0">
            <h1
              className="
                break-words
                text-2xl
                font-bold
                uppercase
                leading-tight
                tracking-widest
                text-yellow-400

                sm:text-3xl
                lg:text-4xl
              "
            >
              {character.name}
            </h1>

            <div
              className="
                mt-1
                break-words
                text-xs
                uppercase
                tracking-widest
                text-zinc-400
              "
            >
              {aliases.length
                ? aliases.join(" • ")
                : "No known aliases on record"}
            </div>
          </div>

          {/* BIOGRAPHY */}
          <div
            className="
              relative
              min-w-0
              overflow-hidden
              rounded-lg
              border
              border-yellow-400
              bg-gradient-to-b
              from-black
              to-zinc-900
              shadow-inner
            "
          >
            <div
              className="
                absolute
                left-0
                top-0
                rounded-br
                bg-yellow-400
                px-3
                py-1
                text-[10px]
                font-bold
                tracking-widest
                text-black

                sm:px-4
                sm:text-xs
              "
            >
              BIOGRAPHY_LOG // ORIGIN
            </div>

            <div
              className="
                px-4
                pb-4
                pt-10
                font-mono
                text-sm
                leading-relaxed
                text-gray-200

                md:max-h-[320px]
                md:overflow-y-auto

                sm:px-5
              "
            >
              {character.bio}
            </div>

            <div
              className="
                flex
                flex-col
                gap-1
                border-t
                border-yellow-400/40
                px-4
                py-3
                text-xs
                text-zinc-400

                sm:flex-row
                sm:justify-between
                sm:px-5
              "
            >
              <span>
                <span className="text-yellow-400">
                  Born:
                </span>{" "}
                {character.birthDate || "Classified"}
              </span>

              <span>
                <span className="text-yellow-400">
                  Origin:
                </span>{" "}
                {character.stats?.base?.placeOfBirth ||
                  "Unknown"}
              </span>
            </div>
          </div>

          <PsychEvaluationSection character={character} />
        </main>
      </div>
    </section>
  );
};

export default ProfileHeader;