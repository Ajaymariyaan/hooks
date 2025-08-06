// import React, { useState, useEffect } from "react";
// import "./Table.css"

// const Table = () => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); 

//   useEffect(() => {
    
//     const fetchPokemonData = async () => {
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//       const data = await response.json();
//       setPokemonData(data.results);  
//     };

//     fetchPokemonData();  
//   }, []);  


 
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
    

//   };


//   const filteredData = pokemonData.filter((pokemon) =>
//     pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) 
//   );

//   return (
//     <div>
//       <h2 className="h2D">Pokemon List</h2>
      
    
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input type="text"  className="SearchBar" placeholder="Search Pokemon..." value={searchTerm} onChange={handleSearch}
      
//         />
//       </div>

    
//       {filteredData.length > 0 ? (
//         <table className="tableApi">
//           <thead>
//             <tr>
//               <th className="th1">Name</th>
//               <th className="th1">URL</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((pokemon, index) => (
//               <tr key={index}>
//                 <td className="tdD">
                
//                   <a href={pokemon.url} target="_blank" rel="from Api">
//                     {pokemon.name}
//                   </a>
//                 </td>
//                 <td className="tdD">
                  
//                   <a href={pokemon.url} target="_blank" rel="from Api">
//                     {pokemon.url}
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="para">No Data Found </p> 
//       )}
//     </div>
//   );
// };

// export default Table;




// // import React, { useState, useEffect } from "react";
// // import "./Table.css";

// // function Table() {
// //   const [pokemonData, setPokemonData] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); 

// //   useEffect(() => {
// //     const fetchPokemonData = async () => {
// //       const response = await fetch("https://pokeapi.co/api/v2/pokemon");
// //       const data = await response.json();
// //       setPokemonData(data.results);
// //     };


// //     fetchPokemonData();
// //   }, []);

// //   useEffect(() => {
    
// //     const handler = setTimeout(() => {
// //       setDebouncedSearchTerm(searchTerm);
// //     }, 3000); 
// //     // return () => {
// //     //   clearTimeout(handler);
// //     // };
// //   }, [searchTerm]); 

// //   const handleSearch = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const filteredData = pokemonData.filter((pokemon) =>
// //     pokemon.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
// //   );
  
// //   // const handleClickApi=(url)=>{
// //   //   axios.get(url)
// //   //   .then(res=>setSearchTerm(res.setDebouncedSearchTerm))
// //   //   .catch(err=>console.log(err))
// //   // }

// //   return (
// //     <div>
// //       <h2 className="h2D">Pokemon List</h2>

// //       <div style={{ textAlign: "center", marginBottom: "20px" }}>
// //         <input
// //           type="text"
// //           className="SearchBar"
// //           placeholder="Search Pokemon..."
// //           value={searchTerm}
// //           onChange={handleSearch}
// //         />
// //       </div>

// //       {filteredData.length > 0 ? (
// //         <table className="tableApi">
// //           <thead>
// //             <tr>
// //               <th className="th1">Name</th>
// //               <th className="th1">URL</th>
// //               {/* <th className="th1">Button</th> */}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {filteredData.map((pokemon, index) => (
// //               <tr key={index}>
// //                 <td className="tdD">
// //                   <a href={pokemon.url} target="_blank" rel="from Api">
// //                     {pokemon.name}
// //                   </a>
// //                 </td>
// //                 <td className="tdD">
// //                   <a href={pokemon.url} target="_blank" rel="from Api" >
// //                     {pokemon.url} 
// //                   </a>
// //                 </td>
// //                 {/* <td className="tdD"><button onClick={()=>handleClickApi(postMessage.url)}>click me </button></td> */}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       ) : (
// //         <p className="para">No Data Found </p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Table;





// import React, { useState, useEffect } from "react";
// import "./Table.css";

// function Table() {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); 
//   const [selectedPokemon, setSelectedPokemon] = useState(null); // state to hold selected pokemon details

//   // Fetch the list of Pokémon
//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//         const data = await response.json();
//         setPokemonData(data.results); // Store Pokémon list in state
//       } catch (error) {
//         console.error("Error fetching Pokémon list:", error);
//       }
//     };

//     fetchPokemonData();
//   }, []);

