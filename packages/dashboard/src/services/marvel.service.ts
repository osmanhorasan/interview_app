import axios from "axios"
import { ICharactersRoot } from "../interfaces/characters.interface"

const getCharacters = async (): Promise<ICharactersRoot> => {
    const res = await axios(`https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.MARVEL_API_PUBLIC_KEY}`)
    return res.data.data
}
export default getCharacters