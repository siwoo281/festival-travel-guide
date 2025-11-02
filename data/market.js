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
        },
        // 추가 축제 수익성 지표 (보정치 기반)
        'harbin-ice': {
            sellingPrice: 1800000,
            fixedCost: 7700000,
            variableCost: 1100000,
            totalCost: 8800000,
            margin: (1800000 - 8800000) / 1800000, // 음수도 허용
            breakEven: Math.ceil(7700000 / (1800000 - 1100000)),
            expectedCustomers: 85,
            annualRevenue: 1800000 * 85
        },
        'cherry-blossom': {
            sellingPrice: 1200000,
            fixedCost: 6000000,
            variableCost: 800000,
            totalCost: 6800000,
            margin: (1200000 - 6800000) / 1200000,
            breakEven: Math.ceil(6000000 / (1200000 - 800000)),
            expectedCustomers: 90,
            annualRevenue: 1200000 * 90
        },
        fringe: {
            sellingPrice: 2500000,
            fixedCost: 9000000,
            variableCost: 1600000,
            totalCost: 10600000,
            margin: (2500000 - 10600000) / 2500000,
            breakEven: Math.ceil(9000000 / (2500000 - 1600000)),
            expectedCustomers: 130,
            annualRevenue: 2500000 * 130
        },
        sonkgran: {
            sellingPrice: 1300000,
            fixedCost: 4500000,
            variableCost: 850000,
            totalCost: 5350000,
            margin: (1300000 - 5350000) / 1300000,
            breakEven: Math.ceil(4500000 / (1300000 - 850000)),
            expectedCustomers: 120,
            annualRevenue: 1300000 * 120
        },
        'oktober-alt': {
            sellingPrice: 2200000,
            fixedCost: 8000000,
            variableCost: 1400000,
            totalCost: 9400000,
            margin: (2200000 - 9400000) / 2200000,
            breakEven: Math.ceil(8000000 / (2200000 - 1400000)),
            expectedCustomers: 90,
            annualRevenue: 2200000 * 90
        },
        'dia-de-muertos': {
            sellingPrice: 2400000,
            fixedCost: 8100000,
            variableCost: 1500000,
            totalCost: 9600000,
            margin: (2400000 - 9600000) / 2400000,
            breakEven: Math.ceil(8100000 / (2400000 - 1500000)),
            expectedCustomers: 100,
            annualRevenue: 2400000 * 100
        },
        holi: {
            sellingPrice: 1600000,
            fixedCost: 6000000,
            variableCost: 1000000,
            totalCost: 7000000,
            margin: (1600000 - 7000000) / 1600000,
            breakEven: Math.ceil(6000000 / (1600000 - 1000000)),
            expectedCustomers: 110,
            annualRevenue: 1600000 * 110
        },
        tomorrowland: {
            sellingPrice: 3800000,
            fixedCost: 12000000,
            variableCost: 2600000,
            totalCost: 14600000,
            margin: (3800000 - 14600000) / 3800000,
            breakEven: Math.ceil(12000000 / (3800000 - 2600000)),
            expectedCustomers: 140,
            annualRevenue: 3800000 * 140
        },
        'up-alaaf': {
            sellingPrice: 2600000,
            fixedCost: 9900000,
            variableCost: 1700000,
            totalCost: 11600000,
            margin: (2600000 - 11600000) / 2600000,
            breakEven: Math.ceil(9900000 / (2600000 - 1700000)),
            expectedCustomers: 95,
            annualRevenue: 2600000 * 95
        },
        'lantern-taiwan': {
            sellingPrice: 1100000,
            fixedCost: 4000000,
            variableCost: 700000,
            totalCost: 4700000,
            margin: (1100000 - 4700000) / 1100000,
            breakEven: Math.ceil(4000000 / (1100000 - 700000)),
            expectedCustomers: 80,
            annualRevenue: 1100000 * 80
        }
    }
};