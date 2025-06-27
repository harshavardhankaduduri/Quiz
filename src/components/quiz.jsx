import React, { useState } from 'react';
import Results from './results';

function Quiz() {
    const questionBank=
            [
                {
                    question: "What is the capital of France?",
                    options: ["Paris", "London", "Berlin", "Madrid"],
                    answer: "Paris"
                },
                {
                    question: "What is 2 + 2?",
                    options: ["3", "4", "5", "6"],
                    answer: "4"
                },
                {
                    question: "What is the largest planet in our solar system?",
                    options: ["Earth", "Mars", "Jupiter", "Saturn"],
                    answer: "Jupiter"
                }
            ];
            
    const initialAnswers = [null, null, null];
    const[userAnswers,setUserAnswers] = useState(initialAnswers);
    const[currentQuestion,setCurrentQuestion] = useState(0);
    const [isQuizisFinished, setIsQuizFinished] = useState(false);
    const seclectedAnswer = userAnswers[currentQuestion];



    function handleOptionClick(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers);
    }
    
    function goToNext() {
        if(currentQuestion===questionBank.length-1){
            setIsQuizFinished(true);
        }else{
            setCurrentQuestion(currentQuestion + 1);
        }
        
    }
    function goToPrevious() {
        if (currentQuestion > 0){
        setCurrentQuestion(currentQuestion - 1);
    }
  }
  function restartQuiz() {
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
        
  }
  
  if (isQuizisFinished) {
    return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>;
  }

    return (
        <div>
        <h2>Question {currentQuestion+1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>

        {questionBank[currentQuestion].options.map((option, index) => (
            <button key={index} className={"option"+(seclectedAnswer===option?" selected":"")} onClick={() => handleOptionClick(option)}>
                {option}
            </button>
        ))}
        <div className="nav-buttons">
            <button onClick={goToPrevious}disabled={currentQuestion===0}>
                {""}
                previous{""}
                </button>
            <button onClick={goToNext}disabled={!seclectedAnswer}>{currentQuestion===questionBank.length-1 ? "finish":"next"}</button>
            </div>        
        </div>
        
    )
}
export default Quiz;