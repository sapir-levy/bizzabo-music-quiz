import {INCREMENT_ROUND, REDUCE_ROUND_SCORE} from '../actions/types';

export default function (state = {round: 1, score: 5, attempts: 1}, action) {
  switch (action.type) {
    case INCREMENT_ROUND: {
      return {round: state.round + 1, score: 5, attempts: 1};
    }
    case REDUCE_ROUND_SCORE: {
      return {round: state.round, score: action.data, attempts: state.attempts + 1};
    }
  }

  return state;
}
