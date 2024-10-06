import React, { useState } from "react";
import { useCharactersFilter } from "../../contexts/CharactersFilterContext";

const CharacterFilters: React.FC = () => {
  const {
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
    setPageSize,
  } = useCharactersFilter();

  // Comics, series, events, ve stories için placeholder veri
  const [comicInput, setComicInput] = useState<number | "">("");
  const [seriesInput, setSeriesInput] = useState<number | "">("");
  const [eventInput, setEventInput] = useState<number | "">("");
  const [storyInput, setStoryInput] = useState<number | "">("");

  const handleAddComic = () => {
    if (comicInput && !comics.includes(Number(comicInput))) {
      setComics([...comics, Number(comicInput)]);
      setComicInput("");
    }
  };

  const handleAddSeries = () => {
    if (seriesInput && !series.includes(Number(seriesInput))) {
      setSeries([...series, Number(seriesInput)]);
      setSeriesInput("");
    }
  };

  const handleAddEvent = () => {
    if (eventInput && !events.includes(Number(eventInput))) {
      setEvents([...events, Number(eventInput)]);
      setEventInput("");
    }
  };

  const handleAddStory = () => {
    if (storyInput && !stories.includes(Number(storyInput))) {
      setStories([...stories, Number(storyInput)]);
      setStoryInput("");
    }
  };

  return (
    <div>
      <h2 className="text-semibold text-lg bg-gray-100 p-2">Filters</h2>
      <div className="w-[320px]  flex flex-col gap-3 px-3">
        <label className="text-semibold">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block mb-2 border w-full h-12 rounded-md"
          />
        </label>

        <label className="text-semibold">
          Name Starts With:
          <input
            type="text"
            value={nameStartsWith}
            onChange={(e) => setNameStartsWith(e.target.value)}
            className="block mb-2 border w-full h-12 rounded-md"
          />
        </label>

        <label className="text-semibold">
          Modified Since:
          <input
            type="date"
            value={modifiedSince}
            onChange={(e) => setModifiedSince(e.target.value)}
            className="block mb-2 border w-full h-12 rounded-md"
          />
        </label>

        <div>
          <label className="text-semibold">
            Comics:
            <input
              type="number"
              value={comicInput}
              onChange={(e: any) => setComicInput(e.target.value)}
              className="block mb-1 border w-full h-12 rounded-md"
            />
            <button
              className="border p-1 bg-blue-500 text-white w-full"
              onClick={handleAddComic}
            >
              Add Comic
            </button>
          </label>
          <ul>
            {comics.map((comic: any) => (
              <li key={comic}>{comic}</li>
            ))}
          </ul>
        </div>

        <div>
          <label className="text-semibold">
            Series:
            <input
              type="number"
              value={seriesInput}
              onChange={(e: any) => setSeriesInput(e.target.value)}
              className="block mb-1 border w-full h-12 rounded-md"
            />
            <button
              className="border p-1 bg-blue-500 text-white w-full"
              onClick={handleAddSeries}
            >
              Add Series
            </button>
          </label>
          <ul>
            {series.map((serie: any) => (
              <li key={serie}>{serie}</li>
            ))}
          </ul>
        </div>

        <div>
          <label className="text-semibold">
            Events:
            <input
              type="number"
              value={eventInput}
              onChange={(e: any) => setEventInput(e.target.value)}
              className="block mb-1 border w-full h-12 rounded-md"
            />
            <button
              className="border p-1 bg-blue-500 text-white w-full"
              onClick={handleAddEvent}
            >
              Add Event
            </button>
          </label>
          <ul>
            {events.map((event: any) => (
              <li key={event}>{event}</li>
            ))}
          </ul>
        </div>

        <div>
          <label className="text-semibold">
            Stories:
            <input
              type="number"
              value={storyInput}
              onChange={(e: any) => setStoryInput(e.target.value)}
              className="block mb-1 border w-full h-12 rounded-md"
            />
            <button
              className="border p-1 bg-blue-500 text-white w-full"
              onClick={handleAddStory}
            >
              Add Story
            </button>
          </label>
          <ul>
            {stories.map((story: any) => (
              <li key={story}>{story}</li>
            ))}
          </ul>
        </div>

        <label className="text-semibold">
          Order By:
          <select
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
            className="block mb-2 border w-full h-12 rounded-md"
          >
            <option value="name">Name</option>
            <option value="modified">Modified</option>
            {/* Diğer sıralama seçeneklerini buraya ekleyebilirsin */}
          </select>
        </label>

        <label className="text-semibold">
          Page:
          <input
            type="number"
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
            className="block mb-2 border w-full h-12 rounded-md"
          />
        </label>

        <label className="text-semibold">
          Page Size:
          <input
            type="number"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="block mb-2 border w-full h-12 rounded-md"
          />
        </label>
      </div>
    </div>
  );
};

export default CharacterFilters;
