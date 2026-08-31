import React from "react";
import { Link } from "react-router-dom";

const CharacterFilters = ({
  searchTerm,
  setSearchTerm,
  roleFilter,
  setRoleFilter,
  divisionFilter,
  setDivisionFilter,
  suggested,
}) => (
  <div className="relative z-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4 mb-10">
    <div className="relative">
      <input
        type="text"
        placeholder="Search by name..."
        className="bg-black border border-yellow-500 text-yellow-300 rounded px-4 py-2 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {suggested.length > 0 && (
        <ul className="absolute w-full bg-zinc-900 border border-yellow-400 mt-1 rounded text-sm z-50">
          {suggested.map((char) => (
            <li key={char.slug} className="px-4 py-2 hover:bg-yellow-700/30">
              <Link to={`/characters/${char.slug}`}>{char.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>

    <select
      value={roleFilter}
      onChange={(e) => setRoleFilter(e.target.value)}
      className="bg-black border border-yellow-500 text-yellow-300 rounded px-4 py-2 w-full"
    >
      <option value="All">All Roles</option>
      <option value="Hero">Hero</option>
      <option value="Villain">Villain</option>
    </select>

    <select
      value={divisionFilter}
      onChange={(e) => setDivisionFilter(e.target.value)}
      className="bg-black border border-yellow-500 text-yellow-300 rounded px-4 py-2 w-full"
    >
      <option value="All">All Divisions</option>
      <option value="S.T.A.T.I.C.">S.T.A.T.I.C.</option>
      <option value="Unaffiliated">Unaffiliated</option>
      <option value="Aetherian">Aetherian</option>
      <option value="Iztan">Iztan</option>
      <option value="Civilian">Civilian</option>
    </select>
  </div>
);

export default CharacterFilters;
