
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
    },// ===== 축제 데이터 정의 =====
const festivalsData = {
    tomatina: {
        id: 'tomatina',
        name: 'La Tomatina',
        nameKo: '라 토마티나',
        location: '부뇰, 스페인',
        country: 'Spain',
        period: '매년 8월 마지막 수요일',
        description: '세계에서 가장 큰 토마토 축제로, 수천 명의 참가자들이 거리에서 토마토를 던지며 즐기는 스페인의 대표 축제입니다.',
        targetAudience: '대학생, 친구 그룹, 모험을 좋아하는 청년층',
        totalBudget: 2200000,
        imageKeyword: 'La Tomatina festival Spain',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48795.89407596485!2d-0.7897598!3d39.4185064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f11a8461515%3A0x402b1f4a30196e0!2sBu%C3%B1ol%2C%20Valencia%2C%20Spain!5e0!3m2!1sen!2skr!4v1635000000000!5m2!1sen!2skr',
        
        budget: {
            flight: { label: '항공권 (왕복)', amount: 1200000, icon: 'fa-plane' },
            accommodation: { label: '숙박 (5박)', amount: 400000, icon: 'fa-hotel' },
            food: { label: '식비', amount: 300000, icon: 'fa-utensils' },
            festival: { label: '축제 입장료', amount: 50000, icon: 'fa-ticket-alt' },
            transportation: { label: '현지 교통', amount: 150000, icon: 'fa-bus' },
            misc: { label: '기타 경비', amount: 100000, icon: 'fa-shopping-bag' }
        },
        
        attractions: [
            {
                name: '부뇰 성 (Castillo de Buñol)',
                location: '부뇰 시내',
                description: '11세기에 지어진 중세 성곽으로, 토마티나 축제의 역사적 배경이 되는 장소입니다. 성벽에서 바라보는 부뇰 마을 전경이 아름답습니다.',
                course: '1일차',
                imageKeyword: 'Bunol Castle Spain'
            },
            {
                name: '발렌시아 구시가지',
                location: '발렌시아',
                description: '부뇰에서 약 40km 떨어진 발렌시아는 파에야의 본고장입니다. 중앙시장, 대성당, 실크거래소 등 볼거리가 풍부합니다.',
                course: '2일차',
                imageKeyword: 'Valencia old town Spain'
            },
            {
                name: '예술과학의 도시',
                location: '발렌시아',
                description: '산티아고 칼라트라바가 설계한 미래지향적 건축물 단지로, 과학박물관, 수족관, 오페라하우스 등이 있습니다.',
                course: '3일차',
                imageKeyword: 'City of Arts and Sciences Valencia'
            },
            {
                name: '말바로사 해변',
                location: '발렌시아',
                description: '발렌시아의 아름다운 지중해 해변으로, 축제 후 휴식을 취하기에 완벽한 장소입니다. 해변 레스토랑에서 신선한 해산물을 즐길 수 있습니다.',
                course: '4일차',
                imageKeyword: 'Malvarrosa beach Valencia'
            }
        ],
        
        tips: [
            '오래된 옷과 신발을 준비하세요. 토마토 얼룩은 잘 지워지지 않습니다.',
            '고글이나 수경을 착용하면 눈을 보호할 수 있습니다.',
            '방수 케이스에 귀중품을 보관하세요.',
            '축제는 1시간 정도 진행되며, 오전 11시에 시작합니다.',
            '축제 전날 부뇰에 도착하는 것을 추천합니다.',
            '여벌 옷을 가져가서 축제 후 갈아입으세요.'
        ],
        
        preparation: [
            '헌 옷과 운동화 (버려도 되는 것)',
            '고글 또는 수경',
            '방수 가방 및 휴대폰 방수 케이스',
            '수건과 여벌 옷',
            '자외선 차단제',
            '모자 (버릴 수 있는 것)'
        ]
    },
    
    oktoberfest: {
        id: 'oktoberfest',
        name: 'Oktoberfest',
        nameKo: '옥토버페스트',
        location: '뮌헨, 독일',
        country: 'Germany',
        period: '9월 중순 ~ 10월 초 (약 16일간)',
        description: '세계 최대 규모의 맥주 축제로, 매년 600만 명 이상이 방문합니다. 전통 바이에른 문화와 함께 최고의 맥주를 즐길 수 있습니다.',
        targetAudience: '직장인, 문화 애호가, 맥주 애호가',
        totalBudget: 2800000,
        imageKeyword: 'Oktoberfest Munich Germany',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42525.72825568896!2d11.5191866!3d48.1317432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sTheresienwiese%2C%20Munich%2C%20Germany!5e0!3m2!1sen!2skr!4v1635000000000!5m2!1sen!2skr',
        
        budget: {
            flight: { label: '항공권 (왕복)', amount: 1400000, icon: 'fa-plane' },
            accommodation: { label: '숙박 (6박)', amount: 600000, icon: 'fa-hotel' },
            food: { label: '식비', amount: 400000, icon: 'fa-utensils' },
            festival: { label: '맥주 & 음식', amount: 250000, icon: 'fa-beer' },
            transportation: { label: '현지 교통', amount: 100000, icon: 'fa-train' },
            misc: { label: '기타 경비', amount: 50000, icon: 'fa-shopping-bag' }
        },
        
        attractions: [
            {
                name: '테레지엔비제 (축제장)',
                location: '뮌헨 시내',
                description: '옥토버페스트가 열리는 광대한 축제장으로, 14개의 대형 맥주 텐트와 다양한 놀이기구, 전통 음식 부스가 있습니다.',
                course: '1-3일차',
                imageKeyword: 'Theresienwiese Oktoberfest Munich'
            },
            {
                name: '마리엔 광장',
                location: '뮌헨 구시가지',
                description: '뮌헨의 중심 광장으로, 신시청사의 글로켄슈필(자동 인형시계)이 유명합니다. 주변에 쇼핑가와 레스토랑이 밀집해 있습니다.',
                course: '4일차',
                imageKeyword: 'Marienplatz Munich'
            },
            {
                name: '노이슈반슈타인 성',
                location: '퓌센 (뮌헨에서 2시간)',
                description: '디즈니 성의 모델이 된 동화 같은 성으로, 독일에서 가장 인기 있는 관광지입니다. 알프스 산맥을 배경으로 한 절경이 압권입니다.',
                course: '5일차',
                imageKeyword: 'Neuschwanstein Castle Germany'
            },
            {
                name: 'BMW 박물관 & 올림픽 공원',
                location: '뮌헨 북부',
                description: 'BMW의 역사와 혁신을 체험할 수 있는 박물관과 1972년 올림픽이 열렸던 현대적인 공원입니다.',
                course: '6일차',
                imageKeyword: 'BMW Museum Munich'
            }
        ],
        
        tips: [
            '주말과 저녁 시간에는 텐트가 매우 혼잡하니 평일 오전 방문을 추천합니다.',
            '전통 의상(디른들, 레더호젠)을 입으면 더욱 분위기를 즐길 수 있습니다.',
            '1 Mass(맥주 1리터)는 약 13-15유로이며, 음식은 10-20유로 정도입니다.',
            '텐트 내 테이블 예약은 필수이며, 호텔은 최소 6개월 전 예약이 필요합니다.',
            '대중교통(U-Bahn, S-Bahn)을 이용하면 편리합니다.',
            '안전을 위해 귀중품을 조심하고, 과음하지 않도록 주의하세요.'
        ],
        
        preparation: [
            '편안한 신발 (오래 걷게 됩니다)',
            '전통 의상 (선택사항, 현지 구매 가능)',
            '카메라 (멋진 사진 촬영)',
            '현금 (일부 텐트는 카드 불가)',
            '가벼운 재킷 (밤에는 쌀쌀)',
            '숙취 해소제'
        ]
    },
    
    carnival: {
        id: 'carnival',
        name: 'Rio Carnival',
        nameKo: '리우 카니발',
        location: '리우데자네이루, 브라질',
        country: 'Brazil',
        period: '2월 말 ~ 3월 초 (재의 수요일 전 5일간)',
        description: '세계에서 가장 화려하고 열정적인 축제로, 삼바 퍼레이드와 거리 파티가 도시 전체를 뜨겁게 달굽니다.',
        targetAudience: '음악/춤 애호가, 축제 마니아, 활동적인 여행객',
        totalBudget: 3500000,
        imageKeyword: 'Rio Carnival Brazil',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117505.38165523665!2d-43.2093736!3d-22.9068467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sSambadrome%20Marquês%20de%20Sapucaí!5e0!3m2!1sen!2skr!4v1635000000000!5m2!1sen!2skr',
        
        budget: {
            flight: { label: '항공권 (왕복)', amount: 1800000, icon: 'fa-plane' },
            accommodation: { label: '숙박 (7박)', amount: 800000, icon: 'fa-hotel' },
            food: { label: '식비', amount: 450000, icon: 'fa-utensils' },
            festival: { label: '카니발 티켓', amount: 300000, icon: 'fa-ticket-alt' },
            transportation: { label: '현지 교통', amount: 100000, icon: 'fa-taxi' },
            misc: { label: '기타 경비', amount: 50000, icon: 'fa-shopping-bag' }
        },
        
        attractions: [
            {
                name: '삼보드로모',
                location: '센트로',
                description: '카니발 삼바 퍼레이드가 열리는 거대한 경기장으로, 12개 삼바 스쿨의 화려한 공연을 감상할 수 있습니다. 밤새 진행되는 퍼레이드는 압도적인 스펙터클을 선사합니다.',
                course: '1-2일차',
                imageKeyword: 'Sambadrome Rio de Janeiro'
            },
            {
                name: '코파카바나 해변',
                location: '코파카바나',
                description: '세계에서 가장 유명한 해변 중 하나로, 카니발 기간에는 거리 파티(블로코)가 열립니다. 4km의 백사장과 활기찬 분위기를 즐기세요.',
                course: '3일차',
                imageKeyword: 'Copacabana beach Rio'
            },
            {
                name: '코르코바도 예수상',
                location: '코르코바도 산',
                description: '리우의 상징인 38m 높이의 거대한 예수상이 있는 곳으로, 리우 전경을 한눈에 볼 수 있는 최고의 전망대입니다.',
                course: '4일차',
                imageKeyword: 'Christ the Redeemer Rio'
            },
            {
                name: '슈가로프 산',
                location: '우르카',
                description: '케이블카를 타고 올라가는 396m 높이의 화강암 봉우리로, 리우의 아름다운 만과 해변을 조망할 수 있습니다. 일몰 시간대가 특히 인기입니다.',
                course: '5일차',
                imageKeyword: 'Sugarloaf Mountain Rio'
            },
            {
                name: '셀라론 계단',
                location: '라파',
                description: '칠레 예술가 호르헤 셀라론이 만든 215개의 계단으로, 세계 각국에서 가져온 타일로 장식되어 있습니다. 사진 촬영 명소로 유명합니다.',
                course: '6일차',
                imageKeyword: 'Selaron Steps Rio'
            },
            {
                name: '이파네마 해변',
                location: '이파네마',
                description: '보사노바의 명곡 "이파네마에서 온 소녀"로 유명한 세련된 해변으로, 코파카바나보다 조용하고 고급스러운 분위기입니다.',
                course: '7일차',
                imageKeyword: 'Ipanema beach Rio'
            }
        ],
        
        tips: [
            '삼보드로모 티켓은 최소 3-4개월 전 예약이 필수입니다.',
            '호텔 가격이 평소의 3-5배로 오르니 조기 예약하세요.',
            '거리 파티(블로코)는 무료이며, 더 자유로운 분위기를 즐길 수 있습니다.',
            '소매치기가 많으니 귀중품은 호텔에 두고, 최소한만 지참하세요.',
            '더운 날씨이므로 수분 섭취와 자외선 차단에 신경 쓰세요.',
            '포르투갈어 기본 회화를 익혀두면 도움이 됩니다.',
            '밤늦게 혼자 다니지 말고, 택시는 공식 택시만 이용하세요.'
        ],
        
        preparation: [
            '가벼운 여름 옷 (반팔, 반바지, 수영복)',
            '편안한 샌들과 운동화',
            '카니발 의상 (선택사항, 현지 구매 가능)',
            '높은 SPF 자외선 차단제',
            '모자와 선글라스',
            '방수 가방 및 휴대폰 방수 케이스',
            '비상 약품 (설사약, 해열제 등)',
            '현금 (거리에서는 카드 사용 어려움)'
        ]
    }
};


