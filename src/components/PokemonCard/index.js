import React from 'react';

import './index.scss';

import { Link } from 'react-router-dom';

function PokemonCard(props) {
  return (
    <Link
      to={`${props.currentPage}/${props.pokemonKey}`}
      style={
        props.disable
          ? {
              textDecoration: 'none',
              color: 'black',
              pointerEvents: 'none',
            }
          : {
              textDecoration: 'none',
              color: 'black',
            }
      }
    >
      <figure className="PokemonCard">
        <img
          className="PokemonCard__img"
          id={props.pokemonKey - 1}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonKey}.png`}
          alt={props.pokemonName}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = require('../../imgs/unKnown.png');
          }}
        />
        <figcaption className="PokemonCard__caption">
          {props.pokemonName}
        </figcaption>
      </figure>
    </Link>
  );
}

export default PokemonCard;
