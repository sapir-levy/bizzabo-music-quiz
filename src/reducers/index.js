import {combineReducers} from 'redux';
import albumsReducer from './albumsReducer';
import roundsReducer from './roundsReducer';
import totalScoreReducer from './totalScoreReducer';
import gameReducer from './gameReducer';
import hintReducer from './hintReducer';

export default combineReducers({
  albums: albumsReducer,
  roundInfo: roundsReducer,
  totalScore:totalScoreReducer,
  didGameEnded:gameReducer,
  hint:hintReducer
});
