import React from "react";
import useCharacters from "../hooks/useCharacters"; 

const Tools = () => {
  const { characters, error } = useCharacters(); 
  {error && <p>Error: {error}</p>}
  
  return (
      <div className="text-center text-white">
        <h1>Tools</h1>
      <div>
        {characters && characters.map((character)=>(
            <p key={character.id}>{character.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Tools;
