import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import React from 'react'
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const data = useContext(DataContext);
  const display = data.map((item, index) => {
    return(
      <GalleryItem item={item} key={index} />
    )
  })
  // Returning Jsx
  return (
    <div>
      {display}
    </div>
  )
}

export default Gallery
