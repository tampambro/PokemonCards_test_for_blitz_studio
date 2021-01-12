import { createSlice } from "@reduxjs/toolkit";

import services from "../services";

const initialState = {
  info: {},
  err: "",
  isFetching: false,
};

export const pokemonInfoSlice = createSlice({
  name: "pokemonInfo",
  initialState,
  reducers: {
    getPokemonInfoSuccess(state, action) {
      state.info = action.payload;
      state.err = "";
    },
    getPokemonInfoFaild(state, action) {
      state.info = {};
      state.err = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  }
});

export const {
  getPokemonInfoSuccess,
  getPokemonInfoFaild,
  setIsFetching,
} = pokemonInfoSlice.actions;

export default pokemonInfoSlice.reducer;

export const fetchPokemonInfo = (num) => async (dispatch) => {
  try {
    await dispatch(setIsFetching(true));
    const pokemonInfo = await services.pokemonInfoRequest(num);
    await dispatch(getPokemonInfoSuccess(pokemonInfo.data));
    await dispatch(setIsFetching(false));
  }

  catch (err) {
    await dispatch(getPokemonInfoFaild(err.message.toString()));
    await dispatch(setIsFetching(false));
  }
};