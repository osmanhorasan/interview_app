import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Result } from "../../interfaces/characters.interface";
import { Link } from "@mui/material";

interface ICharacterCard extends Result {}

function CharacterCard({ character }: { character: Readonly<ICharacterCard> }) {
  const theme = useTheme();
  if (!character) return <>Error...</>;
  // Tarih nesnesine çevir
  const modified = new Date(character.modified);
  const formattedDate = modified.toLocaleDateString(); // Sadece tarihi alır
  return (
    <Card sx={{ display: "flex", justifyContent: "space-between" , width:"100%" , height:"100%"}}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6" className="!line-clamp-1" title={character.name}>
            <Link href={`/character/${character.id}`}>{character.name}</Link>
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {formattedDate}
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ color: "text.secondary" }}
            className="!line-clamp-3"
          >
            {character.description}
          </Typography>
        </CardContent>        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt="Live from space album cover"
        className="!aspect-square"
      />
    </Card>
  );
}

export default CharacterCard;
