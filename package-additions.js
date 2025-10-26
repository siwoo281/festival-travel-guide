// 옥토버페스트와 카니발 패키지 정보 (script.js에 수동으로 추가할 내용)

// oktoberfest에 추가:
packageDetails: {
    productCode: 'FEST-DE-002',
    productName: '뮌헨 맥주 축제 6일',
    duration: '5박 6일',
    departure: ['2026년 9월 19일', '2026년 9월 26일', '2026년 10월 3일'],
    minPax: 12,
    maxPax: 25,
    included: [
        '왕복 항공권 (루프트한자/대한항공 이코노미석)',
        '4성급 호텔 5박 (2인 1실)',
        '조식 5회, 중식 3회',
        '옥토버페스트 텐트 예약 (2회)',
        '전 일정 한국인 가이드',
        '여행자 보험 (1억원)',
        '노이슈반슈타인 성 입장료',
        '뮌헨 시내 관광',
        '전용 차량'
    ],
    excluded: [
        '맥주 및 음식비 (텐트 내)',
        '개인 경비',
        '가이드/기사 팁 (1일 10유로)',
        '싱글룸 추가 요금 (50만원)'
    ],
    options: [
        { name: '싱글룸', price: 500000 },
        { name: '비즈니스석 업그레이드', price: 1500000 },
        { name: '디른들/레더호젠 의상 대여', price: 50000 }
    ],
    groupDiscount: [
        { people: '10-14명', discount: '5%' },
        { people: '15-19명', discount: '7%' },
        { people: '20명 이상', discount: '10%' }
    ]
}

// carnival에 추가:
packageDetails: {
    productCode: 'FEST-BR-003',
    productName: '리우 삼바 카니발 7일',
    duration: '6박 7일',
    departure: ['2026년 2월 13일', '2026년 2월 14일'],
    minPax: 10,
    maxPax: 20,
    included: [
        '왕복 항공권 (대한항공 직항 이코노미석)',
        '4-5성급 호텔 6박 (2인 1실, 코파카바나/이파네마)',
        '조식 6회, 중식 4회, 석식 3회',
        '삼보드로모 카니발 퍼레이드 티켓 (Sector 6)',
        '블로코 파티 가이드 투어',
        '전 일정 한국인 가이드',
        '여행자 보험 (1억원)',
        '코르코바도 예수상, 슈가로프 입장료',
        '전용 차량'
    ],
    excluded: [
        '카니발 의상 구매/대여',
        '개인 경비 및 음료',
        '가이드/기사 팁 (1일 20헤알)',
        '싱글룸 추가 (60만원)'
    ],
    options: [
        { name: '싱글룸', price: 600000 },
        { name: '삼보드로모 VIP석 업그레이드', price: 200000 },
        { name: '카니발 의상 패키지', price: 150000 },
        { name: '이과수 폭포 2일 연장', price: 800000 }
    ],
    groupDiscount: [
        { people: '10-14명', discount: '7%' },
        { people: '15명 이상', discount: '12%' }
    ]
}
