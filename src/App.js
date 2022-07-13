import React, { useEffect, useState } from "react";
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';



function App() {
  // Setting State & Effects
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  // UseEffects
  useEffect(() => {
    // Fetching for api
    const fetchData = async () => {
      document.title = `${search} Music`;
      const res = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
      const resData = await res.json();
      if(resData.results.length > 0) {
        setData(resData.results);
      } else {
        setMessage('Not Found')
      }
      console.log(resData);
    }
    fetchData();
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term)
  }



  // Returning Jsx
  return (
    <div className="App">
      <Gallery />
      {message}
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
}

export default App;