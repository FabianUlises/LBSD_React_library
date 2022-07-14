import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import React from 'react';

const SearchBar = () => {
  const {term, handleSearch} = useContext(SearchContext);

  return (
      <form
      //  onSubmit={(e) => props.handleSearch(e, searchTerm)}
       >
        <input ref={term} type="text" placeholder='Search here'/>
        <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
      </form>
  )
}

export default SearchBar
