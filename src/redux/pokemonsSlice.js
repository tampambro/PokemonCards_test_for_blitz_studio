import { createSlice } from "@reduxjs/toolkit";

import services from "../services";

const initialState = {
  pokemons: {},
  interval: 0,
  err: "",
  isFetching: false,
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getPokemonsSuccess(state, action) {
      state.pokemons = action.payload;
      state.err = "";
    },
    getPokemonsFailed(state, action) {
      state.pokemons = {};
      state.err = action.payload;
    },
    setPokemonInterval(state, action) {
      state.interval = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  }
})

export const {
  getPokemonsSuccess,
  getPokemonsFailed,
  setPokemonInterval,
  setIsFetching,
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

export const fetchPokemonsList = (interval) => async (dispatch) => {
  try {
    await dispatch(setIsFetching(true));
    const pokemonsList = await services.pokemonsRequest(interval);
    await dispatch(getPokemonsSuccess(pokemonsList.data));
    await dispatch(setIsFetching(false));
  }

  catch (err) {
    await dispatch(getPokemonsFailed(err.message.toString()));
    await dispatch(setIsFetching(false));
  }
};
