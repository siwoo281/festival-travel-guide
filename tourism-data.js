// ===== 관광 특화 데이터 =====

// 주변 관광지 상세 정보
const nearbyAttractions = {
    tomatina: [
        {
            name: '발렌시아 구시가지',
            distance: '38km',
            duration: '40분',
            transport: '기차',
            cost: '€3.90',
            rating: 4.6,
            description: '중세 건축물과 대성당이 있는 역사 지구',
            hours: '연중무휴',
            mapLink: 'https://goo.gl/maps/valencia-old-town'
        },
        {
            name: '알부페라 국립공원',
            distance: '45km',
            duration: '50분',
            transport: '버스',
            cost: '€5.50',
            rating: 4.7,
            description: '석호와 쌀밭이 아름다운 자연공원',
            hours: '일출-일몰',
            mapLink: 'https://goo.gl/maps/albufera'
        },
        {
            name: '예술과학의 도시',
            distance: '40km',
            duration: '45분',
            transport: '기차',
            cost: '€3.90',
            rating: 4.8,
            description: '현대적인 건축물로 유명한 문화 복합 단지',
            hours: '10:00-21:00',
            mapLink: 'https://goo.gl/maps/city-of-arts'
        },
        {
            name: '말바로사 해변',
            distance: '42km',
            duration: '45분',
            transport: '기차+트램',
            cost: '€4.50',
            rating: 4.5,
            description: '발렌시아 최고의 도심 해변',
            hours: '24시간',
            mapLink: 'https://goo.gl/maps/malvarrosa'
        }
    ],
    oktoberfest: [
        {
            name: '마리엔 광장',
            distance: '2.5km',
            duration: '15분',
            transport: '지하철',
            cost: '€3.40',
            rating: 4.7,
            description: '뮌헨의 중심 광장, 신시청사 글로켄슈필',
            hours: '24시간',
            mapLink: 'https://goo.gl/maps/marienplatz'
        },
        {
            name: '노이슈반슈타인 성',
            distance: '120km',
            duration: '2시간',
            transport: '기차+버스',
            cost: '€29',
            rating: 4.8,
            description: '디즈니 성의 모델이 된 동화 같은 성',
            hours: '09:00-18:00',
            mapLink: 'https://goo.gl/maps/neuschwanstein'
        },
        {
            name: '님펜부르크 궁전',
            distance: '7km',
            duration: '25분',
            transport: '트램',
            cost: '€3.40',
            rating: 4.6,
            description: '바로크 양식의 여름 궁전과 정원',
            hours: '09:00-18:00',
            mapLink: 'https://goo.gl/maps/nymphenburg'
        },
        {
            name: 'BMW 박물관',
            distance: '5km',
            duration: '20분',
            transport: '지하철',
            cost: '€3.40',
            rating: 4.5,
            description: 'BMW의 역사와 최신 모델 전시',
            hours: '10:00-18:00',
            mapLink: 'https://goo.gl/maps/bmw-museum'
        }
    ],
    carnival: [
        {
            name: '코파카바나 해변',
            distance: '8km',
            duration: '30분',
            transport: '지하철',
            cost: 'R$4.40',
            rating: 4.6,
            description: '세계적으로 유명한 리우의 상징적 해변',
            hours: '24시간',
            mapLink: 'https://goo.gl/maps/copacabana'
        },
        {
            name: '코르코바도 예수상',
            distance: '10km',
            duration: '40분',
            transport: '코그철도',
            cost: 'R$89',
            rating: 4.8,
            description: '리우의 상징, 세계 7대 불가사의',
            hours: '08:00-19:00',
            mapLink: 'https://goo.gl/maps/christ-redeemer'
        },
        {
            name: '슈가로프 산',
            distance: '6km',
            duration: '25분',
            transport: '버스+케이블카',
            cost: 'R$120',
            rating: 4.7,
            description: '케이블카로 오르는 전망대, 360도 파노라마',
            hours: '08:00-20:00',
            mapLink: 'https://goo.gl/maps/sugarloaf'
        },
        {
            name: '셀라론 계단',
            distance: '5km',
            duration: '20분',
            transport: '지하철',
            cost: 'R$4.40',
            rating: 4.6,
            description: '세계 각국 타일로 장식된 예술 계단',
            hours: '24시간',
            mapLink: 'https://goo.gl/maps/selaron'
        }
    ]
};

