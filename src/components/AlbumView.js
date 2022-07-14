import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const AlbumView = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [ albumData, setAlbumData ] = useState([]);

  useEffect(() => {
    const API_URL = `http://localhost:4000/song/${id}`
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const resData = await res.json()
      setAlbumData(resData.results)
    }
    fetchData()
  }, [id])

  const navButtons = () => {
    return(
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate('/')}>Home</button>
      </div>
    )
  }

  const justSongs = albumData.filter(entry => entry.wrapperType === 'track')

  const renderSongs = justSongs.map((song, i) => {
    return(
      <div key={i}>
        <p>{song.trackName}</p>
      </div>
    )
  })

  return (
    <div>
      {navButtons}
      {renderSongs}
    </div>
  )
}

export default AlbumView
