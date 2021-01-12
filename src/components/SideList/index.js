import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./index.scss";

import { closeList } from "../../function";

function SideList(props) {
  const pokemons = useSelector((state) => state.pokemonsList.pokemons);
  const interval = useSelector((state) => state.pokemonsList.interval);

  return (
    <div className="SideList">
      <h3 className="SideList__header">
        Pokemons List
      </h3>
      <span
        className="SideList__close"
        onClick={closeList}
      >
        &#10094;
      </span>
      <ul>
        {pokemons.results
          && pokemons.results.map((item, index) => {
            let name = item.name;
            name = name[0].toUpperCase() + name.slice(1);

            let queue = interval + (index + 1);

            return (
              <li
                className="SideList__item"
                key={`${index}-${Math.random}`}
              >
                <Link to={`/${props.currentPage}/${queue}`}>
                  {name}
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default SideList;
