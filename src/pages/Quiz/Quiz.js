import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Quiz.scss'

const Quiz = () => {
    const {questions} = useSelector((state) => state.data)
    const [number,setNumber] = useState(0)
    const handlePage = () => {
        setNumber(number+1)
    }
  return (
    <div className='quiz'>
        
        <div className='quizTitle'>
            {questions[number]?.question       
            }
        </div>
        <div className='quizAnswer'>
            
            { 
            questions[number].answers.map(item => (
              <button onClick={handlePage}>
                {item.option}              
                {item.answer}
                </button>  
            ))}
        </div>
        
    </div>
  )
}

export default Quiz