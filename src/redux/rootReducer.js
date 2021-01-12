import pokemonsReducer from "./pokemonsSlice";
import pokemonInfoReducer from "./pokemonInfoSlice";

const rootReducer = {
  pokemonsList: pokemonsReducer,
  pokemonInfo: pokemonInfoReducer,
};

export default rootReducer;
