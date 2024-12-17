import { useState, useEffect } from "react";
import supabase from "../client/supabaseclient";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Character")
        .select("*");

      if (error) {
        setError(error.message); 
      } else {
        setCharacters(data);
      }
    };

    fetchData();
  }, []);

  return { characters, error };
};

export default useCharacters;
