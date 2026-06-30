import { defineStore } from 'pinia'
import type { Trainer } from '../interfaces/types.ts'
import { useRandomPokemon } from '../composable/functions.ts'

const { randomPokemon } = useRandomPokemon()

export const useTrainerStore = defineStore('trainer', {
    state: () => ({
        trainers: [] as Trainer[]
    }),

    actions: {
        addTrainer(trainer: Trainer) {
            this.trainers.push(trainer)
        },

        async updateTrainerPokemon(trainer: Trainer) {
            try {
                trainer.pokemon = await randomPokemon()
            } catch (error) {
                console.error(error)
            }
        },

        deleteTrainer(trainer: Trainer) {
            this.trainers = this.trainers.filter(function (t) {
                return t.email !== trainer.email
            })
        }
    },
    persist: true
}
)