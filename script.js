// ===== 축제 데이터 정의 =====
const festivalsData = {
    tomatina: {
        id: 'tomatina',
        countryCode: "es",
        name: '라 토마티나',
        location: '스페인 발렌시아 부뇰',
        period: '매년 8월 마지막 수요일',
        duration: '5일',
        price: '₩2,200,000',
        nextDate: '2025-08-27',
        target: '20-30대 젊은 여행객',
        description: '세계에서 가장 큰 토마토 축제! 수만 명이 거리에서 토마토를 던지며 즐기는 독특한 스페인 전통 축제입니다.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.7285894982576!2d-0.7889!3d39.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0x40640856e73be20!2sBu%C3%B1ol%2C%20Valencia%2C%20Spain!5e0!3m2!1sen!2skr!4v1234567890',
        imageQuery: 'la tomatina festival spain',
        fallbackImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
        // 선택 항목: 항공 정보(카드에 표시될 수 있음)
        flightPrice: 850000,
        flightAirline: '이베리아/KLM',
        attractions: [
            {
                name: '라 토마티나 축제',
                description: '수만 명이 참가하는 토마토 던지기 축제',
                image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600'
            },
            {
                name: '발렌시아 구시가지',
                description: '중세 시대 건축물과 성당',
                image: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=600'
            },
            {
                name: '알부페라 국립공원',
                description: '아름다운 석호와 쌀 재배 지역',
                image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600'
            }
        ],
        budget: {
            '항공권': 800000,
            '숙박': 500000,
            '식사': 400000,
            '입장료': 200000,
            '교통': 200000,
            '기타': 100000
        },
        tips: {
            준비물: ['오래된 옷', '고글', '방수 신발', '수건'],
            주의사항: ['귀중품은 호텔에 보관', '토마토가 눈에 들어가지 않도록 주의', '축제 후 샤워 시설 이용'],
            추천: ['축제 전날 부뇰 도착', '파에야 맛보기', '발렌시아 해변 방문']
        },
        packageDetails: {
            included: [
                '왕복 항공권 (인천-마드리드-발렌시아, 이코노미석)',
                '4성급 호텔 4박 (조식 포함)',
                '라 토마티나 입장권 및 참가복',
                '발렌시아 시내 가이드 투어',
                '알부페라 국립공원 투어',
                '여행자 보험',
                '한국인 가이드',
                '공항-호텔 왕복 셔틀'
            ],
            excluded: [
                '개인 경비 및 쇼핑 비용',
                '선택 관광 프로그램',
                '점심/저녁 식사',
                '호텔 미니바',
                '여권 발급 비용'
            ],
            productCode: 'FEST-ES-001',
            departureDates: [
                '2025년 8월 23일 (토)',
                '2025년 8월 24일 (일)',
                '2025년 8월 25일 (월)'
            ],
            groupDiscount: {
                '4-6명': '1인당 30,000원 할인',
                '7-9명': '1인당 50,000원 할인',
                '10명 이상': '1인당 80,000원 할인'
            }
        }
    },
    oktoberfest: {
        id: 'oktoberfest',
        countryCode: "de",
        name: '옥토버페스트',
        location: '독일 뮌헨',
        period: '9월 말 - 10월 초 (약 16-18일)',
        duration: '6일',
        price: '₩2,800,000',
        nextDate: '2025-09-20',
        target: '30대 이상 성인',
        description: '세계 최대 맥주 축제! 전통 의상을 입고 거대한 텐트에서 맥주와 음식을 즐기는 독일의 대표 축제입니다.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7285894982576!2d11.5497!3d48.1316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sTheresienwiese%2C%20Munich%2C%20Germany!5e0!3m2!1sen!2skr!4v1234567890',
        imageQuery: 'oktoberfest munich germany',
        fallbackImage: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800',
        flightPrice: 950000,
        flightDuration: '12시간',
        flightAirline: '루프트한자/대한항공',
        attractions: [
            {
                name: '옥토버페스트 메인 텐트',
                description: '전통 맥주와 바이에른 음식',
                image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=600'
            },
            {
                name: '노이슈반슈타인 성',
                description: '동화 속 성의 모델',
                image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600'
            },
            {
                name: '마리엔 광장',
                description: '뮌헨 구시가지 중심',
                image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=600'
            }
        ],
        budget: {
            '항공권': 1000000,
            '숙박': 700000,
            '식사': 500000,
            '입장료': 300000,
            '교통': 200000,
            '기타': 100000
        },
        tips: {
            준비물: ['전통 의상 (디른들/레더호젠)', '편한 신발', '큰 가방'],
            주의사항: ['텐트 예약 필수', '현금 준비', '과음 주의'],
            추천: ['아침 일찍 방문', '전통 의상 대여', '주변 도시 방문']
        },
        packageDetails: {
            included: [
                '왕복 항공권 (인천-뮌헨, 이코노미석)',
                '5성급 호텔 5박 (조식 포함)',
                '옥토버페스트 입장권 2회',
                '맥주 텐트 예약석 & 맥주 2리터 쿠폰',
                '뮌헨 시내 가이드 투어',
                '노이슈반슈타인 성 당일 투어',
                '여행자 보험',
                '한국인 가이드'
            ],
            excluded: [
                '개인 경비 및 쇼핑 비용',
                '선택 관광 프로그램',
                '추가 맥주 및 식사',
                '호텔 미니바 및 룸서비스',
                '여권 발급 비용'
            ],
            productCode: 'FEST-DE-002',
            departureDates: [
                '2025년 9월 18일 (목)',
                '2025년 9월 25일 (목)',
                '2025년 10월 2일 (목)'
            ],
            groupDiscount: {
                '4-6명': '1인당 50,000원 할인',
                '7-9명': '1인당 80,000원 할인',
                '10명 이상': '1인당 100,000원 할인'
            }
        }
    },
    carnival: {
        id: 'carnival',
        countryCode: "br",
        name: '리우 카니발',
        location: '브라질 리우데자네이루',
        period: '매년 2월 (사순절 시작 전)',
        duration: '7일',
        price: '₩3,500,000',
        nextDate: '2026-02-14',
        target: '전 연령',
        description: '세계 최대 규모의 카니발! 화려한 삼바 퍼레이드와 거리 축제가 펼쳐지는 브라질의 대표 축제입니다.',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2285894982576!2d-43.2093!3d-22.9068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e58a085b7af%3A0x4d11e9a933d38ce3!2sRio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2skr!4v1234567890',
        imageQuery: 'rio carnival brazil',
        fallbackImage: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=800',
        flightPrice: 1800000,
        flightDuration: '24시간',
        flightAirline: '에미레이트/터키항공',
        attractions: [
            {
                name: '삼바드롬 퍼레이드',
                description: '화려한 삼바 학교들의 경연',
                image: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=600'
            },
            {
                name: '코르코바도 예수상',
                description: '리우의 상징적인 랜드마크',
                image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600'
            },
            {
                name: '코파카바나 해변',
                description: '세계적으로 유명한 해변',
                image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600'
            }
        ],
        budget: {
            '항공권': 1500000,
            '숙박': 800000,
            '식사': 500000,
            '입장료': 400000,
            '교통': 200000,
            '기타': 100000
        },
        tips: {
            준비물: ['가벼운 여름옷', '선크림', '모자', '카메라'],
            주의사항: ['소매치기 주의', '귀중품 최소 소지', '수분 보충'],
            추천: ['거리 파티 참가', '삼바 의상 체험', '해변 산책']
        },
        packageDetails: {
            included: [
                '왕복 항공권 (인천-상파울루-리우, 이코노미석)',
                '4성급 호텔 6박 (조식 포함)',
                '카니발 퍼레이드 지정석 입장권',
                '삼바드롬 VIP 구역 2일권',
                '코르코바도 예수상 투어',
                '슈가로프 마운틴 케이블카',
                '이파네마 비치 선셋 크루즈',
                '여행자 보험',
                '한국인 가이드'
            ],
            excluded: [
                '개인 경비 및 쇼핑 비용',
                '선택 관광 프로그램',
                '추가 식사 및 음료',
                '카니발 의상 대여',
                '호텔 미니바',
                '여권 및 비자 발급 비용'
            ],
            productCode: 'FEST-BR-003',
            departureDates: [
                '2026년 2월 12일 (목)',
                '2026년 2월 14일 (토)',
                '2026년 2월 16일 (월)'
            ],
            groupDiscount: {
                '4-6명': '1인당 70,000원 할인',
                '7-9명': '1인당 100,000원 할인',
                '10명 이상': '1인당 150,000원 할인'
            }
        }
    }
};

// ===== 시장 분석 데이터 =====
const marketAnalysis = {
    developmentReason: {
        trends: [
            {
                icon: 'fa-chart-line',
                title: '체험형 관광 수요 증가',
                description: 'MZ세대를 중심으로 SNS 인증샷, 특별한 경험을 중시하는 체험형 관광 수요가 연평균 25% 증가'
            },
            {
                icon: 'fa-users',
                title: '타겟층 명확한 니치 시장',
                description: '축제 중심 패키지는 20-40대 젊은층의 구매력과 여행 선호도가 높아 효과적인 마케팅 가능'
            },
            {
                icon: 'fa-globe',
                title: '차별화된 상품 경쟁력',
                description: '일반 유럽/남미 패키지와 달리 축제 시즌에 맞춘 테마 상품으로 높은 프리미엄 가격 책정 가능'
            },
            {
                icon: 'fa-calendar-check',
                title: '시즌성 활용 수익 극대화',
                description: '축제 특정 기간에 집중 판매로 성수기 매출 확보 및 연간 매출 안정화'
            }
        ],
        targetCustomers: [
            {
                segment: '주 타겟: 대학생 및 직장 초년생 (20-30대)',
                size: '50만명',
                spending: '250만원',
                reason: 'SNS 활동 활발, 새로운 경험 추구, 친구들과의 추억 만들기 중시'
            },
            {
                segment: '부 타겟: 직장인 및 신혼부부 (30-40대)',
                size: '30만명',
                spending: '350만원',
                reason: '여유로운 소득, 품질 중시, 문화체험 선호'
            }
        ]
    },
    profitability: {
        tomatina: {
            sellingPrice: 2200000,
            fixedCost: 500000,
            variableCost: 1390000,
            totalCost: 1890000,
            margin: 0.141,
            breakEven: 15,
            expectedCustomers: 120,
            annualRevenue: 37200000
        },
        oktoberfest: {
            sellingPrice: 2800000,
            fixedCost: 600000,
            variableCost: 1720000,
            totalCost: 2320000,
            margin: 0.171,
            breakEven: 12,
            expectedCustomers: 180,
            annualRevenue: 86400000
        },
        carnival: {
            sellingPrice: 3500000,
            fixedCost: 800000,
            variableCost: 2420000,
            totalCost: 3220000,
            margin: 0.223,
            breakEven: 10,
            expectedCustomers: 105,
            annualRevenue: 81900000
        }
    }
};

// ===== 기대 효과 데이터 =====
const expectedEffects = {
    financial: {
        year1: {
            revenue: 1140000000,
            profit: 210000000,
            margin: 0.181
        },
        year2Growth: 0.30,
        year3Growth: 0.50
    },
    marketing: {
        brandBuilding: '축제 전문 여행사 브랜드 구축',
        returnRate: 0.40,
        viral: 'SNS 바이럴 마케팅 효과',
        partnership: '여행 매체 및 블로거 협업'
    },
    strategic: {
        expansion: '계절별 상품 라인업 확대',
        b2b: '대학교/기업 단체 여행 수주',
        asiaExpansion: '아시아 축제 확장 계획',
        partnership: '현지 장기 파트너십 구축'
    }
};

