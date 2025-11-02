// ===== 축제별 추천 여행 일정 데이터 =====

const itineraryData = {
    tomatina: {
        themes: {
            budget: {
                name: '알뜰 코스',
                icon: '💰',
                description: '예산을 절약하면서도 핵심 경험은 놓치지 않는 실속형 일정',
                days: {
                    3: [
                        { day: 1, time: '오전', activity: '부뇰 도착 및 숙소 체크인', description: '저렴한 호스텔 또는 에어비앤비 이용', tips: '부뇰역에서 도보 이동 가능한 숙소 추천' },
                        { day: 1, time: '오후', activity: '부뇰 마을 탐방', description: '무료 볼거리: 부뇰 성, 구시가지 산책', tips: '현지 슈퍼마켓에서 식재료 구매' },
                        { day: 1, time: '저녁', activity: '숙소에서 자취 요리', description: '저렴한 현지 식재료로 직접 요리', tips: '타파스와 와인으로 간단히' },
                        { day: 2, time: '오전', activity: '라 토마티나 축제 참가', description: '토마토 던지기의 짜릿함!', tips: '오래된 옷과 고글 필수' },
                        { day: 2, time: '오후', activity: '축제 후 샤워 및 휴식', description: '공공 샤워장 이용, 숙소 복귀', tips: '물과 간식 챙기기' },
                        { day: 2, time: '저녁', activity: '현지 바(Bar)에서 맥주', description: '저렴한 현지 바에서 축제 추억 나누기', tips: 'Happy Hour 활용' },
                        { day: 3, time: '오전', activity: '발렌시아 시내로 이동', description: '기차로 발렌시아 구시가지 투어', tips: '기차표 사전 구매 할인' },
                        { day: 3, time: '오후', activity: '발렌시아 중앙시장 방문', description: '무료 구경, 저렴한 길거리 음식', tips: '현지 과일과 호르차타 맛보기' },
                        { day: 3, time: '저녁', activity: '귀국 준비 및 출발', description: '공항으로 이동', tips: '대중교통 이용' }
                    ],
                    5: [
                        { day: 1, time: '오전', activity: '부뇰 도착 및 숙소 체크인', description: '저렴한 호스텔 또는 에어비앤비 이용', tips: '부뇰역에서 도보 이동 가능한 숙소 추천' },
                        { day: 1, time: '오후', activity: '부뇰 마을 탐방', description: '무료 볼거리: 부뇰 성, 구시가지 산책', tips: '현지 슈퍼마켓에서 식재료 구매' },
                        { day: 1, time: '저녁', activity: '숙소에서 자취 요리', description: '저렴한 현지 식재료로 직접 요리', tips: '타파스와 와인으로 간단히' },
                        { day: 2, time: '오전', activity: '라 토마티나 축제 참가 준비', description: '축제 현장 일찍 도착', tips: '오래된 옷과 고글 필수' },
                        { day: 2, time: '오후', activity: '라 토마티나 축제 참가', description: '토마토 던지기의 짜릿함!', tips: '카메라 방수 필수' },
                        { day: 2, time: '저녁', activity: '축제 후 샤워 및 현지 바', description: '공공 샤워장 이용 후 현지 바에서 맥주', tips: 'Happy Hour 활용' },
                        { day: 3, time: '오전', activity: '발렌시아로 이동', description: '기차로 발렌시아 구시가지 투어', tips: '기차표 사전 구매 할인' },
                        { day: 3, time: '오후', activity: '발렌시아 중앙시장 & 구시가지', description: '무료 구경, 저렴한 길거리 음식', tips: '현지 과일과 호르차타 맛보기' },
                        { day: 3, time: '저녁', activity: '말바로사 해변 산책', description: '무료 해변 일몰 감상', tips: '버스로 이동 가능' },
                        { day: 4, time: '오전', activity: '알부페라 국립공원 투어', description: '저렴한 현지 투어 이용', tips: '온라인 예약으로 할인' },
                        { day: 4, time: '오후', activity: '파에야 체험 (저렴한 식당)', description: '현지인이 가는 식당에서 파에야', tips: '관광지 외곽 식당 추천' },
                        { day: 4, time: '저녁', activity: '숙소에서 휴식', description: '여행 사진 정리 및 휴식', tips: '다음 날 일정 준비' },
                        { day: 5, time: '오전', activity: '발렌시아 마지막 산책', description: '미처 보지 못한 곳 방문', tips: '기념품 쇼핑' },
                        { day: 5, time: '오후', activity: '공항 이동 및 귀국', description: '대중교통 이용', tips: '여유 있게 출발' }
                    ]
                }
            },
            photospot: {
                name: '인생샷 코스',
                icon: '📸',
                description: 'SNS 인증샷을 위한 포토 스팟 중심 일정',
                days: {
                    3: [
                        { day: 1, time: '오전', activity: '부뇰 도착 및 인생샷 명소 체크', description: '부뇰 성 전망대에서 마을 전경', tips: '골든아워 시간대 체크' },
                        { day: 1, time: '오후', activity: '부뇰 구시가지 포토 투어', description: '알록달록한 건물과 골목길', tips: '현지 의상 대여 가능' },
                        { day: 1, time: '저녁', activity: '선셋 포토 촬영', description: '언덕에서 노을 배경 사진', tips: '삼각대 준비' },
                        { day: 2, time: '오전', activity: '라 토마티나 액션샷', description: '토마토 던지는 순간 포착!', tips: '방수 케이스 필수, GoPro 추천' },
                        { day: 2, time: '오후', activity: '축제 현장 사진 정리', description: '빨간 옷으로 갈아입고 기념 촬영', tips: '공공 샤워장 근처 포토존' },
                        { day: 2, time: '저녁', activity: '축제 야경 촬영', description: '조명이 켜진 부뇰 야경', tips: '저속 셔터로 분위기 있게' },
                        { day: 3, time: '오전', activity: '발렌시아 예술과학의 도시', description: '현대 건축물 배경 사진', tips: '흰옷 추천, 반사 활용' },
                        { day: 3, time: '오후', activity: '말바로사 해변 일몰샷', description: '해변에서 점프샷, 실루엣 사진', tips: '골든아워 필수' },
                        { day: 3, time: '저녁', activity: '귀국 준비', description: '사진 백업 및 정리', tips: '클라우드 업로드' }
                    ],
                    5: [
                        { day: 1, time: '오전', activity: '부뇰 도착 및 포토 스팟 답사', description: '부뇰 성 전망대, 구시가지 골목', tips: '골든아워 시간대 미리 체크' },
                        { day: 1, time: '오후', activity: '부뇰 마을 포토 투어', description: '알록달록한 건물, 카페 거리', tips: '현지 의상 대여 추천' },
                        { day: 1, time: '저녁', activity: '선셋 타임 포토 세션', description: '언덕에서 노을 배경', tips: '삼각대와 리모컨 준비' },
                        { day: 2, time: '오전', activity: '라 토마티나 액션샷 준비', description: '방수 케이스, GoPro 세팅', tips: '여러 각도에서 촬영' },
                        { day: 2, time: '오후', activity: '라 토마티나 축제 액션샷', description: '토마토 던지는 순간, 군중 샷', tips: '연속 촬영 모드' },
                        { day: 2, time: '저녁', activity: '축제 후 기념 촬영', description: '빨간 옷 인증샷, 친구들과 단체샷', tips: '공공 샤워장 근처 포토존' },
                        { day: 3, time: '오전', activity: '발렌시아 예술과학의 도시', description: '현대 건축 배경 사진', tips: '파란 하늘, 흰 건물 대비' },
                        { day: 3, time: '오후', activity: '발렌시아 구시가지 골목', description: '중세 건축물, 대성당 앞', tips: '넓은 광장에서 원근감 활용' },
                        { day: 3, time: '저녁', activity: '말바로사 해변 일몰', description: '해변 점프샷, 실루엣', tips: '골든아워 30분 전 도착' },
                        { day: 4, time: '오전', activity: '알부페라 국립공원 자연샷', description: '석호, 보트, 쌀밭 배경', tips: '자연광 활용' },
                        { day: 4, time: '오후', activity: '파에야 요리 클래스 촬영', description: '요리 과정, 완성된 파에야 플레이팅', tips: '오버헤드 샷 추천' },
                        { day: 4, time: '저녁', activity: '발렌시아 야경 촬영', description: '시청사, 대성당 조명', tips: '삼각대 필수' },
                        { day: 5, time: '오전', activity: '미처 못 찍은 장소 재방문', description: '최종 인증샷 촬영', tips: '아침 빛 활용' },
                        { day: 5, time: '오후', activity: '사진 정리 및 귀국', description: '베스트 샷 선별, SNS 업로드', tips: '공항 가는 길에 업로드' }
                    ]
                }
            },
            foodie: {
                name: '미식가 코스',
                icon: '🍽️',
                description: '현지 음식과 요리 체험 중심의 먹방 여행',
                days: {
                    3: [
                        { day: 1, time: '오전', activity: '부뇰 도착 및 현지 빵집 탐방', description: '스페인 전통 빵과 페이스트리', tips: '갓 구운 빵이 맛있는 아침' },
                        { day: 1, time: '오후', activity: '타파스 투어', description: '부뇰 구시가지 타파스 바 3곳 방문', tips: '작은 접시로 여러 가지 맛보기' },
                        { day: 1, time: '저녁', activity: '전통 레스토랑에서 파에야', description: '발렌시아 스타일 정통 파에야', tips: '2인 이상 주문 필수' },
                        { day: 2, time: '오전', activity: '라 토마티나 축제 (아침 간식)', description: '축제 전 에너지 바, 과일 섭취', tips: '가벼운 식사 추천' },
                        { day: 2, time: '오후', activity: '축제 후 전통 스튜', description: '현지 식당에서 코시도(스튜) 맛보기', tips: '축제 후 따뜻한 음식' },
                        { day: 2, time: '저녁', activity: '와인 바에서 와인 테이스팅', description: '발렌시아 지역 와인 시음', tips: '치즈 플레이트와 함께' },
                        { day: 3, time: '오전', activity: '발렌시아 중앙시장 투어', description: '신선한 해산물, 하몽 시식', tips: '시장 내 바에서 아침 식사' },
                        { day: 3, time: '오후', activity: '호르차타와 파르톤', description: '발렌시아 대표 음료와 디저트', tips: '산타 카탈리나 호르차테리아 추천' },
                        { day: 3, time: '저녁', activity: '공항 이동 전 마지막 타파스', description: '공항 가는 길에 간단히', tips: '여유 있게 시간 배분' }
                    ],
                    5: [
                        { day: 1, time: '오전', activity: '부뇰 도착 및 현지 빵집', description: '스페인 전통 빵과 커피', tips: '갓 구운 빵 맛보기' },
                        { day: 1, time: '오후', activity: '타파스 투어 (3곳)', description: '부뇰 구시가지 타파스 바 순례', tips: '각 바마다 시그니처 메뉴' },
                        { day: 1, time: '저녁', activity: '전통 레스토랑 파에야', description: '정통 발렌시아 스타일', tips: '현지인 추천 식당' },
                        { day: 2, time: '오전', activity: '축제 전 간단 아침', description: '에너지 바, 과일', tips: '속이 편한 음식' },
                        { day: 2, time: '오후', activity: '라 토마티나 축제 참가', description: '토마토 던지기', tips: '물 충분히 섭취' },
                        { day: 2, time: '저녁', activity: '축제 후 코시도(스튜)', description: '따뜻한 전통 스튜', tips: '에너지 회복' },
                        { day: 3, time: '오전', activity: '발렌시아 중앙시장 투어', description: '신선한 해산물, 하몽 시식', tips: '시장 내 바에서 식사' },
                        { day: 3, time: '오후', activity: '파에야 요리 클래스', description: '직접 파에야 만들기', tips: '레시피 메모' },
                        { day: 3, time: '저녁', activity: '와인 바 테이스팅', description: '발렌시아 지역 와인 시음', tips: '치즈, 올리브와 함께' },
                        { day: 4, time: '오전', activity: '알부페라 레스토랑 방문', description: '석호 전망 식당에서 점심', tips: '신선한 해산물 파에야' },
                        { day: 4, time: '오후', activity: '호르차타와 파르톤 체험', description: '전통 음료와 디저트', tips: '산타 카탈리나 추천' },
                        { day: 4, time: '저녁', activity: '미슐랭 레스토랑 디너', description: '스페인 파인다이닝 체험', tips: '사전 예약 필수' },
                        { day: 5, time: '오전', activity: '마지막 브런치', description: '좋아하는 식당 재방문', tips: '남은 맛집 체크리스트' },
                        { day: 5, time: '오후', activity: '귀국 준비 및 출발', description: '공항 이동', tips: '기념품 쇼핑' }
                    ]
                }
            }
        }
    },
    oktoberfest: {
        themes: {
            budget: {
                name: '알뜰 코스',
                icon: '💰',
                description: '예산을 절약하면서 옥토버페스트 핵심 경험',
                days: {
                    3: [
                        { day: 1, time: '오전', activity: '뮌헨 도착 및 호스텔 체크인', description: '저렴한 도미토리 이용', tips: '중앙역 근처 추천' },
                        { day: 1, time: '오후', activity: '마리엔 광장 무료 투어', description: '신시청사 글로켄슈필 관람', tips: '11시, 12시 공연 시간 체크' },
                        { day: 1, time: '저녁', activity: '슈퍼마켓 장보기', description: '숙소에서 간단히 요리', tips: '독일 소시지와 맥주' },
                        { day: 2, time: '오전', activity: '옥토버페스트 오픈과 동시 입장', description: '무료 입장, 일찍 가서 자리 확보', tips: '전통 의상 대여 저렴하게' },
                        { day: 2, time: '오후', activity: '옥토버페스트 즐기기', description: '맥주 1-2리터, 프레첼', tips: '점심 시간대가 저렴' },
                        { day: 2, time: '저녁', activity: '숙소 복귀 및 휴식', description: '과음 주의, 충분한 수분 섭취', tips: '다음 날 일정 준비' },
                        { day: 3, time: '오전', activity: '님펜부르크 궁전 (외관)', description: '입장료 절약, 정원만 무료 산책', tips: '트램 이용' },
                        { day: 3, time: '오후', activity: '영국 정원 피크닉', description: '슈퍼마켓 간식 준비', tips: '서퍼 구경' },
                        { day: 3, time: '저녁', activity: '귀국 준비', description: '공항 이동', tips: '대중교통 이용' }
                    ]
                }
            },
            photospot: {
                name: '인생샷 코스',
                icon: '📸',
                description: '옥토버페스트와 뮌헨 명소 포토 투어',
                days: {
                    3: [
                        { day: 1, time: '오전', activity: '노이슈반슈타인 성 투어', description: '동화 속 성 배경 인증샷', tips: '마리엔 다리에서 전경 촬영' },
                        { day: 1, time: '오후', activity: '성 주변 자연 풍경', description: '알프스 산맥 배경', tips: '넓은 광각 렌즈 추천' },
                        { day: 1, time: '저녁', activity: '뮌헨 시내 야경', description: '마리엔 광장 조명', tips: '삼각대 준비' },
                        { day: 2, time: '오전', activity: '전통 의상 포토 세션', activity: '디른들/레더호젠 입고 촬영', tips: '의상 대여점에서 인생샷' },
                        { day: 2, time: '오후', activity: '옥토버페스트 맥주 텐트', description: '맥주 들고 단체 사진', tips: '흔들리지 않게 고정' },
                        { day: 2, time: '저녁', activity: '축제 야경 촬영', description: '조명 켜진 텐트와 관람차', tips: '저속 셔터 활용' }
                    ]
                }
            },
            foodie: {
                name: '미식가 코스',
                icon: '🍽️',
                description: '바이에른 전통 음식과 맥주 탐방',
                days: {
                    3: [
                        { day: 1, time: '오전', activity: '바이스부어스트 아침', description: '뮌헨 전통 흰 소시지', tips: '프레첼과 달콤한 머스타드' },
                        { day: 1, time: '오후', activity: '호프브로이하우스', description: '전통 맥주 홀 체험', tips: '슈바인학센 추천' },
                        { day: 1, time: '저녁', activity: '아우구스티너 브로이', description: '뮌헨 최고 맥주 양조장', tips: '현지인 맥주 팁 배우기' },
                        { day: 2, time: '오전', activity: '비크투알리엔 시장', description: '신선한 재료와 간식', tips: '시장 내 스탠딩 바' },
                        { day: 2, time: '오후', activity: '옥토버페스트 맥주 텐트', description: '대형 맥주 홀 체험', tips: '여러 양조장 맥주 비교' },
                        { day: 2, time: '저녁', activity: '전통 디저트', description: '애플 슈트루델, 프레첼', tips: '달콤한 마무리' }
                    ]
                }
            }
        }
    },
    carnival: {
        themes: {
            budget: {
                name: '알뜰 코스',
                icon: '💰',
                description: '저렴하게 즐기는 리우 카니발',
                days: {
                    3: [
                        { day: 1, time: '오전', activity: '리우 도착 및 호스텔 체크인', description: '코파카바나 근처 저렴한 숙소', tips: '안전한 지역 선택' },
                        { day: 1, time: '오후', activity: '코파카바나 해변 산책', description: '무료 해변 즐기기', tips: '선크림 필수' },
                        { day: 1, time: '저녁', activity: '거리 파티 (블로코)', description: '무료 거리 카니발 체험', tips: '소매치기 주의' },
                        { day: 2, time: '오전', activity: '셀라론 계단 방문', description: '무료 포토 스팟', tips: '아침 일찍 방문' },
                        { day: 2, time: '오후', activity: '삼바드롬 퍼레이드 관람', description: '저렴한 좌석 구매', tips: '사전 온라인 예약' },
                        { day: 2, time: '저녁', activity: '현지 식당에서 페이조아다', description: '브라질 전통 음식', tips: '현지인 맛집' }
                    ]
                }
            },
            photospot: {
                name: '인생샷 코스',
                icon: '📸',
                description: '리우의 아름다운 풍경과 카니발 촬영',
                days: {
                    3: [
                        { day: 1, time: '오전', activity: '코르코바도 예수상', description: '리우 상징 배경 사진', tips: '아침 일찍 가서 인파 피하기' },
                        { day: 1, time: '오후', activity: '슈가로프 산 케이블카', description: '360도 파노라마 뷰', tips: '일몰 시간대 추천' },
                        { day: 1, time: '저녁', activity: '코파카바나 해변 일몰', description: '실루엣 사진', tips: '골든아워 30분 전' },
                        { day: 2, time: '오전', activity: '셀라론 계단', description: '형형색색 타일 배경', tips: '컬러풀한 옷 추천' },
                        { day: 2, time: '오후', activity: '삼바드롬 퍼레이드', description: '화려한 의상 액션샷', tips: '연속 촬영 모드' },
                        { day: 2, time: '저녁', activity: '카니발 야경', description: '조명과 불꽃놀이', tips: '삼각대 필수' }
                    ]
                }
            },
            foodie: {
                name: '미식가 코스',
                icon: '🍽️',
                description: '브라질 전통 음식 탐방',
                days: {
                    3: [
                        { day: 1, time: '오전', activity: '아사이 볼 브런치', description: '건강한 브라질 디저트', tips: '해변가 가게 추천' },
                        { day: 1, time: '오후', activity: '슈라스카리아 점심', description: '브라질 BBQ 무제한', tips: 'Palace 추천' },
                        { day: 1, time: '저녁', activity: '카이피리냐 바', description: '브라질 대표 칵테일', tips: '라임 신선도 체크' },
                        { day: 2, time: '오전', activity: '현지 시장 투어', description: '열대 과일 시식', tips: '신선한 망고, 파파야' },
                        { day: 2, time: '오후', activity: '페이조아다 레스토랑', description: '브라질 국민 음식', tips: 'Bar do Mineiro 추천' },
                        { day: 2, time: '저녁', activity: '전통 디저트 카페', description: '브라질 커피와 디저트', tips: 'Confeitaria Colombo' }
                    ]
                }
            }
        }
    },
    'cherry-blossom': {
        title: '벚꽃 4일 감성 일정',
        days: [
            {
                day: 1,
                title: '도쿄 도착 · 우에노 벚꽃 산책',
                description: '우에노 공원의 만개한 벚꽃과 박물관 지대를 가볍게 산책하며 도쿄의 봄을 맞이합니다. 저녁엔 아사쿠사 주변에서 라이트업 벚꽃을 즐겨요.',
                image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '도쿄 도착 · 체크인', location: '하네다/나리타 → 시내' },
                    { time: '오후', activity: '우에노 공원 벚꽃 산책', location: 'Ueno Park' },
                    { time: '저녁', activity: '아사쿠사 라이트업 감상', location: 'Senso-ji · 스카이트리 뷰' }
                ]
            },
            {
                day: 2,
                title: '치도리가후치 · 나카메구로 · 야간 라이트업',
                description: '해자 위로 늘어진 벚꽃이 수면에 비치는 치도리가후치, 카페와 샵이 즐비한 나카메구로 강변을 따라 감성 넘치는 하루.',
                image: 'https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '치도리가후치 산책', location: 'Chidorigafuchi' },
                    { time: '오후', activity: '나카메구로 벚꽃', location: 'Meguro River' },
                    { time: '밤', activity: '라이트업 · 포토 스팟', location: '도쿄타워/롯폰기' }
                ]
            },
            {
                day: 3,
                title: '교토 당일치기 · 철학의 길',
                description: '신칸센으로 교토 이동, 철학의 길과 기온 골목에서 옛 일본의 정취를 느낍니다. 시간이 허락된다면 후시미 이나리까지.',
                image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '교토 이동 · 철학의 길', location: '도쿄 → 교토' },
                    { time: '오후', activity: '기온 산책 · 포토', location: 'Gion · 야사카 신사' },
                    { time: '저녁', activity: '도쿄 복귀 · 휴식', location: '교토 → 도쿄' }
                ]
            },
            {
                day: 4,
                title: '도쿄 마지막 아침 · 귀국',
                description: '편안한 브런치와 함께 마지막 벚꽃을 바라본 뒤 공항으로 이동합니다.',
                image: 'https://images.unsplash.com/photo-1498654077810-12b09c7a97e0?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브런치 · 기념품', location: '도쿄 카페/백화점' },
                    { time: '오후', activity: '공항 이동 · 출국', location: '하네다/나리타' }
                ]
            }
        ]
    },
    holi: {
        title: '홀리 5일 컬러 트립',
        days: [
            {
                day: 1,
                title: '델리 도착 · 적응',
                description: '도착 후 가벼운 시내 산책으로 적응합니다. 향신료 가득한 인도식 저녁으로 첫날을 마무리.',
                image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '델리 도착 · 체크인', location: '델리 시내' },
                    { time: '오후', activity: '뉴델리 산책', location: '인디아 게이트 주변' },
                    { time: '저녁', activity: '현지 커리 & 난', location: '시내 레스토랑' }
                ]
            },
            {
                day: 2,
                title: '올드델리 하이라이트',
                description: '레드 포트와 자마 마스지드를 방문하고 차트/짜이로 현지 맛을 즐겨요. 혼잡 지역에서는 소지품 주의!',
                image: 'https://images.unsplash.com/photo-1578926078647-95b66bd36f98?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '레드 포트', location: 'Lal Qila' },
                    { time: '오후', activity: '자마 마스지드 · 차트', location: '올드 델리' },
                    { time: '저녁', activity: '칸누트 플레이스', location: 'CP' }
                ]
            },
            {
                day: 3,
                title: '홀리 축제 체험 (마투라/브린다반)',
                description: '온 도시가 색으로 물드는 날! 방수팩, 고글, 흰 의상으로 준비하고 현지 가이드와 함께 안전하게 즐깁니다.',
                image: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '축제 이동 · 안전 브리핑', location: '마투라/브린다반' },
                    { time: '정오', activity: '색가루 홀리 체험', location: '사원 주변 광장' },
                    { time: '저녁', activity: '복귀 · 휴식', location: '델리' }
                ]
            },
            {
                day: 4,
                title: '바라나시(옵션) · 강가 아르띠',
                description: '일출 갠지스 보트와 저녁 아르띠 의식은 잊지 못할 경험. 이동이 부담되면 델리 근교 투어로 대체 가능.',
                image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '이른 새벽', activity: '강가 보트(옵션)', location: '바라나시' },
                    { time: '저녁', activity: '아르띠 의식', location: 'Dasaswamedh Ghat' }
                ]
            },
            {
                day: 5,
                title: '기념품 쇼핑 · 귀국',
                description: '향신료, 차이, 전통 의상 등을 챙기고 귀국합니다.',
                image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '마지막 쇼핑', location: '델리 마켓' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'DEL 공항' }
                ]
            }
        ]
    },
    'lantern-taiwan': {
        title: '핑시 천등 4일 낭만 일정',
        days: [
            {
                day: 1,
                title: '타이베이 도착 · 야시장 투어',
                description: '도착 후 야시장 먹거리로 에너지를 보충합니다. 버블티 한 잔은 필수!',
                image: 'https://images.unsplash.com/photo-1544812699-6f5bc1c70915?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오후', activity: '체크인 · 휴식', location: '시먼딩/중산' },
                    { time: '저녁', activity: '스린/닝샤 야시장', location: 'Taipei Night Market' }
                ]
            },
            {
                day: 2,
                title: '도심 명소 · 카페 산책',
                description: '중정기념당, 101타워 뷰 포인트, 은은한 로스터리 카페에서 휴식.',
                image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '중정기념당', location: 'Chiang Kai-shek Memorial Hall' },
                    { time: '오후', activity: '타이베이 101 뷰', location: 'Elephant Mountain/근처 포인트' },
                    { time: '저녁', activity: '카페 · 디저트', location: '시내 카페' }
                ]
            },
            {
                day: 3,
                title: '핑시선 철도 · 십분역 천등 체험',
                description: '소원을 적은 천등을 하늘로 띄우며 로맨틱한 순간을 만듭니다. 비 예보 시 우비/우산 준비!',
                image: 'https://images.unsplash.com/photo-1544812699-6f5bc1c70915?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오후', activity: '핑시선 기차 탑승', location: '타이베이 → 핑시' },
                    { time: '저녁', activity: '십분역 천등 날리기', location: 'Shifen Old Street' }
                ]
            },
            {
                day: 4,
                title: '브런치 · 귀국',
                description: '소소한 기념품을 챙기고 공항으로 이동합니다.',
                image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브런치 · 기념품', location: '타이베이 카페/서점' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'TPE 공항' }
                ]
            }
        ]
    },
    tomorrowland: {
        title: '투모로우랜드 4일 페스티벌 라이프',
        days: [
            {
                day: 1,
                title: '브뤼셀 도착 · Boom 이동',
                description: 'DreamVille 또는 인근 숙소로 이동해 내일의 대장정을 준비합니다.',
                image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오후', activity: '체크인 · 밴드 수령', location: 'Brussels/Antwerp' },
                    { time: '저녁', activity: '라이트한 프리 드링크', location: '현지 펍' }
                ]
            },
            {
                day: 2,
                title: '페스티벌 Day 1 · 메인스테이지',
                description: '메인스테이지 오프닝 순간을 놓치지 마세요. 이어플러그, 수분 보충은 필수!'
                ,
                image: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '정오', activity: '입장 · 라인업 체크', location: 'Boom' },
                    { time: '오후', activity: '부스 투어 · 포토', location: '메인/테크노/하우스 스테이지' },
                    { time: '밤', activity: '헤드라이너 감상', location: 'Mainstage' }
                ]
            },
            {
                day: 3,
                title: '페스티벌 Day 2 · 크루와 함께',
                description: '어제 못 본 스테이지를 공략하고, 크루와 동선 분담으로 효율을 높입니다.',
                image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '정오', activity: '입장 · 굿즈 쇼핑', location: 'Boom' },
                    { time: '오후', activity: '콜라보/서프라이즈 셋', location: '서브 스테이지' },
                    { time: '밤', activity: '엔딩 불꽃', location: 'Mainstage' }
                ]
            },
            {
                day: 4,
                title: '브뤼셀 브런치 · 귀국',
                description: '그 날의 셋리스트를 이야기하며 브런치로 마무리합니다.',
                image: 'https://images.unsplash.com/photo-1514517220035-4097f17a7b82?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브뤼셀 시내 산책', location: '그랑플라스 주변' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'BRU 공항' }
                ]
            }
        ]
    },
    fringe: {
        title: '에든버러 프린지 6일 아트 트립',
        days: [
            {
                day: 1,
                title: '에든버러 도착 · 로열마일 예열',
                description: '로열마일을 따라 거리 공연을 구경하며 축제 분위기에 적응합니다.',
                image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오후', activity: '체크인 · 로열마일 산책', location: 'Royal Mile' },
                    { time: '저녁', activity: '퍼브 디너', location: 'Old Town' }
                ]
            },
            {
                day: 2,
                title: '프린지 쇼 러시 · 박람회',
                description: '코미디, 연극, 실험극까지 취향껏 선별! 에든버러의 예술 에너지를 만끽합니다.',
                image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '박람회/티켓 부스', location: 'Fringe Box Office' },
                    { time: '오후', activity: '코미디/연극 2~3편', location: '각 공연장' },
                    { time: '저녁', activity: '포스트쇼 토크/네트워킹', location: '페스티벌 클럽' }
                ]
            },
            {
                day: 3,
                title: '에든버러 성 · 국립박물관 · 카메라 옵스쿠라',
                description: '역사와 놀라움이 공존하는 명소로 도심 뷰와 지식을 함께 챙겨요.',
                image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '에든버러 성', location: 'Castle Rock' },
                    { time: '오후', activity: '국립박물관/카메라 옵스쿠라', location: 'Old Town' },
                    { time: '저녁', activity: '칼튼힐 일몰', location: 'Calton Hill' }
                ]
            },
            {
                day: 4,
                title: '쇼케이스 위크 · 다채로운 장르',
                description: '뮤지컬부터 스트리트 공연까지, 다양성을 한껏 체험합니다.',
                image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '쇼케이스 라인업', location: '여러 공연장' },
                    { time: '오후', activity: '세션 관람 · 인터랙티브', location: 'Fringe Hub' },
                    { time: '저녁', activity: '펍 투어', location: 'Grassmarket' }
                ]
            },
            {
                day: 5,
                title: '하이랜드/호수 (옵션 투어)',
                description: '하루 일정으로 자연 속에서 리프레시. 네스호/글렌코 등이 인기 코스.',
                image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '종일', activity: '옵션 투어', location: 'Highlands/Loch Ness/Glencoe' }
                ]
            },
            {
                day: 6,
                title: '마지막 브런치 · 귀국',
                description: '에든버러의 골목을 마지막으로 걸으며, 즐거웠던 공연을 추억합니다.',
                image: 'https://images.unsplash.com/photo-1514517220035-4097f17a7b82?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브런치 · 기념품', location: 'New Town' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'EDI 공항' }
                ]
            }
        ]
    },
    "up-alaaf": {
        title: '마르디 그라 5일 핵심 일정 (뉴올리언스)',
        days: [
            {
                day: 1,
                title: '뉴올리언스 도착 · 프렌치쿼터 첫인상',
                description:
                    '시차를 풀며 프렌치쿼터 골목을 거닙니다. 카페 뒤 몽드에서 비녜(도넛)와 치커리 커피로 달콤하게 시작하고, 저녁엔 프렌치먼 스트리트에서 라이브 재즈로 분위기를 끌어올려요.',
                image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '도착 · 체크인', location: 'MSY 공항/프렌치쿼터' },
                    { time: '점심', activity: '크레올 런치', location: '프렌치쿼터' },
                    { time: '오후', activity: '성 루이스 대성당 · 잭슨광장', location: 'Jackson Square' },
                    { time: '디저트', activity: '비녜 & 치커리 커피', location: 'Cafe du Monde' },
                    { time: '저녁', activity: '라이브 재즈 바 호핑', location: 'Frenchmen St.' }
                ]
            },
            {
                day: 2,
                title: '가든 디스트릭트 · 플로트 창고 · 퍼레이드 준비',
                description:
                    '세인트 찰스 스트리트카를 타고 가든 디스트릭트 저택가를 산책한 뒤, 마르디 그라 월드에서 실제 플로트(퍼레이드 수레) 제작 과정을 봅니다. 오후엔 코스튬/마스크를 준비해 퍼레이드 감도를 높여요.',
                image: 'https://images.unsplash.com/photo-1510920018318-3b4dfe979e70?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '스트리트카 타고 산책', location: 'Saint Charles Ave.' },
                    { time: '점심', activity: '포보이/검보 맛보기', location: 'Magazine St. 일대' },
                    { time: '오후', activity: '마르디 그라 월드 견학', location: 'Mardi Gras World' },
                    { time: '저녁', activity: '코스튬 · 마스크 쇼핑', location: '프렌치쿼터 숍' }
                ]
            },
            {
                day: 3,
                title: '퍼레이드 Day 1 · 업타운 루트',
                description:
                    '업타운 루트에서 크루(Krewe) 퍼레이드를 관람합니다. 비즈(구슬)와 토큰을 받으려면 손을 흔들고 외쳐보세요! 안전을 위해 도로 가장자리에서 관람하고 아이들과는 네추럴 그라운드 측에 머물러요.',
                image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '포지션 선정 · 의상 준비', location: 'Uptown 퍼레이드 루트' },
                    { time: '오후', activity: '크루 퍼레이드 관람', location: 'St. Charles Ave.' },
                    { time: '저녁', activity: '재즈 디너', location: '프렌치쿼터 레스토랑' }
                ]
            },
            {
                day: 4,
                title: '퍼레이드 Day 2 · 발코니 뷰 & 축제 클라이맥스',
                description:
                    '주요 퍼레이드(Zulu/Rex 등)가 이어지는 날. 발코니 뷰를 예약했다면 색다른 경험! 혼잡 시간대엔 동행과 함께 이동하고 음주 과다를 피하세요.',
                image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브런치 · 동선 체크', location: '프렌치쿼터' },
                    { time: '오후', activity: '주요 퍼레이드 관람', location: 'Canal St. · St. Charles Ave.' },
                    { time: '저녁', activity: '발코니/클럽 파티', location: '버번 스트리트' }
                ]
            },
            {
                day: 5,
                title: '스왐프 투어(옵션) · 귀국',
                description:
                    '루이지애나 습지 보트 투어로 이색 체험을 하고, 프레터니티 컬처와 재즈의 여운을 안고 귀국합니다.',
                image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '스왐프 에어보트 투어(선택)', location: '루이지애나 습지' },
                    { time: '점심', activity: '시푸드 · 크레올 퓨전', location: '프렌치쿼터' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'MSY 공항' }
                ]
            }
        ]
    },
    "oktober-alt": {
        title: '쾰른 카니발 5일 하이라이트',
        days: [
            {
                day: 1,
                title: '쾰른 도착 · 대성당 · 알트슈타트',
                description:
                    '쾰른 대성당을 시작으로 라인강변과 알트슈타트를 산책합니다. 첫날 저녁엔 프륌 암 돔(Früh am Dom) 등 브라우하우스에서 쾰쉬(Kölsch) 한 잔으로 시작!',
                image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '도착 · 체크인', location: 'CGN/쾰른 중앙역 일대' },
                    { time: '오후', activity: '쾰른 대성당 · 전망', location: 'Kölner Dom' },
                    { time: '저녁', activity: '브라우하우스 디너', location: 'Früh am Dom/징글 등' }
                ]
            },
            {
                day: 2,
                title: '코스튬 쇼핑 · 브루어리 투어',
                description:
                    '카니발 코스튬과 소품을 준비하고, 로컬 브루어리 투어로 쾰쉬의 매력을 배웁니다. 오후엔 초콜릿 박물관이나 로마-게르만 박물관도 추천!',
                image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '코스튬 · 마스크 쇼핑', location: '호헨슐트라세/구시가지' },
                    { time: '점심', activity: '슈니첼/소시지', location: '구시가지 레스토랑' },
                    { time: '오후', activity: '브루어리 투어', location: 'Gaffel/Paulaner Haus 등' },
                    { time: '저녁', activity: '라인강 야경 산책', location: 'Hohenzollernbrücke' }
                ]
            },
            {
                day: 3,
                title: '거리 퍼레이드 Day 1 · 지역 크루',
                description:
                    '도심 곳곳의 지역 퍼레이드(Schull- un Veedelszöch 등)를 관람합니다. “캄엘라(Kamelle)!”를 외치면 사탕과 굿즈를 받을 수 있어요. 아이들과 함께라면 전용 가족 구역을 활용하세요.',
                image: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf53?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '관람 포인트 확보', location: 'Rudolfplatz/Neumarkt' },
                    { time: '오후', activity: '지역 퍼레이드 관람', location: '도심 루트' },
                    { time: '저녁', activity: '현지 펍 · 포크송', location: 'Altstadt 펍' }
                ]
            },
            {
                day: 4,
                title: '로젠몬탁 대퍼레이드',
                description:
                    '쾰른 카니발의 백미, 로젠몬탁(Rosenmontag)! 수천 명이 참가하는 대행렬이 도심을 가로지릅니다. 인파가 많으니 동행과 동선 공유, 귀중품은 최소로.',
                image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '조식 · 이동', location: '도심 주요 관람 구간' },
                    { time: '오후', activity: '대퍼레이드 관람', location: 'Heumarkt/Neumarkt 일대' },
                    { time: '저녁', activity: '카니발 파티 · 음악', location: '구시가지' }
                ]
            },
            {
                day: 5,
                title: '초콜릿 박물관 · 귀국',
                description:
                    '전날의 여운을 달콤하게 정리하며 초콜릿 박물관을 방문하고, 쾰른의 골목을 마지막으로 거닐며 귀국합니다.',
                image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '초콜릿 박물관', location: 'Schokoladenmuseum' },
                    { time: '점심', activity: '브런치 · 기념품', location: '라인강변/구시가지' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'CGN 공항' }
                ]
            }
        ]
    },
    "harbin-ice": {
        title: '하얼빈 빙등제 5일 설경 로망',
        days: [
            {
                day: 1,
                title: '하얼빈 도착 · 중앙대가 · 성 소피아 성당',
                description:
                    '체크인 후 유럽풍 보행자 거리인 중앙대가를 걸으며 러시아풍 건축과 간식(홍사과 캔디, 러시아 빵)을 맛봅니다. 저녁엔 성 소피아 성당 야경을 감상해요.',
                image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '도착 · 체크인', location: 'HRB 공항/시내' },
                    { time: '오후', activity: '중앙대가 산책 · 간식', location: 'Zhongyang Dajie' },
                    { time: '저녁', activity: '성 소피아 성당 야경', location: 'Saint Sophia Cathedral' }
                ]
            },
            {
                day: 2,
                title: '빙설대세계 · 야간 조명 속 얼음성',
                description:
                    '하얼빈 빙설대세계는 해가 진 뒤가 하이라이트! 낮에는 규모를 익히고, 밤엔 형형색색 조명으로 살아나는 얼음 성과 미끄럼틀을 즐겨요. 방한 장비는 두텁게 준비.',
                image: 'https://images.unsplash.com/photo-1542343639-31e03cd4d909?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '시내 투어 · 점심', location: '소나무 섬/시내' },
                    { time: '오후', activity: '빙설대세계 입장', location: 'Ice & Snow World' },
                    { time: '야간', activity: '라이트업 감상 · 사진', location: 'Ice & Snow World' }
                ]
            },
            {
                day: 3,
                title: '태양도(선도) 설조각 공원 · 타이거 파크(선택)',
                description:
                    '태양도 설조각 공원의 거대한 눈 조각 작품을 감상합니다. 시간 여유가 있다면 시베리아 호랑이 공원(타이거 파크)을 선택 방문.',
                image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '설조각 감상', location: 'Sun Island Snow Sculpture Park' },
                    { time: '오후', activity: '타이거 파크(선택)', location: 'Siberian Tiger Park' },
                    { time: '저녁', activity: '러시아 요리 디너', location: '골목 식당/고르키 레스토랑' }
                ]
            },
            {
                day: 4,
                title: '얼음 액티비티 · 온기 가득 핫팟',
                description:
                    '얼음 미끄럼틀, 눈썰매, 스케이팅 등 겨울 액티비티를 체험합니다. 낮 동안 휴게소에서 수시로 따뜻한 음료로 체온을 유지하세요. 저녁엔 매콤한 훠궈로 몸을 녹입니다.',
                image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '얼음 액티비티 체험', location: '시내 야외 링크/공원' },
                    { time: '오후', activity: '카페 · 휴식', location: '중앙대가/시내 카페' },
                    { time: '저녁', activity: '하얼빈식 훠궈', location: '지역 맛집' }
                ]
            },
            {
                day: 5,
                title: '기념품 · 귀국',
                description:
                    '러시아 초콜릿과 동계 기념품을 챙기고 공항으로 이동합니다. 실내외 온도차가 큰 만큼 레이어드를 유지하세요.',
                image: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '기념품 쇼핑', location: '중앙대가 상점' },
                    { time: '점심', activity: '간단 런치', location: '시내 카페' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'HRB 공항' }
                ]
            }
        ]
    },
    'cherry-blossom': {
        themes: {
            budget: {
                name: '알뜰 코스',
                icon: '💰',
                description: '공원 피크닉과 무료 야경 명소 중심',
                days: {
                    3: [
                        { day: 1, time: '오후', activity: '우에노 공원 하나미', description: '벚꽃 아래서 도시락', tips: '편의점 음식 활용' },
                        { day: 2, time: '저녁', activity: '나카메구로 야경', description: '강변 벚꽃 라이트업', tips: '음료는 미리 준비' },
                        { day: 3, time: '오전', activity: '신주쿠 교엔', description: '저렴한 입장료, 넓은 공원', tips: '돗자리 준비' }
                    ]
                }
            },
            photospot: {
                name: '인생샷 코스',
                icon: '📸',
                description: '기모노 대여와 벚꽃 명소 출사',
                days: {
                    3: [
                        { day: 1, time: '오후', activity: '기모노 체험', description: '아사쿠사에서 기모노 대여', tips: '헤어 스타일링 포함' },
                        { day: 2, time: '오전', activity: '치도리가후치 보트', description: '벚꽃 터널 아래서 보트', tips: '오전 일찍 대기' },
                        { day: 3, time: '저녁', activity: '도쿄타워와 벚꽃', description: '시바 공원에서 야경 촬영', tips: '삼각대 필수' }
                    ]
                }
            },
            foodie: {
                name: '미식가 코스',
                icon: '🍽️',
                description: '벚꽃 시즌 한정 디저트와 맛집 탐방',
                days: {
                    3: [
                        { day: 1, time: '오후', activity: '벚꽃 디저트', description: '백화점 지하 식품관', tips: '사쿠라 모찌, 케이크' },
                        { day: 2, time: '점심', activity: '가이세키 요리', description: '벚꽃 테마 점심 코스', tips: '예약 필수' },
                        { day: 3, time: '저녁', activity: '이자카야', description: '벚꽃 사케와 야키토리', tips: '현지인 맛집' }
                    ]
                }
            }
        }
    },
    'sonkgran': {
        themes: {
            budget: {
                name: '알뜰 코스',
                icon: '💰',
                description: '카오산로드 중심, 길거리 음식 활용',
                days: {
                    3: [
                        { day: 1, time: '오후', activity: '카오산로드 물총 싸움', description: '물총과 물은 현지 구매', tips: '흥정 필수' },
                        { day: 2, time: '점심', activity: '길거리 음식', description: '팟타이, 로띠', tips: '위생 상태 확인' },
                        { day: 3, time: '저녁', activity: '야시장 구경', description: '딸랏롯파이 야시장', tips: 'MRT 이용' }
                    ]
                }
            }
        }
    },
    'dia-de-muertos': {
        themes: {
            budget: {
                name: '알뜰 코스',
                icon: '💰',
                description: '공공 오프렌다와 거리 퍼레이드 중심',
                days: {
                    3: [
                        { day: 1, time: '오후', activity: '소칼로 광장 오프렌다', description: '무료 관람', tips: '해골 분장 저렴하게' },
                        { day: 2, time: '오후', activity: '거리 퍼레이드', description: '레포르마 거리', tips: '미리 자리 잡기' },
                        { day: 3, time: '저녁', activity: '타코 맛집', description: '저렴한 길거리 타코', tips: '현지인 추천' }
                    ]
                }
            }
        }
    },
    'lantern-taiwan': {
        themes: {
            budget: {
                name: '알뜰 코스',
                icon: '💰',
                description: '기차와 야시장 활용',
                days: {
                    3: [
                        { day: 1, time: '저녁', activity: '야시장 저녁', description: '저렴하고 다양한 먹거리', tips: '현금 준비' },
                        { day: 2, time: '오후', activity: '핑시선 기차 투어', description: '하루 이용권 구매', tips: '시간표 확인' },
                        { day: 3, time: '오전', activity: '용산사 방문', description: '무료 입장', tips: '경건한 분위기' }
                    ]
                }
            }
        }
    }
};

