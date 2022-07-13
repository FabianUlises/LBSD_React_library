import React, { useEffect, useState } from "react";
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';



function App() {
  // Returning Jsx
  return (
    <div className="App">
      <Gallery />
      <SearchBar />
    </div>
  );
}

export default App;