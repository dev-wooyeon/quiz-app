import React from 'react';

import "../App.css";
import Button from '../components/Button/Button';

function getMent(percent: number) {
  if (percent < 20) {
    return '🌠 아앗.. 아.. 저를 너무 모르시네요... 친해지길 바래요.. 🌠';
  }

  if (percent < 40) {
    return '가까운듯 먼듯 더 친해지고 싶은 당신! 🧐';
  }

  if (percent < 60) {
    return '中 찍은건지 아닌건지는 모르겠지만 중간쯤에 걸쳐있어요!!! 中';
  }

  if (percent < 80) {
    return '오.. 생각보다 저를 많이 아시네요? 👀 🤔';
  }

  return '찾았다.. 내 도플갱어 🤦‍♂️🤦‍♀️';
}

interface ResultViewProps {
  quiz: {
    answer: string | number;
  }[];
  sheet: string[];
  handleClickHome: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({
  quiz,
  sheet,
  handleClickHome,
}) => {
  const totalAnswer = quiz.filter((item, index) => item.answer === sheet[index]);
  const percent = (totalAnswer.length / quiz.length) * 100;

  return (
    <div className="App">
      <header className='App-header'>
        <h1>{totalAnswer.length}개 맞췄슴다-!</h1>
        <p>{getMent(percent)}</p>
      </header>
      <section className='App-content'>
        <Button className='btn-key' onClick={handleClickHome}>
          다시하기
        </Button>
      </section>
    </div>
  );
};

export default ResultView;