// ===== 관광 동기 퀴즈 데이터 (간단 버전) =====
const quizData = {
    questions: [
        {
            id: 1,
            type: 'push',
            question: '여행에서 가장 원하는 것은 무엇인가요?',
            description: 'Push: 여행 동기',
            options: [
                { 
                    text: '일상 탈출과 강렬한 해방감', 
                    scores: { carnival: 3, tomatina: 3, 'up-alaaf': 3, sonkgran: 2, oktoberfest: 1, fringe: 1, tomorrowland: 3, 'oktober-alt': 2, holi: 2, 'harbin-ice': 1, 'cherry-blossom': 1, 'dia-de-muertos': 1, 'lantern-taiwan': 1 }
                },
                { 
                    text: '문화와 전통 체험', 
                    scores: { carnival: 1, tomatina: 1, 'up-alaaf': 2, sonkgran: 3, oktoberfest: 3, fringe: 3, tomorrowland: 0, 'oktober-alt': 3, holi: 3, 'harbin-ice': 2, 'cherry-blossom': 3, 'dia-de-muertos': 3, 'lantern-taiwan': 3 }
                },
                { 
                    text: '새로운 사람들과의 교류', 
                    scores: { carnival: 2, tomatina: 3, 'up-alaaf': 2, sonkgran: 3, oktoberfest: 3, fringe: 2, tomorrowland: 3, 'oktober-alt': 2, holi: 3, 'harbin-ice': 1, 'cherry-blossom': 1, 'dia-de-muertos': 2, 'lantern-taiwan': 2 }
                }
            ]
        },
        {
            id: 2,
            type: 'pull',
            question: '선호하는 축제 분위기는?',
            description: 'Pull: 축제 특성',
            options: [
                { 
                    text: '화려하고 열정적인 퍼레이드', 
                    scores: { carnival: 3, tomatina: 1, 'up-alaaf': 3, sonkgran: 1, oktoberfest: 2, fringe: 2, tomorrowland: 2, 'oktober-alt': 3, holi: 2, 'harbin-ice': 1, 'cherry-blossom': 1, 'dia-de-muertos': 2, 'lantern-taiwan': 1 }
                },
                { 
                    text: '신나는 음악과 댄스 파티', 
                    scores: { carnival: 3, tomatina: 2, 'up-alaaf': 2, sonkgran: 2, oktoberfest: 3, fringe: 1, tomorrowland: 3, 'oktober-alt': 2, holi: 1, 'harbin-ice': 0, 'cherry-blossom': 0, 'dia-de-muertos': 1, 'lantern-taiwan': 0 }
                },
                { 
                    text: '조용하고 감성적인 분위기', 
                    scores: { carnival: 0, tomatina: 0, 'up-alaaf': 0, sonkgran: 1, oktoberfest: 1, fringe: 2, tomorrowland: 0, 'oktober-alt': 1, holi: 1, 'harbin-ice': 3, 'cherry-blossom': 3, 'dia-de-muertos': 2, 'lantern-taiwan': 3 }
                }
            ]
        },
        {
            id: 3,
            type: 'pull',
            question: '어떤 활동을 가장 해보고 싶나요?',
            description: 'Pull: 활동 유형',
            options: [
                { 
                    text: '직접 참여하는 체험형 활동 (던지기, 물싸움 등)', 
                    scores: { carnival: 2, tomatina: 3, 'up-alaaf': 2, sonkgran: 3, oktoberfest: 2, fringe: 1, tomorrowland: 2, 'oktober-alt': 2, holi: 3, 'harbin-ice': 1, 'cherry-blossom': 0, 'dia-de-muertos': 1, 'lantern-taiwan': 2 }
                },
                { 
                    text: '공연 관람 및 예술 감상', 
                    scores: { carnival: 3, tomatina: 0, 'up-alaaf': 2, sonkgran: 1, oktoberfest: 2, fringe: 3, tomorrowland: 3, 'oktober-alt': 2, holi: 1, 'harbin-ice': 3, 'cherry-blossom': 2, 'dia-de-muertos': 2, 'lantern-taiwan': 2 }
                },
                { 
                    text: '현지 음식과 맥주 즐기기', 
                    scores: { carnival: 2, tomatina: 2, 'up-alaaf': 3, sonkgran: 2, oktoberfest: 3, fringe: 2, tomorrowland: 1, 'oktober-alt': 3, holi: 1, 'harbin-ice': 1, 'cherry-blossom': 2, 'dia-de-muertos': 2, 'lantern-taiwan': 1 }
                }
            ]
        },
        {
            id: 4,
            type: 'pull',
            question: '선호하는 여행 시즌은?',
            description: 'Pull: 계절 및 기후',
            options: [
                { 
                    text: '따뜻한 봄/여름 (3~8월)', 
                    scores: { carnival: 1, tomatina: 3, 'up-alaaf': 0, sonkgran: 3, oktoberfest: 0, fringe: 3, tomorrowland: 3, 'oktober-alt': 0, holi: 3, 'harbin-ice': 0, 'cherry-blossom': 3, 'dia-de-muertos': 0, 'lantern-taiwan': 1 }
                },
                { 
                    text: '시원한 가을/겨울 (9~2월)', 
                    scores: { carnival: 3, tomatina: 0, 'up-alaaf': 3, sonkgran: 0, oktoberfest: 3, fringe: 0, tomorrowland: 0, 'oktober-alt': 3, holi: 0, 'harbin-ice': 3, 'cherry-blossom': 0, 'dia-de-muertos': 3, 'lantern-taiwan': 2 }
                },
                { 
                    text: '계절 상관없이 축제만 즐길 수 있다면 OK', 
                    scores: { carnival: 2, tomatina: 2, 'up-alaaf': 2, sonkgran: 2, oktoberfest: 2, fringe: 2, tomorrowland: 2, 'oktober-alt': 2, holi: 2, 'harbin-ice': 2, 'cherry-blossom': 2, 'dia-de-muertos': 2, 'lantern-taiwan': 2 }
                }
            ]
        },
        {
            id: 5,
            type: 'push',
            question: '여행 예산은 어느 정도 생각하시나요?',
            description: 'Push: 예산',
            options: [
                { 
                    text: '200만원 이하 (가성비 중시)', 
                    scores: { carnival: 0, tomatina: 2, 'up-alaaf': 1, sonkgran: 3, oktoberfest: 0, fringe: 1, tomorrowland: 0, 'oktober-alt': 1, holi: 3, 'harbin-ice': 2, 'cherry-blossom': 3, 'dia-de-muertos': 1, 'lantern-taiwan': 3 }
                },
                { 
                    text: '200~300만원 (적당한 수준)', 
                    scores: { carnival: 1, tomatina: 3, 'up-alaaf': 3, sonkgran: 1, oktoberfest: 2, fringe: 3, tomorrowland: 1, 'oktober-alt': 3, holi: 1, 'harbin-ice': 3, 'cherry-blossom': 1, 'dia-de-muertos': 3, 'lantern-taiwan': 2 }
                },
                { 
                    text: '300만원 이상 (프리미엄 경험)', 
                    scores: { carnival: 3, tomatina: 0, 'up-alaaf': 2, sonkgran: 0, oktoberfest: 3, fringe: 2, tomorrowland: 3, 'oktober-alt': 2, holi: 0, 'harbin-ice': 1, 'cherry-blossom': 0, 'dia-de-muertos': 1, 'lantern-taiwan': 0 }
                }
            ]
        }
    ],
    results: {
        carnival: {
            name: '리우 카니발',
            icon: '🎭',
            reason: '해방감과 뜨거운 에너지를 원하는 당신에게!',
            description: '삼바 퍼레이드와 거리 파티로 평생 잊지 못할 경험을 만드세요.',
            features: ['삼바 퍼레이드', '거리 파티', '해변 휴식']
        },
        tomatina: {
            name: '라 토마티나',
            icon: '🍅',
            reason: '독특한 체험과 자유로운 분위기를 좋아하는 당신에게!',
            description: '토마토 던지기로 스트레스를 날리고 친구들과 추억을 쌓으세요.',
            features: ['토마토 던지기', '젊은 분위기', '발렌시아 미식']
        },
        oktoberfest: {
            name: '옥토버페스트',
            icon: '🍺',
            reason: '전통·음식·음악을 여유롭게 즐기고 싶은 당신에게!',
            description: '맥주와 전통음악, 현지 문화가 주는 풍성한 즐거움을 느껴보세요.',
            features: ['전통 맥주·음식', '라이브 음악', '뮌헨 관광']
        },
        'harbin-ice': {
            name: '하얼빈 빙등제',
            icon: '❄️',
            reason: '환상적인 겨울 왕국을 경험하고 싶은 당신에게!',
            description: '거대한 얼음 조각과 야간 조명쇼로 동화 같은 순간을 만끽하세요.',
            features: ['얼음 조각', '야간 조명', '겨울 축제']
        },
        'cherry-blossom': {
            name: '벚꽃 축제',
            icon: '🌸',
            reason: '감성적이고 평화로운 봄을 만끽하고 싶은 당신에게!',
            description: '핑크빛 벚꽃 터널을 산책하며 일본의 봄을 느껴보세요.',
            features: ['벚꽃 구경', '피크닉', '전통 문화']
        },
        fringe: {
            name: '에든버러 프린지',
            icon: '🎪',
            reason: '예술과 문화를 깊이 있게 즐기고 싶은 당신에게!',
            description: '3000개 이상의 공연과 거리 퍼포먼스를 감상하세요.',
            features: ['공연 관람', '거리 예술', '문화 체험']
        },
        sonkgran: {
            name: '송크란 물축제',
            icon: '💦',
            reason: '신나는 물싸움으로 더위를 날리고 싶은 당신에게!',
            description: '태국 새해를 맞아 도시 전체가 물 싸움으로 변합니다.',
            features: ['워터 배틀', '거리 축제', '태국 문화']
        },
        'oktober-alt': {
            name: '카니발 데 쾰른',
            icon: '🎉',
            reason: '화려한 독일 카니발을 경험하고 싶은 당신에게!',
            description: '형형색색 의상과 음악으로 가득한 유럽의 축제를 즐기세요.',
            features: ['카니발 퍼레이드', '전통 의상', '독일 문화']
        },
        'dia-de-muertos': {
            name: '죽은 자의 날',
            icon: '💀',
            reason: '독특한 멕시코 전통문화를 체험하고 싶은 당신에게!',
            description: '화려한 해골 분장과 제단으로 고인을 기리는 축제입니다.',
            features: ['전통 제단', '해골 분장', '멕시코 문화']
        },
        holi: {
            name: '홀리 축제',
            icon: '🎨',
            reason: '컬러풀한 색가루 파티를 즐기고 싶은 당신에게!',
            description: '색색의 가루를 뿌리며 봄을 기념하는 인도의 축제입니다.',
            features: ['색가루 던지기', '봄 축제', '인도 전통']
        },
        tomorrowland: {
            name: '투모로우랜드',
            icon: '🎵',
            reason: '세계 최고의 EDM 페스티벌을 경험하고 싶은 당신에게!',
            description: '300명 이상의 DJ와 환상적인 무대를 만나세요.',
            features: ['EDM 공연', '대형 무대', '음악 페스티벌']
        },
        'up-alaaf': {
            name: '마르디 그라',
            icon: '🎺',
            reason: '미국 남부의 열정적인 축제를 즐기고 싶은 당신에게!',
            description: '재즈와 퍼레이드가 가득한 뉴올리언스의 축제입니다.',
            features: ['재즈 음악', '퍼레이드', '남부 음식']
        },
        'lantern-taiwan': {
            name: '핑시 천등 축제',
            icon: '🏮',
            reason: '감동적인 천등 날리기를 체험하고 싶은 당신에게!',
            description: '소원을 담은 천등이 밤하늘을 수놓는 환상적인 순간을 경험하세요.',
            features: ['천등 날리기', '소원 빌기', '대만 전통']
        }
    }
};

let currentQuestionIndex = 0;
let quizAnswers = [];
let festivalScores = {};

function initFestivalScores() {
    festivalScores = {
        carnival: 0,
        tomatina: 0,
        oktoberfest: 0,
        'harbin-ice': 0,
        'cherry-blossom': 0,
        fringe: 0,
        sonkgran: 0,
        'oktober-alt': 0,
        'dia-de-muertos': 0,
        holi: 0,
        tomorrowland: 0,
        'up-alaaf': 0,
        'lantern-taiwan': 0
    };
}

// 페이지 로드 시 초기화
initFestivalScores();

function startQuiz() {
    currentQuestionIndex = 0;
    quizAnswers = [];
    initFestivalScores();
    
    document.getElementById('quizIntro').style.display = 'none';
    document.getElementById('quizQuestions').style.display = 'block';
    
    showQuestion();
}

function showQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;
    
    document.getElementById('quizProgress').style.width = progress + '%';
    document.getElementById('quizProgress').textContent = `${currentQuestionIndex + 1}/${quizData.questions.length}`;
    
    const questionCard = document.getElementById('questionCard');
    const typeLabel = question.type === 'push' ? 
        '<span class="badge bg-warning">Push 요인</span>' : 
        '<span class="badge bg-info">Pull 요인</span>';
    
    questionCard.innerHTML = `
        <div class="question-header">
            ${typeLabel}
            <h3 class="mt-2">Q${currentQuestionIndex + 1}. ${question.question}</h3>
            <p class="text-muted">${question.description}</p>
        </div>
        <div class="options-list">
            ${question.options.map((opt, idx) => `
                <label class="option-item ${quizAnswers[currentQuestionIndex] === idx ? 'selected' : ''}">
                    <input type="radio" name="q${question.id}" value="${idx}" 
                           ${quizAnswers[currentQuestionIndex] === idx ? 'checked' : ''}
                           onchange="selectAnswer(${idx})">
                    <span class="option-text">${opt.text}</span>
                    <i class="fas fa-check-circle"></i>
                </label>
            `).join('')}
        </div>
    `;
    
    // 버튼 상태 업데이트
    document.getElementById('prevBtn').style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    document.getElementById('nextBtn').textContent = 
        currentQuestionIndex === quizData.questions.length - 1 ? '결과 보기' : '다음';
    document.getElementById('nextBtn').innerHTML = 
        currentQuestionIndex === quizData.questions.length - 1 ? 
        '<i class="fas fa-flag-checkered"></i> 결과 보기' : 
        '다음 <i class="fas fa-chevron-right"></i>';
}

function selectAnswer(optionIndex) {
    quizAnswers[currentQuestionIndex] = optionIndex;
    
    // 선택된 옵션 스타일 업데이트
    document.querySelectorAll('.option-item').forEach((item, idx) => {
        if (idx === optionIndex) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

function nextQuestion() {
    if (quizAnswers[currentQuestionIndex] === undefined) {
        Toast.warning('답변을 선택해주세요!');
        return;
    }
    
    // 점수 계산
    const question = quizData.questions[currentQuestionIndex];
    const selectedOption = question.options[quizAnswers[currentQuestionIndex]];
    
    // 모든 축제에 대해 점수 추가
    for (const festival in selectedOption.scores) {
        if (festivalScores.hasOwnProperty(festival)) {
            festivalScores[festival] += selectedOption.scores[festival];
        }
    }
    
    if (currentQuestionIndex < quizData.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        // 이전 질문의 점수 차감
        const question = quizData.questions[currentQuestionIndex];
        if (quizAnswers[currentQuestionIndex] !== undefined) {
            const selectedOption = question.options[quizAnswers[currentQuestionIndex]];
            
            // 모든 축제에 대해 점수 차감
            for (const festival in selectedOption.scores) {
                if (festivalScores.hasOwnProperty(festival)) {
                    festivalScores[festival] -= selectedOption.scores[festival];
                }
            }
        }
        
        currentQuestionIndex--;
        showQuestion();
    }
}

function showResult() {
    document.getElementById('quizQuestions').style.display = 'none';
    
    // 최고 점수 축제 찾기
    let maxScore = 0;
    let recommendedFestival = 'carnival';
    
    for (const [festival, score] of Object.entries(festivalScores)) {
        if (score > maxScore) {
            maxScore = score;
            recommendedFestival = festival;
        }
    }
    
    const result = quizData.results[recommendedFestival];
    const allFestivals = getAllFestivals();
    const festivalData = allFestivals[recommendedFestival];
    
    const resultContainer = document.getElementById('quizResult');
    const maxPossible = quizData.questions.length * 3;
    
    // 점수 순으로 정렬하여 상위 5개만 표시
    const sortedScores = Object.entries(festivalScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    const list = sortedScores.map(([festival, score]) => {
        const pct = Math.round((score / maxPossible) * 100);
        const festivalResult = quizData.results[festival];
        if (festivalResult) {
            return `<li>${festivalResult.icon} ${festivalResult.name}: <strong>${pct}%</strong></li>`;
        }
        return '';
    }).filter(item => item).join('');

    resultContainer.innerHTML = `
        <div class="result-card">
            <div class="result-icon">${result.icon}</div>
            <h2 class="result-title">${result.name}</h2>
            <p class="result-reason">${result.reason}</p>
            <p class="result-description">${result.description}</p>
            <ul class="mt-3" style="text-align:left; max-width:520px; margin:0 auto;">
                ${result.features.map(f => `<li><i class='fas fa-check text-success'></i> ${f}</li>`).join('')}
            </ul>
            <div class="mt-4">
                <small class="text-muted">TOP 5 추천 축제</small>
                <ul class="mt-2" style="list-style:none; padding-left:0;">${list}</ul>
            </div>
            <div class="result-actions mt-4">
                <button class="btn btn-primary btn-lg" onclick="showFestivalDetail('${recommendedFestival}')">
                    <i class="fas fa-info-circle"></i> 자세히 보기
                </button>
                <button class="btn btn-outline-secondary" onclick="restartQuiz()">
                    다시 하기
                </button>
            </div>
        </div>
    `;
    
    resultContainer.style.display = 'block';
    
    // 결과 섹션으로 스크롤
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function restartQuiz() {
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizIntro').style.display = 'block';
}

// ===== 페이지 로드 시 초기화 =====
document.addEventListener('DOMContentLoaded', async function() {
    try {
        logger.info('페이지 로드 완료!');
        logger.debug('festivalsData:', Object.keys(festivalsData));
        logger.debug('FESTIVAL_SOURCE_CONFIG:', window.FESTIVAL_SOURCE_CONFIG);
        // 메인 히어로 배경을 축제 분위기로 동적 설정 (API 실패 시 기본 CSS 이미지 유지)
        try { setHeroFestivalBackground(); } catch(e) { logger.warn('히어로 배경 설정 실패:', e?.message || e); }
        
        // 외부/로컬 데이터 소스에서 추가 축제 로드 후 카드 렌더링
        await tryLoadExternalFestivals();
        
        // 카드 로딩
        await loadFestivalCards();
        
        setupModalHandlers();
        logger.success('초기화 완료!');
    } catch (err) {
        logger.error('초기화 중 오류:', err);
        logger.debug('오류 스택:', err.stack);
        showErrorOverlay(err);
    }
});

function showErrorOverlay(error) {
    try {
        // 기존 오버레이가 있으면 제거
        const existing = document.querySelector('.error-overlay');
        if (existing) existing.remove();
        
        const overlay = document.createElement('div');
        overlay.className = 'error-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 16px 24px;
            z-index: 9999;
            font-family: 'Pretendard Variable', sans-serif;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: space-between;
            animation: slideDown 0.3s ease-out;
        `;
        
        const content = document.createElement('div');
        content.style.flex = '1';
        
        const title = document.createElement('div');
        title.style.cssText = 'font-weight: 600; font-size: 14px; margin-bottom: 4px;';
        title.innerHTML = '⚠️ 일시적인 오류가 발생했습니다';
        
        const msg = document.createElement('div');
        msg.style.cssText = 'font-size: 12px; opacity: 0.9;';
        
        // 사용자 친화적 메시지
        const friendlyMessage = getFriendlyErrorMessage(error);
        msg.textContent = friendlyMessage;
        
        content.appendChild(title);
        content.appendChild(msg);
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = `
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s;
        `;
        closeBtn.onmouseover = () => closeBtn.style.background = 'rgba(255,255,255,0.3)';
        closeBtn.onmouseout = () => closeBtn.style.background = 'rgba(255,255,255,0.2)';
        closeBtn.onclick = () => overlay.remove();
        
        overlay.appendChild(content);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);
        
        // 10초 후 자동 제거
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.style.animation = 'slideUp 0.3s ease-out';
                setTimeout(() => overlay.remove(), 300);
            }
        }, 10000);
        
        // 개발 모드에서만 상세 로그
        if (logger.isDevelopment) {
            logger.error('상세 오류:', error);
            logger.debug('스택:', error?.stack);
        }
    } catch (e) {
        logger.error('에러 오버레이 표시 실패:', e);
    }
}

/**
 * 사용자 친화적 에러 메시지 생성
 */
function getFriendlyErrorMessage(error) {
    const errorStr = error?.message || String(error);
    
    if (errorStr.includes('fetch') || errorStr.includes('network')) {
        return '네트워크 연결을 확인해주세요. 잠시 후 다시 시도해주세요.';
    }
    if (errorStr.includes('timeout')) {
        return '요청 시간이 초과되었습니다. 페이지를 새로고침해주세요.';
    }
    if (errorStr.includes('API')) {
        return '데이터를 불러오는 중 문제가 발생했습니다.';
    }
    
    return '페이지를 새로고침하거나 잠시 후 다시 시도해주세요.';
}

// CSS 애니메이션 추가
if (!document.querySelector('#error-animations')) {
    const style = document.createElement('style');
    style.id = 'error-animations';
    style.textContent = `
        @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ===== 히어로 섹션 배경 동적 설정 =====
async function setHeroFestivalBackground() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    const CACHE_KEY = 'hero-bg-cache-v1';
    const TTL_MS = 12 * 60 * 60 * 1000; // 12시간 유지
    const FALLBACK_BASE = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30'; // fireworks

    // 뷰포트에 따른 크기 선택
    const vw = window.innerWidth || 1200;
    const targetW = vw >= 1200 ? 1600 : (vw >= 768 ? 1280 : 800);
    const lowW = 480;

    const buildUrl = (base, w, q = 70) => `${base.split('?')[0]}?w=${w}&auto=format&q=${q}&fit=crop`;

    // 캐시 확인
    try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
        if (cached && cached.base && (Date.now() - (cached.ts || 0) < TTL_MS)) {
            const lowUrl = buildUrl(cached.base, lowW, 60);
            const highUrl = buildUrl(cached.base, targetW, 72);
            // 저해상도 먼저 적용
            hero.style.backgroundImage = `url('${lowUrl}')`;
            // 고해상도 프리로드 후 교체
            const img = new Image();
            img.onload = () => {
                hero.style.backgroundImage = `url('${highUrl}')`;
            };
            img.src = highUrl;
            return; // 캐시 사용 종료
        }
    } catch {}

    // 새 이미지 로드 (불꽃놀이 중심 키워드)
    const fallback = buildUrl(FALLBACK_BASE, targetW, 75);
    try {
        const fetched = await fetchUnsplashImage('fireworks festival night celebration crowd', fallback);
        const base = (fetched || fallback).split('?')[0];
        const lowUrl = buildUrl(base, lowW, 60);
        const highUrl = buildUrl(base, targetW, 72);

        // 점진적 로딩
        hero.style.backgroundImage = `url('${lowUrl}')`;
        const img = new Image();
        img.onload = () => {
            hero.style.backgroundImage = `url('${highUrl}')`;
        };
        img.src = highUrl;

        // 캐시 저장(기준 URL만 저장하여 기기별 크기 재생성)
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ base, ts: Date.now() }));
        } catch {}
    } catch (e) {
        logger.warn('⚠️ 히어로 이미지 로드 실패, 기본 이미지 유지:', e?.message || e);
        hero.style.backgroundImage = `url('${fallback}')`;
    }
}

// ===== 축제 카드 로딩 =====
async function loadFestivalCards() {
    logger.debug('🔍 카드 로딩 시작...');
    const container = document.getElementById('festivalCards');
    
    if (!container) {
        logger.error('❌ festivalCards 컨테이너를 찾을 수 없습니다!');
        return;
    }
    
    logger.debug('✅ 컨테이너 찾음:', container);
    
    // 스켈레톤 UI 표시
    showSkeletonCards(container);

    try {
        let count = 0;
        let skipped = 0;
        const allFestivals = getAllFestivals();
        const total = Object.keys(allFestivals).length;
        logger.debug('📦 전체 축제 목록:', total, '개', allFestivals);

        // 스켈레톤 제거
        container.innerHTML = '';

        for (const [key, festival] of Object.entries(allFestivals)) {
            try {
                logger.debug(`📝 카드 생성 중 [${count + skipped + 1}/${total}]: ${festival.name}`);
                const imageUrl = await fetchUnsplashImage(festival.imageQuery, festival.fallbackImage);
                const finalImage = imageUrl || optimizeFallbackImage(festival.fallbackImage);
                const card = createFestivalCard(festival, finalImage);
                container.insertAdjacentHTML('beforeend', card);
                count++;
            } catch (e) {
                skipped++;
                logger.warn(`⚠️ 카드 생성 실패(스킵): ${festival?.id || key} -`, e?.message || e);
                continue;
            }
        }
        logger.debug(`✅ 카드 생성 완료: ${count}개, 스킵: ${skipped}개 / 총 ${total}개`);

        // 이미지 Lazy Loading 적용
        initLazyLoadImages();
    } catch (error) {
        logger.error('❌ 카드 로딩 에러:', error);
        container.innerHTML = '<div class="col-12 text-center text-danger">축제 정보를 불러올 수 없습니다.</div>';
    }
}

// 스켈레톤 카드 표시
function showSkeletonCards(container, count = 6) {
    const skeletonHTML = `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="skeleton-card">
                <div class="skeleton-image"></div>
                <div class="skeleton-content">
                    <div class="skeleton-line title"></div>
                    <div class="skeleton-line subtitle"></div>
                    <div class="skeleton-line text"></div>
                    <div class="skeleton-line text short"></div>
                </div>
            </div>
        </div>
    `;
    container.innerHTML = skeletonHTML.repeat(count);
}

// 이미지 Lazy Loading 초기화
function initLazyLoadImages() {
    const images = document.querySelectorAll('.festival-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const imageDiv = entry.target;
                    loadBackgroundImage(imageDiv);
                    observer.unobserve(imageDiv);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(loadBackgroundImage);
    }
}

function loadBackgroundImage(imageDiv) {
    const bgImage = imageDiv.style.backgroundImage;
    if (!bgImage || bgImage === 'none') return;
    
    imageDiv.classList.add('loading');
    
    // Extract URL from background-image style
    const url = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/)?.[1];
    if (!url) return;
    
    const img = new Image();
    img.onload = () => {
        imageDiv.classList.remove('loading');
        imageDiv.classList.add('loaded');
    };
    img.onerror = () => {
        imageDiv.classList.remove('loading');
    };
    img.src = url;
}

