import React from 'react';
import {connect} from 'react-redux';
import './totalScore.css';

const TotalScore = (props) => {
  return (
    <div className="total-score-container">
      <span className="total-score">Total Score: {props.totalScore}</span>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    totalScore: state.totalScore
  }
}

export default connect(mapStateToProps)(TotalScore);
