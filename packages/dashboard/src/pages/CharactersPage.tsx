import React from "react";
import Characters from "../components/Characters/Characters";
import { CharactersProvider } from "../contexts/characters";
import { CharactersFilterProvider } from "../contexts/CharactersFilterContext";

function CharactersPage() {
  return (
    <CharactersFilterProvider>
      <CharactersProvider>
        <Characters />
      </CharactersProvider>
    </CharactersFilterProvider>
  );
}

export default CharactersPage;
