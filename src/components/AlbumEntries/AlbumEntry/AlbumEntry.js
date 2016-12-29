import React from 'react';
import './albumEntry.css'
import 'animate.css';

const AlbumEntry = (props) => {
  return (
    <div className="animated zoomIn album-name-container">
      <span className="album-name">{props.albumName}</span>
    </div>

  );
};

export default AlbumEntry;
