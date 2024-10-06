// src/services/marvel.service.ts

import axios from "axios";
import { ICharactersRoot } from "../interfaces/characters.interface";

// Karakterleri almak için parametreler tiplerini tanımlıyoruz
interface ICharacterParams {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string; // Tarih formatı: YYYY-MM-DD
  comics?: number[];
  series?: number[];
  events?: number[];
  stories?: number[];
  orderBy?: string; // Örnek: "name" veya "-modified"
  limit?: number; // Varsayılan: 20
  offset?: number;
}

// Karakterleri çekmek için genişletilmiş fonksiyon
const getCharacters = async (params: ICharacterParams = {}): Promise<ICharactersRoot> => {
  const {
    name,
    nameStartsWith,
    modifiedSince,
    comics,
    series,
    events,
    stories,
    orderBy,
    limit = 20, // Varsayılan limit 20 olarak ayarlanmış
    offset = 0
  } = params;

  // Query parametrelerini oluşturuyoruz
  const queryParams = new URLSearchParams();
  
  if (name) queryParams.append("name", name);
  if (nameStartsWith) queryParams.append("nameStartsWith", nameStartsWith);
  if (modifiedSince) queryParams.append("modifiedSince", modifiedSince);
  if (comics && comics.length > 0) queryParams.append("comics", comics.join(",")); // Dizi boş değilse ekle
  if (series && series.length > 0) queryParams.append("series", series.join(",")); // Dizi boş değilse ekle
  if (events && events.length > 0) queryParams.append("events", events.join(",")); // Dizi boş değilse ekle
  if (stories && stories.length > 0) queryParams.append("stories", stories.join(",")); // Dizi boş değilse ekle
  if (orderBy) queryParams.append("orderBy", orderBy);
  
  // Limit ve offset ekle
  queryParams.append("limit", limit.toString());
  queryParams.append("offset", offset.toString());
  
  // API anahtarını ekle
  queryParams.append("apikey", process.env.MARVEL_API_PUBLIC_KEY || "");

  const res = await axios(`https://gateway.marvel.com:443/v1/public/characters?${queryParams.toString()}`);
  return res.data.data;
}

export default getCharacters;
