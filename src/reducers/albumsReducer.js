import {FETCH_ALBUMS} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ALBUMS: {
      const albumsData = action.data.results.reduce((albums , album) => {
        albums.push({albumName: album.collectionName , artwork: album.artworkUrl100});
        return albums;
      } , []);

      return [ ...albumsData];
    }
  }

  return state;
}
