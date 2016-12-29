import {ADD_TO_TOTAL_SCORE} from '../actions/types';

export default function (state = 0, action) {
  switch (action.type) {
    case ADD_TO_TOTAL_SCORE: {
      return state + action.data;
    }
  }
  return state;
}
