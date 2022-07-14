import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArtistView = () => {
  const { id } = useParams();
    const [ artistData, setArtistData ] = useState([]);
  return (
    <div>
      <h2>The id pased was: {id}</h2>
        <p>Artist Data goes here!</p>
    </div>
  )
};

export default ArtistView;