//   // Debouncing search term to optimize search input
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearchTerm(searchTerm);
//     }, 300); // 300ms debounce time for better performance
//     return () => clearTimeout(handler);
//   }, [searchTerm]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value); // Update search term as user types
//   };

//   const handlePokemonClick = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setSelectedPokemon(data); 
//     } catch (error) {
//       console.error("Error fetching Pokémon details:", error);
//     }
//   };

  
//   const filteredData = pokemonData.filter((pokemon) =>
//     pokemon.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h2 className="h2D">Pokemon List</h2>

//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           className="SearchBar"
//           placeholder="Search Pokemon..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       {filteredData.length > 0 ? (
//         <table className="tableApi">
//           <thead>
//             <tr>
//               <th className="th1">Name</th>
//               <th className="th1">URL</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((pokemon, index) => (
//               <tr key={index}>
//                 <td className="tdD" onClick={() => handlePokemonClick(pokemon.url)} 
                  
//                 >
//                   {pokemon.name}
//                 </td>
//                 <td className="tdD" onClick={() => handlePokemonClick(pokemon.url)} >{pokemon.url} </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="para">No Data Found</p>
//       )}

//       {/* Display Pokémon details below the table */}
//       {selectedPokemon && (
//         <div className="pokemonDetails">
//           <h3>{selectedPokemon.name}</h3>
//           <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
//           <p><strong>Height:</strong> {selectedPokemon.height} decimeters</p>
//           <p><strong>Weight:</strong> {selectedPokemon.weight} hectograms</p>
//           <p><strong>Types:</strong> {selectedPokemon.types.map((type) => type.type.name).join(", ")}</p>
//           {/* Add more details as needed */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Table;



      
// import React, { useState, useEffect, useMemo } from "react";
// import "./Table.css";

// function Table() {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
//   const [selectedPokemon, setSelectedPokemon] = useState(null);

//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//         // https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302%22
//         const data = await response.json();
//         setPokemonData(data.results);
//       } catch (error) {
//         console.error("Error fetching Pokemon list:", error);
//       }
//     };

//     fetchPokemonData();
//   }, []);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearchTerm(searchTerm);
//     }, 1000);
//     return () => clearTimeout(handler);
//   }, [searchTerm]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handlePokemonClick = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setSelectedPokemon(data);
//     } catch (error) {
//       console.error("Error fetching Pokemon details:", error);
//     }
//   };
//   const filteredData = useMemo(() => {
   
//     if (!debouncedSearchTerm) {
//       return pokemonData;
//     }
//     return pokemonData.filter(item =>
//       item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
//     );
//   }, [pokemonData, debouncedSearchTerm]);


//   // const filteredData = pokemonData.filter((pokemon) =>
//   //   pokemon.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
//   // ); 
//   /*
//   const filteredData = useMemo(() => {
//   if (searchCache.current[debouncedSearchTerm]) {
//     return searchCache.current[debouncedSearchTerm];
//   }

//   const result = pokemonData.filter(item =>
//     item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
//   );

//   searchCache.current[debouncedSearchTerm] = result;

//   return result;
// }, [pokemonData, debouncedSearchTerm]); */

//     // const handleNextClick = async () => {
//     //     if (!nextPageUrl) return; // Prevent fetching if no next page exists

//     //     try {
//     //         const response = await fetch(nextPageUrl);
//     //         const result = await response.json();
//     //         setData(prevData => [...prevData, ...result.data]); // Append new data
//     //         setNextPageUrl(result.next); // Update with the new 'next' URL
//     //     } catch (error) {
//     //         console.error("Error fetching next page:", error);
//     //     }
//     // };

//   return (
//     <div className="container">
//       <h2 className="h2D">Pokemon List</h2>

//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           className="SearchBar"
//           placeholder="Search Pokemon..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>
//       <div className="columnTD">

//         {filteredData.length > 0 ? (
//           <div>
//             <table className="tableApi">
//               <thead>
//                 <tr>
//                   <th className="th1"> POKEMON NAME</th>
//                   <th className="th1">URL</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredData.map((pokemon, index) => (
//                   <tr key={index}>
//                     <td className="tdD" onClick={() => handlePokemonClick(pokemon.url)}

//                     >
//                       {pokemon.name}
//                     </td>
//                     <td className="tdD" onClick={() => handlePokemonClick(pokemon.url)} >{pokemon.url} </td>
                    
//                   </tr>
                  
