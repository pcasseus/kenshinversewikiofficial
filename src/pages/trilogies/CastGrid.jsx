import CastCard from "./CastCard";

export default function CastGrid({ cast = [], blurred = false }) {
  if (!cast || cast.length === 0) {
    return (
      <div className="text-sm text-gray-400 italic text-center py-10">
        No characters available for this category yet.
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-x-8
        gap-y-10
        justify-items-start
      "
    >
      {cast.map((character) => (
        <CastCard
          key={character.slug || character.name}
          character={character}
          blurred={blurred}
        />
      ))}
    </div>
  );
}