// 현지 음식 가이드
const localFoodGuide = {
    tomatina: {
        mustTry: [
            {
                name: '파에야',
                description: '발렌시아의 대표 쌀 요리, 해산물/고기 버전',
                price: '€12-18',
                image: '🥘',
                allergens: ['해산물', '조개류']
            },
            {
                name: '호르차타',
                description: '타이거넛으로 만든 전통 시원한 음료',
                price: '€2-3',
                image: '🥤',
                allergens: ['견과류']
            },
            {
                name: '부뇰스',
                description: '스페인식 도넛, 초콜릿 소스와 함께',
                price: '€3-5',
                image: '🍩',
                allergens: ['글루텐', '유제품']
            },
            {
                name: '피델라',
                description: '가는 면을 사용한 발렌시아 전통 요리',
                price: '€10-15',
                image: '🍜',
                allergens: ['해산물']
            }
        ],
        restaurants: [
            {
                name: 'La Pepica',
                type: '파에야 전문점',
                location: '말바로사 해변',
                priceRange: '€€€',
                rating: 4.6,
                specialty: '전통 발렌시아 파에야',
                hours: '13:00-16:00, 20:00-23:00'
            },
            {
                name: 'Horchatería Santa Catalina',
                type: '호르차타 전문점',
                location: '구시가지',
                priceRange: '€',
                rating: 4.8,
                specialty: '수제 호르차타와 파르톤',
                hours: '08:00-22:00'
            },
            {
                name: 'Casa Montaña',
                type: '타파스 바',
                location: '카바녜알 지구',
                priceRange: '€€',
                rating: 4.7,
                specialty: '전통 타파스와 현지 와인',
                hours: '12:00-16:00, 19:00-23:30'
            }
        ]
    },
    oktoberfest: {
        mustTry: [
            {
                name: '바이스부어스트',
                description: '뮌헨 전통 흰 소시지, 프레첼과 함께',
                price: '€8-12',
                image: '🌭',
                allergens: ['돼지고기']
            },
            {
                name: '슈바인학센',
                description: '독일식 돼지 족발, 맥주와 완벽한 조합',
                price: '€15-22',
                image: '🍖',
                allergens: ['돼지고기']
            },
            {
                name: '프레첼',
                description: '큰 소금 프레첼, 맥주의 필수 안주',
                price: '€3-5',
                image: '🥨',
                allergens: ['글루텐']
            },
            {
                name: '슈니첼',
                description: '바삭한 송아지 커틀릿',
                price: '€12-18',
                image: '🍗',
                allergens: ['글루텐', '계란']
            }
        ],
        restaurants: [
            {
                name: 'Hofbräuhaus',
                type: '전통 맥주 홀',
                location: '알트슈타트',
                priceRange: '€€',
                rating: 4.5,
                specialty: '전통 바이에른 음식과 맥주',
                hours: '09:00-23:30'
            },
            {
                name: 'Augustiner-Bräu',
                type: '맥주 레스토랑',
                location: '시내 중심',
                priceRange: '€€',
                rating: 4.7,
                specialty: '뮌헨 최고의 맥주와 요리',
                hours: '10:00-24:00'
            },
            {
                name: 'Viktualienmarkt',
                type: '야외 시장',
                location: '마리엔 광장 근처',
                priceRange: '€',
                rating: 4.6,
                specialty: '신선한 현지 음식과 간식',
                hours: '08:00-18:00'
            }
        ]
    },
    carnival: {
        mustTry: [
            {
                name: '페이조아다',
                description: '브라질 국민 음식, 콩과 돼지고기 스튜',
                price: 'R$25-40',
                image: '🍲',
                allergens: ['돼지고기']
            },
            {
                name: '슈라스코',
                description: '브라질식 BBQ, 다양한 고기 무제한',
                price: 'R$60-90',
                image: '🥩',
                allergens: ['소고기', '돼지고기']
            },
            {
                name: '아사이 볼',
                description: '아사이 베리 스무디 볼, 건강 간식',
                price: 'R$15-25',
                image: '🍇',
                allergens: ['과일']
            },
            {
                name: '카이피리냐',
                description: '브라질 대표 칵테일, 라임과 카샤사',
                price: 'R$15-20',
                image: '��',
                allergens: ['알코올']
            }
        ],
        restaurants: [
            {
                name: 'Confeitaria Colombo',
                type: '전통 카페',
                location: '센트로',
                priceRange: '€€',
                rating: 4.7,
                specialty: '브라질 전통 디저트와 커피',
                hours: '09:00-20:00'
            },
            {
                name: 'Churrascaria Palace',
                type: '슈라스코 전문점',
                location: '코파카바나',
                priceRange: '€€€',
                rating: 4.6,
                specialty: '프리미엄 브라질 BBQ',
                hours: '12:00-24:00'
            },
            {
                name: 'Bar do Mineiro',
                type: '로컬 바',
                location: '산타 테레사',
                priceRange: '€',
                rating: 4.8,
                specialty: '페이조아다와 카이피리냐',
                hours: '11:00-23:00'
            }
        ]
    }
};

