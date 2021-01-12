import React from 'react';
import { Table, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

import { fetchPokemonInfo } from '../../redux/pokemonInfoSlice';
import { fetchPokemonsList } from '../../redux/pokemonsSlice';
import PokemonCard from '../PokemonCard';
import { pokemonsLimit } from '../../constants';
import ButtonCom from '../ButtonCom';
import { closeList } from '../../function';
import ErrorMassage from '../ErrorMassage';

function PokemonInfo({ match }) {
  let types;
  let abilities;
  let pokemonNum = match.params.pokemon;
  let currentPage = match.params.currentPage;
  let interval = currentPage * pokemonsLimit;

  const info = useSelector((state) => state.pokemonInfo.info);
  const isFetching = useSelector((state) => state.pokemonInfo.isFetching);
  const pokemons = useSelector((state) => state.pokemonsList.pokemons);
  const err = useSelector((state) => state.pokemonInfo.err);

  const history = useHistory();

  if (info.types) {
    let typesArr = info.types;
    let abilitiesArr = info.abilities;

    types =
      typesArr.length > 1
        ? info.types.map((item) => item.type.name).join(', ')
        : info.types[0].type.name;

    abilities =
      abilitiesArr.length > 1
        ? info.abilities.map((item) => item.ability.name).join(', ')
        : info.abilities[0].ability.name;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonInfo(pokemonNum));
  }, [dispatch, pokemonNum]);

  useEffect(() => {
    if (Object.entries(pokemons).length === 0) {
      dispatch(fetchPokemonsList(interval));
    }
  });

  return (
    <div className="infoWrapper" onClick={closeList}>
      {isFetching ? (
        <Spinner className="fetch" animation="grow" variant="warning" />
      ) : (
        <>
          <ButtonCom
            fun={() => history.goBack()}
            variant="dark"
            nameButton="infoWrapper__backButton"
          >
            &#10094; Back
          </ButtonCom>
          <div className="tableWrapper">
            <Table striped hover variant="dark">
              <thead>
                <tr>
                  <th colSpan="2">Characteristic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Height</td>
                  <td>{info.height}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{info.weight}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{types}</td>
                </tr>
                <tr>
                  <td>Abilities</td>
                  <td>{abilities}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <PokemonCard
            disable={true}
            pokemonKey={pokemonNum}
            pokemonName={
              info.name ? info.name[0].toUpperCase() + info.name.slice(1) : ''
            }
          />
        </>
      )}
      {err && (
        <ErrorMassage show={true} err={err} onHide={() => history.goBack()} />
      )}
    </div>
  );
}

export default PokemonInfo;
