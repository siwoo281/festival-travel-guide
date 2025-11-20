export const quizData = {
    questions: [
        {
            id: 1,
            type: 'push',
            question: '여행을 통해 무엇을 가장 얻고 싶으신가요?',
            description: '가장 중요하게 생각하는 여행의 가치를 선택해주세요.',
            options: [
                { 
                    text: '짜릿한 해방감과 일상으로부터의 완벽한 탈출', 
                    scores: { carnival: 3, tomatina: 3, tomorrowland: 3, sonkgran: 2, 'mardi-gras': 3, holi: 2 }
                },
                { 
                    text: '새로운 문화와 전통을 깊이 있게 경험하는 것', 
                    scores: { oktoberfest: 3, 'cologne-carnival': 3, 'harbin-ice': 2, 'cherry-blossom': 3, 'dia-de-muertos': 3, 'lantern-taiwan': 3, fringe: 2 }
                },
                { 
                    text: '전 세계 사람들과 어울리는 즐거운 만남', 
                    scores: { tomatina: 2, sonkgran: 3, oktoberfest: 2, tomorrowland: 3, 'mardi-gras': 2, holi: 3, fringe: 2 }
                }
            ]
        },
        {
            id: 2,
            type: 'pull',
            question: '어떤 스타일의 축제를 선호하시나요?',
            description: '당신의 심장을 뛰게 하는 축제 분위기를 골라보세요.',
            options: [
                { 
                    text: '눈과 귀가 즐거운 화려한 퍼레이드와 쇼', 
                    scores: { carnival: 3, 'cologne-carnival': 3, 'mardi-gras': 3, fringe: 2, 'dia-de-muertos': 2, 'lantern-taiwan': 1 }
                },
                { 
                    text: '음악과 함께 춤추며 에너지를 발산하는 파티', 
                    scores: { carnival: 2, tomatina: 2, sonkgran: 2, oktoberfest: 3, tomorrowland: 3, holi: 2 }
                },
                { 
                    text: '아름다운 풍경 속에서 즐기는 평화롭고 감성적인 무드', 
                    scores: { 'harbin-ice': 3, 'cherry-blossom': 3, 'lantern-taiwan': 3, 'dia-de-muertos': 2, fringe: 1 }
                }
            ]
        },
        {
            id: 3,
            type: 'pull',
            question: '축제에서 어떤 활동을 가장 하고 싶으신가요?',
            description: '당신이 꿈꾸는 축제에서의 하루를 상상해보세요.',
            options: [
                { 
                    text: '물총 싸움, 토마토 던지기 등 온몸으로 즐기는 액티비티', 
                    scores: { tomatina: 3, sonkgran: 3, holi: 3, carnival: 2, 'cologne-carnival': 2, 'mardi-gras': 1 }
                },
                { 
                    text: '세계적인 아티스트의 공연과 예술 작품 감상', 
                    scores: { fringe: 3, tomorrowland: 3, carnival: 2, 'harbin-ice': 2, 'cherry-blossom': 1, 'dia-de-muertos': 2 }
                },
                { 
                    text: '현지 특산 맥주와 음식을 맛보는 미식 탐험', 
                    scores: { oktoberfest: 3, 'cologne-carnival': 3, 'mardi-gras': 2, tomatina: 1, 'cherry-blossom': 2, 'dia-de-muertos': 2 }
                }
            ]
        },
        {
            id: 4,
            type: 'pull',
            question: '선호하는 여행 시기는 언제인가요?',
            description: '날씨는 여행의 중요한 부분이죠!',
            options: [
                { 
                    text: '따스한 햇살이 가득한 봄 또는 뜨거운 여름', 
                    scores: { carnival: 2, tomatina: 3, sonkgran: 3, fringe: 3, tomorrowland: 3, holi: 3, 'cherry-blossom': 3, 'lantern-taiwan': 2 }
                },
                { 
                    text: '낭만적인 분위기의 가을 또는 새하얀 겨울', 
                    scores: { oktoberfest: 3, 'cologne-carnival': 3, 'harbin-ice': 3, 'dia-de-muertos': 3, 'mardi-gras': 3, carnival: 1, 'lantern-taiwan': 1 }
                },
                { 
                    text: '계절은 상관없어요, 최고의 축제를 즐길 수만 있다면!', 
                    scores: { carnival: 1, tomatina: 1, sonkgran: 1, oktoberfest: 1, fringe: 1, tomorrowland: 1, 'cologne-carnival': 1, holi: 1, 'harbin-ice': 1, 'cherry-blossom': 1, 'dia-de-muertos': 1, 'lantern-taiwan': 1, 'mardi-gras': 1 }
                }
            ]
        },
        {
            id: 5,
            type: 'push',
            question: '여행 경비는 어느 정도로 생각하고 계신가요?',
            description: '예산에 맞춰 최고의 경험을 찾아드릴게요.',
            options: [
                { 
                    text: '가성비가 중요해요! 알뜰하게 즐기고 싶어요.', 
                    scores: { tomatina: 2, sonkgran: 3, holi: 3, 'cherry-blossom': 2, 'dia-de-muertos': 2, 'lantern-taiwan': 3 }
                },
                { 
                    text: '조금은 투자해서 만족스러운 여행을 하고 싶어요.', 
                    scores: { carnival: 2, oktoberfest: 2, fringe: 3, 'cologne-carnival': 3, 'harbin-ice': 3, 'dia-de-muertos': 3, 'lantern-taiwan': 2, 'mardi-gras': 2 }
                },
                { 
                    text: '일생일대의 경험을 위해 아낌없이 투자할래요!', 
                    scores: { carnival: 3, oktoberfest: 3, tomorrowland: 3, 'harbin-ice': 2, fringe: 2, 'mardi-gras': 1 }
                }
            ]
        }
    ],
    results: {
        carnival: {
            name: '리우 카니발 (브라질)',
            icon: '🎭',
            reason: '뜨거운 태양 아래, 온몸의 세포를 깨우는 열정적인 삼바 리듬을 원하시네요!',
            description: '일상의 모든 스트레스를 날려버릴 화려한 퍼레이드와 끊이지 않는 파티가 당신을 기다립니다. 세계 최대의 축제에서 잊지 못할 해방감을 느껴보세요.',
            features: ['삼바 퍼레이드', '화려한 의상', '해변 파티', '열정적인 분위기']
        },
        tomatina: {
            name: '라 토마티나 (스페인)',
            icon: '🍅',
            reason: '생각만 해도 즐거운 토마토 던지기! 독특하고 유쾌한 경험을 찾고 계시는군요.',
            description: '전 세계에서 모인 사람들과 함께 토마토를 던지며 동심으로 돌아가 보세요. 세상에서 가장 깔끔한(?) 전쟁이 끝난 후의 맥주 파티는 꿀맛일 거예요.',
            features: ['토마토 던지기', '이색적인 경험', '젊음의 열기', '애프터 파티']
        },
        oktoberfest: {
            name: '옥토버페스트 (독일)',
            icon: '🍺',
            reason: '맛있는 맥주와 음식을 즐기며 새로운 사람들과 어울리는 것을 좋아하시는군요!',
            description: '거대한 비어텐트에서 흘러나오는 라이브 음악에 맞춰 다 함께 노래하고 춤춰보세요. 독일의 전통과 유쾌한 축제 분위기에 흠뻑 빠져들게 될 거예요.',
            features: ['전통 맥주', '다양한 음식', '라이브 밴드', '놀이기구']
        },
        'harbin-ice': {
            name: '하얼빈 국제 빙설제 (중국)',
            icon: '❄️',
            reason: '겨울 왕국이 현실로! 동화처럼 환상적이고 아름다운 풍경을 꿈꾸시는군요.',
            description: '상상을 초월하는 규모의 얼음 조각들이 밤이 되면 오색찬란한 빛으로 물듭니다. 추위마저 잊게 할 경이로운 풍경 속에서 인생 사진을 남겨보세요.',
            features: ['초대형 얼음 조각', '화려한 조명', '겨울 액티비티', '이색적인 볼거리']
        },
        'cherry-blossom': {
            name: '벚꽃 축제 (일본)',
            icon: '🌸',
            reason: '흩날리는 벚꽃 잎처럼, 평화롭고 감성적인 순간을 만끽하고 싶으시네요.',
            description: '만개한 벚꽃나무 아래에서 즐기는 피크닉은 잊지 못할 추억이 될 거예요. 아름다운 풍경과 함께 일본의 봄 정취를 마음껏 느껴보세요.',
            features: ['벚꽃 명소', '봄 피크닉', '전통 디저트', '아름다운 풍경']
        },
        fringe: {
            name: '에든버러 프린지 페스티벌 (영국)',
            icon: '🎪',
            reason: '당신은 예술을 사랑하는 사람! 전 세계의 공연 예술을 한자리에서 즐기고 싶으시군요.',
            description: '도시 전체가 하나의 거대한 공연장으로 변신합니다. 연극, 코미디, 댄스 등 수천 개의 공연 중에서 당신의 취향을 저격할 작품을 발견해보세요.',
            features: ['다양한 장르의 공연', '거리 퍼포먼스', '예술적 영감', '역사적인 도시']
        },
        sonkgran: {
            name: '송크란 축제 (태국)',
            icon: '💦',
            reason: '더위는 날리고 즐거움은 채우고! 신나는 물싸움을 즐길 준비가 되셨군요.',
            description: '태국의 새해를 기념하는 송크란 축제는 남녀노소 모두가 함께하는 거대한 물놀이장입니다. 코끼리가 뿜어주는 시원한 물줄기를 맞으며 행운을 빌어보세요.',
            features: ['시원한 물싸움', '더위 탈출', '전통 새해맞이', '클럽 파티']
        },
        'cologne-carnival': {
            name: '쾰른 카니발 (독일)',
            icon: '🎉',
            reason: '화려한 의상과 신나는 음악이 함께하는 유럽의 전통 카니발을 경험하고 싶으시네요!',
            description: '도시 전체가 거대한 파티장으로 변하는 쾰른 카니발에서 현지인들과 함께 "Kölle Alaaf!"를 외쳐보세요. 유쾌한 퍼레이드와 맥주가 끊이지 않는 축제입니다.',
            features: ['독특한 의상', '사탕 던지기 퍼레이드', '거리 축제', '전통과 현대의 조화']
        },
        'dia-de-muertos': {
            name: '죽은 자들의 날 (멕시코)',
            icon: '💀',
            reason: '삶과 죽음의 경계를 허무는 특별한 축제! 독특한 전통 문화에 매력을 느끼는군요.',
            description: '영화 <코코>의 배경이 된 축제로, 세상을 떠난 가족과 친구들을 기억하고 그들의 삶을 기리는 의미있는 행사입니다. 화려한 해골 분장과 장식이 인상적이에요.',
            features: ['해골 분장 체험', '전통 제단', '가족적인 분위기', '문화적 깊이']
        },
        holi: {
            name: '홀리 축제 (인도)',
            icon: '🎨',
            reason: '세상을 다채로운 색으로 물들일 준비 완료! 자유롭고 활기찬 에너지를 원하시네요.',
            description: '봄의 시작을 알리며 모두에게 색색의 가루를 뿌리고 물감을 던지는 축제입니다. 피부색도, 나이도, 계급도 상관없이 모두가 하나 되는 특별한 경험을 해보세요.',
            features: ['컬러 파우더', '자유로운 분위기', '봄맞이 축제', '인도 전통 체험']
        },
        tomorrowland: {
            name: '투모로우랜드 (벨기에)',
            icon: '🎵',
            reason: '최고의 DJ들과 함께하는 지상 최대의 EDM 파티! 음악에 몸을 맡길 준비가 되셨군요.',
            description: '매년 동화 같은 테마로 꾸며지는 환상적인 무대에서 세계적인 DJ들의 공연을 즐겨보세요. 전 세계 음악 팬들과 함께하는 꿈같은 시간이 될 거예요.',
            features: ['세계 최정상 DJ 라인업', '환상적인 무대 디자인', '글로벌 음악 팬', '캠핑']
        },
        'mardi-gras': {
            name: '마디그라 (미국)',
            icon: '🎺',
            reason: '재즈 선율과 맛있는 음식이 가득한 미국 남부의 열정을 느끼고 싶으시군요!',
            description: '보라, 초록, 금색으로 물든 뉴올리언스의 거리에서 펼쳐지는 화려한 퍼레이드를 즐겨보세요. 축제 기간에만 맛볼 수 있는 특별한 음식도 놓치지 마세요.',
            features: ['재즈의 본고장', '독특한 퍼레이드', '미국 남부 음식', '활기찬 밤문화']
        },
        'lantern-taiwan': {
            name: '핑시 천등 축제 (대만)',
            icon: '🏮',
            reason: '수많은 등불이 밤하늘을 수놓는 낭만적이고 감동적인 순간을 원하시는군요.',
            description: '소원을 적은 등불을 밤하늘로 날려 보내며 잊지 못할 풍경을 만들어보세요. 조용하고 평화로운 분위기 속에서 특별한 추억을 만들 수 있습니다.',
            features: ['소원 빌기', '아름다운 야경', '낭만적인 분위기', '대만 전통 문화']
        }
    }
};