// 긴급 정보
const emergencyInfo = {
    tomatina: {
        embassy: {
            name: '주스페인 대한민국 대사관',
            address: 'Calle González Amigó, 15, 28033 Madrid',
            phone: '+34-91-353-2000',
            emergency: '+34-699-716-237',
            email: 'spain@mofa.go.kr',
            hours: '월-금 09:00-13:00, 14:00-17:00'
        },
        police: '112',
        ambulance: '061',
        fire: '080',
        hospital: 'Hospital Universitario La Fe (+34-961-244-000)',
        pharmacy: 'Farmacias de Guardia (24시간)',
        tourism: 'Tourist Info Valencia (+34-963-986-422)'
    },
    oktoberfest: {
        embassy: {
            name: '주독일 대한민국 대사관',
            address: 'Stülerstraße 8-10, 10787 Berlin',
            phone: '+49-30-260-650',
            emergency: '+49-179-681-9854',
            email: 'germany@mofa.go.kr',
            hours: '월-금 09:00-12:00, 14:00-17:00'
        },
        police: '110',
        ambulance: '112',
        fire: '112',
        hospital: 'Klinikum rechts der Isar (+49-89-4140-0)',
        pharmacy: 'Bahnhof Apotheke (24시간)',
        tourism: 'Tourist Info Munich (+49-89-233-96500)'
    },
    carnival: {
        embassy: {
            name: '주브라질 대한민국 대사관',
            address: 'SEN Av. das Nações, lote 14, 70434-900 Brasília',
            phone: '+55-61-3321-2500',
            emergency: '+55-61-99965-0871',
            email: 'brazil@mofa.go.kr',
            hours: '월-금 09:00-12:30, 14:00-17:30'
        },
        police: '190',
        ambulance: '192',
        fire: '193',
        hospital: 'Hospital Samaritano (+55-21-3509-5000)',
        pharmacy: 'Drogaria Pacheco (24시간)',
        tourism: 'Riotur (+55-21-2542-8080)'
    }
};

// 기본 회화 (생존 필수 10개)
const basicPhrases = {
    tomatina: {
        language: '스페인어',
        phrases: [
            { spanish: 'Hola', korean: '안녕하세요', pronunciation: '올라' },
            { spanish: 'Gracias', korean: '감사합니다', pronunciation: '그라시아스' },
            { spanish: '¿Cuánto cuesta?', korean: '얼마예요?', pronunciation: '꽌또 꾸에스따?' },
            { spanish: 'No entiendo', korean: '이해 못했어요', pronunciation: '노 엔띠엔도' },
            { spanish: 'Ayuda, por favor', korean: '도와주세요', pronunciation: '아유다, 뽀르 파보르' },
            { spanish: '¿Dónde está...?', korean: '...어디 있어요?', pronunciation: '돈데 에스따?' },
            { spanish: 'La cuenta, por favor', korean: '계산서 주세요', pronunciation: '라 꾸엔따, 뽀르 파보르' },
            { spanish: 'Baño', korean: '화장실', pronunciation: '바뇨' },
            { spanish: 'Agua', korean: '물', pronunciation: '아과' },
            { spanish: 'Adiós', korean: '안녕히 가세요', pronunciation: '아디오스' }
        ]
    },
    oktoberfest: {
        language: '독일어',
        phrases: [
            { german: 'Guten Tag', korean: '안녕하세요', pronunciation: '구텐 탁' },
            { german: 'Danke', korean: '감사합니다', pronunciation: '단케' },
            { german: 'Wie viel kostet das?', korean: '얼마예요?', pronunciation: '비 필 코스텟 다스?' },
            { german: 'Ich verstehe nicht', korean: '이해 못했어요', pronunciation: '이히 페어슈테에 니히트' },
            { german: 'Hilfe bitte', korean: '도와주세요', pronunciation: '힐페 비테' },
            { german: 'Wo ist...?', korean: '...어디 있어요?', pronunciation: '보 이스트?' },
            { german: 'Die Rechnung, bitte', korean: '계산서 주세요', pronunciation: '디 레히눙, 비테' },
            { german: 'Toilette', korean: '화장실', pronunciation: '토일레테' },
            { german: 'Wasser', korean: '물', pronunciation: '바서' },
            { german: 'Auf Wiedersehen', korean: '안녕히 가세요', pronunciation: '아우프 비더제엔' }
        ]
    },
    carnival: {
        language: '포르투갈어',
        phrases: [
            { portuguese: 'Olá', korean: '안녕하세요', pronunciation: '올라' },
            { portuguese: 'Obrigado/a', korean: '감사합니다', pronunciation: '오브리가두/다' },
            { portuguese: 'Quanto custa?', korean: '얼마예요?', pronunciation: '꽌뚜 꾸스따?' },
            { portuguese: 'Não entendo', korean: '이해 못했어요', pronunciation: '나웅 엔뗀두' },
            { portuguese: 'Ajuda, por favor', korean: '도와주세요', pronunciation: '아쥬다, 뽀르 파보르' },
            { portuguese: 'Onde fica...?', korean: '...어디 있어요?', pronunciation: '온지 피까?' },
            { portuguese: 'A conta, por favor', korean: '계산서 주세요', pronunciation: '아 꼰따, 뽀르 파보르' },
            { portuguese: 'Banheiro', korean: '화장실', pronunciation: '반예이루' },
            { portuguese: 'Água', korean: '물', pronunciation: '아구아' },
            { portuguese: 'Tchau', korean: '안녕히 가세요', pronunciation: '차우' }
        ]
    }
};

console.log('🗺️ 관광 특화 데이터 로드 완료!');