// ===== 외부/로컬 데이터 로딩 =====
window.dynamicFestivals = window.dynamicFestivals || {};

function getAllFestivals() {
    // 원본 + 동적 소스 병합(기존 키 우선 유지)
    return { ...window.dynamicFestivals, ...festivalsData };
}

async function tryLoadExternalFestivals() {
    const cfg = window.FESTIVAL_SOURCE_CONFIG || {};
    logger.debug('🔧 외부 데이터 로드 시작, 설정:', cfg);
    const merged = {};

    // 1) 로컬 CSV
    if (cfg.enableLocalCsv && cfg.localCsvUrl) {
        logger.debug(`📂 로컬 CSV 시도: ${cfg.localCsvUrl}`);
        try {
            const fromLocal = await loadFestivalsFromCsv(cfg.localCsvUrl);
            Object.assign(merged, indexById(fromLocal));
            logger.debug(`📄 로컬 CSV에서 ${fromLocal.length}개 축제 로드 완료`, fromLocal);
        } catch (e) {
            logger.error('❌ 로컬 CSV 로드 실패:', e);
        }
    } else {
        logger.debug('⏭️ 로컬 CSV 비활성화 또는 URL 미지정');
    }

    // 2) Google Sheets CSV
    if (cfg.enableSheet && cfg.sheetCsvUrl) {
        try {
            const fromSheet = await loadFestivalsFromCsv(cfg.sheetCsvUrl, cfg.sheetFieldMap);
            Object.assign(merged, indexById(fromSheet));
            logger.debug(`🧾 Google Sheets에서 ${fromSheet.length}개 축제 로드`);
        } catch (e) {
            logger.warn('시트 CSV 로드 실패:', e.message);
        }
    }

    // 3) 한국관광공사 TourAPI (옵션)
    if (cfg.enableKTO && typeof window.loadFestivalsFromKTO === 'function') {
        try {
            const fromKto = await window.loadFestivalsFromKTO();
            Object.assign(merged, indexById(fromKto));
            logger.debug(`🇰🇷 TourAPI에서 ${fromKto.length}개 축제 로드`);
        } catch (e) {
            logger.warn('TourAPI 로드 실패(키/프록시/CORS 확인):', e.message);
        }
    }

    logger.debug('✅ 외부 데이터 병합 완료:', Object.keys(merged).length, '개');
    window.dynamicFestivals = merged;
}

function indexById(list) {
    return (list || []).reduce((acc, f) => { if (f.id) acc[f.id] = f; return acc; }, {});
}

async function loadFestivalsFromCsv(url, fieldMap) {
    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(to);
    if (!res.ok) throw new Error(`CSV 요청 실패: ${res.status}`);
    const csv = await res.text();
    const rows = parseCsv(csv);
    if (!rows.length) return [];
    const header = rows[0];
    const body = rows.slice(1);
    const headerIdx = header.reduce((m, h, i) => { m[h.trim()] = i; return m; }, {});
    const map = fieldMap || {
        id: 'id', name: 'name', location: 'location', period: 'period', duration: 'duration',
        priceKRW: 'priceKRW', description: 'description', countryCode: 'countryCode',
        imageQuery: 'imageQuery', fallbackImage: 'fallbackImage', mapUrl: 'mapUrl',
        // 확장 필드 (선택): 항공 정보
        flightPrice: 'flightPrice', flightDuration: 'flightDuration', flightAirline: 'flightAirline'
    };
    const getVal = (row, key) => {
        const col = map[key];
        const idx = headerIdx[col];
        return idx !== undefined ? (row[idx] || '').toString().trim() : '';
    };
    const list = body.map(row => normalizeFestivalRecord({
        id: getVal(row, 'id'),
        name: getVal(row, 'name'),
        location: getVal(row, 'location'),
        period: getVal(row, 'period'),
        duration: getVal(row, 'duration'),
        priceKRW: getVal(row, 'priceKRW'),
        description: getVal(row, 'description'),
        countryCode: getVal(row, 'countryCode'),
        imageQuery: getVal(row, 'imageQuery'),
        fallbackImage: getVal(row, 'fallbackImage'),
        mapUrl: getVal(row, 'mapUrl'),
        // 선택 항목: 항공 정보 전달
        flightPrice: getVal(row, 'flightPrice'),
        flightDuration: getVal(row, 'flightDuration'),
        flightAirline: getVal(row, 'flightAirline')
    })).filter(Boolean);
    return list;
}

function normalizeFestivalRecord(r) {
    // 필수값: name/location 최소
    const name = r.name || '';
    if (!name) return null;
    const id = (r.id || slugify(name));
    const durationDays = toInt(r.duration) || 5;
    const price = normalizePrice(r.priceKRW);
    const imageQuery = r.imageQuery || `${name} festival`;
    const fallbackImage = r.fallbackImage || `https://source.unsplash.com/featured/?festival,${encodeURIComponent(name)}`;
    const countryCode = (r.countryCode || '').toLowerCase() || undefined;
    
    // 축제별 상세 데이터 추가
    const detailsMap = getDetailedFestivalData();
    const details = detailsMap[id] || {};
    
    return {
        id,
        countryCode,
        name,
        location: r.location || '',
        period: r.period || '',
        duration: `${durationDays}일`,
        price: price,
        target: details.target || '전 연령',
        description: r.description || details.description || `${name} 관련 대표 축제입니다.`,
        mapUrl: r.mapUrl || 'https://www.google.com/maps/embed',
        imageQuery,
        fallbackImage,
        attractions: details.attractions || [],
        budget: details.budget || {
            '항공권': 700000,
            '숙박': 500000,
            '식사': 300000,
            '입장료': 200000,
            '교통': 200000,
            '기타': 100000
        },
        tips: details.tips || { 준비물: [], 주의사항: [], 추천: [] },
        packageDetails: details.packageDetails || null,
        // 선택: 항공 정보(있을 경우 카드 위젯 표시)
        flightPrice: r.flightPrice ? toInt(r.flightPrice) : undefined,
        flightDuration: r.flightDuration || undefined,
        flightAirline: r.flightAirline || undefined
    };
}

