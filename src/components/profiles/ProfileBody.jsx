import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import PsychEvaluationSection from "./PsychEvaluationSection";
import ThreatLevelSection from "./ThreatLevelSection";
import AbilitiesSection from "./AbilitiesSection";
import WeaknessesSection from "./WeaknessesSection";
import RelationshipsSection from "./RelationshipsSection";
import UniformsSection from "./UniformsSection";
import FeatsSection from "./FeatsSection";
import Footer from "./Footer";
import Modal from "./Modal";

const ProfileBody = ({
  character,
  subVisible,
  toggleSub,
  selectedAbility,
  setSelectedAbility,
  setSelectedRelation,
  setSelectedItem,
  selectedTrait,
  setSelectedTrait,
  replayIntro,
}) => {
  const [selectedBooks, setSelectedBooks] = useState([1]);

  const toggleBook = (book) => {
    setSelectedBooks((prev) =>
      prev.includes(book)
        ? prev.filter((b) => b !== book)
        : [...prev, book]
    );
  };

  return (
    <>
      {/* OPERATIVE HEADER */}
      <div className="text-green-400 tracking-widest text-sm mb-4 border-b border-green-700 pb-2">
        OPERATIVE ID: {character.id || "#000"} — CLASS:{" "}
        {character.class || "Unclassified"}
      </div>

      {/* BIO / HEADER */}
      <ProfileHeader character={character} />

      {/* BOOK FILTERS */}
      <div className="flex gap-4 my-10">
        {[1, 2, 3].map((book) => (
          <button
            key={book}
            onClick={() => toggleBook(book)}
            className={`px-4 py-1 border rounded text-sm font-bold tracking-wider transition ${
              selectedBooks.includes(book)
                ? "bg-green-600 text-white border-green-400"
                : "bg-red-700 text-white border-red-500"
            }`}
          >
            Book {book}
          </button>
        ))}
      </div>

      {/* THREAT LEVEL */}
      <ThreatLevelSection
        character={character}
        selectedBooks={selectedBooks}
      />

      {/* POWERS & ABILITIES */}
      <AbilitiesSection
        character={character}
        subVisible={subVisible}
        toggleSub={toggleSub}
        setSelectedAbility={setSelectedAbility}
        selectedBooks={selectedBooks}
      />

      {/* WEAKNESSES */}
      <WeaknessesSection
        character={character}
        setSelectedAbility={setSelectedAbility}
        subVisible={subVisible}
        toggleSub={toggleSub}
        selectedBooks={selectedBooks}
      />

      {/* FEATS */}
      <FeatsSection character={character} />

      {/* RELATIONSHIPS + UNIFORMS — FIXED ALIGNMENT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 mb-24">
        <div className="h-full">
          <RelationshipsSection
            character={character}
            setSelectedRelation={setSelectedRelation}
          />
        </div>

        <div className="h-full">
          <UniformsSection
            character={character}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </section>

      {/* FOOTER */}
      <Footer characterName={character.name} />

      {/* ABILITY MODAL */}
      {selectedAbility && (
        <Modal
          title={selectedAbility.name}
          tabbed={!!selectedAbility.evolved}
          baseContent={selectedAbility.description}
          evolvedContent={selectedAbility.evolved}
          selectedBooks={selectedBooks}
          onClose={() => setSelectedAbility(null)}
        >
          {!selectedAbility.evolved && (
            <p className="text-sm text-gray-300">
              {selectedAbility.description}
            </p>
          )}
        </Modal>
      )}

      {/* TRAITS MODAL */}
      {selectedTrait && (
        <Modal
          title={selectedTrait.title}
          onClose={() => setSelectedTrait(null)}
        >
          <p className="text-yellow-300 mb-4">
            {selectedTrait.subtitle}
          </p>

          {selectedTrait.entries.map((trait, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="text-lime-300 font-bold uppercase tracking-wider mb-1">
                {trait.name}
              </h4>
              <p className="text-sm text-gray-300">
                {trait.description}
              </p>
            </div>
          ))}
        </Modal>
      )}
    </>
  );
};

export default ProfileBody;
