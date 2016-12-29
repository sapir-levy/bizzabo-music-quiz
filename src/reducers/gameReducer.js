import {END_GAME} from '../actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case END_GAME: {
      return true;
    }
  }

  return state;
}
