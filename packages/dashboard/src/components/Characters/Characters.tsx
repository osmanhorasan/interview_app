import React, { useContext, useEffect, useState } from "react";
import getCharacters from "../../services/marvel.service";
import { useCharactersFilter } from "../../contexts/CharactersFilterContext"; // Yeni filtre context'ini ekliyoruz
import Grid from "@mui/material/Grid2";
import CharacterCard from "./CharacterCard";
import Pagination from "@mui/material/Pagination"; // MUI Pagination bileşeni
import { TextField, Button, Box, Drawer } from "@mui/material"; // Giriş ve Buton için MUI bileşenleri
import CharacterFilters from "./CharacterFilters";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";
import { CharactersContext } from "../../contexts/characters";

function Characters() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const context = useContext(CharactersContext);

  // CharactersFilterContext'ten gelen değerler
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

  const [loading, setLoading] = useState(true); // Yükleniyor durumu

  if (!context) {
    return <div>Loading characters...</div>;
  }

  const { characters, setCharacters } = context;

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await getCharacters({
        limit: pageSize,
        offset: (page - 1) * pageSize,
        nameStartsWith, // İsim filtresini ekledik
      });
      if (res) {
        setCharacters(res);
      }
      setLoading(false);
    };

    fetchCharacters();
  }, [
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
    nameStartsWith,
    setCharacters,
  ]); // Burada filtre değerlerini ekledik

  const handleSearch = () => {
    setPage(1); // Arama yapıldığında sayfayı 1'e sıfırla
  };

  return (
    <div className="flex flex-col gap-5">
      <Box display="flex" justifyContent="space-between">
        <input
          value={nameStartsWith}
          onChange={(e) => setNameStartsWith(e.target.value)}
          placeholder={`Marvel Karakterlerinde Arama Yapınız... ${characters.total} Marvel Karakteri`}
          className="w-full rounded-s-md h-14 px-5"
        />
        <Button
          className="!rounded-e-md"
          variant="contained"
          color="primary"
          onClick={handleSearch}
        >
          Ara
        </Button>
        {/* Drawer islemleri */}
        {open ? (
          <MdFilterAltOff onClick={toggleDrawer(false)} size={48} />
        ) : (
          <MdFilterAlt onClick={toggleDrawer(true)} size={48} />
        )}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <CharacterFilters />
        </Drawer>
      </Box>
      {loading ? (
        <div>Loading characters...</div>
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Box>Toplam Marverl Karakteri : {characters.total}</Box>
            </Grid>
            {characters.results.map((character) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3,
                }}
                key={character.id}
              >
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>
          <Box className="bg-white p-2 rounded-md">
            <Pagination
              count={Math.ceil(characters.total / pageSize)} // Toplam sayfa sayısını hesapla
              page={page}
              onChange={(event, value) => setPage(value)} // Sayfa değişiminde durumu güncelle
              color="primary"
              variant="text"
              shape="rounded"
              className="w-full"
            />
          </Box>
        </>
      )}
    </div>
  );
}

export default Characters;