// 각 축제별 상세 정보 데이터베이스
function getDetailedFestivalData() {
    return {
        'harbin-ice': {
            target: '가족 단위, 사진 애호가',
            description: '세계 최대 얼음 조각 축제. 태양도와 빙설대세계에서 거대한 얼음 조각과 야간 조명쇼를 감상하세요.',
            attractions: [
                {
                    name: '빙설대세계 (Ice and Snow World)',
                    description: '세계 최대 규모의 얼음 조각 테마파크, 야간 LED 조명쇼',
                    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600'
                },
                {
                    name: '태양도 국제설조예술박람회',
                    description: '정교한 눈 조각 작품들의 전시장',
                    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600'
                },
                {
                    name: '자오린 공원',
                    description: '얼음 등불 축제와 전통 얼음 조각',
                    image: 'https://images.unsplash.com/photo-1548536114-b35ff5c6eb08?w=600'
                }
            ],
            budget: {
                '항공권': 600000,
                '숙박': 400000,
                '식사': 300000,
                '입장료': 400000,
                '교통': 300000,
                '기타': 200000
            },
            tips: {
                준비물: ['방한복', '핫팩', '방수 부츠', '장갑', '목도리'],
                주의사항: ['영하 20-30도 추위 대비', '카메라 배터리 여분 준비', '미끄러운 얼음길 주의'],
                추천: ['야간 조명쇼 필수 관람', '얼음 미끄럼틀 체험', '현지 만두 요리 시식']
            },
            packageDetails: {
                included: [
                    '왕복 항공권 (인천-하얼빈, 이코노미석)',
                    '4성급 호텔 4박 (조식 포함)',
                    '빙설대세계 입장권',
                    '태양도 설조박람회 입장권',
                    '자오린 공원 입장권',
                    '하얼빈 시내 투어',
                    '여행자 보험',
                    '한국인 가이드'
                ],
                excluded: [
                    '개인 경비',
                    '점심/저녁 식사',
                    '선택 관광',
                    '중국 비자 발급 비용'
                ],
                productCode: 'FEST-CN-001',
                departureDates: ['2026년 1월 5일', '2026년 1월 12일', '2026년 1월 19일'],
                groupDiscount: {
                    '4-6명': '1인당 40,000원 할인',
                    '7-9명': '1인당 60,000원 할인',
                    '10명 이상': '1인당 90,000원 할인'
                }
            }
        },
        'cherry-blossom': {
            target: '20-40대 여성, 커플',
            description: '벚꽃 만개 시즌에 즐기는 일본 대표 봄 축제. 우에노공원과 철학의 길에서 핑크빛 벚꽃 터널을 산책하세요.',
            attractions: [
                {
                    name: '우에노 공원 (도쿄)',
                    description: '1200그루의 벚나무, 도쿄 최고의 벚꽃 명소',
                    image: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?w=600'
                },
                {
                    name: '철학의 길 (교토)',
                    description: '2km 벚꽃 터널, 교토의 낭만적인 산책로',
                    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600'
                },
                {
                    name: '하나미 (꽃구경) 파티',
                    description: '벚꽃 아래 피크닉과 야간 조명',
                    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600'
                }
            ],
            budget: {
                '항공권': 500000,
                '숙박': 600000,
                '식사': 400000,
                '입장료': 100000,
                '교통': 200000,
                '기타': 200000
            },
            tips: {
                준비물: ['편한 산책화', '카메라', '돗자리', '가벼운 외투'],
                주의사항: ['개화 시기 변동 가능', '주말 혼잡', '야간 온도 낮음'],
                추천: ['아침 일찍 방문', '야간 라이트업 관람', '벚꽃 관련 디저트 체험']
            },
            packageDetails: {
                included: [
                    '왕복 항공권 (인천-도쿄, 이코노미석)',
                    '3성급 호텔 4박 (조식 포함)',
                    '도쿄-교토 신칸센 왕복',
                    '우에노 공원 가이드 투어',
                    '교토 철학의 길 투어',
                    'JR 패스 4일권',
                    '여행자 보험'
                ],
                excluded: [
                    '개인 경비',
                    '점심/저녁 식사',
                    '추가 교통비',
                    '여권 발급 비용'
                ],
                productCode: 'FEST-JP-001',
                departureDates: ['2026년 3월 25일', '2026년 4월 1일', '2026년 4월 5일'],
                groupDiscount: {
                    '4-6명': '1인당 30,000원 할인',
                    '7-9명': '1인당 50,000원 할인',
                    '10명 이상': '1인당 80,000원 할인'
                }
            }
        },
        'fringe': {
            target: '예술 애호가, 30-50대',
            description: '세계 최대 예술 축제. 3000개 이상의 공연과 거리 퍼포먼스가 펼쳐지는 문화의 향연.',
            attractions: [
                {
                    name: '로열 마일 (Royal Mile)',
                    description: '거리 공연과 퍼레이드의 중심지',
                    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600'
                },
                {
                    name: '에든버러 성',
                    description: '축제 기간 특별 공연 개최',
                    image: 'https://images.unsplash.com/photo-1602054842279-4828dd79b4fb?w=600'
                },
                {
                    name: '프린지 공연장들',
                    description: '연극, 코미디, 뮤지컬, 댄스 등 다양한 장르',
                    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=600'
                }
            ],
            budget: {
                '항공권': 1000000,
                '숙박': 800000,
                '식사': 400000,
                '입장료': 400000,
                '교통': 200000,
                '기타': 200000
            },
            tips: {
                준비물: ['공연 티켓 사전 예약', '우산', '편한 신발', '레이어드 의류'],
                주의사항: ['인기 공연 조기 매진', '숙박 조기 예약 필수', '날씨 변덕'],
                추천: ['무료 공연 체험', '거리 퍼포먼스 관람', '스코틀랜드 위스키 투어']
            },
            packageDetails: {
                included: [
                    '왕복 항공권 (인천-런던-에든버러, 이코노미석)',
                    '4성급 호텔 5박 (조식 포함)',
                    '프린지 공연 티켓 3회',
                    '에든버러 성 입장권',
                    '시내 가이드 투어',
                    '여행자 보험',
                    '한국인 가이드'
                ],
                excluded: [
                    '개인 경비',
                    '추가 공연 티켓',
                    '점심/저녁 식사',
                    '여권 발급 비용'
                ],
                productCode: 'FEST-GB-001',
                departureDates: ['2026년 8월 7일', '2026년 8월 14일', '2026년 8월 21일'],
                groupDiscount: {
                    '4-6명': '1인당 50,000원 할인',
                    '7-9명': '1인당 80,000원 할인',
                    '10명 이상': '1인당 120,000원 할인'
                }
            }
        },
        'sonkgran': {
            target: '20-30대 젊은층',
            description: '도시 전체가 물 싸움으로 뒤덮이는 태국 새해 축제. 카오산로드에서 신나는 워터 배틀을 즐기세요.',
            attractions: [
                {
                    name: '카오산 로드',
                    description: '최대 규모 물총 싸움 거리',
                    image: 'https://images.unsplash.com/photo-1544552862-1a91c91d8c3f?w=600'
                },
                {
                    name: '실롬 거리',
                    description: '대형 물총과 음악이 있는 파티 존',
                    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600'
                },
                {
                    name: '왓 포 (황금 와불상)',
                    description: '전통 불교 의식과 축복 행사',
                    image: 'https://images.unsplash.com/photo-1598970605070-2d2f4a39c93c?w=600'
                }
            ],
            budget: {
                '항공권': 500000,
                '숙박': 400000,
                '식사': 200000,
                '입장료': 100000,
                '교통': 200000,
                '기타': 300000
            },
            tips: {
                준비물: ['방수 가방', '물총', '여분 옷', '선크림', '방수 케이스'],
                주의사항: ['귀중품 호텔 보관', '전자기기 방수 필수', '음주 후 물놀이 주의'],
                추천: ['낮 시간대 참여', '현지 물총 구매', '태국 전통 의상 체험']
            },
            packageDetails: {
                included: [
                    '왕복 항공권 (인천-방콕, 이코노미석)',
                    '4성급 호텔 4박 (조식 포함)',
                    '송크란 파티 입장권',
                    '방콕 시내 투어',
                    '왓 포 사원 입장권',
                    '여행자 보험',
                    '한국인 가이드'
                ],
                excluded: [
                    '개인 경비',
                    '점심/저녁 식사',
                    '추가 관광',
                    '여권 발급 비용'
                ],
                productCode: 'FEST-TH-001',
                departureDates: ['2026년 4월 11일', '2026년 4월 12일', '2026년 4월 13일'],
                groupDiscount: {
                    '4-6명': '1인당 30,000원 할인',
                    '7-9명': '1인당 50,000원 할인',
                    '10명 이상': '1인당 70,000원 할인'
                }
            }
        },
        'oktober-alt': {
            target: '30-50대 성인',
            description: '가장 화려한 독일 카니발. 로젠몬탁 퍼레이드에서 형형색색 의상과 음악을 만끽하세요.',
            attractions: [
                {
                    name: '로젠몬탁 퍼레이드',
                    description: '화려한 수레와 의상 행렬',
                    image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=600'
                },
                {
                    name: '쾰른 대성당',
                    description: '유네스코 세계문화유산',
                    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600'
                },
                {
                    name: '라인강 크루즈',
                    description: '강변 도시 투어',
                    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600'
                }
            ],
            budget: {
                '항공권': 1000000,
                '숙박': 700000,
                '식사': 400000,
                '입장료': 200000,
                '교통': 200000,
                '기타': 200000
            },
            tips: {
                준비물: ['카니발 의상', '페이스 페인팅', '편한 신발', '현금'],
                주의사항: ['숙박 조기 예약', '소매치기 주의', '과음 주의'],
                추천: ['현지 의상 대여', '거리 파티 참여', '전통 음식 체험']
            },
            packageDetails: {
                included: [
                    '왕복 항공권 (인천-프랑크푸르트-쾰른, 이코노미석)',
                    '4성급 호텔 5박 (조식 포함)',
                    '카니발 퍼레이드 관람석',
                    '쾰른 대성당 투어',
                    '라인강 크루즈',
                    '여행자 보험'
                ],
                excluded: [
                    '개인 경비',
                    '의상 대여',
                    '점심/저녁 식사',
                    '여권 발급 비용'
                ],
                productCode: 'FEST-DE-003',
                departureDates: ['2026년 2월 14일', '2026년 2월 15일', '2026년 2월 16일'],
                groupDiscount: {
                    '4-6명': '1인당 50,000원 할인',
                    '7-9명': '1인당 80,000원 할인',
                    '10명 이상': '1인당 100,000원 할인'
                }
            }
        },
        'dia-de-muertos': {
            target: '문화 체험 여행자',
            description: '해골 분장과 제단으로 고인을 기리는 멕시코 전통 축제. 소칼로 광장과 미스킥 시장의 화려한 오프렌다를 감상하세요.',
            attractions: [
                {
                    name: '소칼로 광장',
                    description: '거대한 오프렌다(제단) 전시',
                    image: 'https://images.unsplash.com/photo-1541119638723-909f0bf57b33?w=600'
                },
                {
                    name: '미스킥 시장',
                    description: '전통 공예품과 설탕 해골',
                    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600'
                },
                {
                    name: '테오티우아칸',
                    description: '고대 피라미드 유적',
                    image: 'https://images.unsplash.com/photo-1518659095805-6b1ba5101774?w=600'
                }
            ],
            budget: {
                '항공권': 1200000,
                '숙박': 600000,
                '식사': 300000,
                '입장료': 200000,
                '교통': 200000,
                '기타': 200000
            },
            tips: {
                준비물: ['해골 분장 용품', '카메라', '현금', '편한 신발'],
                주의사항: ['고산병 예방', '음식 위생 주의', '소매치기 주의'],
                추천: ['페이스 페인팅 체험', '오프렌다 만들기', '전통 음식 타코 시식']
            },
            packageDetails: {
                included: [
                    '왕복 항공권 (인천-멕시코시티, 이코노미석)',
                    '4성급 호텔 5박 (조식 포함)',
                    '죽은 자의 날 퍼레이드 관람',
                    '테오티우아칸 투어',
                    '시내 가이드 투어',
                    '여행자 보험'
                ],
                excluded: [
                    '개인 경비',
                    '점심/저녁 식사',
                    '분장 비용',
                    '여권 발급 비용'
                ],
                productCode: 'FEST-MX-001',
                departureDates: ['2026년 10월 30일', '2026년 10월 31일', '2026년 11월 1일'],
                groupDiscount: {
                    '4-6명': '1인당 60,000원 할인',
                    '7-9명': '1인당 90,000원 할인',
                    '10명 이상': '1인당 130,000원 할인'
                }
            }
        },
        'holi': {
            target: '20-30대, SNS 인증샷 선호',
            description: '색가루를 뿌리며 봄을 기념하는 컬러 페스티벌. 갠지스강과 궁전에서 펼쳐지는 색색의 향연에 동참하세요.',
            attractions: [
                {
                    name: '바라나시 갠지스강',
                    description: '신성한 강가에서 펼쳐지는 홀리 축제',
                    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600'
                },
                {
                    name: '자이푸르 시티 팰리스',
                    description: '왕족 궁전에서의 특별 홀리 행사',
                    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600'
                },
                {
                    name: '홀리 컬러 파티',
                    description: '색가루 던지기와 음악 페스티벌',
                    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600'
                }
            ],
            budget: {
                '항공권': 800000,
                '숙박': 400000,
                '식사': 200000,
                '입장료': 200000,
                '교통': 300000,
                '기타': 200000
            },
            tips: {
                준비물: ['헌 옷', '방수 카메라', '선글라스', '색가루 세트'],
                주의사항: ['피부 민감자 주의', '귀중품 보관', '음식 위생'],
                추천: ['아침 일찍 시작', '현지인과 함께 참여', '전통 의상 사리 체험']
            },
            packageDetails: {
                included: [
                    '왕복 항공권 (인천-델리, 이코노미석)',
                    '3성급 호텔 5박 (조식 포함)',
                    '홀리 컬러 파티 입장권',
                    '바라나시-자이푸르 국내선',
                    '갠지스강 선셋 크루즈',
                    '타지마할 당일 투어',
                    '여행자 보험'
                ],
                excluded: [
                    '개인 경비',
                    '점심/저녁 식사',
                    '색가루 구매',
                    '인도 비자 발급 비용'
                ],
                productCode: 'FEST-IN-001',
                departureDates: ['2026년 3월 12일', '2026년 3월 13일', '2026년 3월 14일'],
                groupDiscount: {
                    '4-6명': '1인당 40,000원 할인',
                    '7-9명': '1인당 60,000원 할인',
                    '10명 이상': '1인당 90,000원 할인'
                }
            }
        },
        'tomorrowland': {
            target: 'EDM 팬, 20-30대',
            description: '세계적인 EDM 뮤직 페스티벌. 300명 이상의 DJ와 환상적인 무대 세트에서 최고의 전자음악을 경험하세요.',
            attractions: [
                {
                    name: '메인 스테이지',
                    description: '세계 톱 DJ들의 공연',
                    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600'
                },
                {
                    name: 'DreamVille 캠핑',
                    description: '축제 전용 캠핑 빌리지',
                    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600'
                },
                {
                    name: '브뤼헤 중세도시',
                    description: '유네스코 세계문화유산 관광',
                    image: 'https://images.unsplash.com/photo-1559113315-039f9e3b8145?w=600'
                }
            ],
            budget: {
                '항공권': 1200000,
                '숙박': 800000,
                '식사': 400000,
                '입장료': 800000,
                '교통': 200000,
                '기타': 200000
            },
            tips: {
                준비물: ['페스티벌 의상', '선크림', '방수 가방', '휴대용 배터리'],
                주의사항: ['티켓 조기 매진', '캠핑장 예약 필수', '소매치기 주의'],
                추천: ['2일권 구매', '캐시리스 결제 준비', '벨기에 맥주 체험']
            },
            packageDetails: {
                included: [
                    '왕복 항공권 (인천-브뤼셀, 이코노미석)',
                    '4성급 호텔 4박 (조식 포함)',
                    '투모로우랜드 2일권',
                    '브뤼셀-붐 왕복 셔틀',
                    '브뤼헤 당일 투어',
                    '여행자 보험'
                ],
                excluded: [
                    '개인 경비',
                    '페스티벌 내 음식/음료',
                    '캠핑 옵션',
                    '여권 발급 비용'
                ],
                productCode: 'FEST-BE-001',
                departureDates: ['2026년 7월 17일', '2026년 7월 24일', '2026년 7월 31일'],
                groupDiscount: {
                    '4-6명': '1인당 70,000원 할인',
                    '7-9명': '1인당 100,000원 할인',
                    '10명 이상': '1인당 150,000원 할인'
                }
            }
        },
        'up-alaaf': {
            target: '파티 애호가, 30-40대',
            description: '퍼레이드와 비즈 목걸이로 유명한 미국 남부 축제. 프렌치 쿼터와 버번 스트리트에서 재즈와 축제를 만끽하세요.',
            attractions: [
                {
                    name: '프렌치 쿼터',
                    description: '역사적인 건축물과 거리 퍼레이드',
                    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600'
                },
                {
                    name: '버번 스트리트',
                    description: '라이브 재즈와 파티 거리',
                    image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=600'
                },
                {
                    name: '마르디 그라 퍼레이드',
                    description: '화려한 수레와 비즈 목걸이',
                    image: 'https://images.unsplash.com/photo-1505235687559-28b5f54645b7?w=600'
                }
            ],
            budget: {
                '항공권': 1400000,
                '숙박': 800000,
                '식사': 400000,
                '입장료': 200000,
                '교통': 200000,
                '기타': 300000
            },
            tips: {
                준비물: ['편한 신발', '현금', '가벼운 의상', '카메라'],
                주의사항: ['숙박 조기 예약', '밤늦은 시간 안전 주의', '과음 주의'],
                추천: ['비즈 목걸이 수집', '재즈 클럽 방문', '케이준 요리 시식']
            },
            packageDetails: {
                included: [
                    '왕복 항공권 (인천-LA-뉴올리언스, 이코노미석)',
                    '4성급 호텔 5박 (조식 포함)',
                    '마르디 그라 퍼레이드 관람석',
                    '재즈 클럽 입장권',
                    '늪지대 투어',
                    '여행자 보험'
                ],
                excluded: [
                    '개인 경비',
                    '점심/저녁 식사',
                    '추가 공연 티켓',
                    'ESTA 및 여권 발급 비용'
                ],
                productCode: 'FEST-US-001',
                departureDates: ['2026년 2월 13일', '2026년 2월 14일', '2026년 2월 15일'],
                groupDiscount: {
                    '4-6명': '1인당 70,000원 할인',
                    '7-9명': '1인당 100,000원 할인',
                    '10명 이상': '1인당 140,000원 할인'
                }
            }
        },
        'lantern-taiwan': {
            target: '가족 단위, 커플',
            description: '밤하늘을 수놓는 수천 개의 천등 축제. 소원을 담은 천등을 직접 날려보내며 감동적인 순간을 경험하세요.',
            attractions: [
                {
                    name: '핑시 천등 축제',
                    description: '수천 개의 천등이 밤하늘을 밝히는 장관',
                    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600'
                },
                {
                    name: '지우펀 구도시',
                    description: '센과 치히로의 모델이 된 거리',
                    image: 'https://images.unsplash.com/photo-1523568129082-c0037be33f0c?w=600'
                },
                {
                    name: '타이베이 101',
                    description: '세계적인 초고층 빌딩',
                    image: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600'
                }
            ],
            budget: {
                '항공권': 500000,
                '숙박': 400000,
                '식사': 300000,
                '입장료': 200000,
                '교통': 200000,
                '기타': 200000
            },
            tips: {
                준비물: ['따뜻한 외투', '카메라 삼각대', '현금', '우산'],
                주의사항: ['조기 도착 권장', '화재 주의', '밤 기온 낮음'],
                추천: ['천등 직접 날리기', '지우펀 야경 감상', '타이완 야시장 체험']
            },
            packageDetails: {
                included: [
                    '왕복 항공권 (인천-타이베이, 이코노미석)',
                    '3성급 호텔 3박 (조식 포함)',
                    '핑시 천등 축제 투어 (천등 포함)',
                    '지우펀 야간 투어',
                    '타이베이 101 전망대',
                    '여행자 보험'
                ],
                excluded: [
                    '개인 경비',
                    '점심/저녁 식사',
                    '추가 천등 구매',
                    '여권 발급 비용'
                ],
                productCode: 'FEST-TW-001',
                departureDates: ['2026년 2월 26일', '2026년 2월 27일', '2026년 2월 28일'],
                groupDiscount: {
                    '4-6명': '1인당 30,000원 할인',
                    '7-9명': '1인당 50,000원 할인',
                    '10명 이상': '1인당 70,000원 할인'
                }
            }
        }
    };
}

