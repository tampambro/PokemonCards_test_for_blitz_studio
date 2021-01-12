import axios from "axios";

import config from "../config";
import { pokemonsLimit } from "../constants";

export default {
  pokemonsRequest: async (interval) => {
    try {
      const pokemonsList = await axios.get(`${config.api.pokemonsPage}${interval}&limit=${pokemonsLimit}`);
      return pokemonsList;
    }

    catch (err) {
      throw err;
    }
  },

  pokemonInfoRequest: async (num) => {
    try {
      const pokemonInfo = await axios.get(`${config.api.pokemonInfo}${num}`);

      return pokemonInfo
    }

    catch (err) {
      throw err;
    }
  }
};