// ===== 상품 개발 배경 및 시장 분석 데이터 =====
const marketAnalysis = {
    developmentReason: {
        title: '해외 축제 관광상품 개발 이유',
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
                title: '시즌성을 활용한 수익 극대화',
                description: '축제 특정 기간에 집중 판매로 성수기 매출 확보 및 연간 매출 안정화'
            }
        ],
        targetJustification: {
            primary: {
                segment: '대학생 및 직장 초년생 (20-30대)',
                reason: 'SNS 활동 활발, 새로운 경험 추구, 친구들과의 추억 만들기 중시',
                marketSize: '연간 약 50만명 (해외여행 시장의 15%)',
                averageSpend: '250만원'
            },
            secondary: {
                segment: '직장인 및 신혼부부 (30-40대)',
                reason: '여유로운 소득, 품질 중시, 문화체험 선호',
                marketSize: '연간 약 30만명',
                averageSpend: '350만원'
            }
        },
        competitiveAdvantage: [
            '축제 현장 분위기와 관광을 동시에 즐길 수 있는 복합 상품',
            '각 축제별 최적화된 일정 및 숙소 배치',
            '현지 가이드와 함께하는 안전하고 편리한 여행',
            '단체 할인을 통한 가격 경쟁력'
        ]
    },
    
    profitability: {
        tomatina: {
            productCode: 'FEST-ES-001',
            productName: '열정의 토마토 축제 5일',
            costStructure: {
                airfare: 1100000,      // 원가
                accommodation: 350000,
                meals: 200000,
                admission: 40000,
                guide: 150000,
                insurance: 50000,
                margin: 310000         // 마진
            },
            sellingPrice: 2200000,
            costPrice: 1890000,
            marginRate: 14.1,          // 마진율 %
            breakEvenUnits: 15,        // 손익분기점 인원
            expectedUnits: {
                monthly: 40,           // 월 예상 인원 (8월 집중)
                quarterly: 80,
                annual: 120
            },
            revenue: {
                monthly: 88000000,     // 월 예상 매출
                quarterly: 176000000,
                annual: 264000000
            },
            profit: {
                monthly: 12400000,     // 월 예상 수익
                quarterly: 24800000,
                annual: 37200000
            }
        },
        oktoberfest: {
            productCode: 'FEST-DE-002',
            productName: '뮌헨 맥주 축제 6일',
            costStructure: {
                airfare: 1300000,
                accommodation: 500000,
                meals: 280000,
                admission: 0,
                guide: 180000,
                insurance: 60000,
                margin: 480000
            },
            sellingPrice: 2800000,
            costPrice: 2320000,
            marginRate: 17.1,
            breakEvenUnits: 12,
            expectedUnits: {
                monthly: 60,
                quarterly: 120,
                annual: 180
            },
            revenue: {
                monthly: 168000000,
                quarterly: 336000000,
                annual: 504000000
            },
            profit: {
                monthly: 28800000,
                quarterly: 57600000,
                annual: 86400000
            }
        },
        carnival: {
            productCode: 'FEST-BR-003',
            productName: '리우 삼바 카니발 7일',
            costStructure: {
                airfare: 1650000,
                accommodation: 700000,
                meals: 350000,
                admission: 250000,
                guide: 200000,
                insurance: 70000,
                margin: 780000
            },
            sellingPrice: 3500000,
            costPrice: 3220000,
            marginRate: 22.3,
            breakEvenUnits: 10,
            expectedUnits: {
                monthly: 35,
                quarterly: 70,
                annual: 105
            },
            revenue: {
                monthly: 122500000,
                quarterly: 245000000,
                annual: 367500000
            },
            profit: {
                monthly: 27300000,
                quarterly: 54600000,
                annual: 81900000
            }
        },
        total: {
            annualRevenue: 1135500000,     // 총 연간 매출
            annualProfit: 205500000,        // 총 연간 수익
            averageMarginRate: 18.1,        // 평균 마진율
            totalExpectedCustomers: 405     // 총 예상 고객 수
        }
    },
    
    expectedEffects: {
        financial: {
            firstYearRevenue: 1135500000,
            firstYearProfit: 205500000,
            secondYearGrowth: 30,          // 2년차 성장률 %
            thirdYearGrowth: 50            // 3년차 누적 성장률 %
        },
        marketing: {
            brandAwareness: '축제 전문 여행사 이미지 구축',
            customerRetention: '재방문율 40% 이상 목표',
            wordOfMouth: 'SNS 바이럴 마케팅 효과',
            mediaExposure: '여행 전문 매체 및 블로거 협업'
        },
        strategic: {
            portfolioDiversification: '계절별 상품 라인업 확대',
            b2bOpportunities: '대학교, 기업 단체 여행 수주',
            futureExpansion: '아시아 축제(홀리, 송크란 등) 확장 계획',
            partnershipBuilding: '현지 여행사 및 호텔 장기 계약'
        }
    }
};


