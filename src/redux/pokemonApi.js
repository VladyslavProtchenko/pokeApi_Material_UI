import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'getPokemon',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: build => ({

        getPokemon: build.query({
            query:(page) => ({
                url: `pokemon/`,
                params: {
                    limit: 12,
                    offset: page*12
                }
            })
        }),

        getOnePokemon: build.query({
            query:(id) => `pokemon/${id}`,
        }),
    })
})

export const { useGetPokemonQuery, useGetOnePokemonQuery } = pokemonApi;