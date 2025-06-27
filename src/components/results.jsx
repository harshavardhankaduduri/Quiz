function Results({questionBank ,userAnswers,restartQuiz}) {
    function getScore(){
        let finalScore=0;
        userAnswers.forEach((answer,index) => {
            if (answer === questionBank[index].answer) {
                finalScore++;
            }
            
        });
        return finalScore;
    }
    const score = getScore();
    
    return <div>
        <h2>Finished</h2>
        <p>Thank you for taking the quiz!</p>
        <p>Your score: {score} /{questionBank.length}</p>
        <button className="restart-button" onClick={restartQuiz} > Restart </button>
        </div>
    
}
export default Results;