console.log('📅 여행 일정 데이터 로드 완료!');

// itineraryData export 추가
export { itineraryData };

// ===== 상세(서술/이미지 포함) 일자별 기본 일정 =====
// festivalsData의 기간을 준수: tomatina(5일), oktoberfest(6일), carnival(7일)
export const itineraryRichData = {
    tomatina: {
        title: '라 토마티나 5일 핵심 일정',
        days: [
            {
                day: 1,
                title: '발렌시아 도착 · 구시가지 감성 산책',
                description:
                    '발렌시아에 도착해 시차 적응과 함께 도시의 첫 인상을 느낍니다. 중앙시장과 대성당 주변을 산책하고, 고즈넉한 골목에서 타파스를 맛보며 여행의 감각을 깨웁니다. 디저트로는 현지인들이 사랑하는 호르차타와 파르톤을 추천해요.',
                image: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '발렌시아 도착 · 호텔 체크인', location: '발렌시아 공항/시내 호텔' },
                    { time: '점심', activity: '중앙시장 투어 · 간단 타파스', location: 'Mercado Central' },
                    { time: '오후', activity: '구시가지 산책 · 성당/광장', location: '발렌시아 대성당 주변' },
                    { time: '카페', activity: '호르차타 + 파르톤', location: 'Horchatería de Santa Catalina' },
                    { time: '저녁', activity: '전통 타파스 저녁', location: 'Casa Montaña (레스토랑)' }
                ]
            },
            {
                day: 2,
                title: '예술과학의 도시 · 말바로사 해변 · 파에야',
                description:
                    '푸른 하늘과 대조되는 미래적 건축물 앞에서 사진을 남기고, 해변을 거닐며 지중해 바다 바람을 느껴요. 발렌시아의 상징, 정통 파에야는 바다를 바라보며 맛볼 때 최고입니다.',
                image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '예술과학의 도시 포토 워크', location: 'Ciudad de las Artes y las Ciencias' },
                    { time: '점심', activity: '정통 발렌시아 파에야', location: 'La Pepica (레스토랑)' },
                    { time: '오후', activity: '해변 산책 · 자유 시간', location: 'Malvarrosa Beach' },
                    { time: '저녁', activity: '와인과 타파스', location: '발렌시아 시내' }
                ]
            },
            {
                day: 3,
                title: '라 토마티나 본행사 · 부뇰 마을',
                description:
                    '한 시간 동안 펼쳐지는 세계 최대의 토마토 배틀! 안전을 위해 토마토는 으깨 던지고, 방수 신발과 고글은 필수예요. 축제 후엔 임시 샤워장에서 씻고 부뇰 마을을 산책합니다.',
                image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '이른 오전', activity: '부뇰 이동 · 참가복 수령', location: '발렌시아 → 부뇰' },
                    { time: '11:00', activity: '라 토마티나 참가 (안전수칙 준수)', location: '부뇰 중앙 광장' },
                    { time: '정오', activity: '축제 종료 · 샤워 · 휴식', location: '임시 샤워장' },
                    { time: '오후', activity: '부뇰 성/구시가지 산책', location: '부뇰' },
                    { time: '저녁', activity: '현지 특선 · 토마토 소스 요리', location: '부뇰/발렌시아 현지 식당' }
                ]
            },
            {
                day: 4,
                title: '알부페라 호수 보트 · 논밭 · 석양 파에야',
                description:
                    '발렌시아 쌀의 고향, 알부페라에서 석호를 따라 보트 타고 논밭 풍경을 감상합니다. 호숫가 레스토랑에서 맛보는 파에야는 발렌시아에서 빼놓을 수 없는 하이라이트죠.',
                image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '알부페라 보트 & 생태 체험', location: 'Albufera Natural Park' },
                    { time: '점심', activity: '호숫가 파에야 런치', location: 'El Palmar 지역 레스토랑' },
                    { time: '오후', activity: '쌀 재배지 산책 · 사진 촬영', location: '알부페라' },
                    { time: '저녁', activity: '고풍스런 와인 바', location: '발렌시아 시내' }
                ]
            },
            {
                day: 5,
                title: '발렌시아 마지막 오전 · 귀국',
                description:
                    '중앙시장에서 간단한 기념품을 사고, 마지막으로 호르차타 한 잔을 즐긴 뒤 공항으로 이동합니다.',
                image: 'https://images.unsplash.com/photo-1543352634-873b67d6dc5b?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '중앙시장 · 기념품 쇼핑', location: 'Mercado Central' },
                    { time: '점심', activity: '가벼운 타파스/샌드위치', location: '시내 카페' },
                    { time: '오후', activity: '공항 이동 · 출국', location: '발렌시아 공항' }
                ]
            }
        ]
    },
    oktoberfest: {
        title: '옥토버페스트 6일 현지 체험 일정',
        days: [
            {
                day: 1,
                title: '뮌헨 입성 · 전통 맥주 홀에서 첫잔',
                description:
                    '마리엔플라츠 주변을 가볍게 산책하고, 호프브로이하우스에서 첫 독일 맥주와 슈바인스학센으로 기운을 돋웁니다. 프레첼은 빠질 수 없겠죠.',
                image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '뮌헨 도착 · 체크인', location: '뮌헨 시내 호텔' },
                    { time: '오후', activity: '마리엔 광장 산책', location: 'Marienplatz' },
                    { time: '저녁', activity: '맥주 홀 만찬 (프레첼/학센)', location: 'Hofbräuhaus München' }
                ]
            },
            {
                day: 2,
                title: '도심 명소 · 의상 대여로 분위기 완성',
                description:
                    '신시청사 글로켄슈필, 레지덴츠, 잉글리셔 가르텐을 돌며 바이에른의 고풍스러운 매력을 느낍니다. 저녁엔 디른들/레더호젠을 맞춰 축제 분위기 준비!',
                image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '신시청사 · 글로켄슈필 관람', location: 'Marienplatz' },
                    { time: '점심', activity: '바이에른 전통식', location: '시내 가스트호프' },
                    { time: '오후', activity: '레지덴츠/영국정원', location: 'Residenz · Englischer Garten' },
                    { time: '저녁', activity: '전통 의상 대여 · 피팅', location: '디른들/레더호젠 샵' }
                ]
            },
            {
                day: 3,
                title: '옥토버페스트 본격 즐기기 Day 1',
                description:
                    '테레지엔비제에서 텐트에 자리 잡고 1리터 잔(Maß)으로 건배! 라이브 밴드와 놀이기구, 각 텐트의 개성 넘치는 분위기를 즐겨요.',
                image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '축제장 입장 · 텐트 착석', location: 'Theresienwiese' },
                    { time: '점심', activity: '아우구스티너 텐트에서 점심', location: 'Augustiner-Festhalle' },
                    { time: '오후', activity: '놀이기구/포토 스팟', location: '축제장' },
                    { time: '저녁', activity: '라이브 밴드 · 건배 “Prost!”', location: '대형 텐트' }
                ]
            },
            {
                day: 4,
                title: '노이슈반슈타인 성 · 알프스 풍경',
                description:
                    '동화 속 배경 같은 노이슈반슈타인과 호엔슈반가우 성을 찾아 알프스 풍경을 감상합니다. 퓌센 마을에서의 식사도 매력적!',
                image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '퓌센 이동 · 성 투어', location: 'Neuschwanstein · Hohenschwangau' },
                    { time: '점심', activity: '마을 레스토랑에서 전통식', location: 'Füssen' },
                    { time: '오후', activity: '마리엔 다리 전망', location: 'Schwangau' },
                    { time: '저녁', activity: '뮌헨 복귀 · 휴식', location: '뮌헨' }
                ]
            },
            {
                day: 5,
                title: '브루어리 투어 · 옥토버페스트 Day 2',
                description:
                    '아우구스티너 양조장 투어로 맥주의 도시를 깊이 체험하고, 오후엔 다른 텐트도 탐방해보세요. 바이스부어스트, 브레첼과의 조합은 언제나 옳습니다.',
                image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '양조장 투어 · 시음', location: 'Augustiner-Bräu' },
                    { time: '점심', activity: '브루어리 레스토랑', location: 'Augustiner-Keller 등' },
                    { time: '오후', activity: '다른 텐트 탐방', location: 'Hofbräu · Paulaner 등' },
                    { time: '저녁', activity: '고별 만찬 · 음악/댄스', location: '축제장' }
                ]
            },
            {
                day: 6,
                title: '마지막 브런치 · 귀국',
                description:
                    '시장이나 베이커리에서 간단한 브런치로 마무리하고 공항으로 이동합니다. 바이에른의 여운을 가득 안고 돌아가요.',
                image: 'https://images.unsplash.com/photo-1514517220035-4097f17a7b82?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '시장/카페 브런치', location: 'Viktualienmarkt · 시내 카페' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'MUC 공항' }
                ]
            }
        ]
    },
    carnival: {
        title: '리우 카니발 7일 하이라이트',
        days: [
            {
                day: 1,
                title: '리우 도착 · 코파카바나 산책',
                description:
                    '브라질의 열기를 처음으로 맞이하는 날. 해변에서 노을을 보고, 100년 전통 카페에서 디저트로 달콤한 첫인사를 나눕니다.',
                image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '리우 도착 · 체크인', location: '코파카바나/이파네마' },
                    { time: '오후', activity: '해변 산책 · 휴식', location: 'Copacabana Beach' },
                    { time: '저녁', activity: '전통 디저트 & 커피', location: 'Confeitaria Colombo' }
                ]
            },
            {
                day: 2,
                title: '슈가로프 · 예수상 · 슈하스코',
                description:
                    '케이블카로 슈가로프 정상에서 360도 파노라마를 감상하고, 코르코바도 예수상 앞에서 리우의 상징을 마주합니다. 점심은 브라질식 바비큐!',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '슈가로프 마운틴', location: 'Bondinho 케이블카' },
                    { time: '점심', activity: '브라질 슈하스코', location: 'Fogo de Chão 등 슈라스카리아' },
                    { time: '오후', activity: '코르코바도 예수상', location: 'Cristo Redentor' },
                    { time: '저녁', activity: '이파네마 해변 석양', location: 'Praia de Ipanema' }
                ]
            },
            {
                day: 3,
                title: '삼바드롬 퍼레이드 Day 1',
                description:
                    '밤이 깊어질수록 열기는 뜨거워집니다. 화려한 의상, 거대한 수레, 리듬이 몸을 이끄는 밤. 낮에는 산타 테레사와 셀라론 계단을 산책합니다.',
                image: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '셀라론 계단 · 사진', location: 'Escadaria Selarón' },
                    { time: '점심', activity: '브라질 가정식(페이조아다)', location: 'Bar do Mineiro (추천)' },
                    { time: '오후', activity: '산타 테레사 구시가지', location: 'Santa Teresa' },
                    { time: '심야', activity: '삼바드롬 퍼레이드 관람', location: 'Sambadrome (VIP/프리미엄)' }
                ]
            },
            {
                day: 4,
                title: '블로코(거리 카니발) · 현지인과 함께',
                description:
                    '무료로 즐기는 거리 파티! 음악과 춤으로 하나 되는 리우의 진짜 얼굴을 만납니다. 안전을 위해 소지품은 최소로, 동행과 함께 움직여요.',
                image: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '이파네마 블로코 참가', location: 'Ipanema 거리' },
                    { time: '점심', activity: '해변 바 간단 식사', location: '비치 바' },
                    { time: '오후', activity: '코파카바나 블로코', location: 'Copacabana 거리' },
                    { time: '저녁', activity: '삼바 학교 파티', location: 'Mangueira 등' }
                ]
            },
            {
                day: 5,
                title: '챔피언 퍼레이드 · 미술관 · 케이블카',
                description:
                    '우승 삼바 학교들의 왕의 귀환! 낮에는 현대미술관을 둘러보고, 해 질 녘 케이블카에서 황금빛 리우를 만납니다.',
                image: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf53?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '현대미술관 관람', location: 'Museu de Arte Moderna' },
                    { time: '점심', activity: '로드지우에서 바베큐', location: 'Rodízio 레스토랑' },
                    { time: '오후', activity: '케이블카 일몰', location: 'Bondinho · Pão de Açúcar' },
                    { time: '심야', activity: '챔피언 퍼레이드 관람', location: 'Sambadrome' }
                ]
            },
            {
                day: 6,
                title: '티주카 숲 · 선셋 크루즈 · 고별 디너',
                description:
                    '세계 최대 도심 열대우림을 가볍게 트레킹하고, 구아나바라 만에서 선셋 크루즈를 즐깁니다. 마지막 밤은 슈라스카리아에서 성대하게 마무리!',
                image: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '티주카 국립공원 트레킹', location: 'Tijuca National Park' },
                    { time: '오후', activity: '구아나바라 만 선셋 크루즈', location: 'Guanabara Bay' },
                    { time: '저녁', activity: '고별 디너(바비큐·카이피리냐)', location: 'Fogo de Chão 등' }
                ]
            },
            {
                day: 7,
                title: '현지 브런치 · 귀국',
                description:
                    '아사이 볼과 브라질 커피로 가볍게 마무리하고, 리우의 리듬을 마음에 담은 채 귀국길에 오릅니다.',
                image: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브런치 · 마지막 해변 산책', location: '이파네마/코파카바나' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'Galeão 공항' }
                ]
            }
        ]
    },
    'harbin-ice': {
        title: '하얼빈 빙설제 5일 핵심 일정',
        days: [
            {
                day: 1,
                title: '하얼빈 도착 · 중앙대가 러시아풍 거리 탐방',
                description:
                    '영하 20도의 하얼빈에 도착! 중앙대가의 러시아풍 건축물과 성 소피아 대성당을 돌아봅니다. 러시아식 빵집에서 따뜻한 차와 간식으로 몸을 녹여요.',
                image: 'https://images.unsplash.com/photo-1548369937-47519962c11a?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '하얼빈 타이핑 공항 도착 · 호텔 체크인', location: '하얼빈 시내 호텔' },
                    { time: '점심', activity: '러시아식 요리 (보르시, 피로시키)', location: '중앙대가 러시아 식당' },
                    { time: '오후', activity: '성 소피아 대성당 · 중앙대가 산책', location: 'St. Sophia Cathedral' },
                    { time: '카페', activity: '러시아 홍차와 빵', location: '중앙대가 카페' },
                    { time: '저녁', activity: '동북 훠궈(火锅)', location: '시내 훠궈 전문점' }
                ]
            },
            {
                day: 2,
                title: '빙설대세계 야간 조명쇼 · 얼음 조각 예술',
                description:
                    '세계 최대 규모의 빙설대세계! 거대한 얼음 궁전과 성벽, 미끄럼틀을 즐기고, 해가 지면 화려한 LED 조명이 얼음을 물들입니다. 방한복 대여 필수!',
                image: 'https://images.unsplash.com/photo-1544989164-f2665880ac2f?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '호텔 조식 · 방한 장비 준비', location: '호텔' },
                    { time: '점심', activity: '동북 만두 (饺子)', location: '시내 만두 전문점' },
                    { time: '오후', activity: '빙설대세계 입장 · 얼음 조각 관람', location: 'Harbin Ice and Snow World' },
                    { time: '저녁(야간)', activity: 'LED 조명쇼 관람 · 얼음 미끄럼틀', location: '빙설대세계' },
                    { time: '심야', activity: '핫초코와 군고구마로 따뜻하게', location: '현장 매점' }
                ]
            },
            {
                day: 3,
                title: '태양도 눈조각 박람회 · 시베리아 호랑이 공원',
                description:
                    '낮에는 태양도에서 섬세한 눈조각 예술을 감상하고, 오후에는 시베리아 호랑이 공원에서 버스 투어를 합니다. 저녁엔 전통 동북요리를 맛봐요.',
                image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '태양도 눈조각 박람회', location: 'Sun Island Snow Sculpture Expo' },
                    { time: '점심', activity: '구이(锅包肉) 등 동북 요리', location: '태양도 근처 식당' },
                    { time: '오후', activity: '시베리아 호랑이 공원 버스 투어', location: 'Siberian Tiger Park' },
                    { time: '저녁', activity: '전통 동북 연회 요리', location: '시내 고급 식당' }
                ]
            },
            {
                day: 4,
                title: '자오린 공원 얼음 등롱 · 송화강 겨울 액티비티',
                description:
                    '자오린 공원에서 아담한 얼음 등롱 조각을 보고, 송화강에서 개썰매, 얼음 썰매 등 겨울 액티비티를 즐깁니다. 강 위를 걸어보는 특별한 경험!',
                image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '자오린 공원 얼음 등롱', location: 'Zhaolin Park Ice Lantern Festival' },
                    { time: '점심', activity: '하얼빈 훈제 소시지 (红肠)', location: '중앙대가 상점' },
                    { time: '오후', activity: '송화강 겨울 액티비티 (개썰매, 썰매)', location: 'Songhua River' },
                    { time: '저녁', activity: '중국식 바비큐 (烧烤)', location: '시내 바비큐 거리' }
                ]
            },
            {
                day: 5,
                title: '마지막 쇼핑 · 귀국',
                description:
                    '기념품 쇼핑과 마지막 러시아 빵을 사고, 하얼빈의 추억을 가슴에 담아 귀국합니다.',
                image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '중앙대가 기념품 쇼핑 · 러시아 빵', location: '중앙대가' },
                    { time: '점심', activity: '마지막 러시아 정찬', location: '중앙대가 레스토랑' },
                    { time: '오후', activity: '공항 이동 · 출국', location: '하얼빈 타이핑 공항' }
                ]
            }
        ]
    },
    'cherry-blossom': {
        title: '벚꽃 5일 감성 일정 (도쿄 & 교토)',
        days: [
            {
                day: 1,
                title: '도쿄 도착 · 우에노 벚꽃 산책',
                description: '우에노 공원의 만개한 벚꽃과 박물관 지대를 가볍게 산책하며 도쿄의 봄을 맞이합니다. 저녁엔 아사쿠사 주변에서 라이트업 벚꽃을 즐겨요.',
                image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '도쿄 도착 · 체크인', location: '하네다/나리타 → 시내' },
                    { time: '오후', activity: '우에노 공원 벚꽃 산책', location: 'Ueno Park' },
                    { time: '저녁', activity: '아사쿠사 라이트업 감상', location: 'Senso-ji · 스카이트리 뷰' }
                ]
            },
            {
                day: 2,
                title: '치도리가후치 · 나카메구로 · 야간 라이트업',
                description: '해자 위로 늘어진 벚꽃이 수면에 비치는 치도리가후치, 카페와 샵이 즐비한 나카메구로 강변을 따라 감성 넘치는 하루.',
                image: 'https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '치도리가후치 산책', location: 'Chidorigafuchi' },
                    { time: '오후', activity: '나카메구로 벚꽃', location: 'Meguro River' },
                    { time: '밤', activity: '라이트업 · 포토 스팟', location: '도쿄타워/롯폰기' }
                ]
            },
            {
                day: 3,
                title: '교토 당일치기 · 철학의 길',
                description: '신칸센으로 교토 이동, 철학의 길과 기온 골목에서 옛 일본의 정취를 느낍니다. 시간이 허락된다면 후시미 이나리까지.',
                image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '교토 이동 · 철학의 길', location: '도쿄 → 교토' },
                    { time: '오후', activity: '기온 산책 · 포토', location: 'Gion · 야사카 신사' },
                    { time: '저녁', activity: '도쿄 복귀 · 휴식', location: '교토 → 도쿄' }
                ]
            },
            {
                day: 4,
                title: '신주쿠 교엔 · 벚꽃 디저트',
                description: '도심 속 오아시스 신주쿠 교엔에서 여유로운 시간을 보내고, 백화점에서 벚꽃 시즌 한정 디저트를 맛봅니다.',
                image: 'https://images.unsplash.com/photo-1559261229-276a8163e331?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '신주쿠 교엔 산책', location: 'Shinjuku Gyoen National Garden' },
                    { time: '점심', activity: '라멘 맛집 탐방', location: '신주쿠' },
                    { time: '오후', activity: '벚꽃 디저트 쇼핑', location: '이세탄 백화점' },
                    { time: '저녁', activity: '오모이데요코초 이자카야', location: 'Omoide Yokocho' }
                ]
            },
            {
                day: 5,
                title: '도쿄 마지막 아침 · 귀국',
                description: '편안한 브런치와 함께 마지막 벚꽃을 바라본 뒤 공항으로 이동합니다.',
                image: 'https://images.unsplash.com/photo-1498654077810-12b09c7a97e0?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브런치 · 기념품', location: '도쿄 카페/백화점' },
                    { time: '오후', activity: '공항 이동 · 출국', location: '하네다/나리타' }
                ]
            }
        ]
    },
    'fringe': {
        title: '에든버러 프린지 6일 아트 트립',
        days: [
            {
                day: 1,
                title: '에든버러 도착 · 로열마일 예열',
                description: '로열마일을 따라 거리 공연을 구경하며 축제 분위기에 적응합니다.',
                image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오후', activity: '체크인 · 로열마일 산책', location: 'Royal Mile' },
                    { time: '저녁', activity: '퍼브 디너', location: 'Old Town' }
                ]
            },
            {
                day: 2,
                title: '프린지 쇼 러시 · 박람회',
                description: '코미디, 연극, 실험극까지 취향껏 선별! 에든버러의 예술 에너지를 만끽합니다.',
                image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '박람회/티켓 부스', location: 'Fringe Box Office' },
                    { time: '오후', activity: '코미디/연극 2~3편', location: '각 공연장' },
                    { time: '저녁', activity: '포스트쇼 토크/네트워킹', location: '페스티벌 클럽' }
                ]
            },
            {
                day: 3,
                title: '에든버러 성 · 국립박물관 · 카메라 옵스쿠라',
                description: '역사와 놀라움이 공존하는 명소로 도심 뷰와 지식을 함께 챙겨요.',
                image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '에든버러 성', location: 'Castle Rock' },
                    { time: '오후', activity: '국립박물관/카메라 옵스쿠라', location: 'Old Town' },
                    { time: '저녁', activity: '칼튼힐 일몰', location: 'Calton Hill' }
                ]
            },
            {
                day: 4,
                title: '쇼케이스 위크 · 다채로운 장르',
                description: '뮤지컬부터 스트리트 공연까지, 다양성을 한껏 체험합니다.',
                image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '쇼케이스 라인업', location: '여러 공연장' },
                    { time: '오후', activity: '세션 관람 · 인터랙티브', location: 'Fringe Hub' },
                    { time: '저녁', activity: '펍 투어', location: 'Grassmarket' }
                ]
            },
            {
                day: 5,
                title: '하이랜드/호수 (옵션 투어)',
                description: '하루 일정으로 자연 속에서 리프레시. 네스호/글렌코 등이 인기 코스.',
                image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '종일', activity: '옵션 투어', location: 'Highlands/Loch Ness/Glencoe' }
                ]
            },
            {
                day: 6,
                title: '마지막 브런치 · 귀국',
                description: '에든버러의 골목을 마지막으로 걸으며, 즐거웠던 공연을 추억합니다.',
                image: 'https://images.unsplash.com/photo-1514517220035-4097f17a7b82?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브런치 · 기념품', location: 'New Town' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'EDI 공항' }
                ]
            }
        ]
    },
    'sonkgran': {
        title: '송크란 5일 방콕 하이라이트',
        days: [
            {
                day: 1,
                title: '방콕 도착 · 카오산로드 예열',
                description: '방콕 도착 후 물총 축제의 성지, 카오산로드로 이동해 축제 분위기를 미리 느껴봅니다. 저녁엔 팟타이와 맥주로 시작!',
                image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오후', activity: '방콕 도착 · 호텔 체크인', location: '수완나품/돈므앙 공항 → 시내' },
                    { time: '저녁', activity: '카오산로드 탐방 · 저녁 식사', location: 'Khaosan Road' }
                ]
            },
            {
                day: 2,
                title: '송크란 물총 축제 Day 1',
                description: '본격적인 물총 싸움 시작! 방수팩은 필수, 복장은 가볍게. 카오산로드와 실롬 로드에서 전 세계 여행객들과 함께 즐겨요.',
                image: 'https://images.unsplash.com/photo-1518991669955-4c7987410663?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '물총 및 방수 장비 구매', location: '카오산로드' },
                    { time: '오후', activity: '물총 축제 참가', location: '카오산로드/실롬' },
                    { time: '저녁', activity: '루프탑 바에서 야경 감상', location: '방콕 시내' }
                ]
            },
            {
                day: 3,
                title: '방콕 왕궁 & 사원 투어',
                description: '축제 열기를 잠시 식히고, 방콕의 상징인 왕궁과 왓포, 왓아룬 사원을 둘러봅니다. 복장 규정을 꼭 지켜주세요.',
                image: 'https://images.unsplash.com/photo-1598970605070-2d2f4a39c93c?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '방콕 왕궁 & 에메랄드 사원', location: 'Grand Palace & Wat Phra Kaew' },
                    { time: '점심', activity: '강변 레스토랑', location: '짜오프라야 강변' },
                    { time: '오후', activity: '왓포 & 왓아룬', location: 'Wat Pho & Wat Arun' }
                ]
            },
            {
                day: 4,
                title: '쇼핑 & 마사지 · 디너 크루즈',
                description: '시암 파라곤 등 쇼핑몰에서 쇼핑을 즐기고, 태국 전통 마사지로 피로를 풉니다. 저녁엔 디너 크루즈로 낭만적인 밤을!',
                image: 'https://images.unsplash.com/photo-1552694400-941842d49792?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '쇼핑몰 투어', location: 'Siam Paragon/CentralWorld' },
                    { time: '오후', activity: '태국 전통 마사지', location: '시내 마사지샵' },
                    { time: '저녁', activity: '짜오프라야 디너 크루즈', location: 'Chao Phraya River' }
                ]
            },
            {
                day: 5,
                title: '마지막 쇼핑 · 귀국',
                description: '짜뚜짝 주말 시장이나 아이콘 시암에서 마지막 기념품을 사고 귀국합니다.',
                image: 'https://images.unsplash.com/photo-1563492065599-3520f775ee05?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '마지막 쇼핑', location: 'Chatuchak Market/ICONSIAM' },
                    { time: '점심', activity: '공항 가기 전 마지막 식사', location: '시내' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'BKK/DMK 공항' }
                ]
            }
        ]
    },
    'oktober-alt': {
        title: '쾰른 카니발 5일 하이라이트',
        days: [
            {
                day: 1,
                title: '쾰른 도착 · 대성당 · 알트슈타트',
                description:
                    '쾰른 대성당을 시작으로 라인강변과 알트슈타트를 산책합니다. 첫날 저녁엔 프륌 암 돔(Früh am Dom) 등 브라우하우스에서 쾰쉬(Kölsch) 한 잔으로 시작!',
                image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '도착 · 체크인', location: 'CGN/쾰른 중앙역 일대' },
                    { time: '오후', activity: '쾰른 대성당 · 전망', location: 'Kölner Dom' },
                    { time: '저녁', activity: '브라우하우스 디너', location: 'Früh am Dom/징글 등' }
                ]
            },
            {
                day: 2,
                title: '코스튬 쇼핑 · 브루어리 투어',
                description:
                    '카니발 코스튬과 소품을 준비하고, 로컬 브루어리 투어로 쾰쉬의 매력을 배웁니다. 오후엔 초콜릿 박물관이나 로마-게르만 박물관도 추천!',
                image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '코스튬 · 마스크 쇼핑', location: '호헨슐트라세/구시가지' },
                    { time: '점심', activity: '슈니첼/소시지', location: '구시가지 레스토랑' },
                    { time: '오후', activity: '브루어리 투어', location: 'Gaffel/Paulaner Haus 등' },
                    { time: '저녁', activity: '라인강 야경 산책', location: 'Hohenzollernbrücke' }
                ]
            },
            {
                day: 3,
                title: '거리 퍼레이드 Day 1 · 지역 크루',
                description:
                    '도심 곳곳의 지역 퍼레이드(Schull- un Veedelszöch 등)를 관람합니다. “캄엘라(Kamelle)!”를 외치면 사탕과 굿즈를 받을 수 있어요. 아이들과 함께라면 전용 가족 구역을 활용하세요.',
                image: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf53?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '관람 포인트 확보', location: 'Rudolfplatz/Neumarkt' },
                    { time: '오후', activity: '지역 퍼레이드 관람', location: '도심 루트' },
                    { time: '저녁', activity: '현지 펍 · 포크송', location: 'Altstadt 펍' }
                ]
            },
            {
                day: 4,
                title: '로젠몬탁 대퍼레이드',
                description:
                    '쾰른 카니발의 백미, 로젠몬탁(Rosenmontag)! 수천 명이 참가하는 대행렬이 도심을 가로지릅니다. 인파가 많으니 동행과 동선 공유, 귀중품은 최소로.',
                image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '조식 · 이동', location: '도심 주요 관람 구간' },
                    { time: '오후', activity: '대퍼레이드 관람', location: 'Heumarkt/Neumarkt 일대' },
                    { time: '저녁', activity: '카니발 파티 · 음악', location: '구시가지' }
                ]
            },
            {
                day: 5,
                title: '초콜릿 박물관 · 귀국',
                description:
                    '전날의 여운을 달콤하게 정리하며 초콜릿 박물관을 방문하고, 쾰른의 골목을 마지막으로 거닐며 귀국합니다.',
                image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '초콜릿 박물관', location: 'Schokoladenmuseum' },
                    { time: '점심', activity: '브런치 · 기념품', location: '라인강변/구시가지' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'CGN 공항' }
                ]
            }
        ]
    },
    'dia-de-muertos': {
        title: '죽은 자의 날 6일 멕시코시티 탐방',
        days: [
            {
                day: 1,
                title: '멕시코시티 도착 · 소칼로 광장',
                description: '멕시코시티 도착 후, 축제의 중심지인 소칼로 광장으로 이동해 거대한 오프렌다(제단)를 보며 축제 분위기를 느낍니다.',
                image: 'https://images.unsplash.com/photo-1572373151924-449503933658?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오후', activity: '멕시코시티 도착 · 호텔 체크인', location: 'MEX 공항 → 시내' },
                    { time: '저녁', activity: '소칼로 광장 야경 및 오프렌다 관람', location: 'Zócalo' }
                ]
            },
            {
                day: 2,
                title: '죽은 자의 날 퍼레이드',
                description: '레포르마 거리를 따라 이어지는 화려한 퍼레이드를 관람합니다. 해골 분장을 하고 참여하면 더욱 즐거운 경험이 될 거예요.',
                image: 'https://images.unsplash.com/photo-1603815521398-92c883b444e3?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '해골 분장 체험', location: '시내 분장샵' },
                    { time: '오후', activity: '퍼레이드 관람', location: 'Paseo de la Reforma' },
                    { time: '저녁', activity: '타코와 메스칼', location: '시내 맛집' }
                ]
            },
            {
                day: 3,
                title: '프리다 칼로 박물관 & 코요아칸',
                description: '프리다 칼로의 생가인 파란 집을 방문하고, 예술가들의 동네 코요아칸을 산책하며 여유로운 시간을 보냅니다.',
                image: 'https://images.unsplash.com/photo-1598038139392-21fa3a22192b?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '프리다 칼로 박물관', location: 'Museo Frida Kahlo' },
                    { time: '점심', activity: '코요아칸 시장', location: 'Mercado de Coyoacán' },
                    { time: '오후', activity: '코요아칸 산책', location: 'Coyoacán' }
                ]
            },
            {
                day: 4,
                title: '테오티우아칸 피라미드',
                description: '해와 달의 피라미드가 있는 고대 도시 테오티우아칸에 올라 신비로운 기운을 느껴봅니다. 고산지대이므로 천천히 움직이세요.',
                image: 'https://images.unsplash.com/photo-1510546148914-1761a2b13023?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '테오티우아칸 투어', location: 'Teotihuacan' },
                    { time: '점심', activity: '동굴 레스토랑', location: 'La Gruta' },
                    { time: '오후', activity: '멕시코시티 복귀', location: '시내' }
                ]
            },
            {
                day: 5,
                title: '루차 리브레 & 마리아치',
                description: '멕시코의 프로레슬링, 루차 리브레를 관람하며 스트레스를 날리고, 가리발디 광장에서 마리아치 공연을 즐깁니다.',
                image: 'https://images.unsplash.com/photo-1569429593410-b270b591d4c3?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '저녁', activity: '루차 리브레 관람', location: 'Arena México' },
                    { time: '밤', activity: '가리발디 광장 마리아치', location: 'Plaza Garibaldi' }
                ]
            },
            {
                day: 6,
                title: '마지막 쇼핑 · 귀국',
                description: '전통 시장에서 기념품을 사고, 멕시코의 강렬한 추억을 안고 귀국합니다.',
                image: 'https://images.unsplash.com/photo-1561332824-33e11a57c24a?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '시우다델라 시장 쇼핑', location: 'Mercado de Artesanías La Ciudadela' },
                    { time: '점심', activity: '마지막 멕시코 음식', location: '시내' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'MEX 공항' }
                ]
            }
        ]
    },
    'holi': {
        title: '홀리 5일 컬러 트립 (델리 & 아그라)',
        days: [
            {
                day: 1,
                title: '델리 도착 · 적응',
                description: '도착 후 가벼운 시내 산책으로 적응합니다. 향신료 가득한 인도식 저녁으로 첫날을 마무리.',
                image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '델리 도착 · 체크인', location: '델리 시내' },
                    { time: '오후', activity: '뉴델리 산책', location: '인디아 게이트 주변' },
                    { time: '저녁', activity: '현지 커리 & 난', location: '시내 레스토랑' }
                ]
            },
            {
                day: 2,
                title: '올드델리 하이라이트',
                description: '레드 포트와 자마 마스지드를 방문하고 차트/짜이로 현지 맛을 즐겨요. 혼잡 지역에서는 소지품 주의!',
                image: 'https://images.unsplash.com/photo-1578926078647-95b66bd36f98?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '레드 포트', location: 'Lal Qila' },
                    { time: '오후', activity: '자마 마스지드 · 차트', location: '올드 델리' },
                    { time: '저녁', activity: '칸누트 플레이스', location: 'CP' }
                ]
            },
            {
                day: 3,
                title: '홀리 축제 체험',
                description: '온 도시가 색으로 물드는 날! 방수팩, 고글, 흰 의상으로 준비하고 안전한 유료 파티나 호텔 이벤트에 참여하는 것을 추천합니다.',
                image: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '축제 이동 · 안전 브리핑', location: '델리 시내' },
                    { time: '정오', activity: '색가루 홀리 체험', location: '유료 파티 장소' },
                    { time: '저녁', activity: '복귀 · 휴식', location: '델리' }
                ]
            },
            {
                day: 4,
                title: '아그라 당일치기 · 타지마할',
                description: '기차나 차량으로 아그라로 이동해 세계적인 건축물 타지마할을 감상합니다. 일출 시간에 맞춰 방문하면 더욱 아름다워요.',
                image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '이른 아침', activity: '아그라로 이동', location: '델리 → 아그라' },
                    { time: '오전', activity: '타지마할 관람', location: 'Taj Mahal' },
                    { time: '점심', activity: '현지 레스토랑', location: '아그라' },
                    { time: '오후', activity: '델리 복귀', location: '아그라 → 델리' }
                ]
            },
            {
                day: 5,
                title: '기념품 쇼핑 · 귀국',
                description: '향신료, 차이, 전통 의상 등을 챙기고 귀국합니다.',
                image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '마지막 쇼핑', location: '델리 마켓' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'DEL 공항' }
                ]
            }
        ]
    },
    'tomorrowland': {
        title: '투모로우랜드 5일 페스티벌 라이프',
        days: [
            {
                day: 1,
                title: '브뤼셀 도착 · DreamVille 체크인',
                description: '브뤼셀 도착 후, 투모로우랜드의 캠핑장인 DreamVille로 이동해 체크인하고 전야제 파티인 "The Gathering"을 즐깁니다.',
                image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오후', activity: '브뤼셀 도착 · DreamVille 이동', location: 'BRU 공항 → Boom' },
                    { time: '저녁', activity: 'The Gathering 파티', location: 'DreamVille' }
                ]
            },
            {
                day: 2,
                title: '페스티벌 Day 1 · 메인스테이지',
                description: '드디어 페스티벌 시작! 화려한 메인스테이지와 다양한 서브 스테이지를 탐험하며 첫날을 만끽합니다. 이어플러그, 수분 보충은 필수!',
                image: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '정오', activity: '입장 · 라인업 체크', location: 'Tomorrowland' },
                    { time: '오후', activity: '부스 투어 · 포토', location: '메인/테크노/하우스 스테이지' },
                    { time: '밤', activity: '헤드라이너 감상', location: 'Mainstage' }
                ]
            },
            {
                day: 3,
                title: '페스티벌 Day 2 · 크루와 함께',
                description: '어제 못 본 스테이지를 공략하고, 크루와 동선 분담으로 효율을 높입니다. 페스티벌 내 다양한 음식도 즐겨보세요.',
                image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '정오', activity: '입장 · 굿즈 쇼핑', location: 'Tomorrowland' },
                    { time: '오후', activity: '콜라보/서프라이즈 셋', location: '서브 스테이지' },
                    { time: '밤', activity: '엔딩 불꽃', location: 'Mainstage' }
                ]
            },
            {
                day: 4,
                title: '페스티벌 Day 3 · 마지막 날',
                description: '페스티벌의 마지막 날! 가장 보고 싶었던 아티스트의 공연을 즐기고, 마지막 불꽃놀이와 함께 아쉬움을 달랩니다.',
                image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '정오', activity: '입장 · 마지막 라인업 확인', location: 'Tomorrowland' },
                    { time: '오후', activity: '보고 싶었던 아티스트 공연', location: '다양한 스테이지' },
                    { time: '밤', activity: '마지막 불꽃놀이', location: 'Mainstage' }
                ]
            },
            {
                day: 5,
                title: '브뤼셀 브런치 · 귀국',
                description: '그 날의 셋리스트를 이야기하며 브런치로 마무리합니다.',
                image: 'https://images.unsplash.com/photo-1514517220035-4097f17a7b82?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브뤼셀 시내 산책', location: '그랑플라스 주변' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'BRU 공항' }
                ]
            }
        ]
    },
    'up-alaaf': {
        title: '마르디 그라 5일 핵심 일정 (뉴올리언스)',
        days: [
            {
                day: 1,
                title: '뉴올리언스 도착 · 프렌치쿼터 첫인상',
                description:
                    '시차를 풀며 프렌치쿼터 골목을 거닙니다. 카페 뒤 몽드에서 비녜(도넛)와 치커리 커피로 달콤하게 시작하고, 저녁엔 프렌치먼 스트리트에서 라이브 재즈로 분위기를 끌어올려요.',
                image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '도착 · 체크인', location: 'MSY 공항/프렌치쿼터' },
                    { time: '점심', activity: '크레올 런치', location: '프렌치쿼터' },
                    { time: '오후', activity: '성 루이스 대성당 · 잭슨광장', location: 'Jackson Square' },
                    { time: '디저트', activity: '비녜 & 치커리 커피', location: 'Cafe du Monde' },
                    { time: '저녁', activity: '라이브 재즈 바 호핑', location: 'Frenchmen St.' }
                ]
            },
            {
                day: 2,
                title: '가든 디스트릭트 · 플로트 창고 · 퍼레이드 준비',
                description:
                    '세인트 찰스 스트리트카를 타고 가든 디스트릭트 저택가를 산책한 뒤, 마르디 그라 월드에서 실제 플로트(퍼레이드 수레) 제작 과정을 봅니다. 오후엔 코스튬/마스크를 준비해 퍼레이드 감도를 높여요.',
                image: 'https://images.unsplash.com/photo-1510920018318-3b4dfe979e70?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '스트리트카 타고 산책', location: 'Saint Charles Ave.' },
                    { time: '점심', activity: '포보이/검보 맛보기', location: 'Magazine St. 일대' },
                    { time: '오후', activity: '마르디 그라 월드 견학', location: 'Mardi Gras World' },
                    { time: '저녁', activity: '코스튬 · 마스크 쇼핑', location: '프렌치쿼터 숍' }
                ]
            },
            {
                day: 3,
                title: '퍼레이드 Day 1 · 업타운 루트',
                description:
                    '업타운 루트에서 크루(Krewe) 퍼레이드를 관람합니다. 비즈(구슬)와 토큰을 받으려면 손을 흔들고 외쳐보세요! 안전을 위해 도로 가장자리에서 관람하고 아이들과는 네추럴 그라운드 측에 머물러요.',
                image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '포지션 선정 · 의상 준비', location: 'Uptown 퍼레이드 루트' },
                    { time: '오후', activity: '크루 퍼레이드 관람', location: 'St. Charles Ave.' },
                    { time: '저녁', activity: '재즈 디너', location: '프렌치쿼터 레스토랑' }
                ]
            },
            {
                day: 4,
                title: '퍼레이드 Day 2 · 발코니 뷰 & 축제 클라이맥스',
                description:
                    '주요 퍼레이드(Zulu/Rex 등)가 이어지는 날. 발코니 뷰를 예약했다면 색다른 경험! 혼잡 시간대엔 동행과 함께 이동하고 음주 과다를 피하세요.',
                image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브런치 · 동선 체크', location: '프렌치쿼터' },
                    { time: '오후', activity: '주요 퍼레이드 관람', location: 'Canal St. · St. Charles Ave.' },
                    { time: '저녁', activity: '발코니/클럽 파티', location: '버번 스트리트' }
                ]
            },
            {
                day: 5,
                title: '스왐프 투어(옵션) · 귀국',
                description:
                    '루이지애나 습지 보트 투어로 이색 체험을 하고, 프레터니티 컬처와 재즈의 여운을 안고 귀국합니다.',
                image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '스왐프 에어보트 투어(선택)', location: '루이지애나 습지' },
                    { time: '점심', activity: '시푸드 · 크레올 퓨전', location: '프렌치쿼터' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'MSY 공항' }
                ]
            }
        ]
    },
    'lantern-taiwan': {
        title: '핑시 천등 4일 낭만 일정',
        days: [
            {
                day: 1,
                title: '타이베이 도착 · 야시장 투어',
                description: '도착 후 야시장 먹거리로 에너지를 보충합니다. 버블티 한 잔은 필수!',
                image: 'https://images.unsplash.com/photo-1544812699-6f5bc1c70915?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오후', activity: '체크인 · 휴식', location: '시먼딩/중산' },
                    { time: '저녁', activity: '스린/닝샤 야시장', location: 'Taipei Night Market' }
                ]
            },
            {
                day: 2,
                title: '도심 명소 · 카페 산책',
                description: '중정기념당, 101타워 뷰 포인트, 은은한 로스터리 카페에서 휴식.',
                image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '중정기념당', location: 'Chiang Kai-shek Memorial Hall' },
                    { time: '오후', activity: '타이베이 101 뷰', location: 'Elephant Mountain/근처 포인트' },
                    { time: '저녁', activity: '카페 · 디저트', location: '시내 카페' }
                ]
            },
            {
                day: 3,
                title: '핑시선 철도 · 십분역 천등 체험',
                description: '소원을 적은 천등을 하늘로 띄우며 로맨틱한 순간을 만듭니다. 비 예보 시 우비/우산 준비!',
                image: 'https://images.unsplash.com/photo-1544812699-6f5bc1c70915?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오후', activity: '핑시선 기차 탑승', location: '타이베이 → 핑시' },
                    { time: '저녁', activity: '십분역 천등 날리기', location: 'Shifen Old Street' }
                ]
            },
            {
                day: 4,
                title: '브런치 · 귀국',
                description: '소소한 기념품을 챙기고 공항으로 이동합니다.',
                image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
                activities: [
                    { time: '오전', activity: '브런치 · 기념품', location: '타이베이 카페/서점' },
                    { time: '오후', activity: '공항 이동 · 출국', location: 'TPE 공항' }
                ]
            }
        ]
    }
};

// Window 객체에 할당 (브라우저 환경)
if (typeof window !== 'undefined') {
    window.itineraryData = itineraryData;
    window.itineraryRichData = itineraryRichData;
}