function normalizePrice(v) {
    if (!v) return '₩0';
    if (typeof v === 'number') return `₩${Math.max(0, v).toLocaleString()}`;
    const n = parseInt(String(v).replace(/[^0-9]/g, ''), 10) || 0;
    return `₩${n.toLocaleString()}`;
}

function toInt(v) {
    const n = parseInt(String(v).replace(/[^0-9]/g, ''), 10);
    return Number.isFinite(n) ? n : undefined;
}

function slugify(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 40);
}

function parseCsv(text) {
    // 간단 CSV 파서(따옴표 처리)
    const rows = [];
    let i = 0, field = '', row = [], inQuotes = false;
    const pushField = () => { row.push(field); field = ''; };
    const pushRow = () => { rows.push(row); row = []; };
    while (i < text.length) {
        const ch = text[i];
        if (inQuotes) {
            if (ch === '"' && text[i+1] === '"') { field += '"'; i += 2; continue; }
            if (ch === '"') { inQuotes = false; i++; continue; }
            field += ch; i++; continue;
        } else {
            if (ch === '"') { inQuotes = true; i++; continue; }
            if (ch === ',') { pushField(); i++; continue; }
            if (ch === '\n') { pushField(); pushRow(); i++; continue; }
            if (ch === '\r') { i++; continue; }
            field += ch; i++; continue;
        }
    }
    // 마지막 필드/행 처리
    pushField(); if (row.length) pushRow();
    // 공백 행 제거
    return rows.filter(r => r.some(c => String(c).trim().length));
}

