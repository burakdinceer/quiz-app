import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { falseForm, formScore } from "../../redux/dataSlice";
import Modal from "../../components/Modal/Modal";
import "./Quiz.scss";

const Quiz = () => {
  const {  filterQuestions, questionsScore } = useSelector(
    (state) => state.data
  );
  const [number, setNumber] = useState(0);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const handlePage = (e) => {
    if (e !== filterQuestions[number].correctAnswer) {
      dispatch(falseForm(filterQuestions[number]));
    } else if (e === filterQuestions[number].correctAnswer) {
      dispatch(
        formScore(
          questionsScore.score + questionsScore.maxScore / filterQuestions.length
        )
      );
    }
    const nextQuestion = number + 1 ;
    if (nextQuestion < filterQuestions.length) {
      setNumber(nextQuestion);
    } else {
      alert("Sınav Bitti, Sonuçlar Yükleniyor...");
      setActive(!active);
    }
  };
  return (
    <div className="quiz">
      {active ? (
        <Modal />
      ) : (
        <>
          <div className="quizNumber">
           
            {number + 1} <span>/</span> {filterQuestions.length}
          </div>
          <div className="quizTitle">{filterQuestions[number]?.question}</div>
          <div className="quizAnswer">
            {filterQuestions[number].answers.map((item) => (
              <button onClick={() => handlePage(item.answer)}>
                {item.option}
                {item.answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
