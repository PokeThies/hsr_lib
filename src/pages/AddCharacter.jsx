import React from "react";
import { useState, useEffect } from "react";
import supabase from "../client/supabaseclient";

const AddCharacter = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, element, path, description, stars, HP, ATK, DEF, SPD } =
      character; // store data into array "character"

    const { data, error } = await supabase
      .from("Character") // insert data into supabase "Character"
      .insert([
        {
          name,
          element,
          path,
          description,
          rarity: stars,
          stats: ["HP: " + HP, "ATK: " + ATK, "DEF: " + DEF, "SPD: " + SPD],
        },
      ])
      .select();

    if (error) {
      alert("Failed to add character. Please try again.");
    } else {
      alert("Character added successfully!");
      setCharacter({
        // clear character after adding
        name: "",
        element: "",
        path: "",
        description: "",
        stars: "",
        HP: "",
        ATK: "",
        DEF: "",
        SPD: "",
      });
    }
  };

  const [character, setCharacter] = useState([
    {
      name: "",
      element: "",
      path: "",
      description: "",
      stars: "",
      HP: "",
      ATK: "",
      DEF: "",
      SPD: "",
    },
  ]);

  return (
    <div>
      <form className="p-8 space-y-4 rounded-lg shadow-md">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-white">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter character name"
            value={character.name}
            onChange={(e) =>
              setCharacter({ ...character, name: e.target.value })
            }
            className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="element" className="text-lg font-medium text-white">
            Element
          </label>
          <input
            id="element"
            type="text"
            name="element"
            placeholder="Enter element"
            value={character.element}
            onChange={(e) =>
              setCharacter({ ...character, element: e.target.value })
            }
            className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="path" className="text-lg font-medium text-white">
            Path
          </label>
          <input
            id="path"
            type="text"
            name="path"
            placeholder="Enter path"
            value={character.path}
            onChange={(e) =>
              setCharacter({ ...character, path: e.target.value })
            }
            className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-lg font-medium text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter character description"
            value={character.description}
            onChange={(e) =>
              setCharacter({ ...character, description: e.target.value })
            }
            className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="HP" className="text-lg font-medium text-white">
            HP
          </label>
          <input
            id="HP"
            type="number"
            name="HP"
            placeholder="Enter HP value"
            value={character.HP}
            onChange={(e) => setCharacter({ ...character, HP: e.target.value })}
            className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="DEF" className="text-lg font-medium text-white">
            DEF
          </label>
          <input
            id="DEF"
            type="number"
            name="DEF"
            placeholder="Enter DEF value"
            value={character.DEF}
            onChange={(e) =>
              setCharacter({ ...character, DEF: e.target.value })
            }
            className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="ATK" className="text-lg font-medium text-white">
            ATK
          </label>
          <input
            id="ATK"
            type="number"
            name="ATK"
            placeholder="Enter ATK value"
            value={character.ATK}
            onChange={(e) =>
              setCharacter({ ...character, ATK: e.target.value })
            }
            className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="SPD" className="text-lg font-medium text-white">
            SPD
          </label>
          <input
            id="SPD"
            type="number"
            name="SPD"
            placeholder="Enter SPD value"
            value={character.SPD}
            onChange={(e) =>
              setCharacter({ ...character, SPD: e.target.value })
            }
            className="p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCharacter;
