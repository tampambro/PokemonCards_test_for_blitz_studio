import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './index.scss';

import { pokemonsLimit } from '../../constants';

function Pagination({ currentPage, setCurrentPage }) {
  const count = useSelector((state) => state.pokemonsList.pokemons.count);
  const history = useHistory();

  const size = Math.ceil(count / pokemonsLimit);

  function handlePageClick(data) {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    history.push(`${selectedPage}`);
  }

  return (
    <ReactPaginate
      onPageChange={handlePageClick}
      previousLabel={<span>&#10094;</span>}
      nextLabel={<span>&#10095;</span>}
      breakLabel={<span className="gap">...</span>}
      pageCount={size}
      forcePage={currentPage}
      containerClassName={'pagination'}
      previousLinkClassName={'previousPage'}
      nextLinkClassName={'nextPage'}
      disabledClassName={'disabled'}
      activeClassName={'active'}
      pageClassName={'pageItem'}
      pageLinkClassName={'pageLink'}
    />
  );
}

export default Pagination;
