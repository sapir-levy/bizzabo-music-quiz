import React from 'react';
import {Button , Glyphicon , FormControl} from 'react-bootstrap';
import './answerSection.css';

const AnswerSection = (props) => {

  const {answer, onAnswerChange, onAnswerSubmit} = props;
  return (
    <div className="answer-container">
      <h2 className="answer-title">Who's The Artist?</h2>
      <div>
        <FormControl className="answer-input" type="text" value={answer} placeholder="Your Answer..." onChange={onAnswerChange}/>
        <Button bsSize="small" className="submit-btn" onClick={() => onAnswerSubmit()}><Glyphicon glyph="ok" /></Button>
      </div>

    </div>
  )
};

export default AnswerSection;
