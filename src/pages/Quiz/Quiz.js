import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { falseForm, formScore } from "../../redux/dataSlice";
import Modal from "../../components/Modal/Modal";
import "./Quiz.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
     toast("Sonuçlar Hesaplanıyor...");
     setTimeout(() => setActive(!active), 3000);
      
    }
  };
  return (
    <div className="quiz">
      {active ? (
        <Modal />
      ) : (
        <>
          <div className="quizText">
           
           <div className="quizNumber"> {number + 1} <span>/</span> {filterQuestions.length}</div>
           <div className="quizTitle">{filterQuestions[number]?.question}</div>
          </div>
        
          <div className="quizAnswer">
          
            {filterQuestions[number].answers.map((item) => (
             <div>
                 <button onClick={() => handlePage(item.answer)}>
                {item.option}
                {item.answer}
                
              </button>


             </div>
            
            ))}

            
         
          </div>
          
        </>
      )}
       <ToastContainer
       position="top-center"
       autoClose={1500}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light" />
    </div>
  );
};

export default Quiz;
