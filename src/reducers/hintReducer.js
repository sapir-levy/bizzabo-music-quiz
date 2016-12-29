import {DISPLAY_HINT , HIDE_HINT} from '../actions/types';

export default function (state = {displayHint: false , artwork:''}, action) {
  switch (action.type) {
    case DISPLAY_HINT: {
      return {displayHint: true , artwork:action.data};
    }
    case HIDE_HINT:{
      return {displayHint: false , artwork:''};
    }
  }
  return state;
}