//                 ))}
//               </tbody>
            
//             </table>
//             {/* <button>next </button>
//              */}

//               {/* {nextPageUrl && ( // Only show button if there's a next page
//                 <button onClick={handleNextClick}>Next 20 Elements</button>
//             )} */}
//           </div>
//         ) : (
          
//            <marquee scrollamount="30">
//             <p className="para">No Data Found</p>
//             </marquee>
//         )}


//         {selectedPokemon && (

//           <div className="pokemonDetails">
//             <h3 className="h3D">{selectedPokemon.name}</h3>
//             <div className="imgDiv"><img className="imgD" src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} /></div>
//             <p className="paraApi"><strong>Height:</strong> {selectedPokemon.height} decimeters</p>
//             <p className="paraApi"><strong>Weight:</strong> {selectedPokemon.weight} hectograms</p>
//             <p className="paraApi"><strong>Types:</strong>   {selectedPokemon.types.map((type) => type.type.name).join(", ")}</p>

//           </div>

//         )}
     

//       </div>
//     </div>
//   );
// }

// export default Table;










// import React, { useState, useEffect, useMemo } from "react";
// import "./Table.css";

// function Table() {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
//   const [selectedPokemon, setSelectedPokemon] = useState(null);
//   const [nextPageUrl, setNextPageUrl] = useState(null);
//   const [prevPageUrl, setPrevPageUrl] = useState(null);
//   const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");

//   // Fetch Pokémon list
//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       try {
//         const response = await fetch(currentUrl);
//         const data = await response.json();
//         setPokemonData(data.results);
//         setNextPageUrl(data.next);
//         setPrevPageUrl(data.previous);
//       } catch (error) {
//         console.error("Error fetching Pokémon list:", error);
//       }
//     };

//     fetchPokemonData();
//   }, [currentUrl]);

 
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearchTerm(searchTerm);
//     }, 1000);
//     return () => clearTimeout(handler);
//   }, [searchTerm]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handlePokemonClick = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setSelectedPokemon(data);
//     } catch (error) {
//       console.error("Error fetching Pokémon details:", error);
//     }
//   };

//   const handleNextClick = () => {
//     if (nextPageUrl) {
//       setCurrentUrl(nextPageUrl);
//       setSelectedPokemon(null);
//     }
//   };

//   const handlePrevClick = () => {
//     if (prevPageUrl) {
//       setCurrentUrl(prevPageUrl);
//       setSelectedPokemon(null);
//     }
//   };

//   const filteredData = useMemo(() => {
//     if (!debouncedSearchTerm) {
//       return pokemonData;
//     }
//     return pokemonData.filter((item) =>
//       item.name.toLowerCase().toSort().includes(debouncedSearchTerm.toLowerCase())
//     );
//   }, [pokemonData, debouncedSearchTerm]);

//   return (
//     <div className="container">
//       <h2 className="h2D">Pokemon List</h2>

//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           className="SearchBar"
//           placeholder="Search Pokemon..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       <div className="columnTD">
//         {filteredData.length > 0 ? (

//           <div className="tableButton">
//             <div>
//               <table className="tableApi">
//                 <thead>
//                   <tr>
//                     <th className="th1">POKEMON NAME</th>
//                     <th className="th1">URL</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((pokemon, index) => (
//                     <tr key={index}>
//                       <td
//                         className="tdD"
//                         onClick={() => handlePokemonClick(pokemon.url)}
//                       >
//                         {pokemon.name}
//                       </td>
//                       <td
//                         className="tdD"
//                         onClick={() => handlePokemonClick(pokemon.url)}
//                       >
//                         {pokemon.url}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="pagination-buttons" style={{ textAlign: "center", margin: "20px 0" }}>
//               {prevPageUrl && (
//                 <button onClick={handlePrevClick} className="paginationBtn">
//                   Previous
//                 </button>
//               )}
//               {nextPageUrl && (
//                 <button onClick={handleNextClick} className="paginationBtn">
//                   Next
//                 </button>
//               )}
//             </div>
//           </div>


//         ) : (
//           <marquee scrollamount="30">
//             <p className="para">No Data Found</p>
//           </marquee>
//         )}

