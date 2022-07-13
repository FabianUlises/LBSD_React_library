import React from 'react'
import GalleryItem from './GalleryItem';

const Gallery = (props) => {
  const display = props.data.map((item, index) => {
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
