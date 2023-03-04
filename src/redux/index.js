import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./pokemonApi";
import pokemonReducer from "./pokemonSlice";


export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath] : pokemonApi.reducer,
        pokemon: pokemonReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
});