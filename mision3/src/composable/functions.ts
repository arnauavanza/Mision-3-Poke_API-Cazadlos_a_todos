import type { Pokemon } from '../interfaces/types.ts';
import axios from 'axios';

const API_URL: string = import.meta.env.VITE_API_URL;

export function functions() {
    async function randomPokemon(): Promise<Pokemon> {
        const randomId = Math.floor(Math.random() * 898) + 1;
        const randomPokemon = await axios.get(`${API_URL}${randomId}`);
        const pokemon: Pokemon = {
            imageUrl: randomPokemon.data.sprites.front_default,
            name: randomPokemon.data.name,
            types: randomPokemon.data.types.map((type: { type: { name: string } }) => type.type.name),
        };
        return pokemon;
    }
    return { randomPokemon };
}