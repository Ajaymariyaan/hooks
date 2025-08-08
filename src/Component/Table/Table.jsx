

import React, { useState, useEffect, useMemo,useRef } from "react";
import "./Table.css";

function Table() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");

  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(currentUrl);
        const data = await response.json();
        setPokemonData(data.results);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };

    fetchPokemonData();
  }, [currentUrl]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePokemonClick = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  const handleNextClick = () => {
    if (nextPageUrl) {
      setCurrentUrl(nextPageUrl);
      setSelectedPokemon(null);
    }
  };

  const handlePrevClick = () => {
    if (prevPageUrl) {
      setCurrentUrl(prevPageUrl);
      setSelectedPokemon(null);
    }
    // else (!prevPageUrl) 
    //   setNextPageUrl(nextPageUrl)

  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const filteredData = useMemo(() => {
    let data = [...pokemonData];

    if (debouncedSearchTerm) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }

    data.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return data;
  }, [pokemonData, debouncedSearchTerm, sortOrder]);

   const textRef = useRef()



    useEffect(() => {

        textRef.current.focus()

    },[])




  return (
    <div className="container">
      <h2 className="h2D">Pokemon List</h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
           ref={textRef}
          className="SearchBar"
          placeholder="Search Pokemon..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="columnTD">
        {filteredData.length > 0 ? (
          <div className="tableButton">
            <div>


              <table className="tableApi">
                <thead>
                  <tr>
                    <th className="th2">POKEMON
                    </th>
                    <th className="th1">URL  <div className="sortWordImg">
                      <div>
                        <button className="sortbtn" onClick={toggleSortOrder}>Sort</button>
                      </div>
                      <div className="sortImg">
                        <img className="sortImg" src="/Icon/sort.svg" alt="Sort image" onClick={toggleSortOrder} />
                      </div>

                    </div></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((pokemon, index) => (
                    <tr key={index}>
                      <td
                        className="tdD"
                        onClick={() => handlePokemonClick(pokemon.name)}
                      >
                        {pokemon.name}
                      </td>
                      <td
                        className="tdD"
                        onClick={() => handlePokemonClick(pokemon.name)}
                      >
                        {pokemon.url}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination-buttons" style={{ textAlign: "center", margin: "20px 0" }}>
              {prevPageUrl && (
                <button onClick={handlePrevClick} className="paginationBtn">
                  Previous
                </button>
              )}
              {nextPageUrl && (
                <button onClick={handleNextClick} className="paginationBtn">
                  Next
                </button>
              )}
            </div>
          </div>
        ) : (
          <marquee scrollamount="30">
            <p className="para">No Data Found</p>
          </marquee>
        )}

        {selectedPokemon && (
          <div className="pokemonDetails">
            <h3 className="h3D">{selectedPokemon.name}</h3>
            <div className="imgDiv">
              <img
                className="imgD"
                src={selectedPokemon.sprites.front_default}
                alt={selectedPokemon.name}
              />
            </div>
            <p className="paraApi">
              <strong>Height:</strong> {selectedPokemon.height} decimeters
            </p>
            <p className="paraApi">
              <strong>Weight:</strong> {selectedPokemon.weight} hectograms
            </p>
            <p className="paraApi">
              <strong>Types:</strong>{" "}
              {selectedPokemon.types.map((type) => type.type.name).join(", ")}

            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Table;
