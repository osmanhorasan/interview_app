import React, { useEffect } from "react";
import getCharacters from "../../services/marvel.service";

function Characters() {
  useEffect(() => {
    const fetchReadList = async () => {
      const characters = await getCharacters();
      console.log("characters", characters);
    };
    fetchReadList();
  }, []);

  
  return <div>
    
  </div>;
}

export default Characters;
