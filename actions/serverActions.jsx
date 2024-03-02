// "use server";

// const { default: axios } = require("axios");

// const baseUrl = "https://pokeapi.co/api/v2";

// export async function getPokemons(limit) {
//   const data = await axios.get(`${baseUrl}/pokemon?limit=${limit}`);

//   if (data.status !== 200) {
//     throw new Error("Failed to fetch data");
//   }

//   return data.data.results.map((pokemonObj) => {
//     return { name: pokemonObj.name };
//   });
// }

// export async function getPokemonInfo(name) {
//   const data = await axios.get(`${baseUrl}/pokemon/${name}`);

//   if (data.status !== 200) {
//     throw new Error("Failed to fetch data");
//   }

//   return {
//     name: data.data.name,
//     height: data.data.height,
//     id: data.data.id,
//     img: data.data.sprites.front_shiny,
//     attack: data.data.stats[1].base_stat,
//   };
// }
