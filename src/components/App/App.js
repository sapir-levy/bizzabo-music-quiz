import React from 'react';
import {connect} from 'react-redux';
import Round from '../Round/Round';
import TotalScore from '../totalScore/TotalScore';
import './app.css';

const App = (props) => {

  const {artists, didGameEnded, roundNumber} = props;
  return (
    <div className="app-container">
      <h1 className="gameTitle">Guess The Artist</h1>
      <Round currentArtist={artists[roundNumber - 1]}/>
      {didGameEnded && (
        <TotalScore/>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    didGameEnded: state.didGameEnded,
    roundNumber: state.roundInfo.round
  }
}

export default connect(mapStateToProps)(App);

