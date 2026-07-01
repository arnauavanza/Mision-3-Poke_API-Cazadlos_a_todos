import type { Pokemon, PokeAPIResponse } from '../interfaces/types.ts';
import axios from 'axios';
const API_URL: string = import.meta.env.VITE_API_URL;
export function useRandomPokemon() {
    async function randomPokemon(): Promise<Pokemon> {
        try {
            const randomId = Math.floor(Math.random() * 898) + 1;
            const { data } = await axios.get<PokeAPIResponse>(`${API_URL}${randomId}`);
            const pokemon: Pokemon = {
                imageUrl: data.sprites.front_default,
                name: data.name,
                types: data.types.map(type => type.type.name),
            };
            return pokemon;
        } catch (error) {
            console.error('Error al obtener el Pokémon:', error);
            throw error;
        }
    }
    return { randomPokemon };
}