// ===== Unsplash API 설정 =====
// 실제 사용 시에는 본인의 Unsplash API Key를 발급받아 사용하세요
// https://unsplash.com/developers 에서 무료로 발급 가능
const UNSPLASH_ACCESS_KEY = 'Id8OlS5V38OdwbDrUvNzBmnTao4U6dyPbOPyZwcNtAI';
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';

// ===== 이미지 캐시 저장소 =====
const imageCache = {};

// ===== Unsplash API를 통한 이미지 검색 =====
async function fetchImageFromUnsplash(keyword, size = 'regular') {
    // 캐시 확인
    if (imageCache[keyword]) {
        return imageCache[keyword];
    }
    
    try {
        // API Key가 설정되지 않은 경우 플레이스홀더 이미지 사용
        if (UNSPLASH_ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY_HERE') {
            console.warn('Unsplash API Key가 설정되지 않았습니다. 플레이스홀더 이미지를 사용합니다.');
            return getPlaceholderImage(keyword);
        }
        
        const response = await fetch(
            `${UNSPLASH_API_URL}?query=${encodeURIComponent(keyword)}&per_page=1&orientation=landscape`,
            {
                headers: {
                    'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
                }
            }
        );
        
        if (!response.ok) {
            throw new Error('이미지를 가져오는데 실패했습니다.');
        }
        
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            const imageUrl = data.results[0].urls[size];
            imageCache[keyword] = imageUrl;
            return imageUrl;
        } else {
            return getPlaceholderImage(keyword);
        }
    } catch (error) {
        console.error('Unsplash API 오류:', error);
        return getPlaceholderImage(keyword);
    }
}