// ===== Unsplash 이미지 가져오기 (최적화) =====
async function fetchUnsplashImage(query, fallback) {
    try {
        const cfg = window.IMAGE_CONFIG || {};
        const timeoutMs = Number.isFinite(cfg.timeoutMs) ? cfg.timeoutMs : 3000;
        const cacheTtl = Number.isFinite(cfg.cacheTtlMs) ? cfg.cacheTtlMs : (6 * 60 * 60 * 1000);

        // 메모리/로컬스토리지 캐시 확인
        const now = Date.now();
        window.__unsplashCache = window.__unsplashCache || {};
        const mem = window.__unsplashCache;
        const LS_KEY = 'unsplash-cache-v1';
        if (mem[query] && (now - (mem[query].ts || 0) < cacheTtl)) {
            const base = mem[query].base;
            return `${base}?w=400&auto=format&q=80&fit=crop`;
        }
        try {
            const store = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
            const rec = store[query];
            if (rec && rec.base && (now - (rec.ts || 0) < cacheTtl)) {
                mem[query] = rec;
                return `${rec.base}?w=400&auto=format&q=80&fit=crop`;
            }
        } catch {}

        // 짧은 타임아웃으로 API 요청
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
        
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${UNSPLASH_ACCESS_KEY}`,
            { signal: controller.signal }
        );
        
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        const imageUrl = data.results[0]?.urls?.regular || '';
        if (imageUrl) {
            // 기준 URL(쿼리 파라미터 제거) 캐시 후 파라미터로 최적화
            const base = imageUrl.split('?')[0];
            const rec = { base, ts: now };
            window.__unsplashCache[query] = rec;
            try {
                const store = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
                store[query] = rec;
                localStorage.setItem(LS_KEY, JSON.stringify(store));
            } catch {}
            return `${base}?w=400&auto=format&q=80&fit=crop`;
        }
        
        return optimizeFallbackImage(fallback);
    } catch (error) {
        logger.debug('⚠️ Unsplash API 실패, fallback 이미지 사용:', error.message);
        return optimizeFallbackImage(fallback);
    }
}

// Fallback 이미지 최적화
function optimizeFallbackImage(url) {
    if (!url) return '';
    
    // Unsplash 이미지인 경우 최적화 파라미터 추가
    if (url.includes('images.unsplash.com')) {
        // 기존 파라미터 제거 후 최적화 파라미터 추가
        const baseUrl = url.split('?')[0];
        return `${baseUrl}?w=400&auto=format&q=78&fit=crop`;
    }
    
    return url;
}

// ===== 축제 카드 HTML 생성 =====
function createFestivalCard(festival, imageUrl) {
    // 카드 내부에 즉시 패키지 기획 패널을 토글로 제공하고, 자세히 보기는 모달로 유지
    const baseDays = parseInt((festival.duration || '').replace(/[^0-9]/g, '')) || 5;
    
    // 국기 아이콘 URL (Flagpedia API 사용)
    const flagUrl = festival.countryCode ? 
        `https://flagcdn.com/w40/${festival.countryCode.toLowerCase()}.png` : '';
    
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="festival-card" data-festival-id="${festival.id}" onclick="togglePlanner(event, '${festival.id}', ${baseDays})">
                <div class="festival-image" style="background-image: url('${imageUrl}')">
                    ${flagUrl ? `<img src="${flagUrl}" alt="국기" class="festival-flag">` : ''}
                </div>
                <div class="festival-content">
                    <h3>${festival.name}</h3>
                    <p class="festival-location">
                        <i class="fas fa-map-marker-alt"></i> ${festival.location}
                    </p>
                    <p class="festival-date">
                        <i class="fas fa-calendar"></i> ${festival.period}
                    </p>
                    <p class="festival-description">${festival.description}</p>
                    ${festival.flightPrice ? `
                    <div class="flight-widget">
                        <div class="flight-info">
                            <i class="fas fa-plane"></i>
                            <div class="flight-details">
                                <span class="flight-price">₩${parseInt(festival.flightPrice).toLocaleString()}</span>
                                <span class="flight-meta">${festival.flightDuration || ''} · ${festival.flightAirline || ''}</span>
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    <div class="festival-footer">
                        <span class="festival-price">${festival.price}</span>
                        <div class="d-flex gap-2">
                            <button class="btn btn-outline-secondary btn-sm" onclick="togglePlanner(event, '${festival.id}', ${baseDays})">
                                패키지 기획
                            </button>
                            <button class="btn btn-primary btn-sm" onclick="event && event.stopPropagation(); showFestivalDetail('${festival.id}');">자세히 보기</button>
                        </div>
                    </div>
                </div>
                <div id="planner-${festival.id}" class="planner-panel" hidden onclick="event && event.stopPropagation()">
                    <div class="planner-header">
                        <h5><i class="fas fa-suitcase-rolling"></i> ${festival.name} 패키지 기획</h5>
                        <button class="btn btn-sm btn-light" onclick="togglePlanner(event, '${festival.id}', ${baseDays})"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="planner-body">
                        <div class="row g-3">
                            <div class="col-6">
                                <label class="form-label">출발일</label>
                                <input type="date" class="form-control" id="plan-${festival.id}-start" />
                            </div>
                            <div class="col-6">
                                <label class="form-label">여행 일수</label>
                                <input type="number" class="form-control" id="plan-${festival.id}-days" min="1" value="${baseDays}" />
                            </div>
                            <div class="col-6">
                                <label class="form-label">인원</label>
                                <input type="number" class="form-control" id="plan-${festival.id}-people" min="1" value="2" />
                            </div>
                            <div class="col-6">
                                <label class="form-label">1인 최대 예산 (원)</label>
                                <input type="number" class="form-control" id="plan-${festival.id}-budget" min="0" placeholder="예: 2500000" />
                            </div>
                        </div>
                        <hr class="my-3" />
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label">포함 항목</label>
                                <div class="planner-checklist" id="plan-${festival.id}-includes">
                                    ${Object.keys(festival.budget || {}).map(key => {
                                        const mapIcons = { '항공권': 'plane', '숙박': 'hotel', '식사': 'utensils', '입장료': 'ticket', '교통': 'bus', '기타': 'ellipsis-h' };
                                        const icon = mapIcons[key] || 'check';
                                        return `
                                            <label class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" value="${key}" checked />
                                                <span class="form-check-label"><i class="fas fa-${icon}"></i> ${key}</span>
                                            </label>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">추천 관광지 선택</label>
                                <div class="planner-checklist" id="plan-${festival.id}-spots">
                                    ${(festival.attractions || []).map((a, idx) => `
                                        <label class="form-check">
                                            <input class="form-check-input" type="checkbox" value="${a.name}" ${idx < 2 ? 'checked' : ''} />
                                            <span class="form-check-label">${a.name}</span>
                                        </label>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap gap-2 mt-3">
                            <button class="btn btn-sm btn-primary" onclick="updatePlanEstimate('${festival.id}')"><i class="fas fa-calculator"></i> 견적 계산</button>
                            <button class="btn btn-sm btn-outline-primary" onclick="savePlan('${festival.id}')"><i class="fas fa-bookmark"></i> 계획 저장</button>
                            <button class="btn btn-sm btn-outline-secondary" onclick="copyPlan('${festival.id}')"><i class="fas fa-share"></i> 요약 복사</button>
                        </div>
                        <div class="plan-summary mt-3" id="plan-${festival.id}-summary"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ===== 모달 핸들러 설정 =====
function setupModalHandlers() {
    const modal = document.getElementById('festivalModal');
    if (modal) {
        modal.addEventListener('hidden.bs.modal', function() {
            // 모달이 닫힐 때 차트 정리
            if (window.budgetChart) {
                window.budgetChart.destroy();
                window.budgetChart = null;
            }
        });
    }
}

// ===== 축제 상세 정보 표시 =====
async function showFestivalDetail(festivalId) {
    logger.debug('🎯 클릭됨! 축제 ID:', festivalId);
    // 모든 축제 (기본 + CSV)에서 검색
    const allFestivals = getAllFestivals();
    const festival = allFestivals[festivalId];
    if (!festival) {
        logger.error('❌ 축제를 찾을 수 없습니다:', festivalId);
        logger.debug('사용 가능한 축제 ID:', Object.keys(allFestivals));
        return;
    }
    logger.debug('✅ 축제 정보:', festival.name);

    // 모달에 festivalId 저장 (시뮬레이터 연동용)
    const modalElement = document.getElementById('festivalModal');
    if (modalElement) {
        modalElement.dataset.festivalId = festivalId;
    }

    // 모달 제목
    const titleEl = document.getElementById('festivalModalLabel');
    if (titleEl) titleEl.textContent = festival.name;

    // 1) 개요 탭: 히어로 이미지
    const heroImageUrl = await fetchUnsplashImage(festival.imageQuery, festival.fallbackImage);
    const heroImage = document.getElementById('festivalHeroImage');
    if (heroImage) heroImage.style.backgroundImage = `url('${heroImageUrl}')`;

    // 2) 축제 이름과 위치
    const festivalNameEl = document.getElementById('detailFestivalName');
    const locationEl = document.getElementById('detailLocation');
    if (festivalNameEl) festivalNameEl.textContent = festival.name;
    if (locationEl) {
        const locationSpan = locationEl.querySelector('span');
        if (locationSpan) locationSpan.textContent = festival.location;
    }
    // 모달 헤더 타이틀도 업데이트
    const headerTitle = document.getElementById('festivalModalLabel');
    if (headerTitle) headerTitle.textContent = festival.name;

    // 3) 가격 배지 + 통화 토글
    const priceBadge = document.getElementById('detailPriceBadge');
    if (priceBadge) {
        const localCurrency = getCurrencyForFestival(festivalId, festival);
        const currencyOptions = [
            { code: 'KRW', label: 'KRW(₩)' },
            localCurrency && localCurrency !== 'KRW' ? { code: localCurrency, label: localCurrency } : null
        ].filter(Boolean);

        priceBadge.innerHTML = `
            <small>1인 예상 비용</small>
            <div class="price-large" id="pricePrimary">${festival.price}</div>
            <div class="price-currency-wrap">
                <select id="priceCurrencySelect" class="price-currency-select">
                    ${currencyOptions.map(opt => `<option value="${opt.code}">${opt.label}</option>`).join('')}
                </select>
                <div class="price-local-line" id="priceLocalLine"></div>
            </div>
        `;

        // 초기 로컬 통화 표시
        try { await updateLocalCurrencyLine(festival, localCurrency); } catch(e) { logger.warn(e); }

        // 통화 셀렉트 변경 시 메인 표시 전환
        const sel = document.getElementById('priceCurrencySelect');
        sel?.addEventListener('change', async () => {
            const selectTo = sel.value;
            if (selectTo === 'KRW') {
                document.getElementById('pricePrimary').textContent = festival.price || '';
            } else {
                const rate = await getExchangeRate(selectTo);
                if (rate) {
                    const converted = convertPrice(festival.price || '₩0', rate);
                    document.getElementById('pricePrimary').textContent = `${formatCurrencySymbol(selectTo)}${converted}`;
                }
            }
        });
    }

    // 4) 상세 설명
    const descriptionFull = document.getElementById('detailDescriptionFull');
    if (descriptionFull) {
        descriptionFull.innerHTML = `
            <p class="lead">${festival.description}</p>
            ${festival.detailedDescription ? `<p>${festival.detailedDescription}</p>` : ''}
        `;
    }

    // 5) 기본 정보 (기간, 일수, 대상, 가격)
    const periodEl = document.getElementById('detailPeriod');
    const durationEl = document.getElementById('detailDuration');
    const targetEl = document.getElementById('detailTarget');
    const priceEl = document.getElementById('detailPrice');
    if (periodEl) periodEl.textContent = festival.period || '미정';
    if (durationEl) durationEl.textContent = festival.duration || '5일';
    if (targetEl) targetEl.textContent = festival.target || '전 연령';
    if (priceEl) priceEl.textContent = festival.price || '문의';

    // 6) 축제 하이라이트 및 빠른 정보
    displayFestivalHighlights(festival);
    displayQuickInfo(festival);

    // 7) 지도 설정 및 버튼
    const mapContainer = document.getElementById('detailMap');
    if (mapContainer) {
        mapContainer.innerHTML = `<iframe src="${festival.mapUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    }
    const openMapBtn = document.getElementById('openMapBtn');
    if (openMapBtn) {
        openMapBtn.onclick = () => {
            const mapUrl = festival.mapUrl.replace('embed', 'place');
            window.open(mapUrl, '_blank');
        };
    }

    const openDirectionsBtn = document.getElementById('openDirectionsBtn');
    if (openDirectionsBtn) {
        openDirectionsBtn.onclick = () => {
            const dest = encodeURIComponent(festival.location || '');
            const url = `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
            window.open(url, '_blank');
        };
    }

    // 8) 관광/경비/팁/패키지
    try { displayAttractions(festival.attractions || []); } catch(e) { logger.warn(e); }
    try { displayBudgetChart(festival.budget || {}, festival.price || ''); } catch(e) { logger.warn(e); }
    try { displayTravelTips(festival.tips || { 준비물: [], 주의사항: [], 추천: [] }); } catch(e) { logger.warn(e); }
    try { if (festival.packageDetails) displayPackageInfo(festival.packageDetails); } catch(e) { logger.warn(e); }

    // 8.5) D-Day 배지
    try { updateDDayBadge(festival.nextDate); } catch(e) { logger.warn(e); }

    // 9) 손익분기/티어/시뮬레이터/업셀링
    try { displayBreakEvenAnalysis(festivalId); } catch(e) { logger.warn(e); }
    try { displayProductTiers(festivalId); } catch(e) { logger.warn(e); }
    try { initDemandSimulator(festivalId); } catch(e) { logger.warn(e); }
    try { displayTierValueProps(festivalId); } catch(e) { logger.warn(e); }
    try { displayUpsellOptions(festivalId); } catch(e) { logger.warn(e); }

    // 10) 모달 표시
    const modal = new bootstrap.Modal(document.getElementById('festivalModal'));
    modal.show();
}

// ===== 모달 보조 유틸 =====
function computeDDay(dateStr) {
    if (!dateStr) return null;
    const now = new Date();
    const target = new Date(dateStr);
    if (Number.isNaN(target.getTime())) return null;
    // 자정 기준으로 계산(시차 영향 최소화)
    const msPerDay = 24 * 60 * 60 * 1000;
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dayTarget = new Date(target.getFullYear(), target.getMonth(), target.getDate());
    const diff = Math.round((dayTarget - today) / msPerDay);
    if (diff > 0) return `D-${diff}`;
    if (diff === 0) return 'D-DAY';
    return `DAY+${Math.abs(diff)}`;
}

function updateDDayBadge(nextDateStr) {
    const badge = document.getElementById('dDayBadge');
    if (!badge) return;
    const label = computeDDay(nextDateStr);
    if (!label) {
        badge.classList.add('d-none');
        return;
    }
    badge.textContent = label;
    badge.classList.remove('d-none');
}

function getCurrencyForFestival(festivalId, festival) {
    try {
        // 우선 api-config의 festivalLocations를 참조(있으면 정확)
        const loc = (window.festivalLocations || {})[festivalId];
        if (loc && loc.currency) return loc.currency;
    } catch {}
    // countryCode 기반 간단 매핑
    const cc = (festival.countryCode || '').toLowerCase();
    const map = {
        es: 'EUR', de: 'EUR', fr: 'EUR', it: 'EUR', be: 'EUR', nl: 'EUR', pt: 'EUR',
        br: 'BRL', gb: 'GBP', uk: 'GBP', cn: 'CNY', jp: 'JPY', tw: 'TWD', in: 'INR',
        th: 'THB', mx: 'MXN', us: 'USD', ca: 'CAD', au: 'AUD'
    };
    return map[cc] || 'KRW';
}

function formatCurrencySymbol(code) {
    const sym = { KRW: '₩', USD: '$', EUR: '€', JPY: '¥', GBP: '£', CNY: '¥', BRL: 'R$', TWD: 'NT$', INR: '₹', THB: '฿', MXN: '$', CAD: 'C$', AUD: 'A$' };
    return sym[code] || `${code} `;
}

async function updateLocalCurrencyLine(festival, localCurrency) {
    const line = document.getElementById('priceLocalLine');
    if (!line || !localCurrency || localCurrency === 'KRW') { if (line) line.textContent = ''; return; }
    try {
        const rate = await getExchangeRate(localCurrency);
        if (!rate) { line.textContent = ''; return; }
        const converted = convertPrice(festival.price || '₩0', rate);
        line.innerHTML = `<i class="fas fa-money-bill-wave"></i> ${formatCurrencySymbol(localCurrency)}${converted} (${localCurrency})`;
    } catch {
        line.textContent = '';
    }
}

function displayFestivalHighlights(festival) {
    const container = document.getElementById('festivalHighlights');
    if (!container) return;
    

    const highlights = getFestivalHighlights(festival);
    
    container.innerHTML = highlights.map(h => `
        <div class="highlight-item">
            <i class="fas ${h.icon} highlight-icon"></i>
            <div class="highlight-content">
                <strong>${h.title}</strong>
                <p>${h.description}</p>
            </div>
        </div>
    `).join('');
}

// 축제별 하이라이트 정보
function getFestivalHighlights(festival) {
    const festivalName = festival.name || '';
    
    // 기본 하이라이트
    const defaultHighlights = [
        { icon: 'fa-users', title: '참가 규모', description: '수만 명이 참여하는 대규모 축제' },
        { icon: 'fa-camera', title: '포토존', description: 'SNS 인증샷 명소가 가득' },
        { icon: 'fa-utensils', title: '현지 음식', description: '다양한 먹거리 즐기기' }
    ];
    
    // 축제별 맞춤 하이라이트
    if (festivalName.includes('토마티나') || festivalName.includes('Tomatina')) {
        return [
            { icon: 'fa-apple-alt', title: '토마토 투척', description: '150톤의 토마토로 거대한 토마토 싸움' },
            { icon: 'fa-users', title: '2만명 참가', description: '전 세계에서 모인 참가자들과 함께' },
            { icon: 'fa-tshirt', title: '옷 챙기세요', description: '버려도 되는 옷 착용 필수' }
        ];
    }
    
    if (festivalName.includes('옥토버') || festivalName.includes('Oktober')) {
        return [
            { icon: 'fa-beer', title: '맥주 천국', description: '600만 리터 이상의 맥주 소비' },
            { icon: 'fa-music', title: '전통 음악', description: '바이에른 전통 음악과 춤' },
            { icon: 'fa-utensils', title: '프레첼 & 소시지', description: '독일 전통 음식 무제한' }
        ];
    }
    
    if (festivalName.includes('카니발') || festivalName.includes('Carnival')) {
        return [
            { icon: 'fa-drum', title: '삼바 퍼레이드', description: '화려한 의상과 삼바 댄서들' },
            { icon: 'fa-clock', title: '5일간 축제', description: '밤낮없이 이어지는 거리 파티' },
            { icon: 'fa-heart', title: '열정의 축제', description: '브라질의 뜨거운 에너지' }
        ];
    }
    
    if (festivalName.includes('홀리') || festivalName.includes('Holi')) {
        return [
            { icon: 'fa-palette', title: '컬러 페스티벌', description: '색가루로 물드는 거리' },
            { icon: 'fa-sun', title: '봄 맞이', description: '겨울의 끝과 봄의 시작을 축하' },
            { icon: 'fa-hands-helping', title: '화합의 상징', description: '계급과 차별을 넘어선 하나됨' }
        ];
    }
    
    if (festivalName.includes('송크란') || festivalName.includes('Songkran')) {
        return [
            { icon: 'fa-tint', title: '물 싸움', description: '도시 전체가 물총 전쟁터' },
            { icon: 'fa-temperature-high', title: '더위 탈출', description: '4월 더위를 시원하게 식히기' },
            { icon: 'fa-calendar', title: '태국 새해', description: '전통 새해 맞이 의식' }
        ];
    }
    
    if (festivalName.includes('투모로우') || festivalName.includes('Tomorrowland')) {
        return [
            { icon: 'fa-music', title: '세계 최고 DJ', description: '300명 이상의 글로벌 아티스트' },
            { icon: 'fa-magic', title: '환상적 무대', description: '동화 속 같은 메인 스테이지' },
            { icon: 'fa-campground', title: 'DreamVille', description: '전용 캠핑 빌리지' }
        ];
    }
    
    if (festivalName.includes('빙등') || festivalName.includes('Ice')) {
        return [
            { icon: 'fa-snowflake', title: '얼음 조각', description: '거대한 얼음 건축물과 조각' },
            { icon: 'fa-lightbulb', title: 'LED 조명쇼', description: '밤하늘을 밝히는 조명 예술' },
            { icon: 'fa-temperature-low', title: '영하 20도', description: '극한의 추위 속 겨울 왕국' }
        ];
    }
    
    if (festivalName.includes('벚꽃') || festivalName.includes('Cherry')) {
        return [
            { icon: 'fa-tree', title: '벚꽃 터널', description: '2km 핑크빛 벚꽃 길' },
            { icon: 'fa-moon', title: '야간 라이트업', description: '밤에 더 아름다운 벚꽃 조명' },
            { icon: 'fa-cookie-bite', title: '하나미', description: '벚꽃 아래 피크닉 파티' }
        ];
    }
    
    if (festivalName.includes('프린지') || festivalName.includes('Fringe')) {
        return [
            { icon: 'fa-theater-masks', title: '3000개 공연', description: '연극, 코미디, 뮤지컬 등' },
            { icon: 'fa-globe', title: '세계 최대', description: '전 세계 예술가들의 무대' },
            { icon: 'fa-ticket-alt', title: '자유 선택', description: '원하는 공연 자유롭게 관람' }
        ];
    }
    
    if (festivalName.includes('천등') || festivalName.includes('Lantern')) {
        return [
            { icon: 'fa-lightbulb', title: '수천 개 천등', description: '밤하늘을 수놓는 천등' },
            { icon: 'fa-heart', title: '소원 빌기', description: '천등에 소원을 담아 날리기' },
            { icon: 'fa-star', title: '감동의 순간', description: '평생 잊지 못할 추억' }
        ];
    }
    
    return defaultHighlights;
}

// 빠른 정보 표시
function displayQuickInfo(festival) {
    const container = document.getElementById('quickInfo');
    if (!container) return;
    
    const quickInfo = [
        { icon: 'fa-plane', label: '항공', value: getFlightInfo(festival) },
        { icon: 'fa-hotel', label: '숙박', value: getAccommodationInfo(festival) },
        { icon: 'fa-language', label: '언어', value: getLanguageInfo(festival) },
        { icon: 'fa-money-bill-wave', label: '통화', value: getCurrencyInfo(festival) },
        { icon: 'fa-thermometer-half', label: '날씨', value: getWeatherInfo(festival) },
        { icon: 'fa-clock', label: '시차', value: getTimezoneInfo(festival) }
    ];
    
    container.innerHTML = quickInfo.map(info => `
        <div class="quick-info-item">
            <i class="fas ${info.icon}"></i>
            <div>
                <small>${info.label}</small>
                <strong>${info.value}</strong>
            </div>
        </div>
    `).join('');
}

// 빠른 정보 헬퍼 함수들
function getFlightInfo(festival) {
    const location = festival.location || '';
    if (location.includes('스페인')) return '인천 → 마드리드 (14시간)';
    if (location.includes('독일')) return '인천 → 프랑크푸르트 (12시간)';
    if (location.includes('브라질')) return '인천 → 상파울루 (24시간)';
    if (location.includes('중국')) return '인천 → 하얼빈 (3시간)';
    if (location.includes('일본')) return '인천 → 도쿄 (2시간)';
    if (location.includes('영국')) return '인천 → 런던 (12시간)';
    if (location.includes('태국')) return '인천 → 방콕 (6시간)';
    if (location.includes('멕시코')) return '인천 → 멕시코시티 (20시간)';
    if (location.includes('인도')) return '인천 → 델리 (8시간)';
    if (location.includes('벨기에')) return '인천 → 브뤼셀 (12시간)';
    if (location.includes('미국')) return '인천 → LA (12시간)';
    if (location.includes('대만')) return '인천 → 타이베이 (2.5시간)';
    return '직항 또는 경유';
}

function getAccommodationInfo(festival) {
    const budget = festival.budget || {};
    const accommodation = budget['숙박'] || 500000;
    if (accommodation >= 700000) return '4-5성급 호텔';
    if (accommodation >= 500000) return '3-4성급 호텔';
    return '2-3성급 호텔';
}

function getLanguageInfo(festival) {
    const location = festival.location || '';
    if (location.includes('스페인')) return '스페인어 (영어 가능)';
    if (location.includes('독일')) return '독일어 (영어 가능)';
    if (location.includes('브라질')) return '포르투갈어';
    if (location.includes('중국')) return '중국어';
    if (location.includes('일본')) return '일본어';
    if (location.includes('영국')) return '영어';
    if (location.includes('태국')) return '태국어 (영어 가능)';
    if (location.includes('멕시코')) return '스페인어';
    if (location.includes('인도')) return '힌디어/영어';
    if (location.includes('벨기에')) return '네덜란드어/영어';
    if (location.includes('미국')) return '영어';
    if (location.includes('대만')) return '중국어 (번체)';
    return '현지어/영어';
}

function getCurrencyInfo(festival) {
    const location = festival.location || '';
    if (location.includes('스페인') || location.includes('독일') || location.includes('벨기에')) return '유로 (EUR)';
    if (location.includes('브라질')) return '헤알 (BRL)';
    if (location.includes('중국')) return '위안 (CNY)';
    if (location.includes('일본')) return '엔 (JPY)';
    if (location.includes('영국')) return '파운드 (GBP)';
    if (location.includes('태국')) return '바트 (THB)';
    if (location.includes('멕시코')) return '페소 (MXN)';
    if (location.includes('인도')) return '루피 (INR)';
    if (location.includes('미국')) return '달러 (USD)';
    if (location.includes('대만')) return '신타이완달러 (TWD)';
    return '현지 통화';
}

function getWeatherInfo(festival) {
    const period = festival.period || '';
    if (period.includes('1월') || period.includes('2월')) return '겨울 (춥거나 따뜻)';
    if (period.includes('3월') || period.includes('4월')) return '봄 (온화함)';
    if (period.includes('7월') || period.includes('8월')) return '여름 (더움)';
    if (period.includes('9월') || period.includes('10월')) return '가을 (선선함)';
    return '계절 확인 필요';
}

function getTimezoneInfo(festival) {
    const location = festival.location || '';
    if (location.includes('스페인') || location.includes('독일') || location.includes('벨기에')) return 'UTC+1 (-8시간)';
    if (location.includes('브라질')) return 'UTC-3 (-12시간)';
    if (location.includes('중국')) return 'UTC+8 (-1시간)';
    if (location.includes('일본')) return 'UTC+9 (동일)';
    if (location.includes('영국')) return 'UTC+0 (-9시간)';
    if (location.includes('태국')) return 'UTC+7 (-2시간)';
    if (location.includes('멕시코')) return 'UTC-6 (-15시간)';
    if (location.includes('인도')) return 'UTC+5:30 (-3.5시간)';
    if (location.includes('미국')) return 'UTC-8 (-17시간)';
    if (location.includes('대만')) return 'UTC+8 (-1시간)';
    return '시차 확인 필요';
}

// ====== 인카드 패키지 기획 토글 ======
function togglePlanner(event, festivalId, baseDays) {
    if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
    const panel = document.getElementById(`planner-${festivalId}`);
    if (!panel) return;
    const nowHidden = panel.hasAttribute('hidden');
    document.querySelectorAll('.planner-panel').forEach(p => p.setAttribute('hidden', ''));
    if (nowHidden) {
        panel.removeAttribute('hidden');
        // 초기 요약 업데이트 한번
        try { updatePlanEstimate(festivalId, baseDays); } catch (e) { logger.warn(e); }
        // 스크롤 살짝 이동
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        panel.setAttribute('hidden', '');
    }
}

// ====== 견적 계산 ======
function updatePlanEstimate(festivalId, baseDaysParam) {
    const allFestivals = getAllFestivals();
    const festival = allFestivals[festivalId];
    if (!festival) return;
    const baseDays = baseDaysParam || (parseInt((festival.duration || '').replace(/[^0-9]/g, '')) || 5);
    const days = parseInt(document.getElementById(`plan-${festivalId}-days`)?.value || baseDays, 10);
    const people = Math.max(1, parseInt(document.getElementById(`plan-${festivalId}-people`)?.value || '1', 10));
    const budgetCap = parseInt(document.getElementById(`plan-${festivalId}-budget`)?.value || '0', 10) || null;

    // 포함 항목 선택
    const includeWrap = document.getElementById(`plan-${festivalId}-includes`);
    const selectedCategories = Array.from(includeWrap?.querySelectorAll('input[type="checkbox"]:checked') || []).map(i => i.value);

    // 카테고리별 기본금액
    const baseBudget = festival.budget || {};

    // 일수 스케일링 규칙
    const dailyScaleKeys = ['숙박', '식사'];
    const scaledBudget = Object.entries(baseBudget).reduce((acc, [k, v]) => {
        if (dailyScaleKeys.includes(k)) {
            acc[k] = Math.round((v || 0) * (days / baseDays));
        } else {
            acc[k] = v || 0;
        }
        return acc;
    }, {});

    const perPersonSelected = selectedCategories.reduce((sum, k) => sum + (scaledBudget[k] || 0), 0);
    const total = perPersonSelected * people;

    const summaryEl = document.getElementById(`plan-${festivalId}-summary`);
    if (!summaryEl) return;

    const capInfo = budgetCap ? (perPersonSelected <= budgetCap ? `<span class="badge bg-success">예산 범위 내</span>` : `<span class="badge bg-danger">예산 초과</span>`) : '';

    summaryEl.innerHTML = `
        <div class="summary-card">
            <div class="row g-3">
                <div class="col-sm-6">
                    <div><strong>인원:</strong> ${people}명</div>
                    <div><strong>일정:</strong> ${days}일</div>
                    <div><strong>포함:</strong> ${selectedCategories.join(', ') || '선택 없음'}</div>
                </div>
                <div class="col-sm-6 text-sm-end">
                    <div><strong>1인 예상가:</strong> ₩${perPersonSelected.toLocaleString()} ${capInfo}</div>
                    <div><strong>총 예상가:</strong> <span class="text-primary fw-bold">₩${total.toLocaleString()}</span></div>
                </div>
            </div>
        </div>
    `;
}

// ====== 계획 저장/공유 ======
function savePlan(festivalId) {
    const days = parseInt(document.getElementById(`plan-${festivalId}-days`)?.value || '0', 10);
    const people = parseInt(document.getElementById(`plan-${festivalId}-people`)?.value || '0', 10);
    const start = document.getElementById(`plan-${festivalId}-start`)?.value || '';
    const budgetCap = parseInt(document.getElementById(`plan-${festivalId}-budget`)?.value || '0', 10) || null;
    const includes = Array.from(document.querySelectorAll(`#plan-${festivalId}-includes input[type="checkbox"]:checked`)).map(i => i.value);
    const spots = Array.from(document.querySelectorAll(`#plan-${festivalId}-spots input[type="checkbox"]:checked`)).map(i => i.value);
    const plans = JSON.parse(localStorage.getItem('package-plans') || '{}');
    plans[festivalId] = { start, days, people, budgetCap, includes, spots, savedAt: new Date().toISOString() };
    localStorage.setItem('package-plans', JSON.stringify(plans));
    // 간단 피드백
    const summaryEl = document.getElementById(`plan-${festivalId}-summary`);
    if (summaryEl) {
        const note = document.createElement('div');
        note.className = 'alert alert-success mt-2 py-2 px-3';
        note.textContent = '현재 계획이 저장되었습니다.';
        summaryEl.appendChild(note);
        setTimeout(() => note.remove(), 2000);
    }
}

function copyPlan(festivalId) {
    const summaryText = document.getElementById(`plan-${festivalId}-summary`)?.innerText || '';
    if (!summaryText) return;
    navigator.clipboard?.writeText(summaryText).then(() => {
        const summaryEl = document.getElementById(`plan-${festivalId}-summary`);
        if (summaryEl) {
            const note = document.createElement('div');
            note.className = 'alert alert-info mt-2 py-2 px-3';
            note.textContent = '요약이 클립보드에 복사되었습니다.';
            summaryEl.appendChild(note);
            setTimeout(() => note.remove(), 2000);
        }
    }).catch(() => {});
}

// ===== 관광지 목록 표시 =====
function displayAttractions(attractions) {
    const container = document.getElementById('attractionsList');
    container.innerHTML = attractions.map(attraction => `
        <div class="col-md-4 mb-4">
            <div class="attraction-card">
                <img src="${attraction.image}" alt="${attraction.name}" class="attraction-image">
                <h4>${attraction.name}</h4>
                <p>${attraction.description}</p>
            </div>
        </div>
    `).join('');
}

// ===== 경비 차트 표시 =====
function displayBudgetChart(budget, totalPrice) {
    const ctx = document.getElementById('budgetChart');
    if (!ctx) return;

    // 기존 차트 제거
    if (window.budgetChart && typeof window.budgetChart.destroy === 'function') {
        window.budgetChart.destroy();
    }

    const labels = Object.keys(budget);
    const data = Object.values(budget);
    const colors = [
        '#667eea', '#764ba2', '#f093fb', '#4facfe',
        '#43e97b', '#fa709a', '#fee140', '#30cfd0'
    ];

    window.budgetChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 15,
                        padding: 15,
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            return `${label}: ₩${value.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });

    // 총 경비 표시
    document.getElementById('totalBudget').textContent = totalPrice;
}

// ===== 여행 팁 표시 =====
function displayTravelTips(tips) {
    document.getElementById('tipItems').innerHTML = tips.준비물.map(item => 
        `<li><i class="fas fa-check"></i> ${item}</li>`
    ).join('');
    
    document.getElementById('tipWarnings').innerHTML = tips.주의사항.map(item => 
        `<li><i class="fas fa-exclamation-triangle"></i> ${item}</li>`
    ).join('');
    
    document.getElementById('tipRecommendations').innerHTML = tips.추천.map(item => 
        `<li><i class="fas fa-star"></i> ${item}</li>`
    ).join('');
}

// ===== 패키지 정보 표시 =====
function displayPackageInfo(packageDetails) {
    // 포함 사항
    const includedList = document.getElementById('packageIncluded');
    if (includedList) {
        includedList.innerHTML = packageDetails.included.map(item => 
            `<li><i class="fas fa-check text-success"></i> ${item}</li>`
        ).join('');
    }
    
    // 불포함 사항
    const excludedList = document.getElementById('packageExcluded');
    if (excludedList) {
        excludedList.innerHTML = packageDetails.excluded.map(item => 
            `<li><i class="fas fa-times text-danger"></i> ${item}</li>`
        ).join('');
    }
    
    // 출발 일정
    const datesList = document.getElementById('packageDates');
    if (datesList) {
        datesList.innerHTML = packageDetails.departureDates.map(date => 
            `<li><i class="fas fa-plane-departure text-info"></i> ${date}</li>`
        ).join('');
    }
    
    // 단체 할인
    const discountDiv = document.getElementById('packageDiscount');
    if (discountDiv) {
        discountDiv.innerHTML = Object.entries(packageDetails.groupDiscount).map(([people, discount]) => 
            `<div class="discount-item">
                <span class="badge bg-warning text-dark">${people}</span> 
                <span class="text-success fw-bold">${discount}</span>
            </div>`
        ).join('');
    }
    
    // 상품 코드
    const codeElement = document.getElementById('packageCode');
    if (codeElement) {
        codeElement.textContent = packageDetails.productCode;
    }
}

// ===== 손익분기점 분석 표시 =====
function displayBreakEvenAnalysis(festivalId) {
    const profitData = marketAnalysis.profitability[festivalId];
    const container = document.getElementById('breakEvenAnalysis');
    if (!container) return;
    
    // profitData가 없는 경우 기본값 사용
    if (!profitData) {
        const allFestivals = getAllFestivals();
        const festival = allFestivals[festivalId];
        if (!festival) return;
        
        const basePrice = parseInt(festival.price?.replace(/[^0-9]/g, '')) || 2000000;
        const defaultData = {
            fixedCost: 5000000,
            variableCost: Math.round(basePrice * 0.6),
            sellingPrice: basePrice,
            breakEven: Math.ceil(5000000 / (basePrice - Math.round(basePrice * 0.6))),
            margin: 0.3,
            expectedCustomers: 30
        };
        
        displayBreakEvenContent(container, defaultData);
        return;
    }

    displayBreakEvenContent(container, profitData);
}

function displayBreakEvenContent(container, data) {
    const { fixedCost, variableCost, sellingPrice, breakEven, margin, expectedCustomers } = data;

    container.innerHTML = `
        <div class="info-card mt-3">
            <h3><i class="fas fa-calculator text-warning"></i> 손익분기점 분석</h3>
            <div class="break-even-content">
                <div class="row mb-3">
                    <div class="col-md-6">
                        <div class="analysis-item">
                            <strong>고정비:</strong>
                            <span class="text-primary">₩${fixedCost.toLocaleString()}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="analysis-item">
                            <strong>1인당 변동비:</strong>
                            <span class="text-primary">₩${variableCost.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <div class="analysis-item">
                            <strong>판매가:</strong>
                            <span class="text-success">₩${sellingPrice.toLocaleString()}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="analysis-item">
                            <strong>1인당 공헌이익:</strong>
                            <span class="text-success">₩${(sellingPrice - variableCost).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div class="alert alert-info mb-3">
                    <h5 class="mb-2"><i class="fas fa-info-circle"></i> 손익분기점 공식</h5>
                    <p class="mb-0">손익분기점 = 고정비 ÷ (판매가 - 1인당 변동비)</p>
                    <p class="mb-0">= ${fixedCost.toLocaleString()} ÷ (${sellingPrice.toLocaleString()} - ${variableCost.toLocaleString()})</p>
                    <p class="mb-0">= ${fixedCost.toLocaleString()} ÷ ${(sellingPrice - variableCost).toLocaleString()}</p>
                </div>
                <div class="alert alert-success">
                    <h4 class="mb-2">
                        <i class="fas fa-chart-line"></i> 
                        최소 모객 인원: <strong>${breakEven}명</strong>
                    </h4>
                    <p class="mb-2">예상 모객: <strong>${expectedCustomers}명</strong></p>
                    <p class="mb-0">마진율: <strong>${(margin * 100).toFixed(1)}%</strong></p>
                </div>
                <div class="progress" style="height: 30px;">
                    <div class="progress-bar bg-success" role="progressbar" 
                         style="width: ${(breakEven / expectedCustomers * 100)}%"
                         aria-valuenow="${breakEven}" aria-valuemin="0" aria-valuemax="${expectedCustomers}">
                        손익분기 ${breakEven}명
                    </div>
                    <div class="progress-bar bg-info" role="progressbar" 
                         style="width: ${((expectedCustomers - breakEven) / expectedCustomers * 100)}%"
                         aria-valuenow="${expectedCustomers - breakEven}" aria-valuemin="0" aria-valuemax="${expectedCustomers}">
                        수익구간 ${expectedCustomers - breakEven}명
                    </div>
                </div>
                <small class="text-muted mt-2 d-block">
                    * ${breakEven}명 이상 모객 시 수익 발생, ${expectedCustomers}명 모객 목표
                </small>
            </div>
        </div>
    `;
}

// ===== 상품 구성(티어) 표시 =====
function displayProductTiers(festivalId) {
    const profitData = marketAnalysis.profitability[festivalId];
    const allFestivals = getAllFestivals();
    const festival = allFestivals[festivalId];
    const container = document.getElementById('productTiers');
    
    // profitData가 없는 경우 기본 가격 사용
    if (!container) return;
    
    let basePrice;
    if (profitData) {
        basePrice = profitData.sellingPrice;
    } else if (festival && festival.price) {
        // 가격 문자열에서 숫자만 추출
        basePrice = parseInt(festival.price.replace(/[^0-9]/g, '')) || 2000000;
    } else {
        basePrice = 2000000; // 기본값
    }

    // 축제별 맞춤 기능 (없으면 기본값 사용)
    const customFeatures = getTierFeaturesForFestival(festivalId, festival);
    
    const tiers = [
        {
            name: 'Basic',
            badge: '가성비',
            price: Math.round(basePrice * 0.85),
            features: customFeatures.basic || ['3성급 숙박', '현지 가이드 합류형', '시내 투어(핵심만)', '공항픽업(단방향)'],
            recommended: false
        },
        {
            name: 'Standard',
            badge: '추천',
            price: basePrice,
            features: customFeatures.standard || ['4성급 숙박', '한국인 가이드', '시내+근교 투어', '공항-호텔 왕복', '여행자 보험'],
            recommended: true
        },
        {
            name: 'Premium',
            badge: 'VIP',
            price: Math.round(basePrice * 1.2),
            features: customFeatures.premium || ['5성급 숙박', '프리미엄 좌석/티켓', '전용 차량 투어', '공항-호텔 전용차량', 'VIP 라운지'],
            recommended: false
        }
    ];

    const currency = '₩';
    container.innerHTML = tiers.map(t => `
        <div class="tier-card ${t.recommended ? 'recommended' : ''}">
            ${t.recommended ? '<div class="tier-badge-top">✨ BEST</div>' : ''}
            <div class="tier-header ${t.name.toLowerCase()}">
                <div>
                    <h5>${t.name}</h5>
                    <small class="tier-subtitle">${t.badge}</small>
                </div>
                <div class="tier-price">
                    <small>1인</small>
                    <div>${currency}${t.price.toLocaleString()}</div>
                </div>
            </div>
            <ul class="tier-features">
                ${t.features.map(f => `<li><i class="fas fa-check text-success"></i> ${f}</li>`).join('')}
            </ul>
            <button class="btn btn-sm ${t.recommended ? 'btn-primary' : 'btn-outline-primary'} tier-select-btn" 
                    onclick="prefillPlannerFromTier('${festivalId}', ${t.price}, '${t.name}')">
                <i class="fas fa-shopping-cart"></i> 이 상품 선택
            </button>
        </div>
    `).join('');
}

// 축제별 맞춤 티어 기능
function getTierFeaturesForFestival(festivalId, festival) {
    const festivalType = festival?.name || '';
    const location = festival?.location || '';
    
    // 축제 유형별 특화 기능
    if (festivalType.includes('축제') || festivalType.includes('페스티벌') || festivalType.includes('festival')) {
        return {
            basic: ['3성급 숙박', '일반 입장권', '그룹 가이드', '기본 식사 쿠폰'],
            standard: ['4성급 숙박', '우선 입장권', '한국인 전담 가이드', '식사 2회 포함', '여행자 보험'],
            premium: ['5성급 숙박', 'VIP 입장권', '전용 가이드', '식사 풀코스', 'VIP 라운지 이용권']
        };
    }
    
    // 음악 페스티벌
    if (festivalType.includes('투모로우랜드') || festivalType.includes('Tomorrowland') || festivalType.includes('EDM')) {
        return {
            basic: ['호스텔 도미토리', '1일권', '셔틀버스 왕복', '페스티벌 팔찌'],
            standard: ['3성급 호텔', '2일권', '전용 셔틀', '굿즈 패키지', '공연 일정표'],
            premium: ['4성급 호텔', '풀 패스 3일권', '백스테이지 투어', 'VIP 바 이용권', '아티스트 만남']
        };
    }
    
    // 컬러/물 축제
    if (festivalType.includes('홀리') || festivalType.includes('Holi') || festivalType.includes('송크란') || festivalType.includes('Songkran')) {
        return {
            basic: ['2성급 호텔', '색가루 1kg', '방수 가방', '기본 의상'],
            standard: ['3성급 호텔', '색가루 2kg', '방수 백팩', '전통 의상 대여', '포토 서비스'],
            premium: ['4성급 호텔', '무제한 색가루', '프리미엄 방수 세트', '전통 의상+액세서리', '전문 포토그래퍼']
        };
    }
    
    // 기본값 반환
    return {};
}

function prefillPlannerFromTier(festivalId, pricePerPerson, tierName) {
    // 기획 패널 열고 1인 최대 예산을 채워 사용자에게 힌트 제공
    const isOpen = !document.getElementById(`planner-${festivalId}`)?.hidden;
    if (!isOpen) {
        togglePlanner(null, festivalId);
    }
    
    const budgetInput = document.getElementById(`plan-${festivalId}-budget`);
    if (budgetInput) {
        budgetInput.value = pricePerPerson;
        try { 
            updatePlanEstimate(festivalId); 
        } catch(e) {
            logger.error('견적 업데이트 실패:', e);
        }
    }
    
    // 시뮬레이터 업데이트 (모달이 열려있는 경우)
    updateSimulatorFromTier(festivalId, pricePerPerson);
    
    // 사용자에게 피드백 - 개선된 버전
    const btn = event?.target;
    if (btn) {
        const originalText = btn.innerHTML;
        const originalClass = btn.className;
        btn.innerHTML = `<i class="fas fa-check-circle"></i> ${tierName} 선택됨!`;
        btn.classList.remove('btn-outline-primary', 'btn-primary');
        btn.classList.add('btn-success');
        btn.disabled = true;
        
        // 모든 티어 버튼 리셋
        document.querySelectorAll('.tier-select-btn').forEach(b => {
            if (b !== btn) {
                b.classList.remove('btn-success');
                b.classList.add('btn-outline-secondary');
            }
        });
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.className = originalClass;
            btn.disabled = false;
            // 다른 버튼들도 원래대로
            document.querySelectorAll('.tier-select-btn').forEach(b => {
                if (b !== btn) {
                    b.classList.remove('btn-outline-secondary');
                }
            });
        }, 3000);
    }
    
    // 모달 내에서 스크롤 (시뮬레이터로 이동)
    const simulator = document.getElementById('demandSimulator');
    if (simulator) {
        simulator.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// 티어 가격에 따라 시뮬레이터 업데이트
function updateSimulatorFromTier(festivalId, pricePerPerson) {
    const priceEl = document.getElementById('sim-price');
    if (priceEl && priceEl.closest('.modal.show')) {
        // 모달이 열려있고 같은 축제인 경우에만 업데이트
        const modalFestivalId = document.getElementById('festivalModal')?.dataset?.festivalId;
        if (modalFestivalId === festivalId) {
            priceEl.value = pricePerPerson;
            // 시뮬레이터 자동 계산 트리거
            const runBtn = document.getElementById('sim-run');
            if (runBtn) {
                runBtn.click();
            }
        }
    }
}

// ===== 수요·수익 시뮬레이터 =====
function initDemandSimulator(festivalId) {
    const priceEl = document.getElementById('sim-price');
    const customersEl = document.getElementById('sim-customers');
    const fixedEl = document.getElementById('sim-fixed');
    const varEl = document.getElementById('sim-variable');
    const runBtn = document.getElementById('sim-run');
    const resultEl = document.getElementById('sim-result');
    
    if (!priceEl || !customersEl || !fixedEl || !varEl || !runBtn || !resultEl) return;

    // profitData 또는 기본값 설정
    const profitData = marketAnalysis.profitability[festivalId];
    let defaultPrice, defaultFixed, defaultVar;
    
    if (profitData) {
        defaultPrice = profitData.sellingPrice;
        defaultFixed = profitData.fixedCost;
        defaultVar = profitData.variableCost;
    } else {
        // CSV 축제의 경우 기본값 사용
        const allFestivals = getAllFestivals();
        const festival = allFestivals[festivalId];
        const basePrice = parseInt(festival?.price?.replace(/[^0-9]/g, '')) || 2000000;
        defaultPrice = basePrice;
        defaultFixed = 5000000;
        defaultVar = Math.round(basePrice * 0.6);
    }

    // 초기값 주입
    priceEl.value = defaultPrice;
    fixedEl.value = defaultFixed;
    varEl.value = defaultVar;

    const calc = () => {
        const price = parseInt(priceEl.value || '0', 10);
        const customers = parseInt(customersEl.value || '0', 10);
        const fixed = parseInt(fixedEl.value || '0', 10);
        const variable = parseInt(varEl.value || '0', 10);
        const revenue = price * customers;
        const cost = fixed + (variable * customers);
        const profit = revenue - cost;
        const margin = revenue > 0 ? (profit / revenue) : 0;
        const breakeven = (price - variable) > 0 ? Math.ceil(fixed / (price - variable)) : '—';
        resultEl.innerHTML = `
            <div class="summary-card">
                <div class="d-flex justify-content-between"><span><strong>매출</strong></span><span>₩${revenue.toLocaleString()}</span></div>
                <div class="d-flex justify-content-between"><span>총비용</span><span>₩${cost.toLocaleString()}</span></div>
                <div class="d-flex justify-content-between"><span><strong>순이익</strong></span><span class="text-primary fw-bold">₩${profit.toLocaleString()}</span></div>
                <div class="d-flex justify-content-between"><span>마진율</span><span>${(margin*100).toFixed(1)}%</span></div>
                <div class="d-flex justify-content-between"><span>손익분기점(명)</span><span>${breakeven}</span></div>
            </div>
        `;
    };

    runBtn.onclick = calc;
    // 입력 즉시 반영도 지원
    [priceEl, customersEl, fixedEl, varEl].forEach(el => el.addEventListener('input', calc));
    calc();
}

// ===== 티어별 가치제안 =====
function displayTierValueProps(festivalId) {
    const container = document.getElementById('tierValueProps');
    if (!container) return;
    const items = [
        {
            tier: 'Basic',
            points: [
                '가격 민감층 타겟: 필수 경험 중심 구성',
                '현지 교통/합류형으로 비용 최소화',
                '핵심 일정만 압축, 짧은 휴가에 적합'
            ]
        },
        {
            tier: 'Standard',
            points: [
                '가성비와 편의의 균형: 4성급/한국인 가이드',
                '핵심+근교 관광 연계로 만족도 제고',
                '단체/커플/친구 여행 표준 선택'
            ]
        },
        {
            tier: 'Premium',
            points: [
                '희소좌석·전용차량·라운지 등 프리미엄 경험',
                '혼잡 구간 피크타임 회피·동선 최적화',
                'VIP 서비스로 후기/재구매 유도'
            ]
        }
    ];
    container.innerHTML = items.map(it => `
        <div class="value-prop-item">
            <div class="value-prop-badge ${it.tier.toLowerCase()}">${it.tier}</div>
            <ul>
                ${it.points.map(p => `<li><i class="fas fa-star text-warning"></i> ${p}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// ===== 업셀링/옵션 =====
const DEFAULT_UPSELLS = [
    { key: 'vip-seat', label: '프리미엄 좌석 업그레이드', price: 120000, desc: '축제 메인데이 프리미엄 구역', icon: 'fa-crown' },
    { key: 'airport-fasttrack', label: '공항 패스트트랙', price: 40000, desc: '출입국·보안 우선 통로', icon: 'fa-plane-departure' },
    { key: 'private-transfer', label: '전용 차량 픽업/샌딩', price: 80000, desc: '공항-호텔 왕복 전용차량', icon: 'fa-car' },
    { key: 'food-experience', label: '현지 미식 체험', price: 60000, desc: '추천 레스토랑 테이스팅', icon: 'fa-utensils' },
    { key: 'extended-insurance', label: '보험 업그레이드', price: 30000, desc: '보장한도 상향', icon: 'fa-shield-alt' }
];

// 축제별 맞춤 업셀링 옵션
function getUpsellsForFestival(festivalId, festival) {
    const festivalType = festival?.name || '';
    
    // 음악 페스티벌
    if (festivalType.includes('투모로우랜드') || festivalType.includes('Tomorrowland')) {
        return [
            { key: 'backstage', label: '백스테이지 투어', price: 200000, desc: 'DJ 부스 방문 & 포토', icon: 'fa-music' },
            { key: 'vip-camping', label: 'VIP 캠핑 업그레이드', price: 150000, desc: 'DreamVille 프리미엄 구역', icon: 'fa-campground' },
            { key: 'festival-merch', label: '공식 굿즈 패키지', price: 80000, desc: '티셔츠, 후드, 팔찌 세트', icon: 'fa-shopping-bag' },
            ...DEFAULT_UPSELLS.slice(1, 3)
        ];
    }
    
    // 색가루/물 축제
    if (festivalType.includes('홀리') || festivalType.includes('송크란')) {
        return [
            { key: 'photographer', label: '전문 포토그래퍼', price: 100000, desc: '반나절 전문 촬영 서비스', icon: 'fa-camera' },
            { key: 'costume-premium', label: '프리미엄 전통 의상', price: 50000, desc: '고급 소재 + 액세서리', icon: 'fa-tshirt' },
            { key: 'color-unlimited', label: '무제한 색가루', price: 40000, desc: '원하는 만큼 색가루 사용', icon: 'fa-fill-drip' },
            ...DEFAULT_UPSELLS.slice(2, 4)
        ];
    }
    
    // 예술 축제
    if (festivalType.includes('프린지') || festivalType.includes('Fringe')) {
        return [
            { key: 'show-tickets', label: '추가 공연 티켓 3매', price: 150000, desc: '인기 공연 사전 예약', icon: 'fa-ticket-alt' },
            { key: 'artist-meetup', label: '아티스트 만남', price: 80000, desc: '공연 후 Q&A 세션', icon: 'fa-users' },
            { key: 'workshop', label: '워크숍 참가', price: 70000, desc: '연기/코미디 1일 워크숍', icon: 'fa-theater-masks' },
            ...DEFAULT_UPSELLS.slice(3)
        ];
    }
    
    // 기본 옵션
    return DEFAULT_UPSELLS;
}

function displayUpsellOptions(festivalId) {
    const listEl = document.getElementById('upsellList');
    const sumEl = document.getElementById('upsellSum');
    const applySimBtn = document.getElementById('applyUpsellToSim');
    const applyPlanBtn = document.getElementById('applyUpsellToPlanner');
    if (!listEl || !sumEl || !applySimBtn || !applyPlanBtn) return;

    // 축제별 맞춤 업셀링 옵션
    const allFestivals = getAllFestivals();
    const festival = allFestivals[festivalId];
    const upsells = getUpsellsForFestival(festivalId, festival);
    
    listEl.innerHTML = upsells.map((u, idx) => `
        <label class="form-check option-item ${idx === 0 ? 'popular' : ''}">
            <input class="form-check-input upsell-check" type="checkbox" 
                   data-key="${u.key}" data-price="${u.price}" id="upsell-${u.key}" />
            <span class="form-check-label">
                <i class="fas ${u.icon} option-icon"></i>
                <div class="option-details">
                    <strong>${u.label}</strong>
                    ${idx === 0 ? '<span class="badge bg-danger ms-2">인기</span>' : ''}
                    <small class="d-block text-muted">${u.desc}</small>
                </div>
            </span>
            <span class="option-price">
                <small class="d-block text-muted" style="font-size: 0.7rem;">1인당</small>
                ₩${u.price.toLocaleString()}
            </span>
        </label>
    `).join('');

    const recalc = () => {
        const checkedItems = Array.from(listEl.querySelectorAll('.upsell-check:checked'));
        const total = checkedItems.reduce((s, el) => s + (parseInt(el.dataset.price || '0', 10) || 0), 0);
        sumEl.textContent = `₩${total.toLocaleString()}`;
        
        // 선택된 항목 수 표시
        const countBadge = document.getElementById('upsellCountBadge');
        if (countBadge) {
            countBadge.textContent = checkedItems.length;
            countBadge.style.display = checkedItems.length > 0 ? 'inline-block' : 'none';
        }
        
        return total;
    };

    listEl.addEventListener('change', (e) => {
        recalc();
        // 체크 시 시각적 효과
        if (e.target.classList.contains('upsell-check')) {
            const label = e.target.closest('.option-item');
            if (e.target.checked) {
                label.classList.add('selected');
            } else {
                label.classList.remove('selected');
            }
        }
    });
    recalc();

    applySimBtn.onclick = () => {
        const add = recalc();
        if (add === 0) {
            Toast.warning('업셀링 옵션을 먼저 선택해주세요.');
            return;
        }
        const priceEl = document.getElementById('sim-price');
        if (priceEl) {
            const base = parseInt(priceEl.value || '0', 10);
            priceEl.value = Math.max(0, base + add);
            priceEl.dispatchEvent(new Event('input'));
            
            // 피드백
            applySimBtn.innerHTML = '<i class="fas fa-check"></i> 적용됨!';
            applySimBtn.classList.add('btn-success');
            applySimBtn.classList.remove('btn-primary');
            setTimeout(() => {
                applySimBtn.innerHTML = '<i class="fas fa-calculator"></i> 시뮬레이터에 적용';
                applySimBtn.classList.remove('btn-success');
                applySimBtn.classList.add('btn-primary');
            }, 2000);
        }
    };

    applyPlanBtn.onclick = () => {
        const add = recalc();
        if (add === 0) {
            Toast.warning('업셀링 옵션을 먼저 선택해주세요.');
            return;
        }
        const budgetInput = document.getElementById(`plan-${festivalId}-budget`);
        if (budgetInput) {
            const base = parseInt(budgetInput.value || '0', 10);
            budgetInput.value = Math.max(0, base + add);
            try { updatePlanEstimate(festivalId); } catch {}
            
            // 피드백
            applyPlanBtn.innerHTML = '<i class="fas fa-check"></i> 적용됨!';
            applyPlanBtn.classList.add('btn-success');
            applyPlanBtn.classList.remove('btn-outline-primary');
            setTimeout(() => {
                applyPlanBtn.innerHTML = '<i class="fas fa-suitcase-rolling"></i> 기획에 적용';
                applyPlanBtn.classList.remove('btn-success');
                applyPlanBtn.classList.add('btn-outline-primary');
            }, 2000);
        } else {
            // 패널이 닫혀 있으면 열고 적용
            togglePlanner(null, festivalId);
            setTimeout(() => {
                const bi = document.getElementById(`plan-${festivalId}-budget`);
                if (bi) {
                    const base2 = parseInt(bi.value || '0', 10);
                    bi.value = Math.max(0, base2 + add);
                    try { updatePlanEstimate(festivalId); } catch {}
                }
            }, 100);
        }
    };
}

// ===== 토스트 알림 시스템 =====
class ToastSystem {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        // 토스트 컨테이너 생성
        this.container = document.createElement('div');
        this.container.className = 'toast-container';
        document.body.appendChild(this.container);
    }

    show(message, type = 'info', duration = 4000) {
        const toast = this.createToast(message, type);
        this.container.appendChild(toast);

        // 애니메이션 시작
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // 자동 제거
        const autoRemove = setTimeout(() => {
            this.remove(toast);
        }, duration);

        // 수동 닫기 버튼
        const closeBtn = toast.querySelector('.toast-close');
        if (closeBtn) {
            closeBtn.onclick = () => {
                clearTimeout(autoRemove);
                this.remove(toast);
            };
        }

        return toast;
    }

    createToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };

        toast.innerHTML = `
            <div class="toast-content">
                <i class="toast-icon ${icons[type] || icons.info}"></i>
                <span class="toast-message">${message}</span>
                <button class="toast-close" type="button">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        return toast;
    }

    remove(toast) {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }

    // 편의 메서드들
    success(message, duration) {
        return this.show(message, 'success', duration);
    }

    error(message, duration) {
        return this.show(message, 'error', duration);
    }

    warning(message, duration) {
        return this.show(message, 'warning', duration);
    }

    info(message, duration) {
        return this.show(message, 'info', duration);
    }
}

// 전역 토스트 인스턴스 생성
const Toast = new ToastSystem();

// ===== 이미지 지연 로딩 시스템 =====
class LazyImageLoader {
    constructor() {
        this.imageObserver = null;
        this.init();
    }

    init() {
        // Intersection Observer가 지원되는지 확인
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.loadImage(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: '50px',
                    threshold: 0.1
                }
            );
            
            this.observeImages();
        } else {
            // 폴백: 즉시 모든 이미지 로드
            this.loadAllImages();
        }
    }

    observeImages() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            this.imageObserver.observe(img);
        });
    }

    loadImage(img) {
        const src = img.dataset.src;
        if (!src) return;

        // 로딩 상태 표시
        img.classList.add('lazy-loading');
        
        // 새로운 이미지 객체 생성하여 미리 로드
        const imageLoader = new Image();
        
        imageLoader.onload = () => {
            // 이미지 로드 완료시 실제 src 설정
            img.src = src;
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-loaded');
            
            // 부드러운 페이드인 효과
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            requestAnimationFrame(() => {
                img.style.opacity = '1';
            });
        };
        
        imageLoader.onerror = () => {
            // 이미지 로드 실패시 fallback 이미지 설정
            img.src = img.dataset.fallback || 'https://via.placeholder.com/800x600?text=Image+Not+Found';
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-error');
        };
        
        // 이미지 로드 시작
        imageLoader.src = src;
    }

    loadAllImages() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => this.loadImage(img));
    }

    // 새로운 이미지 추가시 observer에 등록
    observe(img) {
        if (this.imageObserver && img.dataset.src) {
            this.imageObserver.observe(img);
        }
    }
}

// ===== 성능 최적화 유틸리티 =====
class PerformanceOptimizer {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // 스크롤 성능 최적화
    static optimizeScroll(callback, delay = 16) {
        return this.throttle(callback, delay);
    }

    // 리사이즈 성능 최적화
    static optimizeResize(callback, delay = 250) {
        return this.debounce(callback, delay);
    }
}

// 전역 인스턴스 생성
const LazyLoader = new LazyImageLoader();

// 스크롤 최적화 적용
window.addEventListener('scroll', PerformanceOptimizer.optimizeScroll(() => {
    // 스크롤 관련 작업
}));

// 리사이즈 최적화 적용
window.addEventListener('resize', PerformanceOptimizer.optimizeResize(() => {
    // 리사이즈 관련 작업
}));
