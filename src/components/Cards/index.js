import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import './index.scss';

import PokemonCard from '../PokemonCard';
import { pokemonsLimit } from '../../constants';
import {
  fetchPokemonsList,
  setPokemonInterval,
} from '../../redux/pokemonsSlice';
import Pagination from '../Pagination';
import { closeList } from '../../function';
import { Spinner } from 'react-bootstrap';
import ErrorMassage from '../ErrorMassage';
import ScrollButton from '../ScrollButton';

function Cards({ currentPage, setCurrentPage, interval, setPokInterval }) {
  const isFetching = useSelector((state) => state.pokemonsList.isFetching);
  const pokemons = useSelector((state) => state.pokemonsList.pokemons);
  const err = useSelector((state) => state.pokemonsList.err);

  const history = useHistory();
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsList(interval));
  }, [dispatch, interval]);

  useEffect(() => {
    setPokInterval(currentPage * pokemonsLimit);
  });

  useEffect(() => {
    history.replace(`${currentPage}`);
  }, []); //eslint-disable-line

  useEffect(() => {
    dispatch(setPokemonInterval(interval));
  }, [dispatch, interval]);

  useEffect(() => {
    if (history.action === 'POP') {
      setCurrentPage(+params.currentPage);
    }
  });

  return (
    <div className="mainContainer" onClick={closeList}>
      {isFetching ? (
        <Spinner className="fetch" animation="grow" variant="warning" />
      ) : (
        <>
          <ScrollButton />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            interval={interval}
          />
          <div className="cardsWrapper">
            {pokemons.results &&
              pokemons.results.map((item, index) => {
                let name = item.name;
                name = name[0].toUpperCase() + name.slice(1);

                let queue = interval + (index + 1);

                return (
                  <PokemonCard
                    currentPage={currentPage}
                    key={`${index}-${Math.random}`}
                    pokemonKey={queue}
                    pokemonName={name}
                  />
                );
              })}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            interval={interval}
          />
        </>
      )}
      {err && (
        <ErrorMassage show={true} err={err} onHide={() => history.goBack()} />
      )}
    </div>
  );
}

export default Cards;
