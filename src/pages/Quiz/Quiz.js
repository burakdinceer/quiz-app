import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { falseForm, formScore } from '../../redux/dataSlice'
import Modal from '../../components/Modal/Modal'
import './Quiz.scss'

const Quiz = () => {
    const {questions,questionsNumber,questionsScore} = useSelector((state) => state.data)
    const [number,setNumber] = useState(0)
    const [active,setActive] =  useState(false)
    const dispatch = useDispatch()
    const handlePage = (e) => {
        if(e !== questions[number].correctAnswer){
            dispatch(falseForm(questions[number]))
        }

       else if(e === questions[number].correctAnswer){
       
        dispatch(formScore(questionsScore.score+(questionsScore.maxScore / questionsNumber)))
       }
       const nextQuestion = number+1
       if(nextQuestion<questions.length){
        setNumber(nextQuestion)
       }else{
        alert('Sınav Bitti, Sonuçlar Yükleniyor...')
        setActive(!active)
       }
       

        

    }
  return (
    <div className='quiz'>
          
       {
        
        active ? <Modal/>
        :
         <>
         <div className='quizNumber'> {number+1} <span>/</span> {questionsNumber}</div>
        <div className='quizTitle'>
            {questions[number]?.question       
            }
        </div>
        <div className='quizAnswer'>
            
            { 
            questions[number].answers.map(item => (
              <button onClick={()=>handlePage(item.answer)}>
                {item.option}              
                {item.answer}
                </button>  
            ))}
        </div>

           </> 
        }
        
    </div>
  )
}

export default Quiz