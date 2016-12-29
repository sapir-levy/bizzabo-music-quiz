import React, {Component} from 'react';
import AlbumEntries from '../AlbumEntries/AlbumEntries';
import AnswerSection from '../AnswerSection/AnswerSection';
import Hint from '../Hint/Hint';
import {connect} from 'react-redux';
import {numberOfRounds, numberOfAttempts} from '../../constants/consts'
import * as Actions from '../../actions/index';
import './round.css';

class Round extends Component {

  constructor() {
    super();
    this.state = {answer: ''};
  }

  componentDidMount() {
    this.initRound(this.props.currentArtist)
  }

  initRound(artist) {
    this.props.hideHint();
    this.props.fetchAlbums(artist);
  }

  componentWillUpdate(nextProps) {
    if (this.props.roundInfo.round !== nextProps.roundInfo.round) {
      this.initRound(nextProps.currentArtist);
    }
  }

  handleAnswerChange(e) {
    this.setState({answer: e.target.value});
  }

  handleAnswerSubmit() {
    const {score, attempts} = this.props.roundInfo;
    const {answer} = this.state;
    const {currentArtist, albums} = this.props;

    if (answer.toLowerCase() === currentArtist.toLowerCase()) {
      this.handleRoundEnd(score)
    }
    else if (attempts == numberOfAttempts) {
      this.handleRoundEnd(0)
    }
    else {
      if (attempts == numberOfAttempts - 1)
        this.props.displayHint(albums);
      this.props.reduceRoundScore(score - 2);
    }

    this.setState({answer: ''});
  }

  handleRoundEnd(score) {
    if (this.props.roundInfo.round == numberOfRounds)
      this.props.endGame(score);
    else {
      this.props.moveToNextRound(score);
    }
  }

  render() {
    const {roundInfo, hint, didGameEnded} = this.props;
    return (
      <div className="round-container">
        <div className="round-albums pull-left">
          <h2 className="round-title">Round {roundInfo.round}</h2>
          <AlbumEntries/>
        </div>
        <div className="round-answer pull-right">
          <h2 className="round-title">For {roundInfo.score} point(s)</h2>
          <AnswerSection disableButton={didGameEnded} answer={this.state.answer}
                         onAnswerSubmit={this.handleAnswerSubmit.bind(this)}
                         onAnswerChange={this.handleAnswerChange.bind(this)}/>
          {hint.displayHint &&
          <Hint img={hint.artwork}/>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums,
    roundInfo: state.roundInfo,
    hint: state.hint,
    didGameEnded: state.didGameEnded
  }
}

function mapStateToDispatch(dispatch) {
  return {
    fetchAlbums: (artist) => dispatch(Actions.fetchAlbums(artist)),
    moveToNextRound: (roundScore) => dispatch(Actions.moveToNextRound(roundScore)),
    reduceRoundScore: (newScore) => dispatch(Actions.reduceRoundScore(newScore)),
    endGame: (roundScore) => dispatch(Actions.endGame(roundScore)),
    displayHint: (albums) => dispatch(Actions.displayHint(albums)),
    hideHint: () => dispatch(Actions.hideHint())
  };
}

export default connect(mapStateToProps, mapStateToDispatch)(Round);

