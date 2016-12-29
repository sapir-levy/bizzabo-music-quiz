import React from 'react';
import {connect} from 'react-redux';
import AlbumEntry from './AlbumEntry/AlbumEntry';
import './albumEntries.css';

const AlbumEntries = (props) => {
  return (
    <div className="albums-container">
      {
        props.albums.slice(0, props.roundInfo.attempts).map((album, i) => (
          <AlbumEntry key={i} albumName={album.albumName}/>
        ))
      }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    roundInfo: state.roundInfo,
    albums: state.albums
  }
}

export default connect(mapStateToProps)(AlbumEntries);
