export const quizData = {
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