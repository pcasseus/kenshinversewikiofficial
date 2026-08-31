import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
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
    <div className="w-full min-w-0">
      <div className="mx-auto w-full max-w-[1800px] px-3 pb-24 pt-5 sm:px-5 sm:pt-6 lg:px-6 lg:pt-7">
        {/* OPERATIVE HEADER */}
        <div className="mb-5 border-b border-green-700 pb-2 text-xs tracking-widest text-green-400 sm:text-sm">
          OPERATIVE ID: {character.id || "#000"} — CLASS:{" "}
          {character.class || "Unclassified"}
        </div>

        {/* BIO / HEADER */}
        <ProfileHeader character={character} />

        {/* BOOK FILTERS */}
        <div className="my-10 flex flex-wrap gap-3 sm:gap-4">
          {[1, 2, 3].map((book) => (
            <button
              key={book}
              type="button"
              onClick={() => toggleBook(book)}
              className={`rounded border px-4 py-2 text-xs font-bold tracking-wider transition sm:text-sm ${
                selectedBooks.includes(book)
                  ? "border-green-400 bg-green-600 text-white"
                  : "border-red-500 bg-red-700 text-white"
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

        {/* RELATIONSHIPS + UNIFORMS */}
        <section className="mb-8 mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <RelationshipsSection
              character={character}
              setSelectedRelation={setSelectedRelation}
            />
          </div>

          <div className="min-w-0">
            <UniformsSection
              character={character}
              setSelectedItem={setSelectedItem}
            />
          </div>
        </section>

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
            <p className="mb-4 text-yellow-300">
              {selectedTrait.subtitle}
            </p>

            {selectedTrait.entries.map((trait, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="mb-1 font-bold uppercase tracking-wider text-lime-300">
                  {trait.name}
                </h4>
                <p className="text-sm text-gray-300">
                  {trait.description}
                </p>
              </div>
            ))}
          </Modal>
        )}
      </div>

      <Footer characterName={character.name} />
    </div>
  );
};

export default ProfileBody;