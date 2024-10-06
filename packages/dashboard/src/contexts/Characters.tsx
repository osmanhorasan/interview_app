import React, { createContext, useState, FC, ReactNode } from "react";
import { ICharactersRoot } from "../interfaces/characters.interface";

interface ICharactersContext {
  characters: ICharactersRoot;
  setCharacters: React.Dispatch<React.SetStateAction<ICharactersRoot>>;
}

const CharactersContext = createContext<ICharactersContext | undefined>(undefined);

const CharactersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<ICharactersRoot>({
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
    results: [],
  });

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersContext, CharactersProvider };
