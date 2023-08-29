export interface QuizQuestion {
  question: string;
  useInput?: boolean;
  choices?: string[];
  answer: string;
}

export interface QuizAnswer {
  [questionIndex: number]: string;
}

const quiz: QuizQuestion[] = [
  {
    question: '🚀 덩치는 크지만 마음은 약한 은우의 키는 몇일까요? 🚀',
    useInput: true,
    answer: '172',
  },
  {
    question: '🍹 은우가 가장 좋아하는 음료수는 무엇일까요? 🍹',
    choices: ['콜라', '닥터페퍼', '레몬에이드', '코코팜', '수돗물'],
    answer: '콜라',
  },
  {
    question: '🏃 은우가 지금까지 해본 적이 없는 일은? 🏃',
    choices: [
      '외국인한테 물 달라고 바디랭귀지',
      '오렌지주스 박스 쓴채로 코딩하기',
      '기숙사 방에서 스테이크 구워먹기',
      '길가다가 로또 4등 당첨복권 줍기',
      '산에서 구조헬기 타고 내려오기',
    ],
    answer: '길가다가 로또 4등 당첨복권 줍기',
  },
  {
    question: '🖐️ 은우가 가장 좋아하는 숫자는? 🖐️',
    choices: ['7', '12', '29', '96', '2048'],
    answer: '7',
  },
  {
    question: '🧳 은우가 개발자 이전 직업 선택지 중 틀린 것은? 🧳',
    choices: [
      '군인',
      '중식당 사장님',
      '코딩 학원 선생님',
      '광고 회사 디자이너',
      '웹툰 작가',
    ],
    answer: '광고 회사 디자이너',
  },
  {
    question: '⌨️ 은우가 가장 좋아하는 회사는? ⌨️',
    choices: ['Airbnb', 'BucketPlace', 'JenniferSoft', 'KakaoPay', 'Monolith'],
    answer: 'KakaoPay',
  },
  {
    question: '📛 은우의 별명은 무엇일까요? (힌트: 세 글자) 📛',
    useInput: true,
    answer: '으뉴뉴',
  },
  {
    question: '🚌 은우는 평일에 도로 위에서 총 몇시간을 보낼까요? 🚌',
    choices: ['30분', '1시간', '2시간', '3시간', '4시간'],
    answer: '2시간',
  },
  {
    question: '📍 은우가 인천에서 가장 싫어하는 곳은? 📍',
    choices: [
      '어린이대공원',
      '월미도',
      '청라',
      '거북시장',
      '롯데마트',
    ],
    answer: '롯데마트',
  },
  {
    question: '👀 은우가 가장 자주 사용하는 이모지는? 👀',
    choices: ['🤔', '😎', '😇', '👊', '🔥'],
    answer: '😎',
  },
];

export default quiz;