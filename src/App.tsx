import React, { useState } from 'react';
import './App.css';
import quiz, { QuizQuestion, QuizAnswer } from './quiz';
import QuizView from './QuizView';
import ResultView from './ResultView';

function App() {
  const [sheet, setSheet] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  function handleClickChoice(item: string) {
    const updatedSheet = [...sheet];
    updatedSheet[currentPage] = item;
    setSheet(updatedSheet);
  }

  function handleClickPrev() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function handleClickNext() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  if (currentPage === quiz.length) {
    return <ResultView quiz={quiz} sheet={sheet} handleClickHome={() => setCurrentPage(0)} />;
  }

  const currentQuiz: QuizQuestion = quiz[currentPage];
  const currentAnswer: string | undefined = sheet[currentPage];

  return (
    <div className="App">
      <QuizView
        currentQuiz={currentQuiz}
        currentAnswer={currentAnswer}
        handleClickChoice={handleClickChoice}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;