//         {selectedPokemon && (
//           <div className="pokemonDetails">
//             <h3 className="h3D">{selectedPokemon.name}</h3>
//             <div className="imgDiv">
//               <img
//                 className="imgD"
//                 src={selectedPokemon.sprites.front_default}
//                 alt={selectedPokemon.name}
//               />
//             </div>
//             <p className="paraApi">
//               <strong>Height:</strong> {selectedPokemon.height} decimeters
//             </p>
//             <p className="paraApi">
//               <strong>Weight:</strong> {selectedPokemon.weight} hectograms
//             </p>
//             <p className="paraApi">
//               <strong>Types:</strong>{" "}
//               {selectedPokemon.types.map((type) => type.type.name).join(", ")}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Table;





// import React, { useState, useEffect, useMemo } from "react";
// import "./Table.css";

// function Table() {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
//   const [selectedPokemon, setSelectedPokemon] = useState(null);
//   const [nextPageUrl, setNextPageUrl] = useState(null);
//   const [prevPageUrl, setPrevPageUrl] = useState(null);
//   const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");


//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       try {
//         const response = await fetch(currentUrl);
//         const data = await response.json();
//         setPokemonData(data.results);
//         setNextPageUrl(data.next);
//         setPrevPageUrl(data.previous);
//       } catch (error) {
//         console.error("Error fetching Pokémon list:", error);
//       }
//     };

//     fetchPokemonData();
//   }, [currentUrl]);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearchTerm(searchTerm);
//     }, 1000);
//     return () => clearTimeout(handler);
//   }, [searchTerm]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handlePokemonClick = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setSelectedPokemon(data);
//     } catch (error) {
//       console.error("Error fetching Pokémon details:", error);
//     }
//   };

//   const handleNextClick = () => {
//     if (nextPageUrl) {
//       setCurrentUrl(nextPageUrl);
//       setSelectedPokemon(null);
//     }
//   };

//   const handlePrevClick = () => {
//     if (prevPageUrl) {
//       setCurrentUrl(prevPageUrl);
//       setSelectedPokemon(null);
//     }
//   };

//   const filteredData = useMemo(() => {
//     if (!debouncedSearchTerm) {
//       return pokemonData;
//     }
//     return pokemonData.filter((item) =>
//       item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
//     );
//   }, [pokemonData, debouncedSearchTerm]);

//   return (
//     <div className="container">
//       <h2 className="h2D">Pokemon List</h2>

//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input
//           type="text"
//           className="SearchBar"
//           placeholder="Search Pokemon..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       <div className="columnTD">
//         {filteredData.length > 0 ? (
//           <div className="tableButton">
//             <div>
//               <table className="tableApi">
//                 <thead>
//                   <tr>
//                     <th className="th1">POKEMON NAME</th>
//                     <th className="th1">URL</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((pokemon, index) => (
//                     <tr key={index}>
//                       <td
//                         className="tdD"
//                         onClick={() => handlePokemonClick(pokemon.url)}
//                       >
//                         {pokemon.name}
//                       </td>
//                       <td
//                         className="tdD"
//                         onClick={() => handlePokemonClick(pokemon.url)}
//                       >
//                         {pokemon.url}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="pagination-buttons" style={{ textAlign: "center", margin: "20px 0" }}>
//               {prevPageUrl && (
//                 <button onClick={handlePrevClick} className="paginationBtn">
//                   Previous
//                 </button>
//               )}
//               {nextPageUrl && (
//                 <button onClick={handleNextClick} className="paginationBtn">
//                   Next
//                 </button>
//               )}
//             </div>
//           </div>
//         ) : (
//           <marquee scrollamount="30">
//             <p className="para">No Data Found</p>
//           </marquee>
//         )}

//         {selectedPokemon && (
//           <div className="pokemonDetails">
//             <h3 className="h3D">{selectedPokemon.name}</h3>
//             <div className="imgDiv">
//               <img
//                 className="imgD"
//                 src={selectedPokemon.sprites.front_default}
//                 alt={selectedPokemon.name}
//               />
//             </div>
//             <p className="paraApi">
//               <strong>Height:</strong> {selectedPokemon.height} decimeters
//             </p>
//             <p className="paraApi">
//               <strong>Weight:</strong> {selectedPokemon.weight} hectograms
//             </p>
//             <p className="paraApi">
//               <strong>Types:</strong>{" "}
//               {selectedPokemon.types.map((type) => type.type.name).join(", ")}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Table;
