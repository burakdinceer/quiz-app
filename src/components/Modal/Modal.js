import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetData } from "../../redux/dataSlice";
import "./Modal.scss";

const Modal = () => {
  const { falseQuestion, questionsScore } = useSelector((state) => state.data);
  const dispatch = useDispatch()
  const handlePage = () => {
   dispatch(resetData())
  }
  return (
    <div className="modal">
      <div className="modalScore">
        {questionsScore.score < 50
          ? "Kaldınız..."
          : questionsScore.score > 50 && questionsScore.score < 70
          ? "Geçtiniz..."
          : "Mükemmel..."}
      </div>
      <div className="modalHeader">
        {falseQuestion.length > 0 ? "Yanlış Sorular" : ""}
      </div>

      {falseQuestion.map((item) => (
        <div>
          <div className="modalText">{item.question}</div>
          <div>Doğru Cevap : {item.correctAnswer}</div>
          <div className="modalAnswer">
            {item.answers.map((value) => (
              <div>
                <button>
                  {value.option}
                  {value.answer}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link onClick={handlePage} className="home" to="/">
        Quiz'e Baştan Başla...
      </Link>
    </div>
  );
};

export default Modal;
