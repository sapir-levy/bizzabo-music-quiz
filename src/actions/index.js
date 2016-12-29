import * as Types from './types';
import {itunes_url, numberOfAttempts} from '../constants/consts';
import {getJSONP} from '../helpers/artistsHelper';

export function fetchAlbums(artist) {
  const fullUrl = itunes_url.replace('{artist}', artist);

  return (dispatch) => {
    getJSONP(fullUrl, (data) => {
      dispatch({
        type: Types.FETCH_ALBUMS,
        data: data
      });
    });
  };
}

export function moveToNextRound(roundScore) {
  return (dispatch) => {
    dispatch({type: Types.ADD_TO_TOTAL_SCORE, data: roundScore});
    dispatch({type: Types.INCREMENT_ROUND});
  };
}

export function reduceRoundScore(newScore) {
  return {
    type: Types.REDUCE_ROUND_SCORE,
    data: newScore
  };
}

export function endGame(roundScore) {
  return (dispatch) => {
    dispatch({type: Types.ADD_TO_TOTAL_SCORE, data: roundScore});
    dispatch({type: Types.END_GAME});
  };
}

export function hideHint() {
  return {
    type: Types.HIDE_HINT,
  };
}

export function displayHint(albums) {
  return (dispatch) => {
    let album = albums[Math.floor(Math.random() * numberOfAttempts)];
    while (!album || album === '')
      album = albums[Math.floor(Math.random() * numberOfAttempts)];

    dispatch({
      type: Types.DISPLAY_HINT,
      data: album.artwork
    });
  };
}



