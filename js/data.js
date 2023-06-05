

const qnaList = [
  {
    q: '1. 오늘은 새학기 등교 첫날, 처음 만난 친구들에게',
    a: [
      { answer: '먼저 다가가 인사한다', type: ['cow', 'tiger', 'dragon', 'chick'] },
      { answer: '말을 걸어주길 기다린다', type: ['mouse', 'rabbit', 'horse', 'snake', 'dog', 'monkey'] },

    ]
  },
  {
    q: '2. 친구가 나에게 취미를 물어본다 ',
    a: [
      { answer: '나는 영화보는 걸 좋아해', type: ['mouse', 'rabbit', 'tiger', 'monkey'] },
      { answer: '나는 책읽는 걸 좋아해', type: ['cow', 'horse', 'snake', 'dog'] },
      { answer: '나는 운동하는 걸 좋아해', type: ['sheep', 'dragon', 'chick', 'pig'] },
    ]
  },
  {
    q: '3. 기한이 오늘까지인 숙제, 당신은',
    a: [
      { answer: '전날까지 완벽하게 끝냈다', type: ['cow', 'rabbit', 'tiger', 'dog', 'monkey'] },
      { answer: '당일 아침 부랴부랴 준비한다', type: ['sheep', 'chick', 'pig'] },
      { answer: '숙제가 있는 줄도 몰랐다', type: ['mouse', 'horse', 'snake', 'dragon'] }
    ]
  },
  {
    q: '4. 필기 스타일은',
    a: [
      { answer: '삼색볼펜 한 자루면 충분해', type: ['cow', 'tiger', 'dragon' ] },
      { answer: '형형색색 형광펜을 사용한다', type: ['sheep', 'dog', 'monkey', 'chick', 'pig' ] },
      { answer: '연필이 최고', type: ['mouse', 'rabbit', 'horse', 'snake' ] },
    ]
  },
  {
    q: '5. 학교 공모전에 출전한 당신',
    a: [
      { answer: '학교 홍보 영상 공모전', type: ['cow', 'sheep', 'dog', 'dragon', 'chick' ] },
      { answer: '학교 로고 디자인 공모전', type: ['mouse', 'rabbit', 'horse', 'pig']},
      { answer: '창업아이디어 공모전', type: ['tiger', 'snake', 'monkey'] },
    ]
  },

  {
    q: '6. 당신의 수업 스타일은?',
    a: [
      { answer: '있는 듯 없는 듯 조용하게 듣는다', type: ['dragon', 'chick', 'pig' ] },
      { answer: '궁금한 건 바로바로 질문한다', type: ['mouse', 'rabbit', 'horse', 'dog' ] },
      { answer: '선생님과 아이컨택하며 듣는다', type: ['cow', 'sheep', 'tiger', 'snake', 'monkey' ] },
    ]
  },
  {
    q: '7. 나는 시험공부를',
    a: [
      { answer: '한 번에 몰아서 하는 편', type: ['cow', 'sheep', 'pig' ] },
      { answer: '배운 건 바로 복습하는 편', type: ['tiger', 'dragon', 'chick' ] },
        ]
  },
  {
    q: '8. 점심으로 이건 꼭 먹어야 해',
    a: [
      { answer: '돈까스', type: ['mouse', 'dragon', 'chick' ] },
      { answer: '떡볶이.', type: ['rabbit', 'tiger', 'horse', 'snake', 'dog', 'monkey' ] },
      { answer: '김치찌개', type: ['cow', 'sheep', 'pig' ] },
    ]
  },
  {
    q: '9. 수업이 없는 날, 나는',
    a: [
      { answer: '친구들과 약속을 잡아 놀러간다', type: ['sheep', 'mouse', 'snake', 'chick' ] },
      { answer: '침대에 누워 넷플릭스를 시청한다', type: ['cow', 'rabbit', 'horse', 'pig' ] },
      { answer: '하루종일 잠만 잔다', type: ['tiger', 'dog', 'monkey', 'dragon' ] },
    ]
  },
  {
    q: '10. 내가 좋아하는 과제 방식 ',
    a: [
      { answer: '다다익선! 여럿이서 하는 팀프로젝트', type: ['dragon', 'chick', 'pig'] },
      { answer: '혼자가 좋아. 개인 프로젝트', type: ['mouse', 'tiger', 'horse', 'snake' ] },
       ]
  },
  {
    q: '11. 산더미처럼 쌓인 과제, 이럴 때 나는 ',
    a: [
      { answer: '차근차근 하나씩 해결해간다', type: ['cow', 'dragon', 'chick', 'pig' ] },
      { answer: '여러 과제를 동시에 해결해간다', type: ['sheep', 'mouse', 'rabbit', 'horse', 'dog'] },
      ]
  },
  {
    q: '12. 나는 이런 사람!',
    a: [
      { answer: '넘치는 창의력을 주체할 수 없는 사람', type: ['rabbit', 'horse', 'dragon', 'chick' ] },
      { answer: '아이디어가 마구마구 샘솟는 사람', type: ['mouse', 'tiger', 'snake', 'dog', 'monkey'] },
      { answer: '도전을 두려워 하지 않는 사람', type: ['cow', 'sheep', 'pig'] },
    ]
  }
]

const infoList = [
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},
  {
    name: '디지털기술경영학과',
    desc: '뭐든지 잘하는 다재다능한 당신! 디기경에 적합한 인재이군요. 호서대학교 디지털기술경영학과에서 당신의 재능을 펼쳐보세요.'},     
]
