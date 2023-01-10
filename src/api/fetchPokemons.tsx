import { Pokemon } from "../types/types";
import { formatPokemonName } from "../utils/utils";

export async function fetchPokemon(): Promise<Pokemon[]> {
    const response = await fetch(
        "https://unpkg.com/pokemons@1.1.0/pokemons.json"
    );

    if(!response.ok){
        throw new Error("Failed to fetch pokemons");
    }

    const result = await response.json();
    // console.log("fetch",result);

    const pokemons = result.results.map((pokemon: any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name.toLowerCase())}.gif`
    }));

    const uniquePokemons = pokemons.filter(
        (pokemon: any, index: number) => 
            pokemons.findIndex((other: any) => other.id === pokemon.id) === index
        );

        // console.log("uniquePokemons",uniquePokemons);
        return uniquePokemons;
    }