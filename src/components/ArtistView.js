import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ArtistView = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [ artistData, setArtistData ] = useState([]);

  useEffect(() => {
    const API_URL = `http://localhost:4000/album/${id}`;
    const fetchData = async () => {
      const res = await fetch(API_URL)
      const resData = await res.json()
      setArtistData(resData.results)
    }
    fetchData()
  }, [id])

  const navButtons = () => {
    return(
      <div>
        <button>hello there</button>
        {/* <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate('/')}>Home</button> */}
      </div>
    )
  }

  const justalbums = artistData.filter(entry => entry.collectionType === 'Album')
  const renderAlbums = justalbums.map((album, i) => {
    return (
      <div key={i}>
        <Link to={`/album/${album.collectionId}`}>
          <p>{album.collectionName}</p>
        </Link>
      </div>
    )
  })
  return (
    <div>
        {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
        {renderAlbums}
    </div>
  )
};

export default ArtistView;