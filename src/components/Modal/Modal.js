import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetData } from "../../redux/dataSlice";
import "./Modal.scss";

const Modal = () => {
  const { falseQuestion, questionsScore, filterQuestions } = useSelector(
    (state) => state.data
  );
  const [aa,setAa] = useState()
  const dispatch = useDispatch();
  const handlePage = () => {
    dispatch(resetData());
  };
  const trueQuestion = () => {
   setAa(filterQuestions.length-falseQuestion.length)
  
  }
 useEffect(() => {
  trueQuestion()
 },[aa])
  return (
    <div className="modal">
      <h1>Quiz Score</h1>
      <div className="modalMain">
        <div className="modalScore">
          <div>Total Quiz Question :</div>
          <div>{filterQuestions.length}</div>
        </div>
        <div className="modalScore">
          <div>Number of Correct Questions:</div>
          <div>{aa}</div>
        </div>
        <div className="modalScore">
          <div>Total Quiz Points :</div>
          <div>{questionsScore.score.toFixed(0)}</div>
        </div>
        <div className="modalScore">
          <div>Max Points :</div>
          <div>{questionsScore.maxScore}</div>
        </div>
        <div className="modalScore">
          <div>Quiz Result :</div>
          <div>
            {questionsScore.score < 50 ? (
              <span style={{ color: "red" }}>Unsuccessful...</span>
            ) : questionsScore.score > 50 && questionsScore.score < 70 ? (
              <span style={{ color: "orange" }}>Successful...</span>
            ) : (
              <span style={{ color: "green" }}>
              Perfect...</span>
            )}
          </div>
        </div>
        
        <Link to={"/"} onClick={handlePage}>
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default Modal;
