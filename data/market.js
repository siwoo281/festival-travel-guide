export const marketAnalysis = {
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
            fixedCost: 2200000 * 6, // 중형 축제: 13,200,000
            variableCost: 1430000, // 항공35% + 숙박20% + 티켓8% + 기타25% = 88%의 65%
            totalCost: (2200000 * 6) + 1430000,
            margin: ((2200000 - 1430000) / 2200000),
            breakEven: Math.ceil((2200000 * 6) / (2200000 - 1430000)),
            expectedCustomers: 120,
            annualRevenue: 2200000 * 120
        },
        oktoberfest: {
            sellingPrice: 2800000,
            fixedCost: 2800000 * 8, // 대형 축제: 22,400,000
            variableCost: 1820000, // 항공35% + 숙박25% + 티켓15% + 기타25% = 약 65%
            totalCost: (2800000 * 8) + 1820000,
            margin: ((2800000 - 1820000) / 2800000),
            breakEven: Math.ceil((2800000 * 8) / (2800000 - 1820000)),
            expectedCustomers: 180,
            annualRevenue: 2800000 * 180
        },
        carnival: {
            sellingPrice: 3500000,
            fixedCost: 3500000 * 8, // 대형 축제: 28,000,000
            variableCost: 2275000, // 항공45% + 숙박20% + 기타25% = 약 65%
            totalCost: (3500000 * 8) + 2275000,
            margin: ((3500000 - 2275000) / 3500000),
            breakEven: Math.ceil((3500000 * 8) / (3500000 - 2275000)),
            expectedCustomers: 105,
            annualRevenue: 3500000 * 105
        },
        // 추가 축제 수익성 지표 (현실적인 비용 구조 반영)
        'harbin-ice': {
            sellingPrice: 1800000,
            fixedCost: 1800000 * 4, // 소형 축제: 판매가의 4배 (7,200,000)
            variableCost: 1100000,
            totalCost: (1800000 * 4) + 1100000,
            margin: ((1800000 - 1100000) / 1800000),
            breakEven: Math.ceil((1800000 * 4) / (1800000 - 1100000)),
            expectedCustomers: 85,
            annualRevenue: 1800000 * 85
        },
        'cherry-blossom': {
            sellingPrice: 1200000,
            fixedCost: 1200000 * 4, // 소형 축제: 4,800,000
            variableCost: 750000,
            totalCost: (1200000 * 4) + 750000,
            margin: ((1200000 - 750000) / 1200000),
            breakEven: Math.ceil((1200000 * 4) / (1200000 - 750000)),
            expectedCustomers: 90,
            annualRevenue: 1200000 * 90
        },
        fringe: {
            sellingPrice: 2500000,
            fixedCost: 2500000 * 6, // 중형 축제: 15,000,000
            variableCost: 1625000,
            totalCost: (2500000 * 6) + 1625000,
            margin: ((2500000 - 1625000) / 2500000),
            breakEven: Math.ceil((2500000 * 6) / (2500000 - 1625000)),
            expectedCustomers: 130,
            annualRevenue: 2500000 * 130
        },
        sonkgran: {
            sellingPrice: 1300000,
            fixedCost: 1300000 * 4, // 소형 축제: 5,200,000
            variableCost: 845000,
            totalCost: (1300000 * 4) + 845000,
            margin: ((1300000 - 845000) / 1300000),
            breakEven: Math.ceil((1300000 * 4) / (1300000 - 845000)),
            expectedCustomers: 120,
            annualRevenue: 1300000 * 120
        },
        'oktober-alt': {
            sellingPrice: 2200000,
            fixedCost: 2200000 * 6, // 중형 축제: 13,200,000
            variableCost: 1430000,
            totalCost: (2200000 * 6) + 1430000,
            margin: ((2200000 - 1430000) / 2200000),
            breakEven: Math.ceil((2200000 * 6) / (2200000 - 1430000)),
            expectedCustomers: 90,
            annualRevenue: 2200000 * 90
        },
        'dia-de-muertos': {
            sellingPrice: 2400000,
            fixedCost: 2400000 * 6, // 중형 축제: 14,400,000
            variableCost: 1560000,
            totalCost: (2400000 * 6) + 1560000,
            margin: ((2400000 - 1560000) / 2400000),
            breakEven: Math.ceil((2400000 * 6) / (2400000 - 1560000)),
            expectedCustomers: 100,
            annualRevenue: 2400000 * 100
        },
        holi: {
            sellingPrice: 1600000,
            fixedCost: 1600000 * 4, // 소형 축제: 6,400,000
            variableCost: 1040000,
            totalCost: (1600000 * 4) + 1040000,
            margin: ((1600000 - 1040000) / 1600000),
            breakEven: Math.ceil((1600000 * 4) / (1600000 - 1040000)),
            expectedCustomers: 110,
            annualRevenue: 1600000 * 110
        },
        tomorrowland: {
            sellingPrice: 3800000,
            fixedCost: 3800000 * 8, // 대형 축제: 30,400,000
            variableCost: 2470000,
            totalCost: (3800000 * 8) + 2470000,
            margin: ((3800000 - 2470000) / 3800000),
            breakEven: Math.ceil((3800000 * 8) / (3800000 - 2470000)),
            expectedCustomers: 140,
            annualRevenue: 3800000 * 140
        },
        'up-alaaf': {
            sellingPrice: 2600000,
            fixedCost: 2600000 * 6, // 중형 축제: 15,600,000
            variableCost: 1690000,
            totalCost: (2600000 * 6) + 1690000,
            margin: ((2600000 - 1690000) / 2600000),
            breakEven: Math.ceil((2600000 * 6) / (2600000 - 1690000)),
            expectedCustomers: 95,
            annualRevenue: 2600000 * 95
        },
        'lantern-taiwan': {
            sellingPrice: 1100000,
            fixedCost: 1100000 * 4, // 소형 축제: 4,400,000
            variableCost: 715000,
            totalCost: (1100000 * 4) + 715000,
            margin: ((1100000 - 715000) / 1100000),
            breakEven: Math.ceil((1100000 * 4) / (1100000 - 715000)),
            expectedCustomers: 80,
            annualRevenue: 1100000 * 80
        }
    }
};