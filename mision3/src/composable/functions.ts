import type { Pokemon } from '../interfaces/types.ts';
import axios from 'axios';

export function functions() {
    async function randomPokemon(): Promise<Pokemon> {
        const randomId = Math.floor(Math.random() * 898) + 1;
        const randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const pokemon: Pokemon = {
            imageUrl: randomPokemon.data.sprites.front_default,
            name: randomPokemon.data.name,
            types: randomPokemon.data.types.map((type: any) => type.type.name),
        };
        return pokemon;
    }
    return { randomPokemon };
}