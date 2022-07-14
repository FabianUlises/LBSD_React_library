import React, { useEffect, useState } from "react";
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { DataContext } from "./context/DataContext";



function App() {
  // Setting State & Effects
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  const API_URL = 'https://itunes.apple.com/search?term='
  // UseEffects
  useEffect(() => {
    if(search){
      // Fetching for api
      const fetchData = async () => {
        document.title = `${search} Music`;
        const res = await fetch(API_URL + search)
        const resData = await res.json();
        if(resData.results.length > 0) {
          setData(resData.results);
        } else {
          setMessage('Not Found')
        }
        console.log(resData);
      }
      fetchData();
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term)
  }



  // Returning Jsx
  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <DataContext.Provider value={data} >
      <Gallery />
      </DataContext.Provider>

    </div>
  );
}

export default App;