// ===== 플레이스홀더 이미지 생성 (API 키가 없을 때 사용) =====
function getPlaceholderImage(keyword) {
    // 고정 이미지 URL 사용 (더 안정적)
    const imageMap = {
        'La Tomatina festival Spain': 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&h=900&fit=crop',
        'Munich Oktoberfest Germany': 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=1600&h=900&fit=crop',
        'Rio Carnival Brazil': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&h=900&fit=crop',
        'Bunol Castle Spain': 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&h=600&fit=crop',
        'Valencia old town Spain': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
        'City of Arts and Sciences Valencia': 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800&h=600&fit=crop',
        'Malvarrosa beach Valencia': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
        'Theresienwiese Oktoberfest Munich': 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=800&h=600&fit=crop',
        'Marienplatz Munich': 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&h=600&fit=crop',
        'Neuschwanstein Castle Germany': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop',
        'BMW Museum Munich': 'https://images.unsplash.com/photo-1556195023-d5d7bf52a3f7?w=800&h=600&fit=crop',
        'Sambadrome Rio de Janeiro': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
        'Copacabana beach Rio': 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=600&fit=crop',
        'Christ the Redeemer Rio': 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=600&fit=crop',
        'Sugarloaf Mountain Rio': 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=600&fit=crop',
        'Selaron Steps Rio': 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&h=600&fit=crop',
        'Ipanema beach Rio': 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=600&fit=crop'
    };
    
    return imageMap[keyword] || `https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&h=900&fit=crop&q=80&${Math.random()}`;
}

