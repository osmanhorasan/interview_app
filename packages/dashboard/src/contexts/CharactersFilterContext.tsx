// src/contexts/CharactersFilterContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ICharacterFilter {
  name: string;
  nameStartsWith: string;
  modifiedSince: string;
  comics: number[];
  series: number[];
  events: number[];
  stories: number[];
  orderBy: string;
  page: number;
  pageSize: number;
  setName: (name: string) => void;
  setNameStartsWith: (name: string) => void;
  setModifiedSince: (date: string) => void;
  setComics: (comics: number[]) => void;
  setSeries: (series: number[]) => void;
  setEvents: (events: number[]) => void;
  setStories: (stories: number[]) => void;
  setOrderBy: (order: string) => void;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
}

const CharactersFilterContext = createContext<ICharacterFilter | undefined>(undefined);

export const useCharactersFilter = () => {
  const context = useContext(CharactersFilterContext);
  if (!context) {
    throw new Error('useCharactersFilter must be used within a CharactersFilterProvider');
  }
  return context;
};

export const CharactersFilterProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>('');
  const [nameStartsWith, setNameStartsWith] = useState<string>('');
  const [modifiedSince, setModifiedSince] = useState<string>('');
  const [comics, setComics] = useState<number[]>([]);
  const [series, setSeries] = useState<number[]>([]);
  const [events, setEvents] = useState<number[]>([]);
  const [stories, setStories] = useState<number[]>([]);
  const [orderBy, setOrderBy] = useState<string>('name'); // Varsayılan sıralama
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);

  return (
    <CharactersFilterContext.Provider value={{
      name,
      nameStartsWith,
      modifiedSince,
      comics,
      series,
      events,
      stories,
      orderBy,
      page,
      pageSize,
      setName,
      setNameStartsWith,
      setModifiedSince,
      setComics,
      setSeries,
      setEvents,
      setStories,
      setOrderBy,
      setPage,
      setPageSize
    }}>
      {children}
    </CharactersFilterContext.Provider>
  );
};
