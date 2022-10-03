import axios from "axios";

export const API = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const PokemonImg = (pokemonIndex: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
};