// ===== 페이지 로드 시 초기화 =====
document.addEventListener('DOMContentLoaded', async function() {
    await loadFestivalCards();
    setupSmoothScroll();
    setupAnimations();
});

// ===== 축제 카드 로드 및 이미지 삽입 =====
async function loadFestivalCards() {
    const container = document.getElementById('festivalCards');
    container.innerHTML = ''; // 초기화
    
    // 스켈레톤 로딩 표시
    showSkeletonCards(container);
    
    // 각 축제 데이터 처리
    for (const [key, festival] of Object.entries(festivalsData)) {
        try {
            // 메인 이미지 가져오기
            const mainImage = await fetchImageFromUnsplash(festival.imageKeyword);
            
            // 카드 생성
            const card = createFestivalCard(festival, mainImage);
            container.appendChild(card);
        } catch (error) {
            console.error(`${festival.name} 카드 생성 오류:`, error);
        }
    }
    
    // 스켈레톤 제거
    removeSkeletonCards(container);
}

// ===== 스켈레톤 카드 표시 =====
function showSkeletonCards(container) {
    for (let i = 0; i < 3; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'col-lg-4 col-md-6 skeleton-card';
        skeleton.innerHTML = `
            <div class="festival-card">
                <div class="festival-card-image skeleton" style="height: 250px;"></div>
                <div class="festival-card-body">
                    <div class="skeleton" style="height: 30px; width: 80%; margin-bottom: 1rem;"></div>
                    <div class="skeleton" style="height: 20px; width: 60%; margin-bottom: 1rem;"></div>
                    <div class="skeleton" style="height: 60px; width: 100%;"></div>
                </div>
            </div>
        `;
        container.appendChild(skeleton);
    }
}

