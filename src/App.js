import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.scss';

import { pokemonsLimit } from './constants';

import Cards from './components/Cards';
import PokemonInfo from './components/PokemonInfo';
import Navigation from './components/Navigation';
import SideList from './components/SideList';

function App() {
  let [currentPage, setCurrentPage] = useState(0);
  let [interval, setPokInterval] = useState(currentPage * pokemonsLimit);

  return (
    <div className="App">
      <Navigation />
      <SideList currentPage={currentPage} />
      <Switch>
        <Route exact path={['/', '/:currentPage']}>
          <Cards
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            interval={interval}
            setPokInterval={setPokInterval}
          />
        </Route>
        <Route exact path="/:currentPage/:pokemon" component={PokemonInfo} />
      </Switch>
    </div>
  );
}

export default App;
