export const festivalsData = {
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
        image: 'images/라토마티나.jpeg',
        detailedDescription: `
            <h4>축제의 역사</h4>
            <p>1945년에 시작된 라 토마티나는 부뇰 마을의 작은 싸움에서 비롯되었습니다. 젊은이들이 광장에서 싸우다가 우연히 채소 가판대의 토마토를 던지면서 시작되었고, 이것이 매년 반복되면서 전통 축제로 자리잡았습니다.</p>
            
            <h4>축제 규칙</h4>
            <ul>
                <li>토마토를 던지기 전에 으깨서 던져야 합니다 (안전을 위해)</li>
                <li>11시에 로켓 신호와 함께 시작되어 정확히 1시간 동안 진행됩니다</li>
                <li>참가 인원은 안전을 위해 약 20,000명으로 제한됩니다</li>
                <li>축제 후 소방관들이 거리를 청소합니다</li>
            </ul>
            
            <h4>특별한 경험</h4>
            <p>약 150톤의 토마토가 사용되며, 거리는 토마토 주스로 가득 찹니다. 축제 전날 밤에는 파엘라 요리 대회가 열리고, 축제 기간 동안 라이브 음악과 댄스 공연이 이어집니다.</p>
        `,
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.7285894982576!2d-0.7889!3d39.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0x40640856e73be20!2sBu%C3%B1ol%2C%20Valencia%2C%20Spain!5e0!3m2!1sen!2skr!4v1234567890',
        imageQuery: 'la tomatina festival spain',
        fallbackImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
        flightPrice: 850000,
        flightAirline: '이베리아/KLM',
        weather: {
            temperature: '평균 28-32°C',
            season: '여름 (무덥고 건조)',
            recommendation: '가벼운 면 옷, 선글라스, 자외선 차단제 필수',
            precipitation: '강수 확률 낮음 (10% 이하)'
        },
        visaInfo: {
            required: false,
            details: '한국 여권 소지자는 90일 무비자 체류 가능 (쉥겐 조약)',
            additionalInfo: '여권 유효기간 6개월 이상 필수'
        },
        culturalTips: [
            '스페인은 시에스타 문화가 있어 오후 2-5시에는 많은 상점이 문을 닫습니다',
            '저녁 식사는 보통 9시 이후에 시작됩니다',
            '팁은 필수는 아니지만 좋은 서비스에는 5-10% 정도 남기는 것이 관례입니다',
            '영어가 잘 통하지 않을 수 있으니 간단한 스페인어를 익혀가세요'
        ],
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
        nearbyAttractions: [
            {
                name: '발렌시아 해변 (말바로사)',
                distance: '20km',
                description: '유럽에서 가장 아름다운 도시 해변 중 하나로, 깨끗한 모래와 해변가 레스토랑이 즐비합니다.',
                time: '차로 30분'
            },
            {
                name: '예술과학의 도시',
                distance: '25km',
                description: '미래적인 건축물 단지로 수족관, 과학 박물관, 오페라 하우스가 있습니다.',
                time: '차로 40분'
            },
            {
                name: '사군토 로마 유적',
                distance: '30km',
                description: '고대 로마 시대의 극장과 성벽이 잘 보존되어 있는 역사 유적지입니다.',
                time: '차로 45분'
            }
        ],
        localFood: [
            {
                name: '파에야 (Paella)',
                description: '발렌시아가 원조인 스페인 대표 쌀 요리. 해산물이나 토끼고기를 넣어 만듭니다.',
                price: '€15-25',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400'
            },
            {
                name: '호르차타 (Horchata)',
                description: '타이거넛으로 만든 달콤한 음료. 추로스(Fartons)와 함께 먹습니다.',
                price: '€3-5',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400'
            },
            {
                name: '피데우아 (Fideuà)',
                description: '쌀 대신 짧은 국수를 사용한 해산물 요리. 파에야와 비슷하지만 독특한 식감.',
                price: '€12-18',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400'
            },
            {
                name: '부뇰 토마토 소스',
                description: '축제 기간 특별 메뉴로 현지 토마토로 만든 전통 소스 요리',
                price: '€8-12',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
            }
        ],
        restaurants: [
            {
                name: 'La Pepica',
                type: '해산물 레스토랑',
                rating: 4.5,
                priceRange: '€€€',
                specialty: '정통 발렌시아 파에야',
                address: 'Paseo Neptuno, 6, Valencia',
                description: '1898년 개업한 역사 깊은 레스토랑. 해변가에 위치하며 헤밍웨이도 방문했다고 합니다.'
            },
            {
                name: 'Casa Montaña',
                type: '타파스 바',
                rating: 4.7,
                priceRange: '€€',
                specialty: '현지 와인과 타파스',
                address: 'Calle de José Benlliure, 69, Valencia',
                description: '1836년부터 운영된 전통 타파스 바. 현지인들이 사랑하는 숨은 맛집.'
            },
            {
                name: 'Restaurante Navarro',
                type: '스페인 정통 요리',
                rating: 4.4,
                priceRange: '€€€',
                specialty: '미슐랭 추천 파에야',
                address: 'Calle del Arzobispo Mayoral, 5, Valencia',
                description: '미슐랭 가이드 추천 레스토랑. 최고급 식재료로 만든 파에야가 유명합니다.'
            }
        ],
        emergency: {
            embassy: {
                name: '주스페인 대한민국 대사관',
                address: 'C/ González Amigó, 15, 28033 Madrid',
                phone: '+34-91-353-2000',
                emergency: '+34-679-038-590 (영사 긴급연락처)',
                email: 'consular.es@mofa.go.kr',
                hours: '월-금 09:00-17:30'
            },
            police: '112 (경찰, 소방, 구급)',
            ambulance: '061',
            hospital: 'Hospital Clínico Universitario de Valencia: +34-963-862-600',
            pharmacy: '약국은 "Farmacia" 표지판을 찾으세요. 야간 당직 약국 정보는 약국 문에 게시됩니다.',
            tourist_police: '+34-902-102-112'
        },
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
               
            }
        },
        costData: {
            fixedCosts: { guide: 2000000, marketing: 1000000, misc: 500000 },
            variableCostsPerPerson: { flight: 850000, hotel: 400000, ticket: 50000, food: 150000, transport: 100000 }
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
        image: 'images/옥토버페스트.jpeg',
        detailedDescription: `
            <h4>축제의 역사</h4>
            <p>1810년 10월 12일, 바이에른의 루트비히 왕세자와 테레제 공주의 결혼식을 축하하기 위해 시작되었습니다. 200년이 넘는 전통을 자랑하며, 현재는 매년 600만 명 이상이 방문하는 세계 최대 규모의 민속 축제입니다.</p>
            
            <h4>축제 하이라이트</h4>
            <ul>
                <li><strong>14개의 대형 텐트:</strong> 각 텐트마다 수천 명 수용 가능하며 고유의 특색 있는 맥주와 음식 제공</li>
                <li><strong>전통 퍼레이드:</strong> 첫날 오전에 열리는 화려한 전통 의상 퍼레이드</li>
                <li><strong>놀이기구:</strong> 전통적인 민속 놀이기구와 현대적인 테마파크가 결합</li>
                <li><strong>바이에른 음악:</strong> 라이브 밴드가 전통 민속 음악 연주</li>
            </ul>
            
            <h4>맥주 규정</h4>
            <p>옥토버페스트에서는 뮌헨 시내 6개 양조장(Paulaner, Spaten, Hacker-Pschorr, Augustiner, Hofbräu, Löwenbräu)의 맥주만 제공됩니다. 모든 맥주는 바이에른 순수령에 따라 양조됩니다.</p>
        `,
        weather: {
            temperature: '평균 10-18°C',
            season: '가을 (선선하고 쾌적)',
            recommendation: '레이어드 룩 추천, 저녁에는 쌀쌀하니 가디건 필수',
            precipitation: '가끔 비 (우산 준비)'
        },
        visaInfo: {
            required: false,
            details: '한국 여권 소지자는 90일 무비자 체류 가능 (쉥겐 조약)',
            additionalInfo: '여권 유효기간 6개월 이상 필수'
        },
        culturalTips: [
            '텐트 내부에서는 테이블을 예약하지 않으면 앉을 수 없습니다 (사전 예약 강력 권장)',
            '"Prost!" (프로스트)는 건배 인사입니다. 눈을 마주치며 외치세요',
            '맥주는 1리터 단위(Mass)로 제공되며 약 €13-15입니다',
            '전통 의상(디른들/레더호젠) 착용이 권장되며, 현지에서 대여 가능합니다'
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.7285894982576!2d11.5497!3d48.1316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sTheresienwiese%2C%20Munich%2C%20Germany!5e0!3m2!1sen!2skr!4v1234567890',
        imageQuery: 'oktoberfest munich germany',
        fallbackImage: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800',
        flightPrice: 950000,
        flightDuration: '12시간',
        flightAirline: '루프트한자/대한항공',
        nearbyAttractions: [
            {
                name: '노이슈반슈타인 성',
                distance: '120km',
                description: '디즈니 성의 모델이 된 루트비히 2세의 동화 같은 성',
                time: '차로 2시간'
            },
            {
                name: '짤츠부르크 (오스트리아)',
                distance: '150km',
                description: '모차르트의 고향이자 사운드 오브 뮤직 촬영지',
                time: '기차로 1.5시간'
            },
            {
                name: '다하우 수용소',
                distance: '20km',
                description: '역사적 의미가 있는 2차 세계대전 유적지',
                time: '차로 30분'
            }
        ],
        localFood: [
            {
                name: '슈바인스학센 (Schweinshaxe)',
                description: '독일식 돼지 족발구이. 겉은 바삭하고 속은 부드러운 바이에른 대표 요리',
                price: '€12-16',
                mustTry: true
            },
            {
                name: '브레첼 (Breze)',
                description: '독일 전통 프레첼. 맥주와 함께 먹으면 완벽한 조합',
                price: '€3-5',
                mustTry: true
            },
            {
                name: '바이스부어스트 (Weißwurst)',
                description: '뮌헨 전통 흰 소시지. 아침에만 먹는 특별한 음식',
                price: '€8-10',
                mustTry: true
            },
            {
                name: '슈니첼 (Schnitzel)',
                description: '얇게 두드린 송아지 고기 튀김',
                price: '€15-20',
                mustTry: false
            }
        ],
        restaurants: [
            {
                name: 'Hofbräuhaus München',
                type: '전통 맥주 홀',
                rating: 4.3,
                priceRange: '€€',
                specialty: '바이에른 전통 맥주와 요리',
                address: 'Platzl 9, 80331 München',
                description: '1589년 개업한 뮌헨에서 가장 유명한 맥주 홀. 관광객 필수 코스입니다.'
            },
            {
                name: 'Augustiner-Bräu',
                type: '양조장 레스토랑',
                rating: 4.6,
                priceRange: '€€',
                specialty: '뮌헨 최고의 맥주',
                address: 'Landsberger Str. 19, 80339 München',
                description: '현지인들이 인정하는 뮌헨 최고의 맥주. 옥토버페스트 텐트도 운영합니다.'
            }
        ],
        emergency: {
            embassy: {
                name: '주독일 대한민국 대사관',
                address: 'Stülerstraße 8-10, 10787 Berlin',
                phone: '+49-30-260-650',
                emergency: '+49-172-260-6516 (영사 긴급연락처)',
                email: 'info@kor-botschaft.de'
            },
            police: '110',
            ambulance: '112',
            hospital: 'Klinikum rechts der Isar: +49-89-4140-0',
            pharmacy: '약국은 "Apotheke" 표지판. 24시간 약국: +49-89-594-475'
        },
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
            주의사항: ['텐트 예약 필수', '과음 주의', '소매치기 주의'],
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
                '7-9명': '1인당 70,000원 할인',
                '10명 이상': '1인당 100,000원 할인'
            }
        },
        costData: {
            fixedCosts: { guide: 2500000, marketing: 1500000, misc: 700000 },
            variableCostsPerPerson: { flight: 900000, hotel: 600000, food: 250000, transport: 150000 }
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
        image: 'images/리우카니발.jpg',
        detailedDescription: `
            <h4>축제의 역사</h4>
            <p>리우 카니발은 18세기 포르투갈 식민지 시대에 시작되었습니다. 아프리카 노예들의 문화와 유럽의 카니발 전통이 결합하여 독특한 브라질 문화를 만들어냈습니다. 1928년 삼바 학교들이 경쟁을 시작하면서 현재와 같은 대규모 퍼레이드로 발전했습니다.</p>
            
            <h4>삼바드롬 퍼레이드</h4>
            <ul>
                <li><strong>12개 최상위 삼바 학교</strong>가 2일에 걸쳐 경연을 펼칩니다</li>
                <li>각 학교는 <strong>3,000-5,000명의 퍼레이더</strong>와 8-10대의 화려한 수레(Alegoria)를 동원합니다</li>
                <li>퍼레이드는 약 80분 동안 진행되며 심사위원들이 채점합니다</li>
                <li>우승 학교는 1년 동안 챔피언 타이틀을 갖습니다</li>
            </ul>
            
            <h4>거리 파티 (Blocos)</h4>
            <p>공식 퍼레이드 외에도 리우 전역에서 500개 이상의 거리 파티가 열립니다. 누구나 무료로 참여할 수 있으며, 각 블로코마다 고유의 주제와 음악이 있습니다.</p>
        `,
        weather: {
            temperature: '평균 25-35°C',
            season: '한여름 (무덥고 습함)',
            recommendation: '가벼운 면 소재 옷, 모자, 선글라스, 자외선 차단제 필수',
            precipitation: '가끔 소나기 (우산 준비)'
        },
        visaInfo: {
            required: false,
            details: '한국 여권 소지자는 90일 무비자 입국 가능 (2024년부터)',
            additionalInfo: '왕복 항공권과 숙박 증명서 지참 권장. 황열병 예방접종 증명서 필요할 수 있음'
        },
        culturalTips: [
            '브라질 사람들은 매우 친근하고 포옹(abraço)을 자주 합니다',
            '포르투갈어를 사용하며 영어가 잘 통하지 않습니다. 간단한 포르투갈어 학습 추천',
            '치안이 좋지 않으니 귀중품은 호텔 금고에 보관하세요',
            '카니발 기간 물가가 2-3배 상승합니다',
            '"Oi!" (오이)는 인사, "Obrigado/a" (오브리가두/다)는 감사합니다'
        ],
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2285894982576!2d-43.2093!3d-22.9068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e58a085b7af%3A0x4d11e9a933d38ce3!2sRio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2skr!4v1234567890',
        imageQuery: 'rio carnival brazil',
        fallbackImage: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=800',
        flightPrice: 1800000,
        flightDuration: '24시간',
        flightAirline: '에미레이트/터키항공',
        nearbyAttractions: [
            {
                name: '코르코바도 예수상',
                distance: '8km',
                description: '높이 38m의 거대한 예수상, 리우의 상징. 정상에서 보는 전망이 장관입니다',
                time: '차로 30분'
            },
            {
                name: '슈가로프 마운틴',
                distance: '5km',
                description: '케이블카를 타고 올라가는 396m 높이의 바위산',
                time: '차로 20분'
            },
            {
                name: '이파네마 해변',
                distance: '12km',
                description: '유명한 노래의 배경이 된 해변, 코파카바나보다 한적하고 세련됨',
                time: '차로 35분'
            },
            {
                name: '셀라론 계단',
                distance: '3km',
                description: '칠레 예술가가 만든 250개 타일 계단, 인스타그램 명소',
                time: '차로 15분'
            }
        ],
        localFood: [
            {
                name: '페이조아다 (Feijoada)',
                description: '브라질 대표 음식. 검은 콩과 돼지고기를 끓인 스튜',
                price: 'R$40-60 (₩10,000-15,000)',
                mustTry: true
            },
            {
                name: '슈하스코 (Churrasco)',
                description: '브라질식 바비큐. 다양한 고기를 꼬챙이에 구워 제공',
                price: 'R$80-120 (₩20,000-30,000)',
                mustTry: true
            },
            {
                name: '카이피리냐 (Caipirinha)',
                description: '브라질 국민 칵테일. 카샤사(사탕수수 술)에 라임과 설탕',
                price: 'R$15-25 (₩4,000-6,000)',
                mustTry: true
            },
            {
                name: '아사이 볼 (Açaí Bowl)',
                description: '아마존 베리로 만든 건강식. 해변에서 즐기기 좋음',
                price: 'R$20-30 (₩5,000-7,500)',
                mustTry: true
            },
            {
                name: '파스텔 (Pastel)',
                description: '튀긴 만두 같은 거리 음식. 다양한 속 재료',
                price: 'R$5-10 (₩1,250-2,500)',
                mustTry: false
            }
        ],
        restaurants: [
            {
                name: 'Confeitaria Colombo',
                type: '전통 카페/레스토랑',
                rating: 4.5,
                priceRange: '€€€',
                specialty: '페이조아다와 전통 디저트',
                address: 'Rua Gonçalves Dias, 32, Centro',
                description: '1894년 개업한 역사적인 카페. 아르누보 인테리어가 아름답습니다.'
            },
            {
                name: 'Fogo de Chão',
                type: '슈하스코 전문점',
                rating: 4.6,
                priceRange: '€€€',
                specialty: '브라질식 바비큐 뷔페',
                address: 'Av. Reporter Nestor Moreira, Botafogo',
                description: '무제한 고기 바비큐. 고기 애호가들의 천국입니다.'
            },
            {
                name: 'Bar do Mineiro',
                type: '브라질 가정식',
                rating: 4.4,
                priceRange: '€€',
                specialty: '페이조아다',
                address: 'Rua Paschoal Carlos Magno, 99, Santa Teresa',
                description: '현지인들이 사랑하는 전통 음식점. 주말 페이조아다가 유명합니다.'
            }
        ],
        emergency: {
            embassy: {
                name: '주브라질 대한민국 대사관',
                address: 'SEN Av. das Nações, Lote 14, Brasília',
                phone: '+55-61-3321-2500',
                emergency: '+55-61-99825-4135 (영사 긴급연락처)',
                email: 'consular_br@mofa.go.kr',
                consulate: '리우데자네이루 총영사관: +55-21-3826-4804'
            },
            police: '190',
            ambulance: '192',
            hospital: 'Copa D\'Or Hospital: +55-21-2545-3600 (외국인 진료 가능)',
            pharmacy: '24시간 약국: Drogaria Pacheco (여러 지점)',
            tourist_police: '+55-21-2332-2924 (관광경찰)'
        },
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
        },
        costData: {
            fixedCosts: { guide: 3000000, marketing: 2000000, misc: 1000000 },
            variableCostsPerPerson: { flight: 1500000, hotel: 800000, ticket: 300000, food: 300000, transport: 200000 }
        }
    },
    "harbin-ice": {
        id: 'harbin-ice',
        countryCode: 'cn',
        name: '하얼빈 빙등제',
        location: '중국 하얼빈',
        period: '매년 1~2월',
        duration: '5일',
        price: '₩1,800,000',
        nextDate: '2026-01-05',
        target: '전 연령',
        description: '거대한 얼음 조각과 야간 조명으로 유명한 겨울 축제.',
        image: 'images/하얼빈빙등제.jpg',
        detailedDescription: `
            <h4>축제 소개</h4>
            <p>하얼빈 국제 빙설제는 세계 4대 빙설 축제 중 하나로, 매년 1월부터 2월까지 개최됩니다. 영하 20~30도의 추운 겨울, 송화강에서 채취한 얼음으로 만든 초대형 조각과 건축물이 LED 조명과 만나 환상적인 겨울 왕국을 연출합니다.</p>
            
            <h4>주요 하이라이트</h4>
            <ul>
                <li><strong>빙설대세계(Ice and Snow World):</strong> 수백 톤의 얼음으로 만든 성, 탑, 미끄럼틀 등 초대형 조형물</li>
                <li><strong>태양도 설조각 공원:</strong> 정교한 눈 조각 예술 작품 전시</li>
                <li><strong>중앙대가:</strong> 러시아풍 건축물과 야시장이 어우러진 보행자 거리</li>
                <li><strong>얼음 액티비티:</strong> 얼음 미끄럼틀, 스케이팅, 눈썰매 등</li>
            </ul>
            
            <h4>관람 팁</h4>
            <p>낮에는 설조각의 디테일을 감상하고, 해질 무렵부터 야간 조명이 켜지면 본격적인 빙등제의 매력이 드러납니다. 영하 20도 이하로 떨어지므로 보온 장비는 필수입니다.</p>
        `,
        imageQuery: 'harbin ice and snow festival china',
        fallbackImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.5!2d126.642!3d45.756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5e2ea1c0c!2sHarbin%2C%20China!5e0!3m2!1sen!2skr!4v1234567890',
        weather: {
            temperature: '평균 -15°C ~ -25°C',
            season: '혹한 겨울',
            recommendation: '롱패딩, 방한모, 방한화, 장갑, 핫팩 필수',
            precipitation: '눈 가능성 높음'
        },
        visaInfo: {
            required: true,
            details: '중국 비자 필요 (관광 L비자)',
            additionalInfo: '비자 발급은 약 7일 소요. 여권 유효기간 6개월 이상 필수'
        },
        culturalTips: [
            '하얼빈은 러시아 문화 영향이 커서 빵과 소시지 요리가 발달했습니다',
            '영하 20도 이하에서는 카메라/휴대폰 배터리가 빨리 방전되니 보온 파우치 사용',
            '실내는 매우 따뜻하므로 레이어드 복장 추천',
            '야간 입장권이 낮보다 비싸지만 조명이 핵심이므로 필수입니다'
        ],
        budget: { '항공권': 500000, '숙박': 400000, '식사': 300000, '입장료': 200000, '교통': 200000, '기타': 100000 },
        flightPrice: 500000,
        flightDuration: '3시간',
        flightAirline: '대한항공/중국동방항공',
        attractions: [
            { name: '빙설 대세계', description: '초대형 얼음성과 조각 공원', image: 'https://images.unsplash.com/photo-1542343639-31e03cd4d909?w=600' },
            { name: '중앙대가', description: '유럽풍 거리와 야경', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600' },
            { name: '태양도 설조각 공원', description: '정교한 눈 조각 예술', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600' }
        ],
        nearbyAttractions: [
            {
                name: '송화강 얼음 채취 현장',
                distance: '5km',
                description: '축제 얼음을 채취하는 과정을 볼 수 있는 장소',
                time: '차로 15분'
            },
            {
                name: '시베리아 호랑이 공원',
                distance: '20km',
                description: '멸종위기 시베리아 호랑이 보호구역',
                time: '차로 40분'
            },
            {
                name: '성 소피아 대성당',
                distance: '2km',
                description: '러시아 정교회 양식의 역사적 건축물',
                time: '도보 20분'
            }
        ],
        localFood: [
            {
                name: '훠궈 (火锅)',
                description: '얼어붙은 몸을 녹이는 매콤한 중국식 샤브샤브',
                price: '¥80-150 (₩15,000-28,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400'
            },
            {
                name: '홍창 (红肠, 러시아 소시지)',
                description: '하얼빈 명물 훈제 소시지. 러시아풍 향신료가 특징',
                price: '¥30-50 (₩5,500-9,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400'
            },
            {
                name: '러시아 빵 (列巴)',
                description: '하얼빈식 호밀빵. 중앙대가 베이커리에서 갓 구운 빵 추천',
                price: '¥20-40 (₩3,600-7,200)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400'
            },
            {
                name: '동베이 만두',
                description: '큼지막한 중국 북방식 만두. 고기와 야채 속',
                price: '¥25-40 (₩4,500-7,200)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400'
            }
        ],
        restaurants: [
            {
                name: '老昌春饼 (라오창춘빙)',
                type: '전통 중국 요리',
                rating: 4.6,
                priceRange: '€€',
                specialty: '춘빙(중국식 크레이프)과 페이징덕',
                address: '中央大街 부근',
                description: '100년 전통의 하얼빈 현지 맛집. 춘빙에 채소와 고기를 싸먹는 요리가 인기.'
            },
            {
                name: '华梅西餐厅 (화메이 서양식 레스토랑)',
                type: '러시아 요리',
                rating: 4.5,
                priceRange: '€€€',
                specialty: '러시아 정통 요리와 홍창',
                address: '中央大街 112号',
                description: '1925년 개업한 하얼빈 최고 러시아 레스토랑. 보르시와 비프 스트로가노프 추천.'
            },
            {
                name: '毛毛熏肉大饼 (마오마오 훈육 대병)',
                type: '길거리 음식',
                rating: 4.3,
                priceRange: '€',
                specialty: '훈제 고기와 전병',
                address: '도심 여러 지점',
                description: '현지인들이 사랑하는 길거리 음식. 간단하게 한 끼 해결하기 좋음.'
            }
        ],
        emergency: {
            embassy: {
                name: '주중국 대한민국 대사관',
                address: 'Beijing Chaoyang District Dongsanhuanbeilu 5',
                phone: '+86-10-8531-0700',
                emergency: '+86-135-2036-1640 (영사 긴급연락처)',
                email: 'consul_cn@mofa.go.kr'
            },
            police: '110',
            ambulance: '120',
            hospital: 'Harbin Medical University Hospital: +86-451-8555-5555',
            pharmacy: '약국은 "药店(야오디엔)" 표지판. 24시간 약국 정보는 호텔 프론트 문의'
        },
        tips: {
            준비물: ['롱패딩', '핫팩/손난로', '미끄럼방지 신발', '보온 텀블러'],
            주의사항: ['실내외 온도차 큼', '카메라 배터리 저온 방전 주의', '야간에는 복장 추가'],
            추천: ['야간 조명 시간대 방문', '얼음 미끄럼틀 체험', '러시아식 레스토랑 방문']
        },
        packageDetails: {
            included: ['왕복 항공권', '4성급 호텔 4박', '빙설대세계 입장권', '시내 가이드 투어', '여행자 보험'],
            excluded: ['개인 경비', '점심/저녁 식사', '동계 장비 렌탈비'],
            productCode: 'FEST-CN-004',
            departureDates: ['2026-01-08', '2026-01-15', '2026-01-22'],
            groupDiscount: { '4-6명': '1인 20,000원 할인', '7-9명': '1인 40,000원 할인' }
        },
        costData: {
            fixedCosts: { guide: 1600000, marketing: 800000, misc: 300000 },
            variableCostsPerPerson: { flight: 500000, hotel: 400000, ticket: 200000, food: 300000, transport: 200000 }
        }
    },
    "cherry-blossom": {
        id: 'cherry-blossom',
        countryCode: 'jp',
        name: '벚꽃 축제',
        location: '일본 도쿄/교토',
        period: '매년 3~4월',
        duration: '4일',
        price: '₩1,200,000',
        nextDate: '2026-03-28',
        target: '전 연령',
        description: '벚꽃이 만개하는 계절, 감성적인 봄 축제.',
        image: 'images/벚꽃축제.jpg',
        detailedDescription: `
            <h4>축제 소개</h4>
            <p>일본의 봄을 상징하는 벚꽃(사쿠라) 개화 시즌에 전국에서 벌어지는 하나미(お花見, 꽃구경) 축제입니다. 도쿄와 교토를 중심으로 공원과 신사 경내에서 벚꽃 아래 돗자리를 펴고 음식과 음료를 즐기는 일본 전통 문화를 경험할 수 있습니다.</p>
            
            <h4>하이라이트</h4>
            <ul>
                <li><strong>우에노 공원(도쿄):</strong> 1,000그루 이상의 벚나무, 야간 조명(요자쿠라)</li>
                <li><strong>철학의 길(교토):</strong> 2km 수로변 벚꽃 터널</li>
                <li><strong>아라시야마(교토):</strong> 대나무 숲과 벚꽃의 조화</li>
                <li><strong>벚꽃 한정 메뉴:</strong> 사쿠라 모찌, 벚꽃 라떼, 사쿠라 맛 과자</li>
            </ul>
            
            <h4>관람 팁</h4>
            <p>벚꽃 개화는 기온에 따라 시기가 달라지므로 일본 기상청 개화 예보를 참고하세요. 주말 낮 시간은 매우 혼잡하니 평일 오전이나 야간 라이트업 시간대를 추천합니다.</p>
        `,
        imageQuery: 'japan cherry blossom festival',
        fallbackImage: 'https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?w=800',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5!2d139.777!3d35.714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c2f!2sUeno%20Park%2C%20Tokyo!5e0!3m2!1sen!2skr!4v1234567890',
        weather: {
            temperature: '평균 10-18°C',
            season: '봄 (선선하고 쾌적)',
            recommendation: '얇은 겉옷, 편한 신발. 저녁엔 약간 쌀쌀',
            precipitation: '가끔 봄비 (우산 준비)'
        },
        visaInfo: {
            required: false,
            details: '한국 여권 소지자는 90일 무비자 관광 가능',
            additionalInfo: '여권 유효기간 6개월 이상 권장'
        },
        culturalTips: [
            '하나미 자리는 이른 아침에 선점하는 문화가 있습니다',
            '공원 내 음주는 허용되지만 쓰레기는 반드시 본인이 처리',
            '벚꽃 가지를 꺾거나 나무를 손상시키는 행위 금지',
            '야간 조명(요자쿠라)은 보통 일몰~21시까지 운영'
        ],
        budget: { '항공권': 300000, '숙박': 300000, '식사': 250000, '입장료': 50000, '교통': 150000, '기타': 50000 },
        flightPrice: 300000,
        flightDuration: '2시간',
        flightAirline: '대한항공/JAL/ANA',
        attractions: [
            { name: '우에노 공원', description: '도쿄 벚꽃 명소', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600' },
            { name: '철학의 길', description: '교토 산책 루트', image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600' },
            { name: '메구로강', description: '도쿄 벚꽃 터널과 야시장', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600' }
        ],
        nearbyAttractions: [
            {
                name: '아사쿠사 센소지',
                distance: '3km',
                description: '도쿄 최고의 전통 사찰',
                time: '전철 15분'
            },
            {
                name: '기요미즈데라(교토)',
                distance: '교토 시내',
                description: '유네스코 세계유산 사찰과 벚꽃',
                time: '버스 20분'
            },
            {
                name: '신주쿠교엔',
                distance: '5km',
                description: '65종 벚나무가 있는 대형 공원',
                time: '전철 20분'
            }
        ],
        localFood: [
            {
                name: '사쿠라 모찌',
                description: '벚꽃 잎으로 감싼 분홍색 떡. 봄철 한정 화과자',
                price: '¥300-500 (₩3,000-5,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400'
            },
            {
                name: '벤토(도시락)',
                description: '하나미 정취를 위한 일본식 도시락. 편의점이나 백화점 지하에서 구입',
                price: '¥800-1500 (₩8,000-15,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400'
            },
            {
                name: '다코야키',
                description: '문어가 들어간 공 모양 튀김 간식',
                price: '¥500-700 (₩5,000-7,000)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1606194926595-ec8f1e656780?w=400'
            },
            {
                name: '사케 (니혼슈)',
                description: '벚꽃 아래에서 즐기는 일본 전통주',
                price: '¥500-1000 (₩5,000-10,000)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400'
            }
        ],
        restaurants: [
            {
                name: '이세탄 백화점 지하 (도쿄)',
                type: '벤토/델리',
                rating: 4.7,
                priceRange: '€€',
                specialty: '다양한 프리미엄 도시락과 디저트',
                address: '신주쿠 3-14-1',
                description: '하나미용 고급 도시락을 구입하기 최적의 장소. 사쿠라 한정 상품도 판매.'
            },
            {
                name: '고토쿠안 (교토)',
                type: '전통 화과자',
                rating: 4.6,
                priceRange: '€€',
                specialty: '사쿠라 모찌와 계절 화과자',
                address: '교토 기온 지역',
                description: '100년 이상 전통의 화과자 전문점. 벚꽃 시즌 한정 상품 다수.'
            },
            {
                name: '츠키지 시장 (도쿄)',
                type: '해산물/길거리 음식',
                rating: 4.5,
                priceRange: '€€',
                specialty: '초밥, 회덮밥, 구이',
                address: '도요스/츠키지 인근',
                description: '신선한 해산물로 간단히 식사하기 좋은 시장 레스토랑가.'
            }
        ],
        emergency: {
            embassy: {
                name: '주일본 대한민국 대사관',
                address: 'Tokyo Minato-ku Minami-Azabu 1-2-5',
                phone: '+81-3-3452-7611',
                emergency: '+81-3-3452-7860 (영사 긴급연락처)',
                email: 'consul-jp@mofa.go.kr'
            },
            police: '110',
            ambulance: '119',
            hospital: '도쿄 St. Luke\'s International Hospital: +81-3-3541-5151 (영어 가능)',
            pharmacy: '약국은 "薬局(야쿠쿄쿠)" 표지판. 24시간 약국은 드물며 편의점에서 기본 의약품 구입 가능'
        },
        tips: {
            준비물: ['얇은 겉옷', '편한 운동화', '우산/우비'],
            주의사항: ['주말 혼잡 주의', '쓰레기 분리수거 준수', '현금 소액 준비'],
            추천: ['야간 라이트업 관람', '벚꽃 한정 메뉴 맛보기', '아침 일찍 방문']
        },
        packageDetails: {
            included: ['왕복 항공권', '3성급 호텔 3박', '교통 패스(일부 구간)', '여행자 보험'],
            excluded: ['개인 경비', '식사 대부분', '선택 관광'],
            productCode: 'FEST-JP-005',
            departureDates: ['2026-03-25', '2026-04-01', '2026-04-08'],
            groupDiscount: { '4-6명': '1인 15,000원 할인', '7-9명': '1인 30,000원 할인' }
        },
        costData: {
            fixedCosts: { guide: 1500000, marketing: 700000, misc: 300000 },
            variableCostsPerPerson: { flight: 250000, hotel: 350000, food: 150000, transport: 150000 }
        }
    },
    fringe: {
        id: 'fringe',
        countryCode: 'gb',
        name: '에든버러 프린지',
        location: '영국 에든버러',
        period: '매년 8월',
        duration: '6일',
        price: '₩2,500,000',
        nextDate: '2026-08-10',
        target: '문화·공연 애호가',
        description: '세계 최대 예술 축제. 수천 개의 공연이 도심 전역에서 열립니다.',
        image: 'images/에든버러.png',
        detailedDescription: `
            <h4>축제 소개</h4>
            <p>에든버러 페스티벌 프린지(Edinburgh Festival Fringe)는 매년 8월 한 달간 열리는 세계 최대 규모의 공연 예술 축제입니다. 1947년 시작된 이래로 3,000개 이상의 쇼가 300개 이상의 공연장에서 동시에 펼쳐지며, 누구나 참가할 수 있는 '열린 무대' 원칙을 고수합니다.</p>
            
            <h4>주요 하이라이트</h4>
            <ul>
                <li><strong>다양한 장르:</strong> 연극, 코미디, 뮤지컬, 댄스, 서커스, 마술, 거리 공연 등</li>
                <li><strong>로열마일:</strong> 도심을 관통하는 거리가 거대한 무대로 변신</li>
                <li><strong>에든버러 성:</strong> 밀리터리 타투(군악대 퍼레이드)와 함께하는 축제 분위기</li>
                <li><strong>프린지 클럽:</strong> 티켓 없이도 즐길 수 있는 무료 공연과 거리 퍼포먼스</li>
            </ul>
            
            <h4>관람 팁</h4>
            <p>프린지 패스나 할인 티켓을 사전 구매하면 경제적입니다. 인기 공연은 조기 매진되므로 온라인 예매 필수. 날씨가 변덕스러우니 방수 재킷 준비!</p>
        `,
        imageQuery: 'edinburgh fringe festival',
        fallbackImage: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.2!2d-3.188!3d55.953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c79a5!2sRoyal%20Mile%2C%20Edinburgh!5e0!3m2!1sen!2skr!4v1234567890',
        weather: {
            temperature: '평균 13-19°C',
            season: '여름 (선선하고 쾌적)',
            recommendation: '레이어드 룩, 방수 재킷 필수. 저녁엔 서늘',
            precipitation: '가끔 소나기 (우산 필수)'
        },
        visaInfo: {
            required: false,
            details: '한국 여권 소지자는 6개월 무비자 입국 가능',
            additionalInfo: '여권 유효기간 6개월 이상 권장'
        },
        culturalTips: [
            '영국은 줄서기 문화가 확고합니다. 공연장/버스 대기 시 질서 준수',
            '팁 문화: 레스토랑 10-15%, 택시 반올림. 펍에선 팁 불요',
            '영어 사투리가 강하므로 천천히 말해달라고 부탁해도 괜찮습니다',
            '일요일은 상점 영업시간이 짧으니 미리 확인'
        ],
        budget: { '항공권': 900000, '숙박': 700000, '식사': 400000, '입장료': 300000, '교통': 100000, '기타': 100000 },
        flightPrice: 900000,
        flightDuration: '13시간',
        flightAirline: '대한항공/영국항공',
        attractions: [
            { name: '에든버러 성', description: '도심을 내려다보는 성채', image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600' },
            { name: '로열마일', description: '공연과 퍼레이드의 중심', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600' },
            { name: '아서스 시트', description: '에든버러 전경을 한눈에', image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600' }
        ],
        nearbyAttractions: [
            {
                name: '홀리루드 궁전',
                distance: '1km',
                description: '영국 여왕의 스코틀랜드 공식 거처',
                time: '도보 15분'
            },
            {
                name: '칼튼 힐',
                distance: '2km',
                description: '에든버러 일몰 명소',
                time: '도보 20분'
            },
            {
                name: '스코틀랜드 국립박물관',
                distance: '500m',
                description: '무료 입장, 스코틀랜드 역사와 문화',
                time: '도보 10분'
            }
        ],
        localFood: [
            {
                name: '해기스 (Haggis)',
                description: '스코틀랜드 전통 요리. 양의 내장으로 만든 소시지',
                price: '£10-15 (₩17,000-25,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400'
            },
            {
                name: '피쉬 앤 칩스',
                description: '영국식 생선 튀김과 감자튀김',
                price: '£8-12 (₩13,000-20,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=400'
            },
            {
                name: '스코틀랜드 연어',
                description: '훈제 연어 또는 구운 연어. 신선하고 고소함',
                price: '£12-18 (₩20,000-30,000)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7c2?w=400'
            },
            {
                name: '아이언브루 (Irn-Bru)',
                description: '스코틀랜드 국민 탄산음료. 오렌지색 특이한 맛',
                price: '£1-2 (₩1,700-3,400)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400'
            }
        ],
        restaurants: [
            {
                name: 'The Witchery by the Castle',
                type: '스코틀랜드 전통 요리',
                rating: 4.6,
                priceRange: '€€€€',
                specialty: '해기스, 스코틀랜드 소고기',
                address: 'Castlehill, Royal Mile',
                description: '에든버러 성 바로 아래 위치. 고풍스러운 인테리어와 정통 스코틀랜드 요리.'
            },
            {
                name: 'The Scran & Scallie',
                type: '펍 음식',
                rating: 4.5,
                priceRange: '€€',
                specialty: '피쉬 앤 칩스, 현지 맥주',
                address: 'Stockbridge',
                description: '미슐랭 셰프가 운영하는 펍. 편안하면서도 고급스러운 펍 음식.'
            },
            {
                name: 'Oink',
                type: '길거리 음식',
                rating: 4.7,
                priceRange: '€',
                specialty: '로스트 포크 샌드위치',
                address: 'Victoria St (여러 지점)',
                description: '줄 서서 먹는 맛집. 갓 구운 돼지고기를 빵에 듬뿍 넣어줍니다.'
            }
        ],
        emergency: {
            embassy: {
                name: '주영국 대한민국 대사관',
                address: '60 Buckingham Gate, London SW1E 6AJ',
                phone: '+44-20-7227-5500',
                emergency: '+44-79-3498-7866 (영사 긴급연락처)',
                email: 'consul-uk@mofa.go.kr'
            },
            police: '999 또는 112',
            ambulance: '999',
            hospital: 'Royal Infirmary of Edinburgh: +44-131-536-1000',
            pharmacy: '"Pharmacy" 또는 "Chemist" 표지판. Boots가 대표적. 24시간 약국은 드물며 야간엔 병원 ER'
        },
        tips: {
            준비물: ['방수 재킷', '편한 신발', '보조 배터리'],
            주의사항: ['공연 티켓 사전 예매', '날씨 급변 대비', '현금/카드 병행 준비'],
            추천: ['프린지 패스 구매', '개런티 박스오피스 사용', '현지 펍 투어']
        },
        packageDetails: {
            included: ['왕복 항공권', '4성급 호텔 5박', '프린지 페스티벌 패스', '공항-호텔 이동', '여행자 보험'],
            excluded: ['개인 경비', '공연 개별 티켓', '식사 대부분'],
            productCode: 'FEST-GB-006',
            departureDates: ['2026-08-08', '2026-08-15', '2026-08-22'],
            groupDiscount: { '4-6명': '1인 40,000원 할인', '7-9명': '1인 60,000원 할인' }
        },
        costData: {
            fixedCosts: { guide: 2000000, marketing: 1200000, misc: 400000 },
            variableCostsPerPerson: { flight: 900000, hotel: 700000, ticket: 300000, food: 400000, transport: 100000 }
        }
    },
    sonkgran: {
        id: 'sonkgran',
        countryCode: 'th',
        name: '송크란 물축제',
        location: '태국 방콕/치앙마이',
        period: '매년 4월 중순',
        duration: '5일',
        price: '₩1,300,000',
        nextDate: '2026-04-13',
        target: '젊은 여행자',
        description: '태국의 새해 축제. 도시 전체가 워터 배틀로 뜨거워집니다.',
        image: 'images/송크란.jpeg',
        detailedDescription: `
            <h4>축제 소개</h4>
            <p>송크란(สงกรานต์)은 태국의 전통 새해 축제로, 4월 13~15일에 열립니다. 원래는 물로 부처와 어른의 손을 정화하는 의식이었으나, 현재는 도시 전체가 워터 파크처럼 변해 물총, 물풍선, 호스로 서로에게 물을 뿌리며 더위를 날리는 세계 최대 워터 배틀 축제가 되었습니다.</p>
            
            <h4>주요 하이라이트</h4>
            <ul>
                <li><strong>카오산로드(방콕):</strong> 여행자들이 모이는 대표 워터 배틀 거리</li>
                <li><strong>실롬(방콕):</strong> DJ와 음악이 어우러진 대규모 물싸움 파티</li>
                <li><strong>치앙마이 구시가:</strong> 전통 의식과 퍼레이드, 현지인 중심 물놀이</li>
                <li><strong>사원 참배:</strong> 전통 의식으로 사원에서 모래탑 쌓기와 물 뿌리기</li>
            </ul>
            
            <h4>참가 팁</h4>
            <p>전자기기는 방수팩에 철저히 보관하고, 미끄럼 방지 샌들 착용. 눈과 귀에 물이 들어가지 않도록 고글이나 귀마개 준비. 음주 후 물싸움은 금물!</p>
        `,
        imageQuery: 'thailand songkran water festival',
        fallbackImage: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d100.497!3d13.758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e!2sKhao%20San%20Road%2C%20Bangkok!5e0!3m2!1sen!2skr!4v1234567890',
        weather: {
            temperature: '평균 30-38°C',
            season: '더위 절정 (무덥고 습함)',
            recommendation: '수영복 위 간단한 티셔츠/반바지, 샌들, 선크림',
            precipitation: '비 거의 없음 (건기 말)'
        },
        visaInfo: {
            required: false,
            details: '한국 여권 소지자는 30일 무비자 입국 가능 (관광 목적)',
            additionalInfo: '출국 항공권 지참 권장. 여권 유효기간 6개월 이상'
        },
        culturalTips: [
            '사원 방문 시 어깨와 무릎을 가리는 복장 필수',
            '왕실과 불교는 존중해야 하는 절대 금기 주제',
            '머리는 신성한 부위이므로 타인의 머리를 만지면 안 됩니다',
            '물싸움 중에도 노인과 임산부, 승려에겐 물을 뿌리지 않습니다'
        ],
        budget: { '항공권': 400000, '숙박': 250000, '식사': 200000, '입장료': 50000, '교통': 150000, '기타': 50000 },
        flightPrice: 400000,
        flightDuration: '6시간',
        flightAirline: '대한항공/타이항공',
        attractions: [
            { name: '카오산로드', description: '대표 워터 배틀 거리', image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=600' },
            { name: '치앙마이 구시가지', description: '현지와 여행자들이 모이는 물싸움 명소', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600' },
            { name: '왓 포 (방콕)', description: '거대한 와불상으로 유명한 사원', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600' }
        ],
        nearbyAttractions: [
            {
                name: '왕궁(그랜드 팰리스)',
                distance: '3km',
                description: '태국 왕실의 상징적인 궁전',
                time: '택시 15분'
            },
            {
                name: '왓 아룬',
                distance: '2km',
                description: '새벽 사원. 차오프라야강변 야경 명소',
                time: '보트 10분'
            },
            {
                name: '짜뚜짝 위켄드 마켓',
                distance: '10km',
                description: '세계 최대 규모 주말 시장',
                time: 'BTS 30분'
            }
        ],
        localFood: [
            {
                name: '팟타이',
                description: '태국식 볶음 쌀국수. 새우/닭고기와 땅콩 토핑',
                price: '฿60-100 (₩2,300-3,800)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400'
            },
            {
                name: '쏨땀 (파파야 샐러드)',
                description: '매콤새콤한 풋 파파야 샐러드',
                price: '฿50-80 (₩1,900-3,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400'
            },
            {
                name: '똠얌꿍',
                description: '새콤매콤한 새우 수프. 태국 대표 국물 요리',
                price: '฿100-150 (₩3,800-5,700)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400'
            },
            {
                name: '망고 스티키 라이스',
                description: '코코넛 밀크와 찰밥, 망고의 완벽한 조합',
                price: '฿60-100 (₩2,300-3,800)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400'
            }
        ],
        restaurants: [
            {
                name: 'Thip Samai (팟타이 맛집)',
                type: '태국 길거리 음식',
                rating: 4.6,
                priceRange: '€',
                specialty: '팟타이 (방콕 최고로 평가)',
                address: 'Mahachai Rd, Bangkok',
                description: '1966년 개업. 줄 서서 먹는 팟타이 원조 맛집.'
            },
            {
                name: 'Jay Fai',
                type: '태국 해산물',
                rating: 4.8,
                priceRange: '€€€',
                specialty: '게살 오믈렛 (미슐랭 1스타)',
                address: 'Maha Chai Rd, Bangkok',
                description: '길거리 음식 최초 미슐랭 스타. 예약 필수.'
            },
            {
                name: 'Huen Phen (치앙마이)',
                type: '북부 태국 요리',
                rating: 4.5,
                priceRange: '€€',
                specialty: '카오 소이(코코넛 카레 국수)',
                address: 'Ratchamankha Rd, Chiang Mai',
                description: '현지인 추천 북부 스타일 요리 전문점.'
            }
        ],
        emergency: {
            embassy: {
                name: '주태국 대한민국 대사관',
                address: '23 Thiam-Ruam Mit Rd, Bangkok',
                phone: '+66-2-247-7537',
                emergency: '+66-81-914-2141 (영사 긴급연락처)',
                email: 'thaiemb@mofa.go.kr'
            },
            police: '191',
            ambulance: '1669',
            hospital: 'Bumrungrad International Hospital: +66-2-667-1000 (영어/한국어)',
            pharmacy: '"ร้านขายยา(란카이야)" 표지판. Boots/Watsons 체인 약국이 흔함'
        },
        tips: {
            준비물: ['방수팩', '여벌 옷', '미끄럼 방지 샌들', '고글'],
            주의사항: ['전자기기 방수 철저', '도로 미끄럼 주의', '음주 후 물싸움 자제'],
            추천: ['방콕/치앙마이 양쪽 체험', '현지 의상 대여', '방수 헤어밴드 준비']
        },
        packageDetails: {
            included: ['왕복 항공권', '3~4성급 호텔 4박', '축제 구역 셔틀', '여행자 보험'],
            excluded: ['개인 경비', '식사', '선택 투어'],
            productCode: 'FEST-TH-007',
            departureDates: ['2026-04-11', '2026-04-13', '2026-04-15'],
            groupDiscount: { '4-6명': '1인 20,000원 할인', '7-9명': '1인 40,000원 할인' }
        },
        costData: {
            fixedCosts: { guide: 1200000, marketing: 600000, misc: 300000 },
            variableCostsPerPerson: { flight: 400000, hotel: 250000, ticket: 50000, food: 200000, transport: 150000 }
        }
    },
    "oktober-alt": {
        id: 'oktober-alt',
        countryCode: 'de',
        name: '카니발 데 쾰른',
        location: '독일 쾰른',
        period: '매년 2월',
        duration: '5일',
        price: '₩2,200,000',
        nextDate: '2026-02-15',
        target: '전 연령',
        description: '화려한 퍼레이드와 의상이 돋보이는 독일 카니발.',
        image: 'images/카니발.jpg',
        detailedDescription: `
            <h4>축제 소개</h4>
            <p>쾰른 카니발(Kölner Karneval)은 독일 3대 카니발 중 하나로, 로젠몬탁(Rosenmontag) 대퍼레이드가 백미입니다. 매년 2월 재의 수요일 전 주간에 열리며, 화려한 코스튬과 풍자적인 수레, 라이브 음악이 도심을 뒤덮습니다. "Alaaf!"(알라프)는 쾰른의 공식 건배 구호입니다.</p>
            
            <h4>주요 하이라이트</h4>
            <ul>
                <li><strong>로젠몬탁 퍼레이드:</strong> 수천 명이 참가하는 대행렬. 사탕(Kamelle)과 꽃을 던져주는 전통</li>
                <li><strong>쾰른 대성당:</strong> 고딕 건축의 걸작. 카니발 기간에도 관광 필수 코스</li>
                <li><strong>라인강변 산책:</strong> 호엔촐레른 다리와 야경</li>
                <li><strong>전통 코스튬:</strong> 화려한 의상과 마스크를 직접 입어보는 재미</li>
            </ul>
            
            <h4>관람 팁</h4>
            <p>퍼레이드 관람석은 유료이지만, 거리에서도 충분히 즐길 수 있습니다. "Kamelle!"를 외치면 사탕을 받을 수 있어요. 혼잡하므로 소지품 관리 필수!</p>
        `,
        imageQuery: 'cologne carnival germany',
        fallbackImage: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.5!2d6.958!3d50.941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25!2sCologne%20Cathedral!5e0!3m2!1sen!2skr!4v1234567890',
        weather: {
            temperature: '평균 2-8°C',
            season: '겨울 끝자락 (쌀쌀)',
            recommendation: '레이어드 복장, 코트, 따뜻한 신발',
            precipitation: '가끔 눈/비 (우산 준비)'
        },
        visaInfo: {
            required: false,
            details: '한국 여권 소지자는 90일 무비자 (쉥겐 조약)',
            additionalInfo: '여권 유효기간 6개월 이상'
        },
        culturalTips: [
            '독일은 시간 약속에 매우 엄격합니다',
            '일요일/공휴일 대부분 상점 문 닫음',
            '팁은 식사 금액의 5~10%. 카드 결제 시 팁 칸 있음',
            '쓰레기 분리수거가 철저하며 벌금도 높습니다'
        ],
        budget: { '항공권': 900000, '숙박': 600000, '식사': 350000, '입장료': 150000, '교통': 100000, '기타': 100000 },
        flightPrice: 900000,
        flightDuration: '12시간',
        flightAirline: '루프트한자/대한항공',
        attractions: [
            { name: '쾰른 대성당', description: '고딕 양식의 상징', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600' },
            { name: '라인강변 산책', description: '야경이 아름다운 산책로', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600' },
            { name: '초콜릿 박물관', description: '초콜릿 역사와 시식', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=600' }
        ],
        nearbyAttractions: [
            {
                name: '본(Bonn)',
                distance: '30km',
                description: '베토벤의 고향. 구 서독 수도',
                time: '기차 20분'
            },
            {
                name: '뒤셀도르프',
                distance: '40km',
                description: '쇼핑과 현대미술 도시',
                time: '기차 30분'
            },
            {
                name: '아헨',
                distance: '70km',
                description: '온천 도시와 대성당',
                time: '기차 50분'
            }
        ],
        localFood: [
            {
                name: '쾰쉬 (Kölsch)',
                description: '쾰른 지역 특유의 맥주. 가볍고 투명한 색',
                price: '€2.5-4 (₩3,500-5,500)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400'
            },
            {
                name: '라인 자우어브라텐',
                description: '쾰른식 소고기 구이. 단맛이 나는 소스',
                price: '€15-22 (₩21,000-30,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400'
            },
            {
                name: '할버 한 (Halber Hahn)',
                description: '빵 위에 치즈를 올린 전통 간식',
                price: '€4-6 (₩5,500-8,300)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400'
            },
            {
                name: '베를리너',
                description: '독일식 도넛. 카니발 기간 한정 맛',
                price: '€2-3 (₩2,800-4,200)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400'
            }
        ],
        restaurants: [
            {
                name: 'Früh am Dom',
                type: '브라우하우스 (맥주 홀)',
                rating: 4.4,
                priceRange: '€€',
                specialty: '쾰쉬와 자우어브라텐',
                address: 'Am Hof 12-18',
                description: '쾰른 대성당 바로 옆. 현지 맥주와 전통 요리 체험에 완벽.'
            },
            {
                name: 'Gaffel am Dom',
                type: '브라우하우스',
                rating: 4.3,
                priceRange: '€€',
                specialty: '가펠 쾰쉬',
                address: 'Bahnhofsvorplatz 1',
                description: '중앙역 맞은편. 관광객과 현지인 모두 즐겨 찾는 곳.'
            },
            {
                name: 'Peters Brauhaus',
                type: '전통 독일식',
                rating: 4.5,
                priceRange: '€€',
                specialty: '슈바인스학센과 쾰쉬',
                address: 'Mühlengasse 1',
                description: '구시가지 중심. 대형 홀과 야외 테라스.'
            }
        ],
        emergency: {
            embassy: {
                name: '주독일 대한민국 대사관',
                address: 'Stülerstraße 8-10, 10787 Berlin',
                phone: '+49-30-260-650',
                emergency: '+49-172-260-6516 (영사 긴급)',
                email: 'info@kor-botschaft.de'
            },
            police: '110',
            ambulance: '112',
            hospital: 'Uniklinik Köln: +49-221-478-0',
            pharmacy: '"Apotheke" 표지판. 24시간 약국: +49-221-25801'
        },
        tips: {
            준비물: ['얇은 겉옷', '편한 구두', '우산'],
            주의사항: ['퍼레이드 동선 안전 거리 유지', '소매치기 주의', '음주 과다 자제'],
            추천: ['라인강 유람선', '맥주 양조장 견학', '현지 베이커리 이용']
        },
        packageDetails: {
            included: ['왕복 항공권', '4성급 호텔 4박', '퍼레이드 지정석(일부)', '여행자 보험'],
            excluded: ['개인 경비', '식사', '선택 관광'],
            productCode: 'FEST-DE-008',
            departureDates: ['2026-02-10', '2026-02-15', '2026-02-20'],
            groupDiscount: { '4-6명': '1인 40,000원 할인', '7-9명': '1인 60,000원 할인' }
        },
        costData: {
            fixedCosts: { guide: 2200000, marketing: 1200000, misc: 500000 },
            variableCostsPerPerson: { flight: 900000, hotel: 600000, ticket: 150000, food: 350000, transport: 100000 }
        }
    },
    "dia-de-muertos": {
        id: 'dia-de-muertos',
        countryCode: 'mx',
        name: '죽은 자의 날',
        location: '멕시코 멕시코시티/오악사카',
        period: '매년 11월 1~2일',
        duration: '5일',
        price: '₩2,400,000',
        nextDate: '2026-11-01',
        target: '전 연령',
        description: '해골 분장과 제단으로 고인을 기리는 멕시코 전통 축제.',
        image: 'images/죽은자의 날.jpg',
        detailedDescription: `
            <h4>축제 소개</h4>
            <p>죽은 자의 날(Día de Muertos)은 멕시코의 유네스코 무형문화유산으로, 11월 1~2일에 고인의 영혼이 돌아온다고 믿으며 형형색색의 제단(오프렌다)을 꾸미고 축제를 엽니다. 해골 분장(카트리나)과 마리골드 꽃, 사탕 해골이 상징이며, 슬픔보다는 기쁨으로 고인을 기억하는 독특한 전통입니다.</p>
            
            <h4>주요 하이라이트</h4>
            <ul>
                <li><strong>멕시코시티 대퍼레이드:</strong> 영화 007 스펙터 이후 공식화된 대규모 거리 행렬</li>
                <li><strong>오프렌다(제단):</strong> 고인의 사진, 좋아하던 음식, 마리골드, 초로 꾸민 제단</li>
                <li><strong>오악사카 묘지 방문:</strong> 밤새 촛불을 밝히며 고인과 시간을 보내는 전통</li>
                <li><strong>카트리나 분장:</strong> 화려한 해골 메이크업 체험</li>
            </ul>
            
            <h4>참가 팁</h4>
            <p>11월 1일은 어린이, 2일은 성인 고인을 기리는 날입니다. 묘지 방문 시 예의를 지키고, 분장 체험은 사전 예약을 권장합니다.</p>
        `,
        imageQuery: 'dia de muertos mexico festival',
        fallbackImage: 'https://images.unsplash.com/photo-1543363136-74aa6a551a0d?w=800',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d-99.133!3d19.432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9!2sCentro%20Histórico%2C%20Mexico%20City!5e0!3m2!1sen!2skr!4v1234567890',
        weather: {
            temperature: '평균 15-25°C',
            season: '가을 (쾌적)',
            recommendation: '얇은 겉옷, 편한 신발. 고도 높아 햇볕 강함',
            precipitation: '건기 (비 거의 없음)'
        },
        visaInfo: {
            required: false,
            details: '한국 여권 소지자는 180일 무비자 입국 가능 (전자여행허가 필요)',
            additionalInfo: '입국 시 출국 항공권 지참 권장'
        },
        culturalTips: [
            '멕시코시티는 해발 2,240m로 고산병 주의. 첫날은 무리하지 말 것',
            '스페인어 기본 회화 익히면 매우 유용',
            '길거리 음식은 맛있지만 위생 주의',
            '택시는 Uber/Didi 앱 사용 권장'
        ],
        budget: { '항공권': 1200000, '숙박': 500000, '식사': 350000, '입장료': 100000, '교통': 200000, '기타': 100000 },
        flightPrice: 1200000,
        flightDuration: '14시간 (경유)',
        flightAirline: '아메리칸/유나이티드/델타',
        attractions: [
            { name: '죽은 자의 날 퍼레이드', description: '화려한 행렬과 음악', image: 'https://images.unsplash.com/photo-1603894322527-8069cb260f90?w=600' },
            { name: '오악사카 제단', description: '전통 제단과 꽃장식', image: 'https://images.unsplash.com/photo-1575150836198-4f18eb4879cf?w=600' },
            { name: '테오티우아칸 피라미드', description: '고대 아즈텍 유적', image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600' }
        ],
        nearbyAttractions: [
            {
                name: '소칼로(중앙 광장)',
                distance: '시내 중심',
                description: '멕시코시티 역사 지구 핵심',
                time: '도보/메트로'
            },
            {
                name: '프리다 칼로 박물관',
                distance: '10km',
                description: '멕시코 대표 화가의 생가',
                time: '메트로 30분'
            },
            {
                name: '차풀테펙 공원',
                distance: '5km',
                description: '거대한 도심 공원과 박물관',
                time: '메트로 20분'
            }
        ],
        localFood: [
            {
                name: '판 데 무에르토 (Pan de Muerto)',
                description: '죽은 자의 날 특별 빵. 오렌지 향과 설탕 토핑',
                price: '$30-50 (₩2,000-3,500)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400'
            },
            {
                name: '타코',
                description: '멕시코 대표 음식. 카르니타스/알 파스토르 추천',
                price: '$15-30 (₩1,000-2,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400'
            },
            {
                name: '몰레',
                description: '초콜릿과 칠리가 들어간 복합 소스 요리',
                price: '$100-150 (₩7,000-10,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=400'
            },
            {
                name: '테킬라/메스칼',
                description: '멕시코 전통 증류주',
                price: '$50-200 (₩3,500-14,000)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400'
            }
        ],
        restaurants: [
            {
                name: 'Pujol',
                type: '현대 멕시코 요리',
                rating: 4.9,
                priceRange: '€€€€',
                specialty: '몰레와 현대식 멕시코 퀴진 (세계 50대 레스토랑)',
                address: 'Tennyson 133, Polanco',
                description: '멕시코 최고 셰프 Enrique Olvera의 레스토랑. 예약 필수.'
            },
            {
                name: 'El Cardenal',
                type: '전통 멕시코 요리',
                rating: 4.6,
                priceRange: '€€',
                specialty: '판 데 무에르토, 전통 아침식사',
                address: 'Palma 23, Centro',
                description: '역사 지구 중심. 전통 요리를 정갈하게 즐길 수 있음.'
            },
            {
                name: 'Tacos El Güero',
                type: '길거리 타코',
                rating: 4.5,
                priceRange: '€',
                specialty: '알 파스토르 타코',
                address: '여러 지점',
                description: '현지인들이 줄 서는 타코 맛집.'
            }
        ],
        emergency: {
            embassy: {
                name: '주멕시코 대한민국 대사관',
                address: 'Lope de Armendáriz 110, Lomas Virreyes',
                phone: '+52-55-5202-9866',
                emergency: '+52-1-55-1281-4297 (영사 긴급)',
                email: 'emb-mx@mofa.go.kr'
            },
            police: '911',
            ambulance: '911',
            hospital: 'Hospital ABC: +52-55-5230-8000 (영어 가능)',
            pharmacy: '"Farmacia" 표지판. 24시간 약국: Farmacias del Ahorro/Similares'
        },
        tips: {
            준비물: ['편한 신발', '얼굴 도안 스티커', '현금 소액'],
            주의사항: ['혼잡 시간대 안전 주의', '야간 이동 동행', '분장 알러지 유의'],
            추천: ['전통 제단 투어', '현지 시장 방문', '카트리나 분장 체험']
        },
        packageDetails: {
            included: ['왕복 항공권', '3~4성급 호텔 4박', '도시 간 이동(내항공 또는 버스)', '여행자 보험'],
            excluded: ['개인 경비', '식사', '선택 체험'],
            productCode: 'FEST-MX-009',
            departureDates: ['2026-10-29', '2026-10-31'],
            groupDiscount: { '4-6명': '1인 50,000원 할인', '7-9명': '1인 80,000원 할인' }
        },
        costData: {
            fixedCosts: { guide: 2000000, marketing: 1000000, misc: 500000 },
            variableCostsPerPerson: { flight: 1200000, hotel: 500000, ticket: 100000, food: 350000, transport: 200000 }
        }
    },
    holi: {
        id: 'holi',
        countryCode: 'in',
        name: '홀리 축제',
        location: '인도 델리/바라나시',
        period: '매년 3월',
        duration: '5일',
        price: '₩1,600,000',
        nextDate: '2026-03-10',
        target: '전 연령',
        description: '색가루를 뿌리며 봄을 기념하는 축제.',
        image: 'images/홀리축제.jpg',
        detailedDescription: `
            <h4>축제 소개</h4>
            <p>홀리(Holi)는 힌두교의 봄 축제로, 색가루(굴랄)와 색깔 물을 서로에게 뿌리며 악을 물리치고 봄의 도래를 축하합니다. 인도 전역에서 열리지만 특히 북부 우타르프라데시주(마투라/브린다반)와 바라나시가 유명하며, 계급과 신분을 초월해 모두가 하나 되는 평등의 축제입니다.</p>
            
            <h4>주요 하이라이트</h4>
            <ul>
                <li><strong>마투라/브린다반:</strong> 크리슈나 신의 고향. 일주일간 홀리 기념 행사</li>
                <li><strong>바라나시 강가:</strong> 갠지스강변에서 펼쳐지는 색가루 퍼레이드</li>
                <li><strong>홀리카 다한:</strong> 전날 밤 모닥불 의식</li>
                <li><strong>방 타도리:</strong> 전통 음료(향신료 우유)와 과자</li>
            </ul>
            
            <h4>참가 팁</h4>
            <p>헌 옷과 방수 고글 필수. 유기농 색가루 사용 권장. 여성 혼자는 참가 피하고 동행과 함께. 사진작가 동행 투어가 안전하고 사진도 잘 나옵니다.</p>
        `,
        imageQuery: 'india holi color festival',
        fallbackImage: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?w=800',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5!2d77.40!3d27.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973!2sMathura%2C%20India!5e0!3m2!1sen!2skr!4v1234567890',
        weather: {
            temperature: '평균 20-30°C',
            season: '봄 (따뜻하고 건조)',
            recommendation: '헌 면 티셔츠/바지, 고글, 선크림',
            precipitation: '건기 (비 거의 없음)'
        },
        visaInfo: {
            required: true,
            details: '한국 여권 소지자는 전자비자(e-Visa) 필요',
            additionalInfo: '온라인 신청 후 72시간 내 발급. 여권 유효기간 6개월 이상, 빈 페이지 2장 이상'
        },
        culturalTips: [
            '사원 입장 시 신발 벗기. 가죽 제품 반입 금지 사원도 있음',
            '왼손은 부정한 손으로 간주. 식사/악수는 오른손만',
            '머리는 신성한 부위. 타인의 머리 만지지 말 것',
            '소는 신성한 동물. 길거리 소를 건드리지 말 것'
        ],
        budget: { '항공권': 700000, '숙박': 300000, '식사': 250000, '입장료': 50000, '교통': 200000, '기타': 50000 },
        flightPrice: 700000,
        flightDuration: '7시간',
        flightAirline: '대한항공/에어인디아',
        attractions: [
            { name: '마투라 홀리', description: '전통 의식과 퍼레이드', image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600' },
            { name: '바라나시 강가', description: '강변 축제와 색가루 놀이', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600' },
            { name: '타지마할', description: '델리에서 당일치기 가능한 세계 7대 불가사의', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600' }
        ],
        nearbyAttractions: [
            {
                name: '아그라(타지마할)',
                distance: '200km (델리 기준)',
                description: '세계 7대 불가사의',
                time: '기차 2시간'
            },
            {
                name: '자이푸르(핑크 시티)',
                distance: '280km',
                description: '라자스탄의 고대 왕궁 도시',
                time: '기차/버스 5시간'
            },
            {
                name: '브린다반',
                distance: '15km (마투라 기준)',
                description: '크리슈나 탄생지. 수많은 사원',
                time: '버스 30분'
            }
        ],
        localFood: [
            {
                name: '방 라시',
                description: '대마초 혼합 요거트 음료 (홀리 기간 한정)',
                price: '₹100-200 (₩1,500-3,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400'
            },
            {
                name: '구지야',
                description: '홀리 축제 특별 과자. 코코넛/너트 속',
                price: '₹50-100 (₩750-1,500)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400'
            },
            {
                name: '탈리',
                description: '인도식 정식. 여러 가지 커리와 난/라이스',
                price: '₹200-400 (₩3,000-6,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400'
            },
            {
                name: '차이',
                description: '향신료 밀크티',
                price: '₹20-50 (₩300-750)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1578374173713-115d3a5bf37a?w=400'
            }
        ],
        restaurants: [
            {
                name: 'Indian Accent (델리)',
                type: '현대 인도 요리',
                rating: 4.7,
                priceRange: '€€€€',
                specialty: '퓨전 인도 요리 (아시아 50대 레스토랑)',
                address: 'The Lodhi, New Delhi',
                description: '전통과 현대가 만난 창의적인 인도 요리. 예약 필수.'
            },
            {
                name: 'Karim\'s (델리)',
                type: '무갈 요리',
                rating: 4.5,
                priceRange: '€€',
                specialty: '양고기 커리, 탄두리 치킨',
                address: 'Jama Masjid, Old Delhi',
                description: '1913년부터 이어온 무갈 전통 요리. 현지인 맛집.'
            },
            {
                name: 'Brijwasi Mithai Wala (마투라)',
                type: '전통 과자/간식',
                rating: 4.6,
                priceRange: '€',
                specialty: '구지야, 라두',
                address: 'Mathura 여러 지점',
                description: '홀리 과자 전문점. 현지에서 가장 유명.'
            }
        ],
        emergency: {
            embassy: {
                name: '주인도 대한민국 대사관',
                address: '9, Chandragupta Marg, New Delhi',
                phone: '+91-11-4200-7000',
                emergency: '+91-98-1081-7193 (영사 긴급)',
                email: 'consular_in@mofa.go.kr'
            },
            police: '100',
            ambulance: '102',
            hospital: 'Apollo Hospital (델리): +91-11-2692-5858 (영어)',
            pharmacy: '"Medical Store" 표지판. 대부분 영어 소통 가능'
        },
        tips: {
            준비물: ['색가루 방지 고글', '화이트 의상', '방수팩', '마스크'],
            주의사항: ['민감 피부 보호', '혼잡 지역 주의', '음료 위생 주의'],
            추천: ['전통 의상 대여', '포토 서비스 이용', '홀리 직전 의식 관람']
        },
        packageDetails: {
            included: ['왕복 항공권', '3성급 호텔 4박', '홀리 키트(색가루/방수)', '여행자 보험'],
            excluded: ['개인 경비', '식사', '선택 투어'],
            productCode: 'FEST-IN-010',
            departureDates: ['2026-03-08', '2026-03-10', '2026-03-12'],
            groupDiscount: { '4-6명': '1인 30,000원 할인', '7-9명': '1인 50,000원 할인' }
        },
        costData: {
            fixedCosts: { guide: 1500000, marketing: 800000, misc: 300000 },
            variableCostsPerPerson: { flight: 700000, hotel: 300000, ticket: 50000, food: 250000, transport: 200000 }
        }
    },
    tomorrowland: {
        id: 'tomorrowland',
        countryCode: 'be',
        name: '투모로우랜드',
        location: '벨기에 붐(BOOM)',
        period: '매년 7월',
        duration: '4일',
        price: '₩3,800,000',
        nextDate: '2026-07-18',
        target: 'EDM 애호가',
        description: '세계 최대 EDM 페스티벌. 초대형 무대와 화려한 연출.',
        image: 'images/투모로우랜드.jpg',
        detailedDescription: `
            <h4>축제 소개</h4>
            <p>투모로우랜드(Tomorrowland)는 벨기에 붐에서 매년 7월 열리는 세계 최대 규모 EDM 페스티벌입니다. 2005년 시작 이래 매년 180개국에서 40만 명이 찾으며, 매표는 몇 분 만에 매진됩니다. 거대한 메인스테이지와 15개 이상의 테마 스테이지, DreamVille 캠핑촌이 3일간 환상적인 EDM 유토피아를 만듭니다.</p>
            
            <h4>주요 하이라이트</h4>
            <ul>
                <li><strong>메인스테이지:</strong> 매년 다른 테마로 설계되는 초대형 무대. 특수효과와 불꽃놀이</li>
                <li><strong>DreamVille:</strong> 페스티벌 전용 캠핑 타운. 숙박+입장권 패키지</li>
                <li><strong>세계적 DJ 라인업:</strong> David Guetta, Martin Garrix, Armin van Buuren 등</li>
                <li><strong>다양한 스테이지:</strong> 트랜스, 하우스, 테크노, 더블베이스 등 장르별 무대</li>
            </ul>
            
            <h4>참가 팁</h4>
            <p>티켓은 1월 Global Journey(항공+숙박) 또는 일반 티켓 판매 시 사전 등록 필수. 청력 보호 이어플러그와 편한 신발 필수. 휴대폰 배터리 관리 중요!</p>
        `,
        imageQuery: 'tomorrowland belgium festival',
        fallbackImage: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.5!2d4.37!3d51.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e!2sBoom%2C%20Belgium!5e0!3m2!1sen!2skr!4v1234567890',
        weather: {
            temperature: '평균 18-25°C',
            season: '여름 (쾌적)',
            recommendation: '편한 티셔츠/반바지, 가벼운 외투 (야간용)',
            precipitation: '가끔 소나기 (우비/판초 준비)'
        },
        visaInfo: {
            required: false,
            details: '한국 여권 소지자는 90일 무비자 (쉥겐 조약)',
            additionalInfo: '여권 유효기간 6개월 이상'
        },
        culturalTips: [
            '벨기에는 다국어 국가 (네덜란드어/프랑스어/독일어). 영어 대부분 통함',
            '페스티벌 내 현금 사용 불가. 팔찌에 충전해서 사용',
            '마약 반입/사용 엄격 단속. 적발 시 즉시 퇴장 및 벌금',
            '환경 보호 중시. 재활용/쓰레기 분리 철저'
        ],
        budget: { '항공권': 1100000, '숙박': 700000, '식사': 400000, '입장료': 800000, '교통': 200000, '기타': 100000 },
        flightPrice: 1100000,
        flightDuration: '12시간',
        flightAirline: '대한항공/루프트한자/KLM',
        attractions: [
            { name: '메인스테이지', description: '아이코닉 EDM 무대', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600' },
            { name: 'DreamVille', description: '페스티벌 캠핑 타운', image: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=600' },
            { name: '브뤼셀', description: '벨기에 수도. 그랑플라스와 초콜릿', image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=600' }
        ],
        nearbyAttractions: [
            {
                name: '브뤼셀',
                distance: '20km',
                description: '벨기에 수도. 그랑플라스 광장, 초콜릿, 와플',
                time: '기차 30분'
            },
            {
                name: '안트베르펀',
                distance: '25km',
                description: '다이아몬드 도시. 구시가지와 성당',
                time: '기차 20분'
            },
            {
                name: '겐트',
                distance: '50km',
                description: '중세 도시. 운하와 성',
                time: '기차 40분'
            }
        ],
        localFood: [
            {
                name: '벨기에 와플',
                description: '리에주/브뤼셀 스타일. 페스티벌 내외 판매',
                price: '€5-8 (₩7,000-11,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400'
            },
            {
                name: '감자튀김 (Frites)',
                description: '벨기에가 원조! 다양한 소스',
                price: '€4-6 (₩5,500-8,300)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400'
            },
            {
                name: '벨기에 맥주',
                description: '트라피스트, 람빅 등 다양한 종류',
                price: '€4-8 (₩5,500-11,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400'
            },
            {
                name: '초콜릿',
                description: '고디바, 노이하우스 등 세계 최고 품질',
                price: '€10-30 (₩14,000-42,000)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400'
            }
        ],
        restaurants: [
            {
                name: '페스티벌 푸드 스탠드',
                type: '다국적 길거리 음식',
                rating: 4.0,
                priceRange: '€€',
                specialty: '버거, 파스타, 아시안 퓨전',
                address: '페스티벌 내',
                description: '팔찌 충전으로 결제. 다양한 국가 음식 즐길 수 있음.'
            },
            {
                name: 'Comme Chez Soi (브뤼셀)',
                type: '미슐랭 2스타',
                rating: 4.8,
                priceRange: '€€€€',
                specialty: '프렌치-벨지안 퀴진',
                address: 'Place Rouppe 23, Brussels',
                description: '페스티벌 전후 특별한 식사. 예약 필수.'
            },
            {
                name: 'Fritland (브뤼셀)',
                type: '감자튀김 전문',
                rating: 4.4,
                priceRange: '€',
                specialty: '벨기에식 감자튀김',
                address: 'Rue Henri Maus 49, Brussels',
                description: '현지인이 인정하는 최고의 프리츠.'
            }
        ],
        emergency: {
            embassy: {
                name: '주벨기에 대한민국 대사관',
                address: 'Avenue Hamoir 3, 1180 Brussels',
                phone: '+32-2-675-5777',
                emergency: '+32-476-52-1080 (영사 긴급)',
                email: 'info-be@mofa.go.kr'
            },
            police: '101',
            ambulance: '100',
            hospital: 'UZ Brussel: +32-2-477-4111 (영어)',
            pharmacy: '"Pharmacie/Apotheek" 표지판. 브뤼셀 24시간: +32-2-511-6140'
        },
        tips: {
            준비물: ['이어플러그', '편한 운동화', '휴대용 충전기'],
            주의사항: ['입장 팔찌 분실 주의', '과음/탈수 주의', '짐 보안 철저'],
            추천: ['DreamVille 숙박', '부스 라인업 사전 체크', '프리미엄 구역 업그레이드']
        },
        packageDetails: {
            included: ['왕복 항공권', '3~5성급 호텔 3박', '투모로우랜드 입장권(일부 구간)', '전용 셔틀', '여행자 보험'],
            excluded: ['개인 경비', '식사', '추가 업그레이드'],
            productCode: 'FEST-BE-011',
            departureDates: ['2026-07-16', '2026-07-18', '2026-07-20'],
            groupDiscount: { '4-6명': '1인 100,000원 할인', '7-9명': '1인 150,000원 할인' }
        },
        costData: {
            fixedCosts: { guide: 1500000, marketing: 2500000, misc: 800000 },
            variableCostsPerPerson: { flight: 1100000, hotel: 500000, ticket: 400000, food: 300000, transport: 200000 }
        }
    },
    "up-alaaf": {
        id: 'up-alaaf',
        countryCode: 'us',
        name: '마르디 그라',
        location: '미국 뉴올리언스',
        period: '매년 2월',
        duration: '5일',
        price: '₩2,600,000',
        nextDate: '2026-02-20',
        target: '전 연령',
        description: '퍼레이드와 재즈로 가득한 미국 남부의 축제.',
        image: 'images/마르디 그라.jpg',
        detailedDescription: `
            <h4>축제 소개</h4>
            <p>마르디 그라(Mardi Gras, "기름진 화요일")는 미국 남부 루이지애나주 뉴올리언스의 대표 축제로, 사순절 시작 전 화요일을 정점으로 2주간 이어집니다. 화려한 퍼레이드, 재즈 음악, 크레올/케이준 요리, 비즈(구슬) 목걸이, 보라/초록/금색 테마가 특징이며, 프렌치쿼터와 버번 스트리트는 24시간 축제장이 됩니다.</p>
            
            <h4>주요 하이라이트</h4>
            <ul>
                <li><strong>크루(Krewe) 퍼레이드:</strong> Zulu, Rex 등 수십 개 크루가 거대한 플로트와 함께 행진</li>
                <li><strong>비즈(Beads) 수집:</strong> 퍼레이드에서 던져주는 목걸이/토큰 수집 문화</li>
                <li><strong>프렌치쿼터:</strong> 재즈 라이브, 거리 공연, 술집이 밀집</li>
                <li><strong>크레올 요리:</strong> 검보, 포보이, 베녜, 크롤피쉬 에투페</li>
            </ul>
            
            <h4>참가 팁</h4>
            <p>야간 치안 주의. 동행과 함께 이동하고, 귀중품은 최소로. 비즈를 받으려면 손 들고 "Throw me something, mister!"를 외쳐보세요.</p>
        `,
        imageQuery: 'mardi gras new orleans parade',
        fallbackImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.5!2d-90.07!3d29.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a6!2sFrench%20Quarter%2C%20New%20Orleans!5e0!3m2!1sen!2skr!4v1234567890',
        weather: {
            temperature: '평균 12-20°C',
            season: '초봄 (온화)',
            recommendation: '레이어드 룩, 가벼운 재킷',
            precipitation: '가끔 비 (우산 준비)'
        },
        visaInfo: {
            required: true,
            details: '한국 여권 소지자는 ESTA (전자여행허가) 필요',
            additionalInfo: '온라인 신청 $21. 72시간 전 신청 권장. 최대 90일 체류'
        },
        culturalTips: [
            '팁 문화 필수: 레스토랑 15-20%, 바 $1-2/drink, 택시 10-15%',
            '야외 음주 허용 지역이지만 유리병은 금지 (플라스틱 컵만)',
            '프렌치쿼터는 밤 늦게까지 시끄러움. 조용한 숙소 원하면 가든 디스트릭트',
            '21세 미만 음주 불가. ID 체크 철저'
        ],
        budget: { '항공권': 1200000, '숙박': 600000, '식사': 350000, '입장료': 100000, '교통': 200000, '기타': 100000 },
        flightPrice: 1200000,
        flightDuration: '14시간 (경유)',
        flightAirline: '유나이티드/델타/아메리칸',
        attractions: [
            { name: '프렌치쿼터', description: '뉴올리언스의 중심지', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600' },
            { name: '버번 스트리트', description: '라이브 재즈와 바', image: 'https://images.unsplash.com/photo-1510920018318-3b4dfe979e70?w=600' },
            { name: '잭슨 광장', description: '성 루이스 대성당 앞 광장', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600' }
        ],
        nearbyAttractions: [
            {
                name: '가든 디스트릭트',
                distance: '5km',
                description: '남부 저택과 스트리트카',
                time: '스트리트카 20분'
            },
            {
                name: '루이지애나 습지 투어',
                distance: '30km',
                description: '악어와 늪지 에어보트 투어',
                time: '차로 40분'
            },
            {
                name: '국립 2차대전 박물관',
                distance: '3km',
                description: '세계 최대 2차 대전 박물관',
                time: '스트리트카 15분'
            }
        ],
        localFood: [
            {
                name: '베녜 (Beignet)',
                description: '뉴올리언스식 도넛. 슈가파우더 듬뿍',
                price: '$5-8 (₩7,000-11,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1581873372796-dc809dc8310f?w=400'
            },
            {
                name: '포보이 (Po\' Boy)',
                description: '크레올식 샌드위치. 새우/굴/로스트비프',
                price: '$10-15 (₩14,000-21,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1619740455993-557c21e5a562?w=400'
            },
            {
                name: '검보 (Gumbo)',
                description: '크레올 스튜. 해산물/소시지/오크라',
                price: '$12-18 (₩17,000-25,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1604908815253-13e1c987a5f6?w=400'
            },
            {
                name: '허리케인 (Hurricane)',
                description: '뉴올리언스 대표 칵테일 (럼 베이스)',
                price: '$10-15 (₩14,000-21,000)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400'
            }
        ],
        restaurants: [
            {
                name: 'Café du Monde',
                type: '카페/베이커리',
                rating: 4.5,
                priceRange: '€',
                specialty: '베녜와 치커리 커피 (24시간)',
                address: '800 Decatur St',
                description: '1862년부터 운영. 뉴올리언스 필수 코스.'
            },
            {
                name: 'Commander\'s Palace',
                type: '크레올 정통 요리',
                rating: 4.7,
                priceRange: '€€€€',
                specialty: '검보, 터틀 수프 (제임스 비어드 어워드)',
                address: '1403 Washington Ave',
                description: '가든 디스트릭트 명물. 점심 특선 코스 추천. 드레스 코드 있음.'
            },
            {
                name: 'Acme Oyster House',
                type: '해산물',
                rating: 4.4,
                priceRange: '€€',
                specialty: '생굴, 크롤피쉬',
                address: '724 Iberville St',
                description: '줄 서는 맛집. 신선한 루이지애나 해산물.'
            }
        ],
        emergency: {
            embassy: {
                name: '주미국 대한민국 대사관',
                address: '2450 Massachusetts Ave NW, Washington DC',
                phone: '+1-202-939-5600',
                emergency: '+1-202-939-5653 (영사 긴급)',
                email: 'usa_consul@mofa.go.kr'
            },
            police: '911',
            ambulance: '911',
            hospital: 'Ochsner Medical Center: +1-504-842-3000',
            pharmacy: 'Walgreens/CVS 체인 약국 (24시간 지점 많음)'
        },
        tips: {
            준비물: ['가벼운 옷', '편한 샌들', '현금 소액'],
            주의사항: ['야간 치안 주의', '과음 주의', '귀중품 최소 소지'],
            추천: ['재즈 클럽 투어', '퍼레이드 비즈 수집', '현지 크레올 요리 맛보기']
        },
        packageDetails: {
            included: ['왕복 항공권', '4성급 호텔 4박', '퍼레이드 지정석(일부)', '여행자 보험'],
            excluded: ['개인 경비', '식사', '선택 투어'],
            productCode: 'FEST-US-012',
            departureDates: ['2026-02-18', '2026-02-20'],
            groupDiscount: { '4-6명': '1인 60,000원 할인', '7-9명': '1인 90,000원 할인' }
        },
        costData: {
            fixedCosts: { guide: 2000000, marketing: 1000000, misc: 500000 },
            variableCostsPerPerson: { flight: 1200000, hotel: 600000, ticket: 100000, food: 350000, transport: 200000 }
        }
    },
    "lantern-taiwan": {
        id: 'lantern-taiwan',
        countryCode: 'tw',
        name: '핑시 천등 축제',
        location: '대만 신베이시 핑시',
        period: '매년 2월',
        duration: '4일',
        price: '₩1,100,000',
        nextDate: '2026-02-09',
        target: '전 연령',
        description: '소원을 적은 천등을 밤하늘로 띄우는 낭만적인 축제.',
        image: 'images/핑시 천등 축제.jpg',
        detailedDescription: `
            <h4>축제 소개</h4>
            <p>핑시 천등 축제(平溪天燈節)는 매년 음력 정월대보름에 열리는 대만의 전통 축제입니다. 수백 개의 천등(스카이 랜턴)이 밤하늘을 수놓으며, 연인과 가족들이 소원을 적어 함께 날립니다. 일본 애니메이션 "라푼젤"에 영감을 준 것으로도 유명하며, 타이베이 근교의 작은 산골 마을 핑시/십분(Shifen)에서 열립니다.</p>
            
            <h4>주요 하이라이트</h4>
            <ul>
                <li><strong>집단 천등 날리기:</strong> 메인 행사에서 수백 개 천등이 동시에 하늘로</li>
                <li><strong>소원 빌기:</strong> 천등에 중국어/한글로 소원을 적어 날림</li>
                <li><strong>십분 폭포:</strong> 대만의 니아가라. 자연 경관 명소</li>
                <li><strong>지우펀 올드타운:</strong> 일제시대 광산 마을. 센과 치히로 모티브</li>
            </ul>
            
            <h4>참가 팁</h4>
            <p>메인 행사는 인파 몰림. 오후 일찍 도착 추천. 일반 관광객은 십분역 주변에서 개인 천등(NT$200) 언제든 날릴 수 있습니다. 기차 시간표 미리 확인!</p>
        `,
        imageQuery: 'pingxi lantern festival taiwan',
        fallbackImage: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.8!2d121.74!3d25.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442!2sShifen%20Station!5e0!3m2!1sen!2skr!4v1234567890',
        weather: {
            temperature: '평균 14-20°C',
            season: '초봄 (쾌적)',
            recommendation: '얇은 재킷, 긴바지',
            precipitation: '가끔 비 (우산/우비 필수)'
        },
        visaInfo: {
            required: false,
            details: '한국 여권 소지자 90일 무비자 체류',
            additionalInfo: '입국 심사 시 귀국 항공권, 숙소 정보 제시 권장'
        },
        culturalTips: [
            '대만은 친절한 편. 간단한 중국어 인사(니하오, 씨에씨에) 통함',
            'MRT/기차 내 음식물 섭취 금지 (벌금 NT$1,500)',
            '사원 방문 시 모자 벗고 조용히',
            '야시장에서는 현금 필수 (카드 안 받는 곳 많음)'
        ],
        budget: { '항공권': 250000, '숙박': 250000, '식사': 200000, '입장료': 50000, '교통': 200000, '기타': 50000 },
        flightPrice: 250000,
        flightDuration: '3시간',
        flightAirline: '대한항공/아시아나/에바항공',
        attractions: [
            { name: '십분역', description: '천등 날리기 명소', image: 'https://images.unsplash.com/photo-1544812699-6f5bc1c70915?w=600' },
            { name: '폭포 산책로', description: '자연과 함께하는 코스', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600' },
            { name: '지우펀 올드타운', description: '센과 치히로 배경', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600' }
        ],
        nearbyAttractions: [
            {
                name: '지우펀 구산지',
                distance: '15km',
                description: '일본풍 골목, 찻집, 야경 명소',
                time: '버스 40분'
            },
            {
                name: '타이베이 101',
                distance: '30km',
                description: '전망대, 쇼핑몰, 딤섬 맛집',
                time: 'MRT+기차 1시간'
            },
            {
                name: '예류 지질공원',
                distance: '25km',
                description: '여왕머리 바위, 해안 절경',
                time: '버스 50분'
            }
        ],
        localFood: [
            {
                name: '소롱바오 (小籠包)',
                description: '타이베이 명물. 뜨거운 육즙 만두',
                price: 'NT$200-300 (₩9,000-13,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400'
            },
            {
                name: '우육면 (牛肉麵)',
                description: '대만식 소고기 국수',
                price: 'NT$120-180 (₩5,000-8,000)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400'
            },
            {
                name: '펄 밀크티 (珍珠奶茶)',
                description: '타피오카 버블티. 대만 원조',
                price: 'NT$50-80 (₩2,200-3,500)',
                mustTry: true,
                image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400'
            },
            {
                name: '파인애플 케이크',
                description: '대만 대표 기념품 과자',
                price: 'NT$200-400/박스 (₩9,000-17,000)',
                mustTry: false,
                image: 'https://images.unsplash.com/photo-1603481546702-9c880ac73948?w=400'
            }
        ],
        restaurants: [
            {
                name: '딘타이펑 (鼎泰豐)',
                type: '딤섬/소롱바오',
                rating: 4.8,
                priceRange: '€€',
                specialty: '소롱바오 (미슐랭 1스타)',
                address: '타이베이 101 지하/신이점 등',
                description: '세계적인 딤섬 전문점. 한국어 메뉴 있음.'
            },
            {
                name: '아종미엔센 (阿宗麵線)',
                type: '스트리트푸드',
                rating: 4.5,
                priceRange: '€',
                specialty: '미엔센 (가는 국수)',
                address: '시먼딩 10호',
                description: '서서 먹는 대만 소울푸드. 굴/대장 토핑.'
            },
            {
                name: '라오허 야시장',
                type: '야시장',
                rating: 4.6,
                priceRange: '€',
                specialty: '약선 돼지갈비, 후추 떡',
                address: 'MRT 라오허 역 근처',
                description: '현지인 선호 야시장. 관광지보다 저렴.'
            }
        ],
        emergency: {
            embassy: {
                name: '주타이베이 한국대표부 (駐台北韓國代表部)',
                address: '타이베이시 지롱로 333호 (Keelung Rd Sec 1, 333)',
                phone: '+886-2-2758-8320',
                emergency: '+886-2-2758-8320 (영사 긴급)',
                email: 'kor-emb@mofa.go.kr'
            },
            police: '110',
            ambulance: '119',
            hospital: '타이베이 마카이 병원: +886-2-2543-3535 (영어 가능)',
            pharmacy: '왓슨스(Watsons)/코스메드(Cosmed) 약국 체인'
        },
        tips: {
            준비물: ['얇은 겉옷', '소지품 파우치', '현금 소액'],
            주의사항: ['천등 취급 안전', '혼잡 시간대 동행', '날씨 확인'],
            추천: ['저녁 시간대 천등 날리기', '기차+버스 이동 조합', '현지 야시장 방문']
        },
        packageDetails: {
            included: ['왕복 항공권', '3성급 호텔 3박', '천등 체험권', '공항-호텔 이동'],
            excluded: ['개인 경비', '식사', '선택 관광'],
            productCode: 'FEST-TW-013',
            departureDates: ['2026-02-07', '2026-02-09', '2026-02-11'],
            groupDiscount: { '4-6명': '1인 30,000원 할인', '7-9명': '1인 50,000원 할인' }
        },
        costData: {
            fixedCosts: { guide: 1200000, marketing: 600000, misc: 200000 },
            variableCostsPerPerson: { flight: 250000, hotel: 250000, food: 150000, transport: 100000 }
        }
    }
};