// ===== 스켈레톤 카드 제거 =====
function removeSkeletonCards(container) {
    const skeletons = container.querySelectorAll('.skeleton-card');
    skeletons.forEach(skeleton => skeleton.remove());
}

// ===== 축제 카드 생성 =====
function createFestivalCard(festival, imageUrl) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';
    
    col.innerHTML = `
        <div class="festival-card" onclick="showFestivalDetail('${festival.id}')">
            <div class="festival-card-image">
                <img src="${imageUrl}" alt="${festival.name}" loading="lazy">
                <div class="festival-card-badge">${festival.country}</div>
            </div>
            <div class="festival-card-body">
                <h3 class="festival-card-title">${festival.nameKo}</h3>
                <p class="festival-card-location">
                    <i class="fas fa-map-marker-alt"></i> ${festival.location}
                </p>
                <p class="festival-card-description">${festival.description}</p>
                <div class="festival-card-info">
                    <span class="festival-card-period">
                        <i class="fas fa-calendar-alt"></i> ${festival.period.split('~')[0].trim()}
                    </span>
                    <span class="festival-card-price">
                        ₩${formatNumber(festival.totalBudget)}
                    </span>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// ===== 숫자 포맷팅 (천 단위 콤마) =====
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ===== 축제 상세 정보 표시 =====
async function showFestivalDetail(festivalId) {
    const festival = festivalsData[festivalId];
    if (!festival) return;
    
    const detailSection = document.getElementById('festivalDetail');
    
    // 상세 정보 표시
    detailSection.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 스크롤 방지
    
    // 헤더 이미지 로드
    const headerImage = await fetchImageFromUnsplash(festival.imageKeyword, 'full');
    document.getElementById('detailHeaderImage').src = headerImage;
    
    // 기본 정보 채우기
    document.getElementById('detailTitle').textContent = festival.nameKo;
    document.getElementById('detailLocation').querySelector('span').textContent = festival.location;
    document.getElementById('detailPeriod').textContent = festival.period;
    document.getElementById('detailTarget').textContent = festival.targetAudience;
    document.getElementById('detailDescription').textContent = festival.description;
    
    // 지도 로드
    document.getElementById('detailMap').innerHTML = `
        <iframe src="${festival.mapEmbed}" allowfullscreen="" loading="lazy"></iframe>
    `;
    
    // 관광지 로드
    await loadAttractions(festival);
    
    // 경비 정보 로드
    loadBudgetInfo(festival);
    
    // 여행 팁 로드
    loadTravelTips(festival);
    
    // 맨 위로 스크롤
    detailSection.scrollTop = 0;
}

// ===== 관광지 리스트 로드 =====
async function loadAttractions(festival) {
    const container = document.getElementById('attractionsList');
    container.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-spin fa-2x"></i></div>';
    
    const attractionsHTML = [];
    
    for (const attraction of festival.attractions) {
        // 각 관광지 이미지 가져오기
        const image = await fetchImageFromUnsplash(attraction.imageKeyword, 'small');
        
        attractionsHTML.push(`
            <div class="attraction-item">
                <img src="${image}" alt="${attraction.name}" class="attraction-image">
                <div class="attraction-content">
                    <h4>${attraction.name}</h4>
                    <p>${attraction.description}</p>
                    <div class="attraction-location">
                        <i class="fas fa-map-marker-alt"></i> ${attraction.location}
                        <span style="margin-left: 1rem; color: #667eea;">
                            <i class="fas fa-route"></i> ${attraction.course}
                        </span>
                    </div>
                </div>
            </div>
        `);
    }
    
    container.innerHTML = attractionsHTML.join('');
}

// ===== 경비 정보 로드 =====
function loadBudgetInfo(festival) {
    const detailsContainer = document.getElementById('budgetDetails');
    const totalContainer = document.getElementById('budgetTotal');
    
    let budgetHTML = '';
    const labels = [];
    const amounts = [];
    
    for (const [key, item] of Object.entries(festival.budget)) {
        budgetHTML += `
            <div class="budget-item">
                <div class="budget-item-label">
                    <i class="fas ${item.icon}"></i>
                    ${item.label}
                </div>
                <div class="budget-item-value">₩${formatNumber(item.amount)}</div>
            </div>
        `;
        labels.push(item.label);
        amounts.push(item.amount);
    }
    
    detailsContainer.innerHTML = budgetHTML;
    totalContainer.textContent = `₩${formatNumber(festival.totalBudget)}`;
    
    // 차트 생성
    createBudgetChart(labels, amounts);
}

// ===== 경비 차트 생성 (Chart.js) =====
let budgetChartInstance = null;

function createBudgetChart(labels, data) {
    const ctx = document.getElementById('budgetChart');
    
    // 기존 차트 제거
    if (budgetChartInstance) {
        budgetChartInstance.destroy();
    }
    
    // 색상 팔레트
    const colors = [
        '#667eea',
        '#764ba2',
        '#f093fb',
        '#4facfe',
        '#43e97b',
        '#fa709a'
    ];
    
    budgetChartInstance = new Chart(ctx, {
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
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12,
                            family: "'Noto Sans KR', sans-serif"
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += '₩' + formatNumber(context.parsed);
                            
                            // 퍼센트 계산
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percent = ((context.parsed / total) * 100).toFixed(1);
                            label += ` (${percent}%)`;
                            
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// ===== 여행 팁 로드 =====
function loadTravelTips(festival) {
    const tipsContainer = document.getElementById('tipsContent');
    const prepContainer = document.getElementById('preparationContent');
    
    // 여행 팁
    let tipsHTML = '<ul>';
    festival.tips.forEach(tip => {
        tipsHTML += `<li><i class="fas fa-check-circle" style="color: #43e97b; margin-right: 0.5rem;"></i>${tip}</li>`;
    });
    tipsHTML += '</ul>';
    tipsContainer.innerHTML = tipsHTML;
    
    // 준비물
    let prepHTML = '<ul>';
    festival.preparation.forEach(item => {
        prepHTML += `<li><i class="fas fa-box" style="color: #667eea; margin-right: 0.5rem;"></i>${item}</li>`;
    });
    prepHTML += '</ul>';
    prepContainer.innerHTML = prepHTML;
}

// ===== 상세 정보 닫기 =====
function closeDetail() {
    const detailSection = document.getElementById('festivalDetail');
    detailSection.style.display = 'none';
    document.body.style.overflow = 'auto'; // 스크롤 복원
}

// ===== 부드러운 스크롤 설정 =====
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== 스크롤 애니메이션 설정 =====
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 관찰할 요소들
    document.querySelectorAll('.festival-card, .accordion-item').forEach(el => {
        observer.observe(el);
    });
}

// ===== ESC 키로 상세 정보 닫기 =====
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDetail();
    }
});

// ===== 상세 정보 배경 클릭 시 닫기 =====
document.getElementById('festivalDetail')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeDetail();
    }
});

// ===== 이미지 로딩 에러 처리 =====
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/800x600/667eea/ffffff?text=Image+Not+Available';
    }
}, true);

// ===== 콘솔 환영 메시지 =====
console.log('%c🎉 Festival Travel Guide', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%cUnsplash API를 사용하려면 script.js 파일의 UNSPLASH_ACCESS_KEY를 설정하세요.', 'color: #666; font-size: 14px;');
console.log('%chttps://unsplash.com/developers 에서 무료로 발급받을 수 있습니다.', 'color: #666; font-size: 14px;');

// 패키지 정보 표시
function displayPackageInfo(packageDetails) {
    // 포함 사항
    const includedList = document.getElementById('packageIncluded');
    includedList.innerHTML = packageDetails.included.map(item => 
        `<li><i class="fas fa-check text-success"></i> ${item}</li>`
    ).join('');
    
    // 불포함 사항
    const excludedList = document.getElementById('packageExcluded');
    excludedList.innerHTML = packageDetails.excluded.map(item => 
        `<li><i class="fas fa-times text-danger"></i> ${item}</li>`
    ).join('');
    
    // 출발 일정
    const datesList = document.getElementById('packageDates');
    datesList.innerHTML = packageDetails.departureDates.map(date => 
        `<li><i class="fas fa-plane-departure text-info"></i> ${date}</li>`
    ).join('');
    
    // 단체 할인
    const discountDiv = document.getElementById('packageDiscount');
    discountDiv.innerHTML = Object.entries(packageDetails.groupDiscount).map(([people, discount]) => 
        `<div class="discount-item">
            <span class="badge bg-warning text-dark">${people}</span> 
            <span class="text-success fw-bold">${discount}</span>
        </div>`
    ).join('');
    
    // 상품 코드
    document.getElementById('packageCode').textContent = packageDetails.productCode;
}

